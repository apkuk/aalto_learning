import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import jsPDF from 'jspdf'

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

// Note: readinessLabel is now created as a function inside the component to access translations

const readinessBadge: Record<ReadinessLevel, string> = {
  high: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-rose-50 text-rose-700 border-rose-200'
}

const scorePalette = ['from-sky-300 to-indigo-400', 'from-purple-300 to-fuchsia-400', 'from-orange-300 to-amber-400']

const Insights = () => {
  const { t } = useTranslation()
  const [summary, setSummary] = useState<SummaryData | null>(null)
  const [interviews, setInterviews] = useState<InterviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'verbatim'>('overview')
  const [isGenerating, setIsGenerating] = useState(false)

  // Create readinessLabel as a function to access translations
  const readinessLabel: Record<ReadinessLevel, string> = {
    high: t('insights.readiness.highReadiness'),
    medium: t('insights.readiness.mediumReadiness'),
    low: t('insights.readiness.lowReadiness')
  }

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
        setError(t('insights.errorTitle'))
        setLoading(false)
      }
    }

    fetchData()
  }, [API, t])

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

  // Note: 'Unassigned' is kept as-is for consistency with data, not translated

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

  const handleGeneratePdf = () => {
    if (!summary || !interviews) return

    setIsGenerating(true)

    try {
      const doc = new jsPDF({ unit: 'pt', format: 'a4' })
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const margin = 48
      const contentWidth = pageWidth - margin * 2
      let y = margin
      const lineHeight = 20
      const labelWidth = 160

      const ensureSpace = (height: number) => {
        if (y + height > pageHeight - margin) {
          doc.addPage()
          y = margin
        }
      }

      const addDivider = () => {
        ensureSpace(lineHeight)
        doc.setDrawColor(225, 232, 240)
        doc.setLineWidth(1)
        doc.line(margin, y, pageWidth - margin, y)
        y += lineHeight / 2
      }

      const addCenteredHeading = (text: string, subtext?: string) => {
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(22)
        doc.text(text, pageWidth / 2, y, { align: 'center' })
        y += 34
        if (subtext) {
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(12)
          doc.text(subtext, pageWidth / 2, y, { align: 'center' })
          y += 26
        }
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(12)
        ensureSpace(lineHeight)
        addDivider()
      }

      const addSectionTitle = (text: string) => {
        ensureSpace(lineHeight * 1.5)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(14)
        doc.text(text, margin, y)
        y += lineHeight
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(12)
        ensureSpace(lineHeight / 2)
      }

      const addKeyValue = (label: string, value: string) => {
        ensureSpace(lineHeight)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(12)
        doc.text(`${label}:`, margin, y)
        doc.setFontSize(12)
        const lines = doc.splitTextToSize(value, contentWidth - labelWidth)
        doc.setFont('helvetica', 'normal')
        doc.text(lines, margin + labelWidth, y)
        y += Math.max(lineHeight, lines.length * (lineHeight - 4))
      }

      const addParagraph = (text: string) => {
        ensureSpace(lineHeight)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(12)
        const lines = doc.splitTextToSize(text, contentWidth)
        ensureSpace(lines.length * (lineHeight - 2))
        doc.text(lines, margin, y)
        y += lines.length * (lineHeight - 2)
      }

      const addList = (title: string, items: string[]) => {
        if (!items.length) return
        ensureSpace(lineHeight)
        doc.setFont('helvetica', 'bold')
        doc.text(`${title}:`, margin, y)
        doc.setFont('helvetica', 'normal')
        y += lineHeight - 6
        items.forEach((item) => {
          const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 16)
          ensureSpace(lines.length * (lineHeight - 2))
          doc.text(lines, margin + 16, y)
          y += lines.length * (lineHeight - 2)
        })
        ensureSpace(lineHeight / 2)
      }

      addCenteredHeading(
        t('insights.pdf.title'),
        t('insights.pdf.generatedOn', { date: new Date().toLocaleString() })
      )

      addSectionTitle(t('insights.pdf.pulseTitle'))
      addKeyValue(t('insights.pdf.interviewsCaptured'), `${totalInterviews}`)
      addKeyValue(
        t('insights.pdf.avgDuration'),
        averageDuration ? `${averageDuration} minutes` : 'N/A'
      )
      addKeyValue(
        t('insights.pdf.topReadiness'),
        topReadiness
          ? `${readinessLabel[topReadiness.level]} (${topReadiness.percent}%)`
          : 'Not enough data'
      )
      addKeyValue(
        t('insights.pdf.languages'),
        languages.length ? languages.join(', ') : 'English (default)'
      )

      addSectionTitle(t('insights.pdf.readinessBreakdown'))
      readinessTotals.breakdown.forEach(({ level, value, percent }) => {
        addParagraph(
          `${readinessLabel[level]}: ${value} interview${value === 1 ? '' : 's'} (${percent}%)`
        )
      })
      ensureSpace(lineHeight / 2)

      const topWords = summary.top_challenge_words || []
      if (topWords.length) {
        addSectionTitle(t('insights.pdf.topChallenges'))
        topWords.forEach(({ word, count }) => {
          addParagraph(`${word} (×${count})`)
        })
      }

      if (departments.length) {
        addSectionTitle(t('insights.pdf.departments'))
        addParagraph(departments.join(', '))
      }

      ensureSpace(lineHeight * 2)
      doc.addPage()
      y = margin

      addSectionTitle(t('insights.pdf.verbatimTitle'))

      interviews.items.forEach((row, index) => {
        if (index > 0) {
          ensureSpace(40)
        }

        const interviewTitle =
          row.Name || row['Reference ID'] || `Interview ${index + 1}`

        addSectionTitle(interviewTitle)

        addKeyValue(
          t('insights.pdf.roleDept'),
          `${row.Role || 'Unknown role'} · ${row.Department || 'Unassigned department'}`
        )
        addKeyValue(t('insights.pdf.refId'), String(row['Reference ID'] || 'N/A'))
        addKeyValue(
          t('insights.pdf.interviewedOn'),
          formatDate(row['Interview Date'] || row.Timestamp || '')
        )
        addKeyValue(
          t('insights.pdf.overallReadiness'),
          String(row['Overall Readiness'] || t('insights.pdf.notCaptured'))
        )

        const scoresSummary = [
          `${t('insights.pdf.technicalScore')} ${toScore(row['Technical Score'])?.toFixed(1) ?? '–'}/5`,
          `${t('insights.pdf.culturalScore')} ${toScore(row['Cultural Score'])?.toFixed(1) ?? '–'}/5`,
          `${t('insights.pdf.resourcingScore')} ${toScore(row['Resource Score'])?.toFixed(1) ?? '–'}/5`
        ].join(' | ')

        addKeyValue(t('insights.pdf.readinessScores'), scoresSummary)
        addKeyValue(
          t('insights.verbatim.duration', { duration: '' }).split('·')[0].trim(),
          row['Duration (min)'] ? `${row['Duration (min)']} minutes` : t('insights.pdf.notProvided')
        )
        addKeyValue(t('insights.verbatim.language', { language: '' }).split('·')[0].trim(), (row.Language || 'EN').toString().toUpperCase())

        addList(
          t('insights.pdf.currentChallenges'),
          parseList(row['Current Challenges'])
        )
        addList(
          t('insights.pdf.manualProcesses'),
          parseList(row['Manual Processes'])
        )
        addList(
          t('insights.pdf.aiOpportunities'),
          parseList(row['AI Opportunities'])
        )
        addList(
          t('insights.pdf.keyInsights'),
          parseList(row['Key Insights'])
        )
        addList(
          t('insights.pdf.notableQuotes'),
          parseList(row['Notable Quotes'])
        )

        const recommendations = [
          row['Immediate Recommendation']
            ? `${t('insights.pdf.immediate')}: ${row['Immediate Recommendation']}`
            : null,
          row['Short-term Recommendation']
            ? `${t('insights.pdf.shortTerm')}: ${row['Short-term Recommendation']}`
            : null,
          row['Strategic Recommendation']
            ? `${t('insights.pdf.strategic')}: ${row['Strategic Recommendation']}`
            : null
        ].filter(Boolean) as string[]

        addList(t('insights.pdf.recommendations'), recommendations)

        ensureSpace(lineHeight)
        addDivider()

        if (y > pageHeight - margin * 2) {
          doc.addPage()
          y = margin
        }
      })

      doc.save('aalto-ai-discovery-report.pdf')
    } catch (err) {
      console.error('Failed to generate PDF', err)
    } finally {
      setIsGenerating(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-600">
        <div className="text-center space-y-4">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <p className="text-lg tracking-wide uppercase text-gray-500">{t('insights.loading')}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="rounded-2xl bg-white border border-rose-200 p-10 text-center text-gray-700 shadow-xl">
          <h2 className="text-2xl font-semibold text-rose-600 mb-3">{t('insights.errorTitle')}</h2>
          <p className="mb-6">{error}</p>
          <p className="text-sm text-gray-500">{t('insights.errorRetry')}</p>
        </div>
      </div>
    )
  }

  const totalInterviews = summary?.items || 0

  const sortedReadiness = [...readinessTotals.breakdown].sort((a, b) => b.value - a.value)
  const topReadiness = sortedReadiness[0]

  const topChallengeWords = summary?.top_challenge_words || []
  const topChallengeMax =
    topChallengeWords.reduce((max, item) => Math.max(max, item.count), 0) || 1

  const overviewContent = (
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5" />
          <div className="relative space-y-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  {t('insights.header.badge')}
                </div>
                <div className="max-w-3xl space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
                    {t('insights.header.title')}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {t('insights.header.subtitle')}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleGeneratePdf}
                disabled={!summary || !interviews || isGenerating}
                className="inline-flex items-center gap-2 self-start rounded-full border border-primary bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none"
              >
                <span aria-hidden="true">📄</span>
                {isGenerating ? t('insights.header.downloadingButton') : t('insights.header.downloadButton')}
              </button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <TabButton
                label={t('insights.tabs.pulseDashboard')}
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label={t('insights.tabs.verbatimLibrary')}
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
        ? 'border-primary bg-primary text-white shadow-md shadow-primary/20'
        : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    {label}
  </button>
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
