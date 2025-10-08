export default function BuildCustomGPT() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Build a Custom GPT / ChatGPT
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive guide to architecting, designing, and deploying custom AI solutions
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Architecture Overview</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-white rounded-lg shadow p-4 w-40">
                  <p className="font-semibold text-sm">User Input</p>
                </div>
                <span className="text-2xl">→</span>
                <div className="bg-white rounded-lg shadow p-4 w-40">
                  <p className="font-semibold text-sm">Prompt Design</p>
                </div>
                <span className="text-2xl">→</span>
                <div className="bg-white rounded-lg shadow p-4 w-40">
                  <p className="font-semibold text-sm">LLM Processing</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-white rounded-lg shadow p-4 w-40">
                  <p className="font-semibold text-sm">Response</p>
                </div>
                <span className="text-2xl">←</span>
                <div className="bg-white rounded-lg shadow p-4 w-40">
                  <p className="font-semibold text-sm">Post-processing</p>
                </div>
                <span className="text-2xl">←</span>
                <div className="bg-white rounded-lg shadow p-4 w-40">
                  <p className="font-semibold text-sm">Context + RAG</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Building a custom GPT involves multiple layers: from designing effective prompts and system instructions,
            to integrating external knowledge bases (RAG), managing conversation context, and orchestrating multiple
            AI agents for complex tasks.
          </p>
        </div>

        {/* Key Components */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Components</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Prompt Design</h3>
              <p className="text-gray-700 mb-3">
                Crafting effective system prompts that define behavior, tone, constraints, and capabilities.
              </p>
              <div className="bg-gray-50 rounded p-4 font-mono text-sm">
                <p className="text-gray-800">You are an expert AI assistant specialized in [domain].</p>
                <p className="text-gray-800">Your responses should be: concise, accurate, and actionable.</p>
                <p className="text-gray-800">Always cite sources when providing factual information.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Knowledge Integration (RAG)</h3>
              <p className="text-gray-700 mb-3">
                Retrieval Augmented Generation allows your GPT to access external knowledge bases, documents, and real-time data.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Vector databases for semantic search</li>
                <li>Document embeddings for context retrieval</li>
                <li>API integrations for live data</li>
                <li>Custom knowledge bases</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Fine-tuning & Customization</h3>
              <p className="text-gray-700 mb-3">
                Specialized training on domain-specific data to improve performance on particular tasks.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="bg-purple-50 rounded p-3">
                  <p className="font-semibold text-gray-900 mb-1">When to Fine-tune</p>
                  <p className="text-sm text-gray-700">Specialized domains, consistent format, large datasets</p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="font-semibold text-gray-900 mb-1">When to use RAG</p>
                  <p className="text-sm text-gray-700">Dynamic data, frequent updates, broad knowledge</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Agent Orchestration</h3>
              <p className="text-gray-700 mb-3">
                Coordinating multiple AI agents to handle complex, multi-step workflows.
              </p>
              <div className="bg-orange-50 rounded p-4">
                <p className="font-semibold text-gray-900 mb-2">Agent Types:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li><strong>Researcher:</strong> Gathers and analyzes information</li>
                  <li><strong>Coder:</strong> Writes and reviews code</li>
                  <li><strong>Validator:</strong> Checks accuracy and quality</li>
                  <li><strong>Orchestrator:</strong> Coordinates agent workflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Steps</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Define Your Use Case</h3>
                <p className="text-gray-700">Identify the problem you're solving, target audience, and success metrics.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Design System Prompts</h3>
                <p className="text-gray-700">Create clear instructions defining behavior, constraints, and output format.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Set Up Knowledge Base</h3>
                <p className="text-gray-700">Prepare documents, create embeddings, configure vector store for retrieval.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Implement API Integration</h3>
                <p className="text-gray-700">Connect to OpenAI, Anthropic, or other LLM providers via their APIs.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Test & Iterate</h3>
                <p className="text-gray-700">Run test cases, gather feedback, refine prompts and parameters.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Deploy & Monitor</h3>
                <p className="text-gray-700">Launch to production, track usage metrics, and continuously improve.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://platform.openai.com/docs/guides/gpts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">OpenAI GPT Builder Guide</h3>
              <p className="text-sm text-gray-600">Official documentation for creating custom GPTs</p>
            </a>
            <a
              href="https://docs.anthropic.com/claude/docs/intro-to-claude"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Claude API Documentation</h3>
              <p className="text-sm text-gray-600">Build with Anthropic's Claude models</p>
            </a>
            <a
              href="https://python.langchain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">LangChain Framework</h3>
              <p className="text-sm text-gray-600">Build applications with LLMs and agents</p>
            </a>
            <a
              href="https://www.pinecone.io/learn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Vector Database Guide</h3>
              <p className="text-sm text-gray-600">Learn about embeddings and vector search</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
