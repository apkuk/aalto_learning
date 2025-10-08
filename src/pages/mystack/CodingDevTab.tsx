import Card from '../../components/Card'
import Badge from '../../components/Badge'

interface AITool {
  name: string
  description: string
  icon: string
  useCases: string[]
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function CodingDevTab() {
  const tools: AITool[] = [
    {
      name: 'VS Code',
      description: 'Microsoft\'s code editor with extensive AI extensions and integrations',
      icon: '📝',
      useCases: ['Code editing', 'Extension ecosystem', 'Git integration'],
      color: 'blue'
    },
    {
      name: 'GitHub Copilot',
      description: 'AI pair programmer integrated directly into your IDE',
      icon: '👨‍💻',
      useCases: ['Code completion', 'Function generation', 'Bug fixing'],
      color: 'indigo'
    },
    {
      name: 'Claude Code',
      description: 'CLI tool for AI-assisted coding and full project development',
      icon: '⚡',
      useCases: ['Full project building', 'Refactoring', 'Documentation'],
      color: 'purple'
    },
    {
      name: 'GitHub',
      description: 'Version control and code hosting with CI/CD capabilities',
      icon: '🐙',
      useCases: ['Version control', 'Collaboration', 'Project hosting'],
      color: 'gray'
    },
    {
      name: 'Netlify',
      description: 'Web hosting and deployment platform with automatic builds from Git',
      icon: '🌐',
      useCases: ['Website hosting', 'Automatic deployment', 'Preview environments'],
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
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.name}
            className="hover:scale-105 transition-transform"
            color={`border-${tool.color}-400`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{tool.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                    <Badge color={tool.color} size="small">
                      Coding & Development
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div>
                <p className="font-semibold text-gray-900 text-sm mb-2">I use it for:</p>
                <ul className="space-y-1">
                  {tool.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
