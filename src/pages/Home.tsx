export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold">
              AK
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Andrew Kilshaw
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Latest on AI, curated for practical use — from deep research to custom GPTs, coding integrations, and workshop materials
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/about"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              About Andrew
            </a>
            <a
              href="/workshop"
              className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium"
            >
              View Workshop
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This platform serves as a living, up-to-date resource on AI — providing curated content,
            practical guides, and comprehensive definitions. Whether you're attending one of my workshops
            or exploring AI independently, you'll find actionable insights and resources to advance your
            understanding and implementation of AI technologies.
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
                GitHub workflows, VS Code setup, Claude Code, and deployment pipelines
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
