import { useState } from 'react'

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

type TabType = 'IDE' | 'AI Assistance' | 'Storage' | 'Deployment' | 'Cost Breakdown'

export default function CodingTools() {
  const [activeTab, setActiveTab] = useState<TabType>('IDE')

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
      name: 'Cursor',
      category: 'IDE',
      description: 'AI-first code editor built on VS Code, with native AI assistance and chat.',
      tier: 'Free / Pro',
      cost: '$0-20/month',
      features: [
        'AI code suggestions',
        'Chat with your codebase',
        'VS Code compatible',
        'Multi-file editing',
        'Context-aware AI'
      ],
      link: 'https://cursor.sh/',
      color: 'bg-indigo-600'
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
      description: 'GPT-5 access for coding, with web browsing and advanced reasoning.',
      tier: 'Plus / Pro',
      cost: '$20-200/month',
      features: [
        'GPT-5 access',
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
      name: 'Vercel',
      category: 'Deployment',
      description: 'Frontend deployment platform optimized for Next.js and modern frameworks.',
      tier: 'Free / Pro',
      cost: '$0-20/month',
      features: [
        'Edge network deployment',
        'Instant rollbacks',
        'Preview deployments',
        'Analytics',
        'Serverless functions'
      ],
      link: 'https://vercel.com',
      color: 'bg-black'
    },
    {
      name: 'OpenAI API',
      category: 'API Platform',
      description: 'Direct API access to GPT-5, GPT-4, DALL-E, and other OpenAI models.',
      tier: 'Pay-as-you-go',
      cost: 'Usage-based',
      features: [
        'GPT-5 API',
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

  const tabs: TabType[] = ['IDE', 'AI Assistance', 'Storage', 'Deployment', 'Cost Breakdown']

  const getToolsForTab = (tab: TabType): Tool[] => {
    switch (tab) {
      case 'IDE':
        return tools.filter(t => t.category === 'IDE')
      case 'AI Assistance':
        return tools.filter(t => t.category === 'AI Assistant')
      case 'Storage':
        return tools.filter(t => t.category === 'Version Control')
      case 'Deployment':
        return tools.filter(t => t.category === 'Deployment')
      default:
        return []
    }
  }

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
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm mb-6">
              <div className="bg-blue-100 border-2 border-blue-500 rounded-lg px-4 py-2 font-semibold">
                IDE
              </div>
              <span className="text-gray-500">+</span>
              <div className="bg-purple-100 border-2 border-purple-500 rounded-lg px-4 py-2 font-semibold">
                AI Assistance
              </div>
              <span className="text-gray-500">+</span>
              <div className="bg-gray-100 border-2 border-gray-500 rounded-lg px-4 py-2 font-semibold">
                Storage
              </div>
              <span className="text-gray-500">→</span>
              <div className="bg-teal-100 border-2 border-teal-500 rounded-lg px-4 py-2 font-semibold">
                Deployment
              </div>
              <span className="text-gray-500">→</span>
              <div className="bg-green-100 border-2 border-green-500 rounded-lg px-4 py-2 font-semibold">
                Production
              </div>
            </div>

            {/* Explanations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">IDE</h3>
                <p className="text-gray-700">
                  <strong>Integrated Development Environment</strong> - where you write your code (like VS Code, Cursor)
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">AI Assistance</h3>
                <p className="text-gray-700">
                  AI tools that help you code faster and better (Copilot, Claude, ChatGPT)
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">Storage</h3>
                <p className="text-gray-700">
                  Version control with GitHub - saves your code history and enables collaboration
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-700">
                  Platforms like Netlify or Vercel that host your apps and make them live on the web
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-6 text-center">
              Write code in your IDE with AI help → Save to GitHub → Auto-deploy with Netlify/Vercel → Live website
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold transition-colors relative ${
                    activeTab === tab
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'Cost Breakdown' ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Free Tier (Starter)</h3>
                    <p className="text-sm text-gray-600 mb-4">Perfect for learning and personal projects</p>
                    <ul className="space-y-2 text-gray-700 text-sm mb-6">
                      <li className="flex justify-between">
                        <span>IDE (VS Code)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Storage (GitHub)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Deployment (Netlify)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">Total/month</span>
                        <span className="font-bold text-green-600 text-xl">$0</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded p-3 text-xs text-gray-600">
                      You can build and deploy complete applications without spending anything!
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Basic AI (Recommended)</h3>
                    <p className="text-sm text-gray-600 mb-4">Great for serious learners and builders</p>
                    <ul className="space-y-2 text-gray-700 text-sm mb-6">
                      <li className="flex justify-between">
                        <span>IDE (VS Code)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Storage (GitHub)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Deployment (Netlify)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>ChatGPT Plus</span>
                        <span className="font-semibold">$20</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">Total/month</span>
                        <span className="font-bold text-blue-600 text-xl">$20</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded p-3 text-xs text-gray-600">
                      Adds powerful AI assistance for coding, debugging, and learning
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-2 border-purple-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Pro Setup</h3>
                    <p className="text-sm text-gray-600 mb-4">For professional developers</p>
                    <ul className="space-y-2 text-gray-700 text-sm mb-6">
                      <li className="flex justify-between">
                        <span>IDE (Cursor Pro)</span>
                        <span className="font-semibold">$20</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Storage (GitHub)</span>
                        <span className="font-semibold">$0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Deployment (Netlify)</span>
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
                      <li className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">Total/month</span>
                        <span className="font-bold text-purple-600 text-xl">$50</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded p-3 text-xs text-gray-600">
                      Maximum productivity with integrated AI across your entire workflow
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> API usage costs are additional and vary based on usage. Most beginners
                    won't need API access initially - the free tiers and subscriptions are sufficient for learning.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeTab}</h2>
                <p className="text-gray-600 mb-6">
                  {activeTab === 'IDE' && 'Where you write your code - your development workspace'}
                  {activeTab === 'AI Assistance' && 'AI tools that help you code faster and smarter'}
                  {activeTab === 'Storage' && 'Version control systems to save and manage your code'}
                  {activeTab === 'Deployment' && 'Platforms to host your apps and make them live'}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {getToolsForTab(activeTab).map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
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
            )}
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started Guide</h2>
          <p className="text-gray-600 mb-6">
            New to coding? Here's a simple path to get started building apps with AI assistance.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Set Up Your Development Environment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Download and install an IDE (VS Code is free and beginner-friendly)</li>
                <li>Create a GitHub account (free)</li>
                <li>Install Git on your computer</li>
                <li>Optional: Install Node.js for web development</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Add AI Assistance</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Subscribe to ChatGPT Plus ($20/month) or Claude Pro ($20/month)</li>
                <li>Optional: Try Cursor IDE for integrated AI coding</li>
                <li>Optional: GitHub Copilot ($10/month) for inline code suggestions</li>
                <li>Learn basic prompt engineering to get better AI help</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Set Up Deployment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Create a Netlify or Vercel account (both have free tiers)</li>
                <li>Connect your GitHub account</li>
                <li>Your apps will auto-deploy when you push code to GitHub</li>
                <li>Get a live URL to share your projects</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Build Your First Project</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Start with something simple (a personal website or portfolio)</li>
                <li>Use AI to help you learn and debug as you go</li>
                <li>Push your code to GitHub when you make progress</li>
                <li>Watch it automatically deploy and go live!</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Pro Tip: Learn by Building</h3>
            <p className="text-gray-700 text-sm">
              The best way to learn coding is by building real projects. Don't worry about perfection - use AI
              assistants to help you understand what you're doing, debug errors, and learn best practices. Start
              small, build consistently, and gradually take on more complex projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
