import Card from '../../components/Card'

interface AITool {
  name: string
  url: string
  description: string
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
}

export default function ProductivityTab() {
  const tools: AITool[] = [
    {
      name: 'Motion',
      url: 'https://www.usemotion.com/',
      description: 'AI-powered calendar and project management that automatically schedules your tasks and meetings',
      icon: '📅',
      color: 'indigo'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
        <p className="text-gray-700">
          <strong>Productivity & Automation:</strong> These tools help me automate workflows, optimize my schedule, and focus on high-value activities instead of repetitive tasks.
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

      {/* Motion Deep Dive */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Why Motion is a Game-Changer
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            Motion uses AI to automatically schedule your tasks based on priority, deadlines, and available time. Instead of manually juggling your calendar and to-do list, Motion does it for you.
          </p>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Key Features:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Automatic Scheduling:</strong> Motion finds the optimal time for each task</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Dynamic Rescheduling:</strong> When priorities change, Motion adjusts everything automatically</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Meeting Protection:</strong> Ensures you have focus time for important work</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span><strong>Project Management:</strong> Built-in task and project tracking</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">The Impact:</h4>
            <p className="text-sm">
              I save 10-15 hours per week by letting Motion handle scheduling, task prioritization, and calendar optimization. It's like having a personal assistant that never sleeps.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
