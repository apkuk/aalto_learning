import Card from '../../components/Card'

interface AITool {
  name: string
  url: string
  description: string
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function ChatTab() {
  const tools: AITool[] = [
    {
      name: 'ChatGPT',
      url: 'https://chat.openai.com/',
      description: 'ChatGPT (Pro account) - Expertise in many domain areas, Deep Research, Dictation/Voice',
      icon: '💬',
      color: 'green'
    },
    {
      name: 'Claude',
      url: 'https://claude.ai/',
      description: 'Claude (Max account) - Creating artefacts such as documentation/beautiful code MVPs, creating MS Office docs, creative writing',
      icon: '🤖',
      color: 'blue'
    },
    {
      name: 'Gemini',
      url: 'https://gemini.google.com/',
      description: 'Gemini (Pro account free with my cell phone account) - media (images/video)',
      icon: '✨',
      color: 'purple'
    },
    {
      name: 'Perplexity',
      url: 'https://www.perplexity.ai/',
      description: 'Perplexity (Free) - smart web search, deep research',
      icon: '🔍',
      color: 'teal'
    },
    {
      name: 'Google AI Studio',
      url: 'https://aistudio.google.com/',
      description: 'Google AI Studio (free) - large context chats, trying out upcoming Google features',
      icon: '🔬',
      color: 'indigo'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-gray-700">
          <strong>Chat & Research Tools:</strong> These are the core conversational AI assistants I use daily for brainstorming, research, and problem-solving. Each has unique strengths that complement the others.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-1 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.name}
            className="hover:scale-[1.02] transition-transform"
            color={`border-${tool.color}-400`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{tool.icon}</span>
                  <div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-primary hover:underline"
                    >
                      {tool.name} →
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Integration Example */}
      <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Example Workflow: Content Creation
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start">
            <span className="font-bold text-purple-600 mr-3">1.</span>
            <p><strong>Perplexity:</strong> Research the topic with cited sources</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-purple-600 mr-3">2.</span>
            <p><strong>ChatGPT:</strong> Draft the content structure and key points</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-purple-600 mr-3">3.</span>
            <p><strong>Claude:</strong> Refine tone and add depth to arguments</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-purple-600 mr-3">4.</span>
            <p><strong>Google AI Studio:</strong> Analyze large documents with massive context window</p>
          </div>
        </div>
      </div>
    </div>
  )
}
