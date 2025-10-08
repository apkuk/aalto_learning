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
      description: 'Microsoft\'s versatile and open-source code editor, which has become the de-facto IDE for many developers. VS Code provides a rich development experience with built-in support for debugging, embedded Git control, syntax highlighting, intelligent code completion with IntelliSense, and a vast ecosystem of extensions. It offers extensive AI capabilities through a rich marketplace of extensions, including the official AI Toolkit for Visual Studio Code, which allows developers to build, test, and deploy intelligent applications using generative AI models from providers like OpenAI, Anthropic, and Google. These extensions provide features like AI-powered code completion, real-time code analysis, automated test generation, and natural language chat for coding assistance.',
      icon: '📝',
      color: 'blue'
    },
    {
      name: 'GitHub Copilot',
      url: 'https://github.com/features/copilot',
      description: 'An AI-powered pair programmer from GitHub and OpenAI that provides intelligent code assistance directly within your integrated development environment (IDE). Copilot offers features like autocompleting code snippets and entire functions, converting comments into runnable code, and suggesting the next logical code changes. It includes GitHub Copilot Chat, a conversational AI assistant that can explain code, generate tests, and help with debugging. More recently, GitHub Copilot has introduced an autonomous AI agent that can be assigned a GitHub issue to independently work on code changes and create a pull request for review. A command-line interface (CLI) is also available, allowing you to use Copilot from within the terminal for questions and local file modifications.',
      icon: '👨‍💻',
      color: 'indigo'
    },
    {
      name: 'Claude Code',
      url: 'https://claude.com/claude-code',
      description: 'An agentic coding tool from Anthropic that operates within your terminal to help turn ideas into code more efficiently. Claude Code can directly edit files, run commands, and create commits based on natural language instructions. It is designed with a Unix philosophy, making it composable and scriptable, allowing it to be piped with other command-line tools. The tool maintains an awareness of your entire project structure and can be customized to understand your project\'s specific context, including common commands, core files, and coding styles. Claude Code can also interact with external tools and APIs, enabling it to automate a wide range of development tasks.',
      icon: '⚡',
      color: 'purple'
    },
    {
      name: 'Codex',
      url: 'https://openai.com/codex/',
      description: 'OpenAI\'s series of AI coding tools designed to accelerate development by delegating tasks to powerful cloud and local coding agents. You can pair with Codex directly in your terminal or IDE, where it can navigate your repository to edit files, run commands, and execute tests based on your prompts or specifications. This allows you to ship new features, fix bugs, and brainstorm solutions with the help of the Codex CLI and IDE extensions. For more intensive tasks, you can delegate to Codex in the cloud, where it runs in an isolated sandbox environment with your repository, allowing you to stay in your workflow. Codex is accessible through ChatGPT for users with Plus, Pro, Business, Edu, or Enterprise plans.',
      icon: '🤖',
      color: 'green'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      description: 'A web-based platform for version control and collaboration, built around the Git distributed version control system. It allows developers to store, manage, and track changes to their code in repositories. Key features include branching to work on different versions of a project simultaneously, pull requests to propose and review changes, and issue tracking to manage tasks and bugs. GitHub also provides robust CI/CD (Continuous Integration and Continuous Deployment) capabilities through GitHub Actions, enabling automated builds, tests, and deployments directly from your repository.',
      icon: '🐙',
      color: 'gray'
    },
    {
      name: 'Netlify',
      url: 'https://www.netlify.com/',
      description: 'A cloud-based platform for hosting and deploying modern web projects. Netlify simplifies the deployment process by automatically building and deploying your site whenever you push changes to your Git repository. It offers a global Content Delivery Network (CDN) to ensure fast loading times for users worldwide. The platform also provides powerful features like serverless functions for backend tasks, built-in CI/CD, and automatic SSL certificates for secure connections. Netlify is designed to streamline the workflow for developers, allowing them to focus on creating web applications without managing server infrastructure.',
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
            <p>
              <strong>
                <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  ChatGPT
                </a>:
              </strong> Created the project requirements document (PRD) and planned the site structure (just by recording a rambling chat about what I wanted)
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">2.</span>
            <p>
              <strong>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  VS Code
                </a> + <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Claude Code
                </a>:
              </strong> Built the entire React application with TypeScript and Tailwind CSS, made refinements and added custom features
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">3.</span>
            <p>
              <strong>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  GitHub
                </a>:
              </strong> Version control and code hosting
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">4.</span>
            <p>
              <strong>
                <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Netlify
                </a>:
              </strong> Automatic deployment - live site in minutes!
            </p>
          </div>
        </div>
        <div className="mt-4 bg-blue-100 rounded p-4">
          <p className="text-sm text-gray-800 font-semibold">
            Total Time: ~60 minutes from concept to live deployment
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
