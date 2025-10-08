import Card from '../../components/Card'
import CollapsibleSection from '../../components/CollapsibleSection'

export default function CodingTab() {
  return (
    <div className="space-y-6">
      {/* Section 1: What I Use It For */}
      <CollapsibleSection title="What I Use It For" icon="💻" defaultOpen={true}>
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500 mt-6">
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
      </CollapsibleSection>

      {/* Section 2: How I Use It */}
      <CollapsibleSection title="How I Use It" icon="⚙️" defaultOpen={false}>
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI-Assisted Coding</h2>
          <p className="text-gray-700 leading-relaxed">
            Learn how AI coding assistants are revolutionizing software development - from chat-based code generation
            to intelligent code review, debugging, and workflow automation.
          </p>
        </div>

        {/* Key Topics */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
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
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
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
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
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

      {/* Section 4: Practice! Over to you... */}
      <CollapsibleSection title="Practice! Over to you..." icon="🎯" defaultOpen={false}>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Try It Yourself!</h3>
          <ul className="space-y-3">
            <li className="flex items-start text-gray-700">
              <span className="text-yellow-600 mr-3 text-xl font-bold">•</span>
              <span>Open Claude</span>
            </li>
            <li className="flex items-start text-gray-700">
              <span className="text-yellow-600 mr-3 text-xl font-bold">•</span>
              <span>Think of a cool interactive web page that you'd like to see</span>
            </li>
            <li className="flex items-start text-gray-700">
              <span className="text-yellow-600 mr-3 text-xl font-bold">•</span>
              <span>Create a detailed prompt and provide it to Claude, make sure you ask it to create an artefact as an HTML file</span>
            </li>
            <li className="flex items-start text-gray-700">
              <span className="text-yellow-600 mr-3 text-xl font-bold">•</span>
              <span>Let it code, then preview it</span>
            </li>
            <li className="flex items-start text-gray-700">
              <span className="text-yellow-600 mr-3 text-xl font-bold">•</span>
              <span>Give it a second prompt, asking it to edit the artefact and make any changes that you think would make it better</span>
            </li>
          </ul>
          <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Want to learn how to create real digital MVPs using an IDE like VS Code or Cursor, with Claude Code or Codex, Github and a hosting site like Netlify? Check out the{' '}
              <a
                href="/resources"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = ''
                  window.location.href = '/resources'
                  setTimeout(() => {
                    const buildAppTab = document.querySelector('[data-tab-id="build-app"]')
                    if (buildAppTab) buildAppTab.click()
                  }, 100)
                }}
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Build an App! guide
              </a>
              {' '}on the Resources page.
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
