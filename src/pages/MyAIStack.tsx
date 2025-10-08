import Card from '../components/Card'
import Badge from '../components/Badge'

interface AITool {
  name: string
  category: string
  description: string
  icon: string
  useCases: string[]
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function MyAIStack() {
  const tools: AITool[] = [
    {
      name: 'ChatGPT',
      category: 'Chat & Research',
      description: 'OpenAI\'s conversational AI for general tasks, brainstorming, and research',
      icon: '💬',
      useCases: ['Quick questions', 'Content drafting', 'General assistance'],
      color: 'green'
    },
    {
      name: 'Claude',
      category: 'Chat & Research',
      description: 'Anthropic\'s AI assistant, excellent for nuanced conversations and analysis',
      icon: '🤖',
      useCases: ['Deep analysis', 'Document review', 'Complex reasoning'],
      color: 'blue'
    },
    {
      name: 'Gemini',
      category: 'Chat & Research',
      description: 'Google\'s AI with deep integration into Google Workspace',
      icon: '✨',
      useCases: ['Google integration', 'Multi-modal tasks', 'Research'],
      color: 'purple'
    },
    {
      name: 'Perplexity',
      category: 'Chat & Research',
      description: 'AI-powered search engine with source citations',
      icon: '🔍',
      useCases: ['Research with sources', 'Current events', 'Fact-checking'],
      color: 'teal'
    },
    {
      name: 'GitHub Copilot',
      category: 'Coding',
      description: 'AI pair programmer integrated directly into your IDE',
      icon: '👨‍💻',
      useCases: ['Code completion', 'Function generation', 'Bug fixing'],
      color: 'indigo'
    },
    {
      name: 'Claude Code',
      category: 'Coding',
      description: 'CLI tool for AI-assisted coding and project development',
      icon: '⚡',
      useCases: ['Full project building', 'Refactoring', 'Documentation'],
      color: 'blue'
    },
    {
      name: 'VS Code',
      category: 'Coding',
      description: 'Microsoft\'s code editor with extensive AI extensions',
      icon: '📝',
      useCases: ['Code editing', 'Extension ecosystem', 'Git integration'],
      color: 'blue'
    },
    {
      name: 'DALL-E',
      category: 'Image Generation',
      description: 'OpenAI\'s image generation model for creating visuals from text',
      icon: '🎨',
      useCases: ['Presentation graphics', 'Concept visualization', 'Marketing materials'],
      color: 'pink'
    },
    {
      name: 'Midjourney',
      category: 'Image Generation',
      description: 'High-quality artistic image generation via Discord',
      icon: '🖼️',
      useCases: ['Artistic images', 'Brand visuals', 'Creative concepts'],
      color: 'purple'
    },
    {
      name: 'Make.com',
      category: 'Productivity & Automation',
      description: 'Visual automation platform for connecting apps and workflows',
      icon: '🔗',
      useCases: ['Workflow automation', 'API integration', 'Data synchronization'],
      color: 'orange'
    },
    {
      name: 'n8n',
      category: 'Productivity & Automation',
      description: 'Open-source workflow automation, self-hostable alternative to Zapier',
      icon: '⚙️',
      useCases: ['Complex workflows', 'Self-hosted automation', 'Custom integrations'],
      color: 'red'
    },
    {
      name: 'GitHub',
      category: 'Development & Deployment',
      description: 'Version control and code hosting with CI/CD capabilities',
      icon: '🐙',
      useCases: ['Version control', 'Collaboration', 'Project hosting'],
      color: 'gray'
    },
    {
      name: 'Netlify',
      category: 'Development & Deployment',
      description: 'Web hosting and deployment platform with automatic builds',
      icon: '🌐',
      useCases: ['Website hosting', 'Automatic deployment', 'Preview environments'],
      color: 'teal'
    }
  ]

  const categories = [
    { name: 'Chat & Research', icon: '💭', color: 'blue' as const },
    { name: 'Coding', icon: '💻', color: 'indigo' as const },
    { name: 'Image Generation', icon: '🎨', color: 'pink' as const },
    { name: 'Productivity & Automation', icon: '⚡', color: 'orange' as const },
    { name: 'Development & Deployment', icon: '🚀', color: 'teal' as const }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              My AI Stack
            </h1>
            <div className="bg-purple-100 border-2 border-purple-400 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-purple-800">15 minutes</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            The AI tools and platforms I use daily to supercharge my productivity
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded mt-4">
            <p className="text-gray-800">
              <strong>Session Breakdown:</strong> First 7 minutes - Andrew presents the stack.
              Next 8 minutes - YOU play with the tools yourself!
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How My AI Tools Work Together</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            These tools aren't isolated - they form an integrated workflow that allows me to research,
            create, code, and deploy rapidly. Each tool has its strengths, and knowing when to use
            which one is key to maximizing productivity.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">Thinking & Research</h3>
              <p className="text-sm text-gray-700">
                ChatGPT, Claude, Gemini, and Perplexity help me explore ideas, conduct research,
                and refine concepts before execution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Building & Creating</h3>
              <p className="text-sm text-gray-700">
                Coding tools and image generators transform ideas into reality - from websites
                to visual assets.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Automation & Deployment</h3>
              <p className="text-sm text-gray-700">
                Automation platforms and deployment tools keep everything running smoothly
                and make my work instantly accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tool Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="font-bold text-gray-900">{category.name}</h3>
                </div>
                <Badge color={category.color} size="small">
                  {tools.filter(t => t.category === category.name).length} tools
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => (
          <div key={category.name} className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter((tool) => tool.category === category.name)
                .map((tool) => (
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
                              {tool.category}
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
          </div>
        ))}

        {/* Integration Examples */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How They Work Together</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Example Workflow: Building This Website
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">1.</span>
                  <p><strong>Claude:</strong> Created the project requirements document (PRD) and planned the site structure</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">2.</span>
                  <p><strong>Claude Code:</strong> Built the entire React application with TypeScript and Tailwind CSS</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">3.</span>
                  <p><strong>VS Code + Copilot:</strong> Made refinements and added custom features</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">4.</span>
                  <p><strong>GitHub:</strong> Version control and code hosting</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">5.</span>
                  <p><strong>Netlify:</strong> Automatic deployment - live site in minutes!</p>
                </div>
              </div>
              <div className="mt-4 bg-blue-100 rounded p-4">
                <p className="text-sm text-gray-800 font-semibold">
                  Total Time: ~15 minutes from concept to live deployment
                </p>
              </div>
            </div>

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
                  <p><strong>DALL-E or Midjourney:</strong> Create supporting visuals</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-purple-600 mr-3">5.</span>
                  <p><strong>Make.com:</strong> Automate publishing to various platforms</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Example Workflow: Process Automation
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">1.</span>
                  <p><strong>ChatGPT:</strong> Design the automation logic and flowchart</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">2.</span>
                  <p><strong>Make.com or n8n:</strong> Build the automation workflow</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">3.</span>
                  <p><strong>GitHub Copilot:</strong> Write any custom code needed for integrations</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">4.</span>
                  <p><strong>GitHub:</strong> Store and version the automation scripts</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-orange-600 mr-3">5.</span>
                  <p><strong>Claude:</strong> Document the workflow for future reference</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hands-On Practice */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl font-bold text-gray-900">Your Turn: Hands-On Practice!</h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Activities (8 minutes)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">1.</span>
                <div>
                  <strong>Try a Chat AI:</strong> Open ChatGPT, Claude, or Gemini and ask it to explain a concept you're curious about
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">2.</span>
                <div>
                  <strong>Compare Responses:</strong> Ask the same question to two different AI tools and notice the differences
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">3.</span>
                <div>
                  <strong>Explore Perplexity:</strong> Try a research query and see how it provides sources
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">4.</span>
                <div>
                  <strong>Experiment Freely:</strong> Play around with any of these tools - there's no wrong way to explore!
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-gray-800">
              <strong>Remember:</strong> The goal is to get comfortable with the tools. Don't worry about
              "doing it right" - just explore and see what happens!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
