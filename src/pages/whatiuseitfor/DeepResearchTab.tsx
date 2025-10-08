import Card from '../../components/Card'

export default function DeepResearchTab() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden" color="border-blue-400">
        <div className="space-y-6">
          {/* Title and Description */}
          <div className="flex items-start">
            <span className="text-5xl mr-4">🔬</span>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Deep Research
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Conducting comprehensive research on complex topics, from market analysis to strategic planning
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2 font-bold">→</span>
                <span>Market trend analysis for new business opportunities</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2 font-bold">→</span>
                <span>Competitive landscape research with source citations</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2 font-bold">→</span>
                <span>Technical feasibility studies for new projects</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2 font-bold">→</span>
                <span>Industry best practices and benchmarking</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2 font-bold">→</span>
                <span>Due diligence for strategic decisions</span>
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
                Spent 2-3 days manually searching multiple sources, reading reports, and synthesizing information
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✅</span>
                <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Get comprehensive, cited research in 30-60 minutes with AI-powered analysis
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-bold text-gray-900">Impact:</span>
              </div>
              <span className="text-blue-700 font-bold text-lg">
                90% time reduction
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
