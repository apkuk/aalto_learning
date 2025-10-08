import Card from '../../components/Card'

interface AITool {
  name: string
  url: string
  description: string
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function MediaTab() {
  const tools: AITool[] = [
    {
      name: 'Sora',
      url: 'https://openai.com/sora/',
      description: 'OpenAI\'s advanced video generation model for creating realistic and imaginative video content',
      icon: '🎬',
      color: 'purple'
    },
    {
      name: 'Veo',
      url: 'https://deepmind.google/technologies/veo/',
      description: 'Google/Gemini\'s video generation model for high-quality video synthesis',
      icon: '📹',
      color: 'blue'
    },
    {
      name: 'Nano Banana',
      url: 'https://gemini.google.com/',
      description: 'Nano Banana (available via Gemini and Google AI Studio) - Google/Gemini\'s image generation model with photorealistic results',
      icon: '🖼️',
      color: 'green'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
        <p className="text-gray-700">
          <strong>Media Generation Tools:</strong> These tools help me create images and videos without design skills or expensive software. Perfect for presentations, marketing materials, and visual content.
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

      {/* Note about Nano Banana availability */}
      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Nano Banana is accessible through both{' '}
          <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Gemini
          </a>
          {' '}and{' '}
          <a href="https://aistudio.google.com/gen-media" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Google AI Studio
          </a>
          .
        </p>
      </div>

      {/* Impact Statement */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          The Impact: From Weeks to Minutes
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-red-700 mb-2">Before AI:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Hire designer: $500-$2,000 per project</li>
              <li>• Timeline: 3-5 days minimum</li>
              <li>• Revisions: Additional time and cost</li>
              <li>• Limited iterations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-700 mb-2">With AI Media Tools:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Cost: ~$20/month subscription</li>
              <li>• Timeline: 30 minutes or less</li>
              <li>• Revisions: Unlimited and instant</li>
              <li>• Complete creative control</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded p-4">
          <p className="text-sm font-bold text-gray-900">
            Result: 95% cost savings + 10x faster + unlimited iteration
          </p>
        </div>
      </div>
    </div>
  )
}
