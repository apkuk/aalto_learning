import Card from '../../components/Card'
import CollapsibleSection from '../../components/CollapsibleSection'

export default function ExpertiseTab() {
  return (
    <div className="space-y-6">
      {/* Section 1: What I Use It For */}
      <CollapsibleSection title="What I Use It For" icon="🎓" defaultOpen={true}>
        <Card className="overflow-hidden" color="border-purple-400">
          <div className="space-y-6">
            {/* Title and Description */}
            <div className="flex items-start">
              <span className="text-5xl mr-4">🎓</span>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Domain Expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Rapidly learning new domains and accessing specialized knowledge on demand
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 font-bold">→</span>
                  <span>Learning new programming languages quickly</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 font-bold">→</span>
                  <span>Understanding complex legal or technical documents</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 font-bold">→</span>
                  <span>Industry-specific terminology and concepts</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 font-bold">→</span>
                  <span>Best practices in unfamiliar domains</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 font-bold">→</span>
                  <span>Expert-level consultation on specialized topics</span>
                </li>
              </ul>
            </div>

            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">❌</span>
                  <h3 className="font-bold text-gray-900 text-lg">Before AI</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Weeks or months to become proficient in a new area, or consulting fees for expert advice
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">✅</span>
                  <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Get expert-level guidance immediately, accelerate learning curve dramatically
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  <span className="font-bold text-gray-900">Impact:</span>
                </div>
                <span className="text-purple-700 font-bold text-lg">
                  80% faster skill acquisition
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Learning Strategy */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-l-4 border-purple-500 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            How AI Accelerates Learning
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Instead of spending weeks reading textbooks or taking courses, I use AI as an on-demand expert tutor that adapts to my learning style and pace.
            </p>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">My Learning Workflow:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">1.</span>
                  <span><strong>Start with fundamentals:</strong> Ask AI to explain core concepts in simple terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">2.</span>
                  <span><strong>Learn by doing:</strong> Build projects immediately with AI guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">3.</span>
                  <span><strong>Get instant feedback:</strong> AI reviews my work and suggests improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">4.</span>
                  <span><strong>Deep dive when needed:</strong> Ask follow-up questions on complex topics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">5.</span>
                  <span><strong>Build expertise:</strong> Create reference documents for future use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 2: How I Use It */}
      <CollapsibleSection title="How I Use It" icon="⚙️" defaultOpen={false}>
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Domain Specialization & Custom Models</h2>
          <p className="text-gray-700 leading-relaxed">
            Learn how to create specialized AI models tailored to your industry, build custom GPTs,
            and leverage domain-specific knowledge to gain competitive advantages.
          </p>
        </div>

        {/* Key Topics */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
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
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
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
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mb-6">
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
      </CollapsibleSection>

      {/* Section 3: Key Takeaways */}
      <CollapsibleSection title="Key Takeaways" icon="💡" defaultOpen={false}>
        <div className="space-y-6">
          {/* What AI Enables */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What AI Enables:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Speed:</span>
                  <span className="text-gray-700"> Complete projects in hours instead of weeks</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Cost:</span>
                  <span className="text-gray-700"> Reduce expenses by 80-95% for many tasks</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Capability:</span>
                  <span className="text-gray-700"> Do things you couldn't before</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Iteration:</span>
                  <span className="text-gray-700"> Try multiple approaches effortlessly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Principles */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Principles:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Start small:</span>
                  <span className="text-gray-700"> Begin with simple tasks to build confidence</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Iterate:</span>
                  <span className="text-gray-700"> AI gets better with feedback and refinement</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Verify:</span>
                  <span className="text-gray-700"> Always review AI output for accuracy</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Learn:</span>
                  <span className="text-gray-700"> Each use case teaches you more about AI's strengths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
