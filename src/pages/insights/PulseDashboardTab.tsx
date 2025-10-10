import { useMemo, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type ReadinessLevel = 'high' | 'medium' | 'low'

interface ReadinessDistribution {
  high?: number
  medium?: number
  low?: number
}

interface SummaryData {
  ok: boolean
  items: number
  readiness?: ReadinessDistribution
  technical_avg: number | null
  cultural_avg: number | null
  resource_avg: number | null
  top_challenge_words?: Array<{ word: string; count: number }>
}

interface InterviewRow extends Record<string, unknown> {
  Timestamp?: string
  'Reference ID'?: string
  Name?: string
  Role?: string
  Department?: string
  Email?: string
  'Overall Readiness'?: string
  'Technical Score'?: number | string
  'Cultural Score'?: number | string
  'Resource Score'?: number | string
  'Current Challenges'?: unknown
  'Manual Processes'?: unknown
  'AI Opportunities'?: unknown
  'Key Insights'?: unknown
  'Immediate Recommendation'?: string
  'Short-term Recommendation'?: string
  'Strategic Recommendation'?: string
  'Notable Quotes'?: unknown
  'Interview Date'?: string
  'Duration (min)'?: number | string
  Status?: string
  Language?: string
}

interface InterviewsData {
  ok: boolean
  count: number
  items: InterviewRow[]
}

interface PulseDashboardTabProps {
  summary: SummaryData | null
  interviews: InterviewsData | null
}

const readinessGradient: Record<ReadinessLevel, string> = {
  high: 'from-emerald-400 via-emerald-500 to-emerald-600',
  medium: 'from-amber-300 via-amber-400 to-amber-500',
  low: 'from-rose-400 via-rose-500 to-rose-600'
}

const scorePalette = ['from-sky-300 to-indigo-400', 'from-purple-300 to-fuchsia-400', 'from-orange-300 to-amber-400']

const PulseDashboardTab = ({ summary, interviews }: PulseDashboardTabProps) => {
  const { t } = useTranslation()

  const readinessLabel: Record<ReadinessLevel, string> = {
    high: t('insights.readiness.highReadiness'),
    medium: t('insights.readiness.mediumReadiness'),
    low: t('insights.readiness.lowReadiness')
  }

  const readinessTotals = useMemo(() => {
    const distribution = summary?.readiness
    if (!distribution) return { total: 0, breakdown: [] as Array<{ level: ReadinessLevel; value: number; percent: number }> }

    const total = (distribution.high || 0) + (distribution.medium || 0) + (distribution.low || 0)
    const breakdown = (['high', 'medium', 'low'] as ReadinessLevel[]).map((level) => {
      const value = distribution[level] || 0
      const percent = total ? Math.round((value / total) * 100) : 0
      return { level, value, percent }
    })

    return { total, breakdown }
  }, [summary])

  const departments = useMemo(() => {
    if (!interviews?.items) return []
    const unique = new Set(
      interviews.items
        .map((row) => (row.Department ? String(row.Department) : 'Unassigned'))
        .filter(Boolean)
    )
    return Array.from(unique).sort((a, b) => a.localeCompare(b))
  }, [interviews])

  const languages = useMemo(() => {
    if (!interviews?.items) return []
    const unique = new Set(
      interviews.items
        .map((row) => (row.Language ? String(row.Language).toUpperCase() : 'EN'))
        .filter(Boolean)
    )
    return Array.from(unique).sort()
  }, [interviews])

  const averageDuration = useMemo(() => {
    if (!interviews?.items) return null
    const durations = interviews.items
      .map((row) => Number(row['Duration (min)'] || 0))
      .filter((value) => !Number.isNaN(value) && value > 0)
    if (!durations.length) return null
    return Math.round(durations.reduce((acc, val) => acc + val, 0) / durations.length)
  }, [interviews])

  const latestHighlight = useMemo(() => {
    if (!interviews?.items?.length) return null
    const [first] = interviews.items
    const recommendations = [
      first['Immediate Recommendation'],
      first['Short-term Recommendation'],
      first['Strategic Recommendation']
    ].filter(Boolean) as string[]

    const insights = parseList(first['Key Insights'])
    const quote = parseList(first['Notable Quotes'])[0]

    return {
      name: first.Name,
      role: first.Role,
      recommendations,
      insights,
      quote
    }
  }, [interviews])

  const spotlightQuote = useMemo(() => {
    if (!interviews?.items) return null
    for (const row of interviews.items) {
      const quotes = parseList(row['Notable Quotes'])
      if (quotes.length) {
        return {
          quote: quotes[0],
          name: row.Name,
          role: row.Role
        }
      }
    }
    return null
  }, [interviews])

  const totalInterviews = summary?.items || 0
  const sortedReadiness = [...readinessTotals.breakdown].sort((a, b) => b.value - a.value)
  const topReadiness = sortedReadiness[0]
  const topChallengeWords = summary?.top_challenge_words || []
  const topChallengeMax = topChallengeWords.reduce((max, item) => Math.max(max, item.count), 0) || 1

  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title={t('insights.metrics.interviewsCapturedTitle')}
          highlight={`${totalInterviews}`}
          subtitle={t('insights.metrics.interviewsCapturedSubtitle')}
          glow="from-emerald-200/40 via-emerald-100/20 to-transparent"
          info={t('insights.metrics.interviewsCapturedInfo')}
          footer={t('insights.metrics.interviewsCapturedFooter', {
            count: departments.length,
            languages: languages.length ? languages.join(' / ') : 'EN'
          })}
        />
        <MetricCard
          title={t('insights.metrics.avgDurationTitle')}
          highlight={averageDuration ? `${averageDuration} min` : '—'}
          subtitle={t('insights.metrics.avgDurationSubtitle')}
          glow="from-sky-200/40 via-sky-100/20 to-transparent"
          info={t('insights.metrics.avgDurationInfo')}
          footer={t('insights.metrics.avgDurationFooter', { count: interviews?.items?.length || 0 })}
        />
        <MetricCard
          title={t('insights.metrics.topReadinessTitle')}
          highlight={topReadiness?.percent ? `${topReadiness.percent}%` : '—'}
          subtitle={readinessLabel[topReadiness?.level || 'high']}
          glow="from-violet-200/35 via-violet-100/20 to-transparent"
          info={t('insights.metrics.topReadinessInfo')}
          footer={t('insights.metrics.topReadinessFooter', { count: readinessTotals.total })}
        />
        <MetricCard
          title={t('insights.metrics.languagesTitle')}
          highlight={languages.length ? languages.join(' • ') : 'EN'}
          subtitle={t('insights.metrics.languagesSubtitle')}
          glow="from-amber-200/35 via-orange-100/20 to-transparent"
          info={t('insights.metrics.languagesInfo')}
          footer={t('insights.metrics.languagesFooter', { count: (interviews?.items || []).filter((row) => row.Language).length })}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-sky-100/30" />
          <div className="relative">
            <header className="flex items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600/70">{t('insights.readiness.sectionBadge')}</p>
                  <InfoTooltip text={t('insights.readiness.readinessInfo')} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-2">{t('insights.readiness.sectionTitle')}</h3>
              </div>
              <span className="rounded-full border border-emerald-200 px-4 py-1 text-sm text-emerald-600 bg-emerald-50">
                {t('insights.readiness.signalsLabel', { count: readinessTotals.total })}
              </span>
            </header>

            <div className="mt-6 space-y-5">
              {readinessTotals.breakdown.map(({ level, value, percent }) => (
                <div key={level}>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-semibold uppercase tracking-wide text-gray-700">{readinessLabel[level]}</span>
                    <span>{percent}% · {value} interviews</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${readinessGradient[level]} transition-all duration-500`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-fuchsia-100/30" />
          <div className="relative">
            <header className="flex justify-between items-start gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600/70">{t('insights.scores.sectionBadge')}</p>
                  <InfoTooltip text={t('insights.scores.scoresInfo')} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-2">{t('insights.scores.sectionTitle')}</h3>
              </div>
            </header>

            <div className="mt-8 grid gap-5">
              {[
                { label: t('insights.scores.technical'), value: summary?.technical_avg },
                { label: t('insights.scores.cultural'), value: summary?.cultural_avg },
                { label: t('insights.scores.resourcing'), value: summary?.resource_avg }
              ]
                .filter((item) => typeof item.value === 'number')
                .map((item, index) => {
                  const percent = Math.min(100, Math.max(0, ((item.value || 0) / 5) * 100))
                  return (
                    <div key={item.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="font-medium tracking-wide uppercase text-gray-700">{item.label}</span>
                        <span className="text-lg font-semibold">{Number(item.value).toFixed(1)} / 5</span>
                      </div>
                      <div className="mt-3 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${scorePalette[index % scorePalette.length]}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg xl:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-transparent to-emerald-100/30" />
          <div className="relative">
            <header className="flex items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600/70">{t('insights.challenges.sectionBadge')}</p>
                  <InfoTooltip text={t('insights.challenges.challengesInfo')} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-2">{t('insights.challenges.sectionTitle')}</h3>
              </div>
              <span className="rounded-full border border-cyan-200 px-4 py-1 text-sm text-cyan-600 bg-cyan-50">
                {t('insights.challenges.themesLabel', { count: (summary?.top_challenge_words || []).length || 0 })}
              </span>
            </header>

            <div className="mt-6 flex flex-wrap gap-3">
              {topChallengeWords.map(({ word, count }) => {
                const scale = Math.max(0.35, count / topChallengeMax)
                return (
                  <span
                    key={word}
                    className="rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm"
                    style={{
                      transform: `scale(${0.9 + scale * 0.2})`,
                      background: `linear-gradient(135deg, rgba(125, 211, 252, ${0.3 + scale * 0.25}), rgba(16, 185, 129, ${0.15 + scale * 0.2}))`
                    }}
                  >
                    {word}{' '}
                    <span className="text-xs text-cyan-700/70">×{count}</span>
                  </span>
                )
              })}
              {!summary?.top_challenge_words?.length && (
                <p className="text-gray-500 text-sm">
                  {t('insights.challenges.noData')}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-transparent to-orange-100/30" />
          <div className="relative space-y-5">
            <header>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600/70">{t('insights.departments.sectionBadge')}</p>
                <InfoTooltip text={t('insights.departments.departmentsInfo')} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mt-2">{t('insights.departments.sectionTitle')}</h3>
            </header>

            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <span
                  key={dept}
                  className="rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 text-sm text-gray-700"
                >
                  {dept}
                </span>
              ))}
              {!departments.length && (
                <p className="text-gray-500 text-sm">{t('insights.departments.noData')}</p>
              )}
            </div>

            {latestHighlight && (
              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 mb-2">{t('insights.departments.latestSpotlight')}</p>
                <p className="text-base font-semibold text-gray-900">
                  {latestHighlight.name} · {latestHighlight.role}
                </p>
                {latestHighlight.recommendations?.[0] && (
                  <p className="mt-3 italic text-gray-600">
                    "{latestHighlight.recommendations[0]}"
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      </div>

      {spotlightQuote && (
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/40 via-transparent to-sky-100/30" />
          <div className="relative max-w-4xl mx-auto text-center text-gray-800">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-5 py-1 text-xs uppercase tracking-[0.4em] text-gray-600">
              {t('insights.quote.badge')}
            </span>
            <p className="mt-6 text-2xl sm:text-3xl font-light leading-relaxed text-gray-800">
              "{spotlightQuote.quote}"
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              {spotlightQuote.name} · {spotlightQuote.role}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}

export default PulseDashboardTab

type MetricCardProps = {
  title: string
  highlight: string
  subtitle: string
  glow: string
  footer: string
  info?: string
}

const MetricCard = ({ title, highlight, subtitle, glow, footer, info }: MetricCardProps) => (
  <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 text-gray-600 shadow-lg">
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${glow}`} />
    <div className="relative space-y-3">
      <div className="flex items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">{title}</p>
        {info && <InfoTooltip text={info} />}
      </div>
      <p className="text-3xl font-semibold text-gray-900">{highlight}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
    <div className="relative mt-6 border-t border-gray-100 pt-3 text-xs uppercase tracking-[0.25em] text-gray-400">
      {footer}
    </div>
  </div>
)

type InfoTooltipProps = {
  text: string
}

const InfoTooltip = ({ text }: InfoTooltipProps) => {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!buttonRef.current) return
      if (buttonRef.current.contains(event.target as Node)) return
      setOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <span className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={text}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-white text-[11px] font-semibold text-gray-500 transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        i
      </button>
      {open && (
        <span className="absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-left text-xs text-white shadow-xl">
          {text}
        </span>
      )}
    </span>
  )
}

const parseList = (value: unknown): string[] => {
  if (!value) return []
  if (Array.isArray(value)) return normalizeList(value)

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return []

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed)
        if (Array.isArray(parsed)) return normalizeList(parsed)
      } catch {
        return [trimmed]
      }
    }

    return [trimmed]
  }

  return [String(value)]
}

const normalizeList = (items: unknown[]): string[] =>
  items
    .map((item) => {
      if (!item) return null
      if (typeof item === 'string') return item
      if (typeof item === 'object') {
        const candidate = item as Record<string, unknown>
        if (typeof candidate['description'] === 'string') return String(candidate['description'])
        if (typeof candidate['quote'] === 'string') return String(candidate['quote'])
        if (typeof candidate['area'] === 'string') return String(candidate['area'])
        const values = Object.values(candidate).filter((val) => typeof val === 'string')
        if (values.length) return values.join(' · ')
      }
      return String(item)
    })
    .filter((entry): entry is string => Boolean(entry))
