export default function PersonasTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">What Are Personas & Why They Matter</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Personas define the <strong>voice, character, and behavioral rules</strong> you assign to an AI agent. This helps the agent respond in a style, tone, and context aligned with your preferences.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Controls formality level, detail, and domain knowledge</li>
          <li>Can encode long-term preferences and memory</li>
          <li>Ensures consistency across conversations</li>
          <li>Helps agents understand your working style</li>
        </ul>
      </div>

      {/* Platform Comparison */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Settings & Tools</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-blue-200">
                <th className="text-left py-3 px-4 font-semibold">Platform</th>
                <th className="text-left py-3 px-4 font-semibold">Persona Feature</th>
                <th className="text-left py-3 px-4 font-semibold">What You Can Control</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-blue-100">
                <td className="py-3 px-4 font-medium">ChatGPT / OpenAI</td>
                <td className="py-3 px-4">Custom Instructions (Settings)</td>
                <td className="py-3 px-4">Tell ChatGPT "about you" and "how you'd like it to respond" (tone, style, detail)</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-3 px-4 font-medium">Custom GPTs</td>
                <td className="py-3 px-4">System Prompt / Instructions</td>
                <td className="py-3 px-4">Bake persona into GPT configuration via instruction templates</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-3 px-4 font-medium">Claude</td>
                <td className="py-3 px-4">System Prompts / Instructions</td>
                <td className="py-3 px-4">Use instructions at start of conversation to shape tone and behavior</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Gemini / Google</td>
                <td className="py-3 px-4">Style / Voice Settings</td>
                <td className="py-3 px-4">Some versions allow assistant persona/style tweaking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-green-600 mb-2">✓ Do:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Be explicit about role, tone, and constraints</li>
              <li>• Test and iterate with sample prompts</li>
              <li>• Load persona at start of each session</li>
              <li>• Document your persona templates</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-600 mb-2">✗ Avoid:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Conflicting persona and prompt instructions</li>
              <li>• Overly complex persona definitions</li>
              <li>• Assuming personas improve all tasks</li>
              <li>• Forgetting to update personas as needs change</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Example */}
      <div className="bg-blue-900 text-white rounded-lg p-6">
        <p className="font-semibold mb-2">Example Persona Prompt:</p>
        <code className="text-sm block bg-blue-950 p-4 rounded">
          "You are Andrew's AI assistant. Use a friendly but crisp tone, anticipate follow-up questions, ask for clarification when needed, and always explain your logic. You specialize in AI strategy, organizational transformation, and technical implementation."
        </code>
      </div>
    </div>
  )
}
