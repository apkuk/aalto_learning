import Card from '../../components/Card'

export default function ExpertiseTab() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden" color="border-purple-400">
        <div className="space-y-6">
          {/* Title and Description */}
          <div className="flex items-start">
            <span className="text-5xl mr-4">🎓</span>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Domain Expertise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rapidly learning new domains and accessing specialized knowledge on demand
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-2 font-bold">→</span>
                <span>Learning new programming languages quickly</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-2 font-bold">→</span>
                <span>Understanding complex legal or technical documents</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-2 font-bold">→</span>
                <span>Industry-specific terminology and concepts</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-2 font-bold">→</span>
                <span>Best practices in unfamiliar domains</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-purple-600 mr-2 font-bold">→</span>
                <span>Expert-level consultation on specialized topics</span>
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
                Weeks or months to become proficient in a new area, or consulting fees for expert advice
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✅</span>
                <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Get expert-level guidance immediately, accelerate learning curve dramatically
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-bold text-gray-900">Impact:</span>
              </div>
              <span className="text-purple-700 font-bold text-lg">
                80% faster skill acquisition
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Learning Strategy */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          How AI Accelerates Learning
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            Instead of spending weeks reading textbooks or taking courses, I use AI as an on-demand expert tutor that adapts to my learning style and pace.
          </p>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">My Learning Workflow:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">1.</span>
                <span><strong>Start with fundamentals:</strong> Ask AI to explain core concepts in simple terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">2.</span>
                <span><strong>Learn by doing:</strong> Build projects immediately with AI guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">3.</span>
                <span><strong>Get instant feedback:</strong> AI reviews my work and suggests improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">4.</span>
                <span><strong>Deep dive when needed:</strong> Ask follow-up questions on complex topics</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">5.</span>
                <span><strong>Build expertise:</strong> Create reference documents for future use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
