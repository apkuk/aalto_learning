import Card from '../../components/Card'
import Badge from '../../components/Badge'

interface AITool {
  name: string
  description: string
  icon: string
  useCases: string[]
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function MediaTab() {
  const tools: AITool[] = [
    {
      name: 'Sora',
      description: 'OpenAI\'s advanced video generation model for creating realistic and imaginative video content',
      icon: '🎬',
      useCases: ['Video creation', 'Marketing content', 'Concept videos'],
      color: 'purple'
    },
    {
      name: 'Veo',
      description: 'Google/Gemini\'s video generation model for high-quality video synthesis',
      icon: '📹',
      useCases: ['Video generation', 'Visual storytelling', 'Content creation'],
      color: 'blue'
    },
    {
      name: 'Imagen',
      description: 'Google/Gemini\'s image generation model with photorealistic results',
      icon: '🖼️',
      useCases: ['Product visualization', 'Marketing materials', 'Concept art'],
      color: 'green'
    },
    {
      name: 'ChatGPT Image Generation',
      description: 'Built-in image generation within ChatGPT using DALL-E technology',
      icon: '🎨',
      useCases: ['Presentation graphics', 'Quick visuals', 'Integrated workflow'],
      color: 'pink'
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
                      Media
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
