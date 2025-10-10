import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type ReadinessLevel = 'high' | 'medium' | 'low'

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

interface VerbatimLibraryTabProps {
  interviews: InterviewsData | null
}

const readinessBadge: Record<ReadinessLevel, string> = {
  high: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-rose-50 text-rose-700 border-rose-200'
}

const scorePalette = ['from-sky-300 to-indigo-400', 'from-purple-300 to-fuchsia-400', 'from-orange-300 to-amber-400']

const VerbatimLibraryTab = ({ interviews }: VerbatimLibraryTabProps) => {
  const { t } = useTranslation()

  const readinessLabel: Record<ReadinessLevel, string> = {
    high: t('insights.readiness.highReadiness'),
    medium: t('insights.readiness.mediumReadiness'),
    low: t('insights.readiness.lowReadiness')
  }

  return (
    <div className="space-y-8">
      {(interviews?.items || []).map((row, index) => {
        const challenges = parseList(row['Current Challenges'])
        const processes = parseList(row['Manual Processes'])
        const opportunities = parseList(row['AI Opportunities'])
        const insights = parseList(row['Key Insights'])
        const quotes = parseList(row['Notable Quotes'])

        const recommendations = {
          immediate: row['Immediate Recommendation'],
          shortTerm: row['Short-term Recommendation'],
          strategic: row['Strategic Recommendation']
        }

        const scores = [
          {
            label: t('insights.scores.technical'),
            value: toScore(row['Technical Score']),
            info: 'Based on questions about current technology stack, integrations, data infrastructure, and security posture.'
          },
          {
            label: t('insights.scores.cultural'),
            value: toScore(row['Cultural Score']),
            info: 'Reflects responses about change readiness, leadership appetite, and innovation mindset.'
          },
          {
            label: t('insights.scores.resourcing'),
            value: toScore(row['Resource Score']),
            info: 'Summarises budget, skills, and capacity discussed when exploring resource readiness.'
          }
        ]

        const readiness = toReadinessLevel(row['Overall Readiness'])
        const duration = Number(row['Duration (min)'])
        const durationLabel = Number.isFinite(duration) && duration > 0 ? `${duration} min` : 'n/a'
        const language = row.Language ? String(row.Language).toUpperCase() : 'EN'

        return (
          <article
            key={row['Reference ID'] || `${row.Name}-${index}`}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-200/20 via-transparent to-purple-200/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative space-y-8">
              <header className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    {formatDate(row['Interview Date'] || row.Timestamp)}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-gray-900">
                    {row.Name || 'Unnamed Participant'}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {row.Role || 'Role unknown'} · {row.Department || 'Department TBD'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {readiness && (
                    <span className={`rounded-full border px-4 py-1 text-sm font-medium ${readinessBadge[readiness]}`}>
                      {readinessLabel[readiness]}
                    </span>
                  )}
                  {row.Status && (
                    <span className="rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-xs uppercase tracking-[0.25em] text-gray-600">
                      {String(row.Status)}
                    </span>
                  )}
                  {row['Reference ID'] && (
                    <span className="text-xs text-gray-400 tracking-[0.3em] uppercase">
                      {row['Reference ID']}
                    </span>
                  )}
                </div>
              </header>

              <section className="grid gap-4 sm:grid-cols-3">
                {scores.map((score, scoreIndex) => (
                  <div
                    key={score.label}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                        {score.label === t('insights.scores.technical') && t('insights.verbatim.technicalCapacity')}
                        {score.label === t('insights.scores.cultural') && t('insights.verbatim.culturalCapacity')}
                        {score.label === t('insights.scores.resourcing') && t('insights.verbatim.resourcingCapacity')}
                      </p>
                      {score.info && <InfoTooltip text={score.info} />}
                    </div>
                    <div className="mt-3 flex items-end justify-between">
                      <span className="text-3xl font-semibold text-gray-900">
                        {score.value !== null ? score.value.toFixed(1) : '—'}
                        <span className="text-sm text-gray-500 font-light"> / 5</span>
                      </span>
                      <span className="text-xs text-gray-400">{t('insights.verbatim.latestSelfAssessment')}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${scorePalette[scoreIndex % scorePalette.length]}`}
                        style={{ width: `${score.value ? Math.min(100, (score.value / 5) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <InsightList
                  title={t('insights.verbatim.currentChallenges')}
                  items={challenges}
                  info={t('insights.verbatim.currentChallengesInfo')}
                />
                <InsightList
                  title={t('insights.verbatim.manualProcesses')}
                  items={processes}
                  info={t('insights.verbatim.manualProcessesInfo')}
                />
                <InsightList
                  title={t('insights.verbatim.aiOpportunities')}
                  items={opportunities}
                  info={t('insights.verbatim.aiOpportunitiesInfo')}
                />
                <InsightList
                  title={t('insights.verbatim.keyInsights')}
                  items={insights}
                  info={t('insights.verbatim.keyInsightsInfo')}
                />
              </section>

              <section className="grid gap-6 md:grid-cols-3">
                <RecommendationCard
                  title={t('insights.verbatim.immediatePlay')}
                  emoji="⚡"
                  description={recommendations.immediate || '—'}
                  tone="from-emerald-100/60 via-emerald-50/30 to-transparent"
                  info={t('insights.verbatim.immediatePlayInfo')}
                />
                <RecommendationCard
                  title={t('insights.verbatim.shortTermMove')}
                  emoji="🚀"
                  description={recommendations.shortTerm || '—'}
                  tone="from-sky-100/60 via-sky-50/30 to-transparent"
                  info={t('insights.verbatim.shortTermMoveInfo')}
                />
                <RecommendationCard
                  title={t('insights.verbatim.strategicBet')}
                  emoji="🌌"
                  description={recommendations.strategic || '—'}
                  tone="from-purple-100/60 via-purple-50/30 to-transparent"
                  info={t('insights.verbatim.strategicBetInfo')}
                />
              </section>

              {quotes.length > 0 && (
                <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">
                    {t('insights.verbatim.notableQuote')}
                  </p>
                  <div className="space-y-3">
                    {quotes.map((quote, quoteIndex) => (
                      <p key={quoteIndex} className="text-lg font-light leading-relaxed text-gray-700">
                        "{quote}"
                      </p>
                    ))}
                  </div>
                </section>
              )}

              <footer className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-gray-400">
                <span>
                  {t('insights.verbatim.duration', { duration: durationLabel })}
                </span>
                <span>{t('insights.verbatim.language', { language })}</span>
                {row.Email && (
                  <span className="truncate">{t('insights.verbatim.email', { email: row.Email })}</span>
                )}
              </footer>
            </div>
          </article>
        )
      })}

      {!interviews?.items?.length && (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t('insights.verbatim.noInterviewsTitle')}</h3>
          <p>
            {t('insights.verbatim.noInterviewsText')}
          </p>
        </div>
      )}
    </div>
  )
}

export default VerbatimLibraryTab

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

type InsightListProps = {
  title: string
  items: string[]
  info?: string
}

const InsightList = ({ title, items, info }: InsightListProps) => {
  const { t } = useTranslation()
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">{title}</p>
        {info && <InfoTooltip text={info} />}
      </div>
      {items.length ? (
        <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-400">{t('insights.verbatim.noData')}</p>
      )}
    </div>
  )
}

type RecommendationCardProps = {
  title: string
  emoji: string
  description: string
  tone: string
  info?: string
}

const RecommendationCard = ({ title, emoji, description, tone, info }: RecommendationCardProps) => (
  <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm">
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone}`} />
    <div className="relative space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-xl">{emoji}</span>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">{title}</p>
        {info && <InfoTooltip text={info} />}
      </div>
      <p className="text-sm leading-relaxed text-gray-700">
        {description || '—'}
      </p>
    </div>
  </div>
)

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

const toScore = (value: unknown): number | null => {
  if (value === null || value === undefined) return null
  const numeric = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(numeric) ? Number(numeric) : null
}

const toReadinessLevel = (value: unknown): ReadinessLevel | null => {
  if (!value) return null
  const normalized = String(value).toLowerCase() as ReadinessLevel
  return normalized === 'high' || normalized === 'medium' || normalized === 'low'
    ? normalized
    : null
}

const formatDate = (value: unknown): string => {
  if (!value) return 'Date TBD'
  const date = new Date(value as string)
  if (Number.isNaN(date.getTime())) return String(value)
  return date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
