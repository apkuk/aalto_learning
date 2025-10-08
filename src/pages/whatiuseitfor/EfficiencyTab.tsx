import Card from '../../components/Card'

export default function EfficiencyTab() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden" color="border-orange-400">
        <div className="space-y-6">
          {/* Title and Description */}
          <div className="flex items-start">
            <span className="text-5xl mr-4">⚡</span>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Efficiency & Automation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Automating repetitive tasks and optimizing workflows to focus on high-value activities
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start text-gray-700">
                <span className="text-orange-600 mr-2 font-bold">→</span>
                <span>Email and communication automation</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-600 mr-2 font-bold">→</span>
                <span>Data entry and processing workflows</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-600 mr-2 font-bold">→</span>
                <span>Report generation and distribution</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-600 mr-2 font-bold">→</span>
                <span>Social media scheduling and posting</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-orange-600 mr-2 font-bold">→</span>
                <span>CRM updates and data synchronization</span>
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
                Spent 10-15 hours per week on repetitive administrative tasks
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✅</span>
                <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Automated workflows handle routine tasks, freeing up time for strategic work
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-bold text-gray-900">Impact:</span>
              </div>
              <span className="text-orange-700 font-bold text-lg">
                75% reduction in admin time
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Workflow Example */}
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
            <p><strong>Automation Tools:</strong> Build the automation workflow (Make.com, n8n, Zapier, or Motion)</p>
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
  )
}
