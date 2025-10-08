import Card from '../../components/Card'
import Badge from '../../components/Badge'

interface AITool {
  name: string
  description: string
  icon: string
  useCases: string[]
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function ChatTab() {
  const tools: AITool[] = [
    {
      name: 'ChatGPT',
      description: 'OpenAI\'s conversational AI for general tasks, brainstorming, and research',
      icon: '💬',
      useCases: ['Quick questions', 'Content drafting', 'General assistance'],
      color: 'green'
    },
    {
      name: 'Claude',
      description: 'Anthropic\'s AI assistant, excellent for nuanced conversations and analysis',
      icon: '🤖',
      useCases: ['Deep analysis', 'Document review', 'Complex reasoning'],
      color: 'blue'
    },
    {
      name: 'Gemini',
      description: 'Google\'s AI with deep integration into Google Workspace',
      icon: '✨',
      useCases: ['Google integration', 'Multi-modal tasks', 'Research'],
      color: 'purple'
    },
    {
      name: 'Perplexity',
      description: 'AI-powered search engine with source citations',
      icon: '🔍',
      useCases: ['Research with sources', 'Current events', 'Fact-checking'],
      color: 'teal'
    },
    {
      name: 'Google AI Studio',
      description: 'Experimental platform for working with Gemini models, large context windows, and prompt engineering',
      icon: '🔬',
      useCases: ['Large document analysis', 'Prompt experimentation', 'Model testing'],
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
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.name}
            className="hover:scale-105 transition-transform"
            color={`border-${tool.color}-400`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{tool.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                    <Badge color={tool.color} size="small">
                      Chat & Research
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div>
                <p className="font-semibold text-gray-900 text-sm mb-2">I use it for:</p>
                <ul className="space-y-1">
                  {tool.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
