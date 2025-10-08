export default function PromptsTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">What Are Prompts & Why They Matter</h3>
        <p className="text-gray-700 leading-relaxed">
          Prompts are the <strong>inputs and instructions</strong> you send to an AI agent. Well-crafted prompts guide clarity, specificity, reasoning, and output quality. Even with advanced reasoning models, prompts remain essential for structure and alignment.
        </p>
      </div>

      {/* Prompt Best Practices */}
      <div className="bg-orange-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes a Good Prompt</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Structure & Clarity</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Be explicit with sections and output format</li>
              <li>• Use "You are..." style context setting</li>
              <li>• Include few-shot examples or templates</li>
              <li>• Ask for step-by-step reasoning</li>
              <li>• Specify length and style constraints</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Iteration & Refinement</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Test prompts with various inputs</li>
              <li>• Observe weaknesses and refine</li>
              <li>• Use prompt chaining for complex tasks</li>
              <li>• Break big requests into smaller ones</li>
              <li>• Document successful prompt patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Example Prompts */}
      <div className="space-y-4">
        <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
          <p className="font-semibold text-gray-900 mb-2">Example: Research Assistant Prompt</p>
          <code className="text-sm block bg-gray-100 p-4 rounded text-gray-800">
            "You are Andrew's research assistant. Given the following topic, produce a 5-bulleted summary highlighting key insights, then propose three follow-up questions for deeper exploration. Use clear, semi-formal style with citations where applicable."
          </code>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
          <p className="font-semibold text-gray-900 mb-2">Example: Prompt Chaining</p>
          <div className="space-y-2">
            <div className="bg-gray-100 p-3 rounded">
              <span className="font-semibold">Step 1:</span> "List 10 key concepts for [topic]"
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <span className="font-semibold">Step 2:</span> "For each concept, provide a concise definition"
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <span className="font-semibold">Step 3:</span> "Write a comprehensive paragraph using those definitions"
            </div>
          </div>
        </div>
      </div>

      {/* Modern Considerations */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-3">Modern Prompting Considerations</h3>
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Reasoning models:</strong> Advanced models reduce some prompt engineering needs, but structure still helps</li>
          <li>• <strong>Meta instructions:</strong> Some models accept tool-use instructions ("if you need data, ask this API")</li>
          <li>• <strong>Memory & embeddings:</strong> Reference context IDs rather than re-pasting large blocks</li>
          <li>• <strong>Chain of thought:</strong> Asking models to "think step by step" improves complex reasoning</li>
        </ul>
      </div>
    </div>
  )
}
