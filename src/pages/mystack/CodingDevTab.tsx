import Card from '../../components/Card'

interface AITool {
  name: string
  url: string
  description: string
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function CodingDevTab() {
  const tools: AITool[] = [
    {
      name: 'VS Code',
      url: 'https://code.visualstudio.com/',
      description: 'Microsoft\'s code editor with extensive AI extensions and integrations',
      icon: '📝',
      color: 'blue'
    },
    {
      name: 'GitHub Copilot',
      url: 'https://github.com/features/copilot',
      description: 'AI pair programmer integrated directly into your IDE',
      icon: '👨‍💻',
      color: 'indigo'
    },
    {
      name: 'Claude Code',
      url: 'https://claude.com/claude-code',
      description: 'CLI tool for AI-assisted coding and full project development',
      icon: '⚡',
      color: 'purple'
    },
    {
      name: 'Codex',
      url: 'https://openai.com/codex/',
      description: 'Pair with Codex in your terminal or IDE - Starting from a prompt or spec, Codex navigates your repo to edit files, run commands, and execute tests. Ship new features, fix bugs, brainstorm solutions, or tackle whatever\'s next with the Codex CLI and IDE extension—available in VSCode, Cursor, and Windsurf. Delegate to Codex in the cloud - Codex runs in the background so you can stay in flow and get more done. Code on your phone - Kick off tasks from the ChatGPT mobile app, wherever inspiration strikes.',
      icon: '🤖',
      color: 'green'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      description: 'Version control and code hosting with CI/CD capabilities',
      icon: '🐙',
      color: 'gray'
    },
    {
      name: 'Netlify',
      url: 'https://www.netlify.com/',
      description: 'Web hosting and deployment platform with automatic builds from Git',
      icon: '🌐',
      color: 'teal'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
        <p className="text-gray-700">
          <strong>Coding & Development:</strong> These tools work together to take me from idea to deployed application in minutes. AI handles the coding, Git manages versions, and Netlify makes it live.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-1 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.name}
            className="hover:scale-[1.02] transition-transform"
            color={`border-${tool.color}-400`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{tool.icon}</span>
                  <div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-primary hover:underline"
                    >
                      {tool.name} →
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Full Workflow */}
      <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Complete Workflow: Building This Website
        </h3>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">1.</span>
            <p><strong>Claude:</strong> Created the project requirements document (PRD) and planned the site structure</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">2.</span>
            <p><strong>Claude Code:</strong> Built the entire React application with TypeScript and Tailwind CSS</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">3.</span>
            <p><strong>VS Code + Copilot:</strong> Made refinements and added custom features</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">4.</span>
            <p><strong>GitHub:</strong> Version control and code hosting</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">5.</span>
            <p><strong>Netlify:</strong> Automatic deployment - live site in minutes!</p>
          </div>
        </div>
        <div className="mt-4 bg-blue-100 rounded p-4">
          <p className="text-sm text-gray-800 font-semibold">
            Total Time: ~15 minutes from concept to live deployment
          </p>
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          The Impact: Coding Without Traditional Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-red-700 mb-2">Before AI Coding Tools:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Hire developer: $3,000-$20,000 per project</li>
              <li>• Timeline: 2-3 weeks minimum</li>
              <li>• Revisions: Days of back-and-forth</li>
              <li>• Learning curve: Months to code yourself</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-700 mb-2">With AI Coding Stack:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Cost: Minimal (mostly free tools)</li>
              <li>• Timeline: Hours, not weeks</li>
              <li>• Revisions: Instant iterations</li>
              <li>• Learning: Build while learning</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded p-4">
          <p className="text-sm font-bold text-gray-900">
            Result: Build production-ready applications without years of coding experience
          </p>
        </div>
      </div>
    </div>
  )
}
