import Card from '../../components/Card'

export default function CodingTab() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden" color="border-indigo-400">
        <div className="space-y-6">
          {/* Title and Description */}
          <div className="flex items-start">
            <span className="text-5xl mr-4">💻</span>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Coding & Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Building websites, tools, and automation - despite having no traditional coding background
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start text-gray-700">
                <span className="text-indigo-600 mr-2 font-bold">→</span>
                <span>Full websites (like this one!) in minutes</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-indigo-600 mr-2 font-bold">→</span>
                <span>Custom tools and scripts for specific tasks</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-indigo-600 mr-2 font-bold">→</span>
                <span>Data processing and analysis automation</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-indigo-600 mr-2 font-bold">→</span>
                <span>API integrations and webhooks</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-indigo-600 mr-2 font-bold">→</span>
                <span>Bug fixing and code optimization</span>
              </li>
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
                Would need to hire developers ($5,000-$20,000 per project) or spend months learning to code
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✅</span>
                <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Build and deploy functional applications in hours, iterate based on feedback immediately
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-bold text-gray-900">Impact:</span>
              </div>
              <span className="text-indigo-700 font-bold text-lg">
                Enabled capabilities I never had before
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Real Project Spotlight */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Project: This Workshop Website</h3>

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
    </div>
  )
}
