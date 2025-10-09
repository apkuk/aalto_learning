import { useEffect, useMemo, useState } from 'react'

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

const readinessGradient: Record<ReadinessLevel, string> = {
  high: 'from-emerald-400 via-emerald-500 to-emerald-600',
  medium: 'from-amber-300 via-amber-400 to-amber-500',
  low: 'from-rose-400 via-rose-500 to-rose-600'
}

const readinessLabel: Record<ReadinessLevel, string> = {
  high: 'High Readiness',
  medium: 'Medium Readiness',
  low: 'Low Readiness'
}

const readinessBadge: Record<ReadinessLevel, string> = {
  high: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
  medium: 'bg-amber-500/15 text-amber-200 border-amber-400/40',
  low: 'bg-rose-500/15 text-rose-200 border-rose-400/40'
}

const scorePalette = ['from-sky-400 to-indigo-500', 'from-purple-400 to-fuchsia-500', 'from-orange-400 to-amber-500']

const Insights = () => {
  const [summary, setSummary] = useState<SummaryData | null>(null)
  const [interviews, setInterviews] = useState<InterviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'verbatim'>('overview')

  const API = import.meta.env.PROD
    ? '/api/insights'
    : 'https://script.google.com/macros/s/AKfycbx_4_49k7GPGoi2t5qDMdzdHt-oa9Gm2qzWPS8TcmzUtnFl5BtgJkvv1JzMx7X4fGYW/exec'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const origin = window.location.origin

        const summaryRes = await fetch(`${API}?action=summary&origin=${encodeURIComponent(origin)}`, {
          cache: 'no-store'
        })
        const summaryData = await summaryRes.json()

        if (summaryData.ok) {
          setSummary(summaryData)
        }

        const interviewsRes = await fetch(`${API}?action=interviews&limit=25&origin=${encodeURIComponent(origin)}`, {
          cache: 'no-store'
        })
        const interviewsData = await interviewsRes.json()

        if (interviewsData.ok) {
          setInterviews(interviewsData)
        }

        setLoading(false)
      } catch (err) {
        console.error('Error fetching insights:', err)
        setError('Failed to load insights data')
        setLoading(false)
      }
    }

    fetchData()
  }, [API])

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

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-200">
        <div className="text-center space-y-4">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-emerald-500/30 border-t-emerald-400" />
          <p className="text-lg tracking-wide uppercase text-slate-400">Synching live insights…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="rounded-2xl bg-slate-900/80 border border-rose-500/40 p-10 text-center text-slate-300 shadow-2xl">
          <h2 className="text-2xl font-semibold text-rose-200 mb-3">We hit a snag</h2>
          <p className="mb-6">{error}</p>
          <p className="text-sm text-slate-500">Try refreshing, or check the Apps Script + Netlify logs.</p>
        </div>
      </div>
    )
  }

  const totalInterviews = summary?.items || 0

  const sortedReadiness = [...readinessTotals.breakdown].sort((a, b) => b.value - a.value)
  const topReadiness = sortedReadiness[0]

  const overviewContent = (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Interviews Captured"
          highlight={`${totalInterviews}`}
          subtitle="Live sync from Google Sheets"
          glow="from-emerald-400/50 via-emerald-500/20 to-teal-500/10"
          footer={`${departments.length} departments · ${languages.length ? languages.join(' / ') : 'EN'}`}
        />
        <MetricCard
          title="Average Duration"
          highlight={averageDuration ? `${averageDuration} min` : '—'}
          subtitle="Participant time invested"
          glow="from-sky-400/50 via-sky-500/20 to-indigo-500/10"
          footer={`${interviews?.items?.length || 0} latest interviews analysed`}
        />
        <MetricCard
          title="Top Readiness Pulse"
          highlight={topReadiness?.percent ? `${topReadiness.percent}%` : '—'}
          subtitle={readinessLabel[topReadiness?.level || 'high']}
          glow="from-violet-400/40 via-purple-500/20 to-fuchsia-500/10"
          footer={`${readinessTotals.total} readiness datapoints`}
        />
        <MetricCard
          title="Languages Detected"
          highlight={languages.length ? languages.join(' • ') : 'EN'}
          subtitle="Interview language mix"
          glow="from-amber-400/40 via-orange-500/20 to-red-500/10"
          footer={`${(interviews?.items || []).filter((row) => row.Language).length} interviews tagged`}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-sky-500/10" />
          <div className="relative">
            <header className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">Readiness Pulse</p>
                <h3 className="text-2xl font-semibold text-white mt-2">Confidence Across the Organisation</h3>
              </div>
              <span className="rounded-full border border-emerald-400/40 px-4 py-1 text-sm text-emerald-200/80">
                {readinessTotals.total} signals
              </span>
            </header>

            <div className="mt-6 space-y-5">
              {readinessTotals.breakdown.map(({ level, value, percent }) => (
                <div key={level}>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span className="font-semibold uppercase tracking-wide text-slate-200">{readinessLabel[level]}</span>
                    <span>{percent}% · {value} interviews</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-slate-800/80 overflow-hidden">
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

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-transparent to-fuchsia-500/10" />
          <div className="relative">
            <header className="flex justify-between items-start gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-200/70">Capability Levels</p>
                <h3 className="text-2xl font-semibold text-white mt-2">AI Readiness Scores</h3>
              </div>
            </header>

            <div className="mt-8 grid gap-5">
              {[
                { label: 'Technical', value: summary?.technical_avg },
                { label: 'Cultural', value: summary?.cultural_avg },
                { label: 'Resourcing', value: summary?.resource_avg }
              ]
                .filter((item) => typeof item.value === 'number')
                .map((item, index) => {
                  const percent = Math.min(100, Math.max(0, ((item.value || 0) / 5) * 100))
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between text-sm text-slate-200">
                        <span className="font-medium tracking-wide uppercase text-slate-100">{item.label}</span>
                        <span className="text-lg font-semibold">{Number(item.value).toFixed(1)} / 5</span>
                      </div>
                      <div className="mt-3 h-2.5 rounded-full bg-slate-800/80 overflow-hidden">
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
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg xl:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-500/10" />
          <div className="relative">
            <header className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Signal Amplifier</p>
                <h3 className="text-2xl font-semibold text-white mt-2">Top Challenge Keywords</h3>
              </div>
              <span className="rounded-full border border-cyan-400/50 px-4 py-1 text-sm text-cyan-200/80">
                {(summary?.top_challenge_words || []).length || 0} themes
              </span>
            </header>

            <div className="mt-6 flex flex-wrap gap-3">
              {(summary?.top_challenge_words || []).map(({ word, count }, index, arr) => {
                const maxCount = arr.reduce((max, item) => Math.max(max, item.count), 1)
                const scale = Math.max(0.35, count / maxCount)
                return (
                  <span
                    key={word}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg"
                    style={{
                      transform: `scale(${0.9 + scale * 0.2})`,
                      background: `linear-gradient(135deg, rgba(56, 189, 248, ${0.15 + scale * 0.35}), rgba(45, 212, 191, ${0.2 + scale * 0.4}))`
                    }}
                  >
                    {word}{' '}
                    <span className="text-xs text-white/70">×{count}</span>
                  </span>
                )
              })}
              {!summary?.top_challenge_words?.length && (
                <p className="text-slate-400 text-sm">
                  No keyword data yet — capture a few interviews to light this up.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/10" />
          <div className="relative space-y-5">
            <header>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">Coverage Map</p>
              <h3 className="text-2xl font-semibold text-white mt-2">Departments in the Mix</h3>
            </header>

            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <span
                  key={dept}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white/90"
                >
                  {dept}
                </span>
              ))}
              {!departments.length && (
                <p className="text-slate-400 text-sm">Departments will appear here once interviews are logged.</p>
              )}
            </div>

            {latestHighlight && (
              <div className="mt-6 rounded-2xl border border-white/5 bg-white/10 p-5 text-sm text-slate-100">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2">Latest Spotlight</p>
                <p className="text-base font-semibold text-white">
                  {latestHighlight.name} · {latestHighlight.role}
                </p>
                {latestHighlight.recommendations?.[0] && (
                  <p className="mt-3 italic text-white/80">
                    “{latestHighlight.recommendations[0]}”
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      </div>

      {spotlightQuote && (
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/10 via-transparent to-sky-500/10" />
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
              Notable Quote
            </span>
            <p className="mt-6 text-2xl sm:text-3xl font-light leading-relaxed text-white/90">
              “{spotlightQuote.quote}”
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
              {spotlightQuote.name} · {spotlightQuote.role}
            </p>
          </div>
        </section>
      )}
    </div>
  )

  const verbatimContent = (
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
          { label: 'Technical', value: toScore(row['Technical Score']) },
          { label: 'Cultural', value: toScore(row['Cultural Score']) },
          { label: 'Resourcing', value: toScore(row['Resource Score']) }
        ]

        const readiness = toReadinessLevel(row['Overall Readiness'])
        const duration = Number(row['Duration (min)'])
        const durationLabel = Number.isFinite(duration) && duration > 0 ? `${duration} min` : 'n/a'
        const language = row.Language ? String(row.Language).toUpperCase() : 'EN'

        return (
          <article
            key={row['Reference ID'] || `${row.Name}-${index}`}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/75 p-8 shadow-2xl backdrop-blur"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative space-y-8">
              <header className="flex flex-wrap items-start justify-between gap-6 border-b border-white/5 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {formatDate(row['Interview Date'] || row.Timestamp)}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    {row.Name || 'Unnamed Participant'}
                  </h3>
                  <p className="text-white/70 mt-1">
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
                    <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
                      {String(row.Status)}
                    </span>
                  )}
                  {row['Reference ID'] && (
                    <span className="text-xs text-white/50 tracking-[0.3em] uppercase">
                      {row['Reference ID']}
                    </span>
                  )}
                </div>
              </header>

              <section className="grid gap-4 sm:grid-cols-3">
                {scores.map((score, scoreIndex) => (
                  <div
                    key={score.label}
                    className="rounded-2xl border border-white/5 bg-white/5 p-5 text-white/90"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">{score.label} Capacity</p>
                    <div className="mt-3 flex items-end justify-between">
                      <span className="text-3xl font-semibold">
                        {score.value !== null ? score.value.toFixed(1) : '—'}
                        <span className="text-sm text-white/60 font-light"> / 5</span>
                      </span>
                      <span className="text-xs text-white/50">Latest self-assessment</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${scorePalette[scoreIndex % scorePalette.length]}`}
                        style={{ width: `${score.value ? Math.min(100, (score.value / 5) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <InsightList title="🔥 Current Challenges" items={challenges} />
                <InsightList title="⚙️ Manual Processes" items={processes} />
                <InsightList title="🤖 AI Opportunities" items={opportunities} />
                <InsightList title="💡 Key Insights" items={insights} />
              </section>

              <section className="grid gap-6 md:grid-cols-3">
                <RecommendationCard
                  title="Immediate Play"
                  emoji="⚡"
                  description={recommendations.immediate || '—'}
                  tone="from-emerald-400/20 to-emerald-500/10"
                />
                <RecommendationCard
                  title="Short-term Move"
                  emoji="🚀"
                  description={recommendations.shortTerm || '—'}
                  tone="from-sky-400/20 to-indigo-500/10"
                />
                <RecommendationCard
                  title="Strategic Bet"
                  emoji="🌌"
                  description={recommendations.strategic || '—'}
                  tone="from-purple-400/20 to-fuchsia-500/10"
                />
              </section>

              {quotes.length > 0 && (
                <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                    Notable quote
                  </p>
                  <div className="space-y-3">
                    {quotes.map((quote, quoteIndex) => (
                      <p key={quoteIndex} className="text-lg font-light leading-relaxed text-white/85">
                        “{quote}”
                      </p>
                    ))}
                  </div>
                </section>
              )}

              <footer className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/40">
                <span>
                  Duration · {durationLabel}
                </span>
                <span>Language · {language}</span>
                {row.Email && (
                  <span className="truncate">Email · {row.Email}</span>
                )}
              </footer>
            </div>
          </article>
        )
      })}

      {!interviews?.items?.length && (
        <div className="rounded-3xl border border-dashed border-white/20 bg-slate-900/50 p-12 text-center text-white/60">
          <h3 className="text-2xl font-semibold text-white mb-3">No interviews yet</h3>
          <p>
            Once you capture interviews through the GPT, every verbatim insight will land here automatically.
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-950 py-12 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-10 shadow-2xl">
          <div className="absolute inset-0 opacity-60 mix-blend-screen" style={{ background: 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.35), transparent 55%)' }} />
          <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{ background: 'radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.25), transparent 55%)' }} />
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
              Live Intelligence
            </div>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold text-white">
                Aalto AI Discovery Command Centre
              </h1>
              <p className="text-lg text-white/70">
                Real-time pulse across every discovery interview — readiness, opportunities, and verbatim insight to fuel your next move.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <TabButton
                label="Pulse Dashboard"
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label="Verbatim Library"
                isActive={activeTab === 'verbatim'}
                onClick={() => setActiveTab('verbatim')}
              />
            </div>
          </div>
        </section>

        <main>
          {activeTab === 'overview' ? overviewContent : verbatimContent}
        </main>
      </div>
    </div>
  )
}

export default Insights

type MetricCardProps = {
  title: string
  highlight: string
  subtitle: string
  glow: string
  footer: string
}

const MetricCard = ({ title, highlight, subtitle, glow, footer }: MetricCardProps) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-xl backdrop-blur">
    <div className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-60`} />
    <div className="relative space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{title}</p>
      <p className="text-3xl font-semibold text-white">{highlight}</p>
      <p className="text-sm text-white/60">{subtitle}</p>
    </div>
    <div className="relative mt-6 border-t border-white/10 pt-3 text-xs uppercase tracking-[0.25em] text-white/40">
      {footer}
    </div>
  </div>
)

type TabButtonProps = {
  label: string
  isActive: boolean
  onClick: () => void
}

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'border-emerald-400/80 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/30'
        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white'
    }`}
  >
    {label}
  </button>
)

type InsightListProps = {
  title: string
  items: string[]
}

const InsightList = ({ title, items }: InsightListProps) => (
  <div className="rounded-3xl border border-white/5 bg-white/5 p-6 text-white/80">
    <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-4">{title}</p>
    {items.length ? (
      <ul className="space-y-3 text-sm leading-relaxed text-white/85">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-white/40">No data captured yet.</p>
    )}
  </div>
)

type RecommendationCardProps = {
  title: string
  emoji: string
  description: string
  tone: string
}

const RecommendationCard = ({ title, emoji, description, tone }: RecommendationCardProps) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
    <div className={`absolute inset-0 bg-gradient-to-br ${tone}`} />
    <div className="relative space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-xl">{emoji}</span>
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">{title}</p>
      </div>
      <p className="text-sm leading-relaxed text-white/85">
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
