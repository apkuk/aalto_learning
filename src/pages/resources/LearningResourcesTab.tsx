export default function LearningResourcesTab() {
  const resources = [
    { name: 'OpenAI Platform Docs', url: 'https://platform.openai.com/docs', description: 'Official OpenAI API documentation' },
    { name: 'Anthropic Docs', url: 'https://docs.anthropic.com', description: 'Claude API and best practices' },
    { name: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai', description: 'Comprehensive prompt engineering resource' },
    { name: 'DeepLearning.AI', url: 'https://learn.deeplearning.ai', description: 'Free AI courses' },
    { name: 'Hugging Face Learn', url: 'https://huggingface.co/learn', description: 'Open-source ML tutorials' },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">📚</span>
          Learning Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg border-l-4 border-indigo-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600">
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
