export default function CommunitiesTab() {
  const resources = [
    { name: 'OpenAI Community', url: 'https://community.openai.com', description: 'Official OpenAI forum' },
    { name: 'r/artificial', url: 'https://www.reddit.com/r/artificial/', description: 'Reddit AI community' },
    { name: 'AI Stack Exchange', url: 'https://ai.stackexchange.com', description: 'Q&A for AI practitioners' },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">👥</span>
          Communities & Forums
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {resources.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-teal-50 hover:bg-teal-100 rounded-lg border-l-4 border-teal-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                {resource.name} →
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
