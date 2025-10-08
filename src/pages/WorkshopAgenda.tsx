export default function WorkshopAgenda() {
  const agenda = [
    {
      title: 'Introduction to Andrew',
      duration: '10 minutes',
      description: 'Background, AI journey, and credibility in the field',
      color: 'bg-blue-100 border-blue-400'
    },
    {
      title: 'Introduction to the Session',
      duration: '5 minutes',
      description: 'Workshop goals, format, and expectations',
      color: 'bg-green-100 border-green-400'
    },
    {
      title: 'My AI Stack',
      duration: '10 minutes',
      description: 'Overview of tools used and how they integrate',
      color: 'bg-purple-100 border-purple-400'
    },
    {
      title: 'What I Use AI For',
      duration: '10 minutes',
      description: 'Use cases: research, images, coding, efficiency, expertise',
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      title: 'Deep Dives',
      duration: '60 minutes',
      description: 'In-depth exploration of key AI applications',
      color: 'bg-red-100 border-red-400',
      subtopics: [
        'Deep Research: Prompt engineering, browsing, and AI agents',
        'Image Generation: DALL·E, Stable Diffusion, and techniques',
        'Coding: Chat-based generation, code vetting, and automation',
        'Efficiency: Workflow automation and agent orchestration',
        'Expertise: Domain specialization and custom models'
      ]
    },
    {
      title: 'Wrap & Q&A',
      duration: '10 minutes',
      description: 'Key takeaways and questions from participants',
      color: 'bg-indigo-100 border-indigo-400'
    },
    {
      title: 'Next Steps / Resources',
      duration: '5 minutes',
      description: 'Links to microsite, GitHub, and further reading',
      color: 'bg-pink-100 border-pink-400'
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Workshop Agenda
            </h1>
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AE</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            2-Hour AI Workshop for Aalto Energia
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Duration:</span>
              2 hours (120 minutes)
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Format:</span>
              Interactive presentation with demos
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {agenda.map((item, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md border-l-4 ${item.color} p-6 hover:shadow-xl transition-shadow`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {index + 1}. {item.title}
                </h3>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.duration}
                </span>
              </div>
              <p className="text-gray-700 mb-3">{item.description}</p>

              {item.subtopics && (
                <div className="mt-4 pl-4 border-l-2 border-gray-300">
                  <p className="font-semibold text-gray-800 mb-2">Topics covered:</p>
                  <ul className="space-y-2">
                    {item.subtopics.map((subtopic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{subtopic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Understanding of modern AI tools and their practical applications</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Hands-on knowledge of building and deploying AI solutions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Access to curated resources and ongoing support materials</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Practical strategies for integrating AI into your workflow</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
