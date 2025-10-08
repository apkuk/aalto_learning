import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import Badge from '../components/Badge'

export default function NextSteps() {
  const [activeTab, setActiveTab] = useState('wrap')

  const tabs = [
    {
      id: 'wrap',
      label: 'Wrap & Q&A',
      content: <WrapAndQA />
    },
    {
      id: 'mvp-sprint',
      label: 'What are you going to do now?',
      content: <MVPSprint />
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next Steps
          </h1>
          <p className="text-xl text-gray-600">
            Let's wrap up and plan your AI journey forward
          </p>
        </div>

        {/* Tabbed Content */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}

function WrapAndQA() {
  return (
    <div className="space-y-8">
      {/* Duration Badge */}
      <div className="flex justify-end">
        <div className="bg-indigo-100 border-2 border-indigo-400 px-4 py-2 rounded-lg">
          <span className="text-sm font-semibold text-indigo-800">5 minutes</span>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways from Today</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Core Concepts
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">1.</span>
                <span><strong>AI is learned by doing</strong> - hands-on practice beats passive learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">2.</span>
                <span><strong>Mistakes are teachers</strong> - embrace errors as learning opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">3.</span>
                <span><strong>Start simple</strong> - begin with basic tasks and build confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">4.</span>
                <span><strong>Iterate rapidly</strong> - AI enables fast experimentation and refinement</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛠️</span>
              Practical Skills
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>Which AI tools to use for different tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>How to integrate tools into workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>Real-world use cases and applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>The 4Ps framework for managing AI agents</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* What You Can Do Now */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Do Now</h2>

        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Actions:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>Start experimenting with ChatGPT, Claude, or Gemini for daily tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>Identify one workflow in your work that could be automated or enhanced with AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>Set up your AI tool accounts and explore their features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>Practice prompt engineering - learn what works through trial and error</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Next Week:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">→</span>
                <span>Try one deep dive topic (research, image generation, or coding)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">→</span>
                <span>Build a simple project using AI assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">→</span>
                <span>Share your experiences with colleagues - teach what you've learned</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Q&A Format */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions & Discussion</h2>

        <div className="space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">This is YOUR time!</h3>
            <p className="text-gray-700 mb-4">
              Ask anything - there are no silly questions. Whether it's about a specific tool,
              a use case you're thinking about, or clarification on something we covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Common Questions to Consider:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Which AI tool should I start with for my specific needs?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>How do I handle data privacy and security concerns?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>What's the best way to learn prompt engineering?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>How much will these tools cost for my use case?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Can you show me an example of [specific task]?</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Tips for Great Questions:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Be specific about your context and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Share what you've already tried if applicable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Ask about real challenges you're facing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Don't hesitate to ask for clarification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Encouragement */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-md p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Keep Practicing!
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          The best way to get better with AI is to use it every day.
          Start small, experiment boldly, and don't be afraid to make mistakes.
        </p>
        <div className="bg-white rounded-lg p-6 inline-block">
          <p className="text-gray-800 font-semibold italic">
            "The only way to do great work is to love what you do." <br />
            And with AI, you'll love how much more you can accomplish!
          </p>
        </div>
      </div>
    </div>
  )
}

function MVPSprint() {
  const steps = [
    {
      number: 1,
      title: 'Brainstorm Your MVP Ideas',
      duration: 'Tonight or this week',
      description: 'Think about a simple project or tool that would be useful to you or your team',
      details: [
        'It should be achievable in a few hours',
        'Focus on ONE core feature or function',
        'Consider problems you face regularly at work',
        'Don\'t overthink it - simpler is better for your first MVP'
      ],
      examples: [
        'A landing page for a side project',
        'A simple calculator or converter tool',
        'A dashboard to visualize data',
        'An internal team resource site'
      ]
    },
    {
      number: 2,
      title: 'Create a Project Requirements Document (PRD)',
      duration: '20-30 minutes',
      description: 'Use ChatGPT or Claude to help you write a clear PRD that describes what you want to build',
      details: [
        'Describe the project\'s purpose and goals',
        'List the main features and functionality',
        'Specify your target audience or users',
        'Include any design preferences or requirements',
        'Mention technical constraints (if any)'
      ],
      prompt: `I want to create a [PROJECT TYPE]. Can you help me write a Project Requirements Document (PRD)?

The project should:
- [Main purpose]
- [Key feature 1]
- [Key feature 2]
- [Key feature 3]

Target users: [Who will use this]
Design: [Any style preferences - modern, minimal, colorful, etc.]

Please create a comprehensive PRD that a coding AI could use to build this project.`
    },
    {
      number: 3,
      title: 'Set Up Your Development Environment',
      duration: '30-60 minutes (one-time setup)',
      description: 'Get your tools ready for AI-assisted development',
      options: [
        {
          name: 'Option A: VS Code + GitHub Copilot',
          requirements: [
            'Install VS Code (free)',
            'Install GitHub Copilot extension ($10/month or free for students)',
            'Create GitHub account (free)'
          ]
        },
        {
          name: 'Option B: Claude Code (Recommended)',
          requirements: [
            'Install Claude Code CLI (free)',
            'Claude Pro account ($20/month)',
            'Create GitHub account (free)'
          ]
        }
      ],
      note: 'You also need either ChatGPT Plus ($20/month) or Claude Pro ($20/month) for the AI assistance'
    },
    {
      number: 4,
      title: 'Build Your MVP with AI Coding Agents',
      duration: '1-3 hours',
      description: 'Use your PRD and let AI do the heavy lifting',
      steps: [
        'Open your PRD in your AI tool (ChatGPT, Claude, or Claude Code)',
        'Ask the AI to create the project based on your PRD',
        'Review the code and ask for modifications as needed',
        'Test the application locally on your computer',
        'Iterate until it works as expected'
      ],
      tips: [
        'Be specific about what you want changed',
        'Test frequently as you build',
        'Don\'t be afraid to ask the AI to explain the code',
        'Save your conversation - you can refer back to it later'
      ]
    },
    {
      number: 5,
      title: 'Publish to GitHub',
      duration: '15 minutes',
      description: 'Version control and prepare for deployment',
      steps: [
        'Create a new repository on GitHub',
        'Follow the AI\'s guidance to push your code',
        'Add a README.md file describing your project',
        'Commit and push all changes'
      ],
      note: 'The AI can help you with all the Git commands - just ask!'
    },
    {
      number: 6,
      title: 'Deploy to Netlify',
      duration: '10 minutes',
      description: 'Make your project live on the internet',
      steps: [
        'Create a free Netlify account',
        'Connect your GitHub repository',
        'Configure build settings (AI can help with this)',
        'Deploy - Netlify will build and host your site automatically',
        'Get your live URL to share with others'
      ],
      bonus: 'Every time you push changes to GitHub, Netlify automatically rebuilds and updates your site!'
    },
    {
      number: 7,
      title: 'Test and Iterate',
      duration: 'Ongoing',
      description: 'Use your live site and continue improving it',
      actions: [
        'Visit your live site and test all features',
        'Share with friends or colleagues for feedback',
        'Make a list of improvements or new features',
        'Use AI to implement changes',
        'Push updates to GitHub and watch them go live'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Duration Badge */}
      <div className="flex justify-end">
        <div className="bg-orange-100 border-2 border-orange-400 px-4 py-2 rounded-lg">
          <span className="text-sm font-semibold text-orange-800">10 minutes + your MVP journey!</span>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your MVP Building Journey Starts Now!
          </h2>
          <p className="text-xl text-gray-700">
            Follow these steps to build and deploy your own AI-powered project
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 mt-6">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">What You'll Accomplish:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">💡</div>
              <p className="font-semibold text-gray-900">Brainstorm & Plan</p>
              <p className="text-sm text-gray-600">Define your MVP idea</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">🛠️</div>
              <p className="font-semibold text-gray-900">Build with AI</p>
              <p className="text-sm text-gray-600">Let AI create your project</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🌐</div>
              <p className="font-semibold text-gray-900">Deploy Live</p>
              <p className="text-sm text-gray-600">Share your creation with the world</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-3">Required Accounts:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Claude Pro</strong> ($20/month) OR <strong>ChatGPT Plus</strong> ($20/month)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>GitHub account</strong> (free)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Netlify account</strong> (free)</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-bold text-gray-900 mb-3">Recommended Tools:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span><strong>VS Code</strong> with <strong>GitHub Copilot</strong> extension</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>OR <strong>Claude Code CLI</strong> for command-line development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>Git installed on your computer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
          <p className="text-gray-800 text-sm">
            <strong>Note:</strong> While there are monthly costs for AI tools, they're far less than hiring developers
            ($3,000-$10,000+ per project) and you can cancel anytime. Consider it an investment in your capability!
          </p>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Step-by-Step MVP Building Guide</h2>

        {steps.map((step) => (
          <div key={step.number} className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start mb-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <Badge color="gray" size="small">
                    {step.duration}
                  </Badge>
                </div>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>
            </div>

            {step.details && (
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Key Points:</h4>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 font-bold">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.examples && (
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Example Ideas:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {step.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.prompt && (
              <div className="bg-purple-50 rounded-lg p-6 mb-4 border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-3">Example Prompt to Use:</h4>
                <div className="bg-white rounded p-4 font-mono text-sm text-gray-700 whitespace-pre-wrap">
                  {step.prompt}
                </div>
              </div>
            )}

            {step.options && (
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                {step.options.map((option, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">{option.name}</h4>
                    <ul className="space-y-2">
                      {option.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start text-gray-700 text-sm">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {step.steps && (
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Steps:</h4>
                <ol className="space-y-2">
                  {step.steps.map((substep, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="font-bold text-primary mr-3">{idx + 1}.</span>
                      <span>{substep}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {step.tips && (
              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Tips:</h4>
                <ul className="space-y-2">
                  {step.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-green-600 mr-2">💡</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.actions && (
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Actions:</h4>
                <ul className="space-y-2">
                  {step.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.bonus && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="text-gray-800">
                  <strong>Bonus:</strong> {step.bonus}
                </p>
              </div>
            )}

            {step.note && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="text-gray-800 text-sm">
                  <strong>Note:</strong> {step.note}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">MVP Sprint Checklist</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-3">Planning & Setup:</h3>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Brainstorm MVP idea</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Create PRD with AI assistance</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Set up AI coding tool (Copilot or Claude Code)</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Create GitHub account</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Create Netlify account</span>
            </label>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-3">Building & Deploying:</h3>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Build MVP with AI assistance</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Test locally</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Create GitHub repository</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Push code to GitHub</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Deploy to Netlify</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Test live site</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">Share with others for feedback</span>
            </label>
          </div>
        </div>
      </div>

      {/* Final Encouragement */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold mb-4">You've Got This!</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Remember: The workshop website you're looking at right now was built in 15 minutes using
          these exact steps. If I can do it, you can too!
        </p>
        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg font-semibold mb-2">
            "The best time to start was yesterday. The second best time is now."
          </p>
          <p className="text-sm">
            Don't wait for the perfect idea - start with something simple and learn as you build.
          </p>
        </div>
      </div>
    </div>
  )
}
