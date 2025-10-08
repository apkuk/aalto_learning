interface Tool {
  name: string
  category: 'IDE' | 'AI Assistant' | 'Deployment' | 'Version Control' | 'API Platform'
  description: string
  tier: string
  cost: string
  features: string[]
  link: string
  color: string
}

export default function CodingTools() {
  const tools: Tool[] = [
    {
      name: 'VS Code',
      category: 'IDE',
      description: 'Free, open-source code editor with extensive extensions and AI integrations.',
      tier: 'Free',
      cost: '$0/month',
      features: [
        'IntelliSense code completion',
        'Integrated terminal',
        'Git integration',
        'Extensions marketplace',
        'GitHub Copilot support'
      ],
      link: 'https://code.visualstudio.com/',
      color: 'bg-blue-600'
    },
    {
      name: 'GitHub',
      category: 'Version Control',
      description: 'Version control platform for collaborative development and code hosting.',
      tier: 'Free / Pro',
      cost: '$0-4/month',
      features: [
        'Unlimited repositories',
        'GitHub Actions (CI/CD)',
        'GitHub Pages hosting',
        'Collaboration tools',
        'Code review'
      ],
      link: 'https://github.com',
      color: 'bg-gray-800'
    },
    {
      name: 'GitHub Copilot',
      category: 'AI Assistant',
      description: 'AI pair programmer that suggests code and entire functions in real-time.',
      tier: 'Paid',
      cost: '$10/month',
      features: [
        'AI code suggestions',
        'Multi-language support',
        'Context-aware completions',
        'Chat interface',
        'Code explanation'
      ],
      link: 'https://github.com/features/copilot',
      color: 'bg-purple-600'
    },
    {
      name: 'Claude Code',
      category: 'AI Assistant',
      description: 'Anthropic\'s coding assistant built into Claude, excellent for code review and generation.',
      tier: 'Included with Claude Pro',
      cost: '$20/month',
      features: [
        'Code generation',
        'Debugging assistance',
        'Architecture planning',
        'Documentation writing',
        'Artifact feature'
      ],
      link: 'https://claude.ai',
      color: 'bg-orange-600'
    },
    {
      name: 'ChatGPT Plus',
      category: 'AI Assistant',
      description: 'GPT-4 access for coding, with web browsing and advanced reasoning.',
      tier: 'Plus / Pro',
      cost: '$20-200/month',
      features: [
        'GPT-4 access',
        'Code generation',
        'Web browsing',
        'Plugin ecosystem',
        'Custom GPTs'
      ],
      link: 'https://chat.openai.com',
      color: 'bg-green-600'
    },
    {
      name: 'Netlify',
      category: 'Deployment',
      description: 'Modern deployment platform with automatic builds from Git and global CDN.',
      tier: 'Free / Pro',
      cost: '$0-19/month',
      features: [
        'Automatic deployments',
        'Custom domains',
        'Serverless functions',
        'Form handling',
        'Split testing'
      ],
      link: 'https://www.netlify.com',
      color: 'bg-teal-600'
    },
    {
      name: 'OpenAI API',
      category: 'API Platform',
      description: 'Direct API access to GPT-4, GPT-3.5, DALL-E, and other OpenAI models.',
      tier: 'Pay-as-you-go',
      cost: 'Usage-based',
      features: [
        'GPT-4 API',
        'Embeddings',
        'Fine-tuning',
        'Function calling',
        'Vision API'
      ],
      link: 'https://platform.openai.com',
      color: 'bg-green-700'
    },
    {
      name: 'Anthropic API',
      category: 'API Platform',
      description: 'API access to Claude models for building AI applications.',
      tier: 'Pay-as-you-go',
      cost: 'Usage-based',
      features: [
        'Claude 3 models',
        'Large context windows',
        'Streaming responses',
        'Tool use',
        'Vision capabilities'
      ],
      link: 'https://www.anthropic.com',
      color: 'bg-orange-700'
    }
  ]

  const categories = ['IDE', 'Version Control', 'AI Assistant', 'Deployment', 'API Platform'] as const

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Coding & Tools
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive guide to the development tools, AI assistants, and platforms used in modern AI-powered workflows
          </p>
        </div>

        {/* Integration Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It All Fits Together</h2>
          <div className="bg-white rounded-lg p-6">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="bg-blue-100 border-2 border-blue-500 rounded-lg px-4 py-2 font-semibold">
                VS Code
              </div>
              <span className="text-gray-500">+</span>
              <div className="bg-purple-100 border-2 border-purple-500 rounded-lg px-4 py-2 font-semibold">
                AI Assistants
              </div>
              <span className="text-gray-500">+</span>
              <div className="bg-gray-100 border-2 border-gray-500 rounded-lg px-4 py-2 font-semibold">
                GitHub
              </div>
              <span className="text-gray-500">→</span>
              <div className="bg-teal-100 border-2 border-teal-500 rounded-lg px-4 py-2 font-semibold">
                Netlify
              </div>
              <span className="text-gray-500">→</span>
              <div className="bg-green-100 border-2 border-green-500 rounded-lg px-4 py-2 font-semibold">
                Production
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-center">
              Write code in VS Code with AI assistance → Push to GitHub → Auto-deploy to Netlify → Live website
            </p>
          </div>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tools
                .filter((tool) => tool.category === category)
                .map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className={`${tool.color} text-white p-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">{tool.name}</h3>
                          <p className="text-sm opacity-90">{tool.tier}</p>
                        </div>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                          {tool.cost}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 mb-4">{tool.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <span className="text-primary mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${tool.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center text-sm font-medium`}
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Setup Guide */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started Guide</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Set Up Your Development Environment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Install VS Code</li>
                <li>Set up Git and create a GitHub account</li>
                <li>Configure Git credentials locally</li>
                <li>Install Node.js (v18 or later)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Add AI Assistance</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Subscribe to GitHub Copilot or ChatGPT Plus</li>
                <li>Install relevant VS Code extensions</li>
                <li>Configure API keys if using OpenAI/Anthropic APIs</li>
                <li>Learn prompt engineering basics</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Set Up Deployment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Create a Netlify account (free tier)</li>
                <li>Connect your GitHub repository</li>
                <li>Configure build settings in netlify.toml</li>
                <li>Enable automatic deployments</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Your First Deploy</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Create a simple project (HTML/React/Next.js)</li>
                <li>Push to GitHub repository</li>
                <li>Watch Netlify auto-deploy your site</li>
                <li>Get your live URL and share!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Free Tier (Starter)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex justify-between">
                  <span>VS Code</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>GitHub</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>Netlify</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between border-t pt-2 mt-2">
                  <span className="font-bold">Total/month</span>
                  <span className="font-bold text-green-600">$0</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Basic AI (Recommended)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex justify-between">
                  <span>VS Code</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>GitHub</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>Netlify</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>ChatGPT Plus</span>
                  <span className="font-semibold">$20</span>
                </li>
                <li className="flex justify-between border-t pt-2 mt-2">
                  <span className="font-bold">Total/month</span>
                  <span className="font-bold text-blue-600">$20</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pro Setup</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex justify-between">
                  <span>VS Code</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>GitHub</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>Netlify</span>
                  <span className="font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span>GitHub Copilot</span>
                  <span className="font-semibold">$10</span>
                </li>
                <li className="flex justify-between">
                  <span>ChatGPT Plus</span>
                  <span className="font-semibold">$20</span>
                </li>
                <li className="flex justify-between">
                  <span>Claude Pro</span>
                  <span className="font-semibold">$20</span>
                </li>
                <li className="flex justify-between border-t pt-2 mt-2">
                  <span className="font-bold">Total/month</span>
                  <span className="font-bold text-purple-600">$50</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-6 text-center">
            * API usage costs are additional and vary based on usage
          </p>
        </div>
      </div>
    </div>
  )
}
