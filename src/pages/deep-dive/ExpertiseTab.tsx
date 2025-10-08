export default function ExpertiseTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Domain Specialization & Custom Models</h2>
        <p className="text-gray-700 leading-relaxed">
          Learn how to create specialized AI models tailored to your industry, build custom GPTs,
          and leverage domain-specific knowledge to gain competitive advantages.
        </p>
      </div>

      {/* Key Topics */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What We'll Cover</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Customization Methods</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Custom GPTs (OpenAI)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Claude Projects with knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Fine-tuning for specific tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>RAG (Retrieval Augmented Generation)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Knowledge base integration</span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Use Cases</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Industry-specific assistants</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Company knowledge bases</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Specialized research tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Custom coding assistants</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Domain expert simulators</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hands-On Practice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Hands-On Practice Session</h3>
        <p className="text-gray-700 mb-4">
          During this deep dive, you'll create your own specialized AI tools:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Build a Custom GPT for your specific industry or role</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Create a knowledge-enhanced Claude Project</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Implement RAG for company documentation</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">→</span>
            <span className="text-gray-700">Design specialized prompts and system instructions</span>
          </li>
        </ul>
      </div>

      {/* Building Custom GPTs */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Building Effective Custom GPTs</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Define Your Domain</h4>
              <p className="text-gray-700 text-sm">
                Clearly identify the specific problem space, industry, or workflow your GPT will address
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Curate Knowledge</h4>
              <p className="text-gray-700 text-sm">
                Upload relevant documents, guidelines, and examples that represent your domain expertise
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Craft Instructions</h4>
              <p className="text-gray-700 text-sm">
                Write clear system instructions that define behavior, tone, and output format
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Test & Iterate</h4>
              <p className="text-gray-700 text-sm">
                Run multiple test scenarios and refine based on real-world usage
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              5
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Deploy & Monitor</h4>
              <p className="text-gray-700 text-sm">
                Share with your team, gather feedback, and continuously improve
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Domain Examples */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Domain Specialization Examples</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-2">Healthcare</h4>
            <p className="text-sm text-gray-700">
              Medical coding assistant trained on ICD-10, CPT codes, and clinical documentation guidelines
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-2">Legal</h4>
            <p className="text-sm text-gray-700">
              Contract analysis tool specialized in specific legal jurisdictions and document types
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
            <h4 className="font-bold text-gray-900 mb-2">Finance</h4>
            <p className="text-sm text-gray-700">
              Financial analysis assistant with deep knowledge of accounting standards and regulations
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-2">Engineering</h4>
            <p className="text-sm text-gray-700">
              Technical specification generator trained on industry standards and best practices
            </p>
          </div>
        </div>
      </div>

      {/* Knowledge Integration */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Knowledge Integration Strategies</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Document Upload</h4>
            <p className="text-sm text-gray-700">
              Upload PDFs, docs, and text files directly to Custom GPTs or Claude Projects for instant knowledge access
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">API Integration</h4>
            <p className="text-sm text-gray-700">
              Connect to live databases, internal wikis, or external knowledge sources via APIs
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Vector Databases</h4>
            <p className="text-sm text-gray-700">
              Use Pinecone, Weaviate, or Chroma to build powerful RAG systems with semantic search
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Fine-Tuning</h4>
            <p className="text-sm text-gray-700">
              Train models on your specific data for highly specialized tasks and consistent outputs
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
        <p className="text-gray-700 text-center">
          <strong>Full content coming soon!</strong> This tab will be populated with detailed tutorials,
          custom GPT templates, and domain specialization guides.
        </p>
      </div>
    </div>
  )
}
