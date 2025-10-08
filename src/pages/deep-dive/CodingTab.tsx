export default function CodingTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AI-Assisted Coding</h2>
        <p className="text-gray-700 leading-relaxed">
          Learn how AI coding assistants are revolutionizing software development - from chat-based code generation
          to intelligent code review, debugging, and workflow automation.
        </p>
      </div>

      {/* Key Topics */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What We'll Cover</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Core Tools</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>GitHub Copilot</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Claude Code (Anthropic)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>ChatGPT for coding</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Cursor IDE</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Replit Agent</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Capabilities</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Chat-based code generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Code review and vetting</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Automated testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Debugging assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Documentation generation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hands-On Practice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Hands-On Practice Session</h3>
        <p className="text-gray-700 mb-4">
          During this deep dive, you'll practice using AI coding assistants to:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Build a complete web application from scratch using chat-based coding</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Review and improve existing code with AI suggestions</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Debug complex issues with AI assistance</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Automate repetitive coding tasks and workflows</span>
          </li>
        </ul>
      </div>

      {/* Workflow */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Development Workflow</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Requirements & Planning</h4>
              <p className="text-gray-700 text-sm">
                Use ChatGPT to create detailed PRDs (Project Requirements Documents) and plan architecture
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Code Generation</h4>
              <p className="text-gray-700 text-sm">
                Use Claude Code or GitHub Copilot to generate initial code structure and components
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Review & Refine</h4>
              <p className="text-gray-700 text-sm">
                Use AI to review code quality, suggest improvements, and identify potential issues
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Testing & Debugging</h4>
              <p className="text-gray-700 text-sm">
                Generate test cases and debug issues with AI assistance
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              5
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Deployment & Monitoring</h4>
              <p className="text-gray-700 text-sm">
                Automate deployment workflows and set up monitoring with AI-generated scripts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Best Practices for AI-Assisted Coding</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Always review and understand generated code</li>
              <li>• Test AI-generated code thoroughly</li>
              <li>• Use AI for boilerplate and repetitive tasks</li>
              <li>• Learn from AI suggestions</li>
              <li>• Iterate and refine prompts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <span className="text-red-500 mr-2">✗</span>
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Blindly copy-pasting without understanding</li>
              <li>• Using AI for security-critical code without review</li>
              <li>• Replacing all human judgment</li>
              <li>• Ignoring code quality standards</li>
              <li>• Over-relying on AI without learning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
        <p className="text-gray-700 text-center">
          <strong>Full content coming soon!</strong> This tab will be populated with detailed tutorials,
          tool comparisons, and real-world coding examples.
        </p>
      </div>
    </div>
  )
}
