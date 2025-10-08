import Card from '../../components/Card'

export default function MediaTab() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden" color="border-pink-400">
        <div className="space-y-6">
          {/* Title and Description */}
          <div className="flex items-start">
            <span className="text-5xl mr-4">🎨</span>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Media Generation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creating professional visuals and videos for presentations, marketing materials, and branding without design skills
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start text-gray-700">
                <span className="text-pink-600 mr-2 font-bold">→</span>
                <span>Presentation graphics and diagrams</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-pink-600 mr-2 font-bold">→</span>
                <span>Marketing materials and social media content</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-pink-600 mr-2 font-bold">→</span>
                <span>Brand identity exploration and mood boards</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-pink-600 mr-2 font-bold">→</span>
                <span>Product visualization and concept mockups</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-pink-600 mr-2 font-bold">→</span>
                <span>Custom illustrations for documentation</span>
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
                Either spent hours in design tools or paid designers $500+ per project with multi-day turnaround
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✅</span>
                <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Generate multiple design options in minutes, iterate rapidly until perfect
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-bold text-gray-900">Impact:</span>
              </div>
              <span className="text-pink-700 font-bold text-lg">
                95% cost reduction + instant iteration
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Real Project Example */}
      <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6 border-l-4 border-pink-500">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Project: Marketing Campaign Visuals</h3>

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
  )
}
