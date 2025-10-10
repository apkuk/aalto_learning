import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import jsPDF from 'jspdf'
import PulseDashboardTab from './insights/PulseDashboardTab'
import VerbatimLibraryTab from './insights/VerbatimLibraryTab'

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

const Insights = () => {
  const { t } = useTranslation()
  const [summary, setSummary] = useState<SummaryData | null>(null)
  const [interviews, setInterviews] = useState<InterviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'verbatim'>('overview')
  const [isGenerating, setIsGenerating] = useState(false)

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

  const handleGeneratePdf = () => {
    if (!summary || !interviews) return

    setIsGenerating(true)

    // Helper functions for PDF generation
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

    // Calculate values needed for PDF
    const readinessLabel: Record<ReadinessLevel, string> = {
      high: t('insights.readiness.highReadiness'),
      medium: t('insights.readiness.mediumReadiness'),
      low: t('insights.readiness.lowReadiness')
    }

    const distribution = summary?.readiness
    const total = (distribution?.high || 0) + (distribution?.medium || 0) + (distribution?.low || 0)
    const readinessTotals = {
      total,
      breakdown: (['high', 'medium', 'low'] as ReadinessLevel[]).map((level) => {
        const value = distribution?.[level] || 0
        const percent = total ? Math.round((value / total) * 100) : 0
        return { level, value, percent }
      })
    }

    const departments = Array.from(
      new Set(
        interviews.items
          .map((row) => (row.Department ? String(row.Department) : 'Unassigned'))
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b))

    const languages = Array.from(
      new Set(
        interviews.items
          .map((row) => (row.Language ? String(row.Language).toUpperCase() : 'EN'))
          .filter(Boolean)
      )
    ).sort()

    const durations = interviews.items
      .map((row) => Number(row['Duration (min)'] || 0))
      .filter((value) => !Number.isNaN(value) && value > 0)
    const averageDuration = durations.length
      ? Math.round(durations.reduce((acc, val) => acc + val, 0) / durations.length)
      : null

    const totalInterviews = summary?.items || 0
    const sortedReadiness = [...readinessTotals.breakdown].sort((a, b) => b.value - a.value)
    const topReadiness = sortedReadiness[0]

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
          {activeTab === 'overview' ? (
            <PulseDashboardTab summary={summary} interviews={interviews} />
          ) : (
            <VerbatimLibraryTab interviews={interviews} />
          )}
        </main>
      </div>
    </div>
  )
}

export default Insights

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
