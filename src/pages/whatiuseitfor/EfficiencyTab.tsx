import Card from '../../components/Card'
import CollapsibleSection from '../../components/CollapsibleSection'

export default function EfficiencyTab() {
  return (
    <div className="space-y-6">
      {/* Section 1: What I Use It For */}
      <CollapsibleSection title="What I Use It For" icon="⚡" defaultOpen={true}>
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
        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500 mt-6">
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
      </CollapsibleSection>

      {/* Section 2: How I Use It */}
      <CollapsibleSection title="How I Use It" icon="⚙️" defaultOpen={false}>
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Workflow Automation & Efficiency</h2>
          <p className="text-gray-700 leading-relaxed">
            Discover how to supercharge your productivity with AI-powered workflow automation, agent orchestration,
            and intelligent task management systems.
          </p>
        </div>

        {/* Key Topics */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What We'll Cover</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Automation Tools</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Make.com (formerly Integromat)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Zapier with AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>n8n (open-source automation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>LangChain for agent building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>CrewAI for multi-agent systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Key Concepts</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Workflow orchestration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>AI agent coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Task delegation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>API integration patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Process optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hands-On Practice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Hands-On Practice Session</h3>
          <p className="text-gray-700 mb-4">
            During this deep dive, you'll build and deploy real automation workflows:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Create an email automation workflow with AI classification</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Build a multi-agent system for content creation</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Automate data processing and reporting tasks</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Set up intelligent notification and alert systems</span>
            </li>
          </ul>
        </div>

        {/* Agent Orchestration */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Agent Orchestration</h3>
          <p className="text-gray-700 mb-4">
            Learn how to coordinate multiple AI agents to work together on complex tasks:
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-900 mb-2">Research Agent</h4>
              <p className="text-gray-700 text-sm">
                Gathers information from multiple sources and synthesizes findings
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-900 mb-2">Writer Agent</h4>
              <p className="text-gray-700 text-sm">
                Takes research and creates well-structured content in your brand voice
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-gray-900 mb-2">Editor Agent</h4>
              <p className="text-gray-700 text-sm">
                Reviews, fact-checks, and polishes content for quality and accuracy
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 mb-2">Publisher Agent</h4>
              <p className="text-gray-700 text-sm">
                Formats and distributes content across multiple platforms
              </p>
            </div>
          </div>
        </div>

        {/* Productivity Gains */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Productivity Multipliers</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10x</div>
              <p className="text-sm text-gray-700">Faster content creation with AI agents</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <p className="text-sm text-gray-700">Reduction in repetitive manual tasks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-sm text-gray-700">Automated workflows running continuously</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Automation Examples</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-2xl mr-3">📧</span>
              <div>
                <h4 className="font-bold text-gray-900">Email Management</h4>
                <p className="text-sm text-gray-700">
                  Automatically categorize, prioritize, and draft responses to incoming emails
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📊</span>
              <div>
                <h4 className="font-bold text-gray-900">Report Generation</h4>
                <p className="text-sm text-gray-700">
                  Collect data, analyze trends, and generate comprehensive reports automatically
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🎯</span>
              <div>
                <h4 className="font-bold text-gray-900">Content Pipeline</h4>
                <p className="text-sm text-gray-700">
                  Research topics, write content, optimize for SEO, and schedule publication
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">💬</span>
              <div>
                <h4 className="font-bold text-gray-900">Customer Support</h4>
                <p className="text-sm text-gray-700">
                  Handle common queries, escalate complex issues, and maintain conversation history
                </p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 3: Key Takeaways */}
      <CollapsibleSection title="Key Takeaways" icon="💡" defaultOpen={false}>
        <div className="space-y-6">
          {/* What AI Enables */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What AI Enables:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Speed:</span>
                  <span className="text-gray-700"> Complete projects in hours instead of weeks</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Cost:</span>
                  <span className="text-gray-700"> Reduce expenses by 80-95% for many tasks</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Capability:</span>
                  <span className="text-gray-700"> Do things you couldn't before</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Iteration:</span>
                  <span className="text-gray-700"> Try multiple approaches effortlessly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Principles */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Principles:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Start small:</span>
                  <span className="text-gray-700"> Begin with simple tasks to build confidence</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Iterate:</span>
                  <span className="text-gray-700"> AI gets better with feedback and refinement</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Verify:</span>
                  <span className="text-gray-700"> Always review AI output for accuracy</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Learn:</span>
                  <span className="text-gray-700"> Each use case teaches you more about AI's strengths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
