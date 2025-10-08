import Card from '../../components/Card'

interface CoolApp {
  name: string
  url: string
  tagline: string
  icon: string
  features: string[]
  whyCool: string
  caveats?: string[]
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function OtherAppsTab() {
  const apps: CoolApp[] = [
    {
      name: 'Google NotebookLM',
      url: 'https://notebooklm.google.com/',
      tagline: 'AI-powered research & note tool that grounds responses only in YOUR documents',
      icon: '📓',
      color: 'indigo',
      features: [
        'Grounded / walled garden approach - AI restricted to your uploaded content, avoiding hallucinations from general web knowledge',
        'Audio Overviews - converts documents into conversational "podcast style" summaries with two AI hosts',
        'Video Overviews - generates narrated slideshows combining AI narration with visuals, diagrams, and quotes from your content',
        'Mind Map interface - interactive visual exploration of topics showing connections and relationships between sources',
        'Multi-document analysis - upload PDFs, Google Docs, web pages, slides and AI analyzes across them to find themes, contradictions, gaps',
        'Output language selector - choose the language for generated summaries and chat responses',
        'Studio panel - organized interface to generate study guides, briefing docs, audio/video overviews',
        'Featured/shared notebooks - browse curated notebooks from experts or share your own publicly',
        'NotebookLM Plus - premium plan with more notebooks, sources, audio overviews, team collaboration, and analytics',
        'Research/tutoring use - RAG-style setup makes it reliable for educational contexts with Socratic questioning'
      ],
      whyCool: 'NotebookLM is unique because responses are grounded only in content you provide - no general web hallucinations. It combines rich multimodal inputs (docs, web, slides, video transcripts) with generative media outputs like audio and video summaries. The Mind Map interface enables non-linear knowledge navigation, and the walled garden tradeoff means better accuracy at the expense of limited scope. Perfect as a "second brain" for curated knowledge sets.',
      caveats: [
        'Walled garden limitation: AI won\'t fill gaps from outside knowledge if you omit sources',
        'Response quality depends entirely on the quality, breadth, and curation of your uploaded sources',
        'Interactive audio "Join" feature is still experimental and may have awkward pauses or inaccuracies',
        'Some features (Video Overviews) are rolling out gradually - not all users have full access yet',
        'Public shared notebooks allow viewing only - no editing by external viewers',
        'Video content requires transcripts/subtitles to be reliably ingested',
        'Requires continual feeding of new material to stay current - no automatic real-world updating'
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
          <span className="text-3xl mr-3">✨</span>
          Other Cool AI Apps
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Beyond the core AI platforms, there are specialized tools that solve specific problems in innovative ways.
          These apps demonstrate the cutting edge of what's possible when AI is focused on particular use cases.
        </p>
      </div>

      {/* Apps */}
      {apps.map((app, idx) => (
        <Card key={idx} className="overflow-hidden" color={`border-${app.color}-400`}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                <span className="text-5xl mr-4">{app.icon}</span>
                <div>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl font-bold text-primary hover:underline inline-flex items-center"
                  >
                    {app.name} →
                  </a>
                  <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                    {app.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {app.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-gray-700">
                    <span className="text-indigo-600 mr-3 text-xl font-bold">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why It's Cool */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Why It's Cool
              </h3>
              <p className="text-gray-700 leading-relaxed">{app.whyCool}</p>
            </div>

            {/* Caveats */}
            {app.caveats && app.caveats.length > 0 && (
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚠️</span>
                  Things to Watch / Caveats
                </h3>
                <ul className="space-y-2">
                  {app.caveats.map((caveat, cIdx) => (
                    <li key={cIdx} className="flex items-start text-gray-700">
                      <span className="text-yellow-600 mr-3 font-bold">→</span>
                      <span className="text-sm leading-relaxed">{caveat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Try It */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                Try It Yourself
              </h3>
              <p className="text-gray-700 mb-4">
                Ready to explore {app.name}? Click the link below to get started:
              </p>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
              >
                Open {app.name} →
              </a>
            </div>
          </div>
        </Card>
      ))}

      {/* More Apps Coming Soon */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-8 border-2 border-dashed border-gray-300 text-center">
        <span className="text-5xl mb-4 block">🔮</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">More Cool Apps Coming Soon</h3>
        <p className="text-gray-600">
          The AI landscape is evolving rapidly. Check back here for more innovative tools and platforms!
        </p>
      </div>
    </div>
  )
}
