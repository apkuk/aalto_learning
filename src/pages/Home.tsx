export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is this site about */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is this site about?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This microsite was built in approximately an hour using AI tools. It serves as a practical
            demonstration of what's possible when you leverage modern AI-powered development workflows.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Throughout this resource, I'll walk you through:
          </p>
          <ul className="space-y-2 text-lg text-gray-700 ml-6">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>Introduction to the Session:</strong> Workshop overview and agenda</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>My AI Stack:</strong> The AI tools and platforms I use daily</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>What I Use AI For:</strong> Real-world applications across 5 key areas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>Resources:</strong> AI tools, learning materials, communities, AI terms, and step-by-step app building guides</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This site itself is proof that with the right AI tools and approach, anyone can create
            professional digital solutions quickly and effectively.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Comprehensive Glossary
            </h3>
            <p className="text-gray-600">
              Clear definitions of key AI, ML, and platform terms with links to authoritative sources
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Workshop Materials
            </h3>
            <p className="text-gray-600">
              Detailed agendas, walkthroughs, and resources for hands-on learning experiences
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Practical Guides
            </h3>
            <p className="text-gray-600">
              Step-by-step tutorials for building custom GPTs, deep research, and coding integrations
            </p>
          </div>
        </div>

        {/* What You'll Find */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Find Here</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔍 Deep Research Tools</h3>
              <p className="text-gray-700">
                Comparative guides for Gemini, Claude, Grok, and OpenAI with example prompts and best practices
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🤖 Custom GPT Building</h3>
              <p className="text-gray-700">
                Architecture overviews, prompt design strategies, and agent orchestration techniques
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💻 Coding Integration</h3>
              <p className="text-gray-700">
                IDE workflows, version control, AI assistants, and deployment pipelines
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📖 AI Definitions</h3>
              <p className="text-gray-700">
                Clear, concise explanations of LLMs, embeddings, vector stores, APIs, and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
