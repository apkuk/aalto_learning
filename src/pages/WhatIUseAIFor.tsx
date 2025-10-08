import Card from '../components/Card'

interface UseCase {
  title: string
  icon: string
  description: string
  examples: string[]
  before: string
  after: string
  timesSaved: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function WhatIUseAIFor() {
  const useCases: UseCase[] = [
    {
      title: 'Deep Research',
      icon: '🔬',
      description: 'Conducting comprehensive research on complex topics, from market analysis to strategic planning',
      examples: [
        'Market trend analysis for new business opportunities',
        'Competitive landscape research with source citations',
        'Technical feasibility studies for new projects',
        'Industry best practices and benchmarking',
        'Due diligence for strategic decisions'
      ],
      before: 'Spent 2-3 days manually searching multiple sources, reading reports, and synthesizing information',
      after: 'Get comprehensive, cited research in 30-60 minutes with AI-powered analysis',
      timesSaved: '90% time reduction',
      color: 'blue'
    },
    {
      title: 'Image Generation',
      icon: '🎨',
      description: 'Creating professional visuals for presentations, marketing materials, and branding without design skills',
      examples: [
        'Presentation graphics and diagrams',
        'Marketing materials and social media content',
        'Brand identity exploration and mood boards',
        'Product visualization and concept mockups',
        'Custom illustrations for documentation'
      ],
      before: 'Either spent hours in design tools or paid designers $500+ per project with multi-day turnaround',
      after: 'Generate multiple design options in minutes, iterate rapidly until perfect',
      timesSaved: '95% cost reduction + instant iteration',
      color: 'pink'
    },
    {
      title: 'Coding & Development',
      icon: '💻',
      description: 'Building websites, tools, and automation - despite having no traditional coding background',
      examples: [
        'Full websites (like this one!) in minutes',
        'Custom tools and scripts for specific tasks',
        'Data processing and analysis automation',
        'API integrations and webhooks',
        'Bug fixing and code optimization'
      ],
      before: 'Would need to hire developers ($5,000-$20,000 per project) or spend months learning to code',
      after: 'Build and deploy functional applications in hours, iterate based on feedback immediately',
      timesSaved: 'Enabled capabilities I never had before',
      color: 'indigo'
    },
    {
      title: 'Efficiency & Automation',
      icon: '⚡',
      description: 'Automating repetitive tasks and optimizing workflows to focus on high-value activities',
      examples: [
        'Email and communication automation',
        'Data entry and processing workflows',
        'Report generation and distribution',
        'Social media scheduling and posting',
        'CRM updates and data synchronization'
      ],
      before: 'Spent 10-15 hours per week on repetitive administrative tasks',
      after: 'Automated workflows handle routine tasks, freeing up time for strategic work',
      timesSaved: '75% reduction in admin time',
      color: 'orange'
    },
    {
      title: 'Domain Expertise',
      icon: '🎓',
      description: 'Rapidly learning new domains and accessing specialized knowledge on demand',
      examples: [
        'Learning new programming languages quickly',
        'Understanding complex legal or technical documents',
        'Industry-specific terminology and concepts',
        'Best practices in unfamiliar domains',
        'Expert-level consultation on specialized topics'
      ],
      before: 'Weeks or months to become proficient in a new area, or consulting fees for expert advice',
      after: 'Get expert-level guidance immediately, accelerate learning curve dramatically',
      timesSaved: '80% faster skill acquisition',
      color: 'purple'
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              What I Use AI For
            </h1>
            <div className="bg-yellow-100 border-2 border-yellow-400 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-yellow-800">10 minutes</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Real-world use cases from my daily work - with measurable results
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
            <p className="text-gray-800">
              These aren't theoretical examples - they're actual projects and workflows I use every single day.
              You'll see the transformation from "before AI" to "with AI" for each category.
            </p>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">20+ hours</div>
            <p className="text-gray-700">Saved per week through AI automation</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">$50K+</div>
            <p className="text-gray-700">In avoided costs for developers and designers</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">10x</div>
            <p className="text-gray-700">Faster project completion and iteration</p>
          </div>
        </div>

        {/* Use Cases */}
        {useCases.map((useCase, index) => (
          <div key={index} className="mb-8">
            <Card className="overflow-hidden" color={`border-${useCase.color}-400`}>
              <div className="space-y-6">
                {/* Title and Description */}
                <div className="flex items-start">
                  <span className="text-5xl mr-4">{useCase.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {useCase.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Examples */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className={`text-${useCase.color}-600 mr-2 font-bold`}>→</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">❌</span>
                      <h3 className="font-bold text-gray-900 text-lg">Before AI</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {useCase.before}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">✅</span>
                      <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {useCase.after}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className={`bg-${useCase.color}-50 rounded-lg p-4 border-l-4 border-${useCase.color}-500`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      <span className="font-bold text-gray-900">Impact:</span>
                    </div>
                    <span className={`text-${useCase.color}-700 font-bold text-lg`}>
                      {useCase.timesSaved}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        {/* Real Project Spotlight */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Project Spotlight</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">This Workshop Website</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Project Scope:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>10+ pages with complex layouts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Fully responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>TypeScript + React + Tailwind CSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Navigation, tabs, timers, and interactive components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Deployed live with automatic updates</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Traditional Approach:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">❌</span>
                      <span>Hire developer: $3,000-$8,000</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">❌</span>
                      <span>Timeline: 2-3 weeks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">❌</span>
                      <span>Revisions: Days of back-and-forth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">❌</span>
                      <span>Learning curve: Months to build yourself</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">AI-Powered Approach:</h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">15</div>
                    <div className="text-sm text-gray-700">minutes total</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">$0</div>
                    <div className="text-sm text-gray-700">development cost</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">Live</div>
                    <div className="text-sm text-gray-700">instantly deployed</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">Seconds</div>
                    <div className="text-sm text-gray-700">to make changes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Campaign Visuals</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Traditional:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Designer fee: $500-$2,000</li>
                    <li>Time: 3-5 days</li>
                    <li>Revisions: Additional time/cost</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-400">
                  <h4 className="font-bold text-gray-900 mb-2">With AI:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Cost: ~$20/month subscription</li>
                    <li>Time: 30 minutes</li>
                    <li>Unlimited iterations</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Result:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✅ 95% cost savings</li>
                    <li>✅ 10x faster</li>
                    <li>✅ Complete creative control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What AI Enables:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Speed:</strong> Complete projects in hours instead of weeks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Cost:</strong> Reduce expenses by 80-95% for many tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Capability:</strong> Do things you couldn't before</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Iteration:</strong> Try multiple approaches effortlessly</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Principles:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Start small:</strong> Begin with simple tasks to build confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Iterate:</strong> AI gets better with feedback and refinement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Verify:</strong> Always review AI output for accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Learn:</strong> Each use case teaches you more about AI's strengths</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
