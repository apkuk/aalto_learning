export default function FivePs() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The 4Ps of AI Agent Management
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            When working with AI agents (ChatGPT, Claude, Gemini, etc.), these four dimensions determine how the agent behaves, how your data is treated, how projects are scoped, and how you interact via prompts.
          </p>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-4 gap-4">
            <a href="#personas" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-3xl mb-2">👤</div>
              <div className="font-semibold text-gray-900">Personas</div>
            </a>
            <a href="#privacy" className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-gray-900">Privacy</div>
            </a>
            <a href="#projects" className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-3xl mb-2">📁</div>
              <div className="font-semibold text-gray-900">Projects</div>
            </a>
            <a href="#prompts" className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-900">Prompts</div>
            </a>
          </div>
        </div>

        {/* 1. PERSONAS */}
        <div id="personas" className="bg-white rounded-xl shadow-md p-8 mb-8 scroll-mt-24">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">👤</span>
            <h2 className="text-3xl font-bold text-gray-900">1. Personas</h2>
          </div>

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
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
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
          <div className="mt-6 bg-blue-900 text-white rounded-lg p-6">
            <p className="font-semibold mb-2">Example Persona Prompt:</p>
            <code className="text-sm block bg-blue-950 p-4 rounded">
              "You are Andrew's AI assistant. Use a friendly but crisp tone, anticipate follow-up questions, ask for clarification when needed, and always explain your logic. You specialize in AI strategy, organizational transformation, and technical implementation."
            </code>
          </div>
        </div>

        {/* 2. PRIVACY */}
        <div id="privacy" className="bg-white rounded-xl shadow-md p-8 mb-8 scroll-mt-24">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">🔒</span>
            <h2 className="text-3xl font-bold text-gray-900">2. Privacy</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Why Privacy Matters</h3>
            <p className="text-gray-700 leading-relaxed">
              Privacy controls determine <strong>how your data, chats, and files are stored, shared, or used for model training</strong>. Defaults often lean toward using data for improvement unless you explicitly opt out. For work or sensitive topics, you need strong control.
            </p>
          </div>

          {/* Privacy Settings Table */}
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Privacy Settings</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-purple-200">
                    <th className="text-left py-3 px-4 font-semibold">Platform</th>
                    <th className="text-left py-3 px-4 font-semibold">Default Behavior</th>
                    <th className="text-left py-3 px-4 font-semibold">How to Opt Out</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-purple-100">
                    <td className="py-3 px-4 font-medium">ChatGPT / OpenAI</td>
                    <td className="py-3 px-4">Conversations may be used to improve models</td>
                    <td className="py-3 px-4">Settings → Data Controls → Disable "Improve model for everyone"</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="py-3 px-4 font-medium">Claude / Anthropic</td>
                    <td className="py-3 px-4">Opt-in for training; 5-year retention if enabled</td>
                    <td className="py-3 px-4">Privacy Settings → Toggle "Allow chats to improve AI"</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <td className="py-3 px-4 font-medium">Custom GPTs</td>
                    <td className="py-3 px-4">Varies by creator settings</td>
                    <td className="py-3 px-4">Check GPT's privacy settings before uploading files</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Gemini</td>
                    <td className="py-3 px-4">Google account settings apply</td>
                    <td className="py-3 px-4">Google Account → Data & Privacy → Web & App Activity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Privacy Recommendations */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-bold text-red-900 mb-3">⚠️ Critical Privacy Actions</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">1.</span>
                <span><strong>Before deploying proprietary data:</strong> Always opt out of model training</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">2.</span>
                <span><strong>Use temporary chat modes:</strong> Enable ephemeral/incognito mode when available</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">3.</span>
                <span><strong>Regularly delete old chats:</strong> Remove sessions you won't revisit</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">4.</span>
                <span><strong>Monitor retention periods:</strong> Understand 30-day vs 5-year storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">5.</span>
                <span><strong>Audit connector permissions:</strong> Only authorize trusted integrations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Privacy policies evolve frequently. Always check the latest terms and settings for each platform you use, especially before handling sensitive or confidential information.
            </p>
          </div>
        </div>

        {/* 3. PROJECTS */}
        <div id="projects" className="bg-white rounded-xl shadow-md p-8 mb-8 scroll-mt-24">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">📁</span>
            <h2 className="text-3xl font-bold text-gray-900">3. Projects</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What Are Projects & Why They Matter</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Projects represent <strong>workstreams, files, and context you attach</strong> to a specific AI chat or workspace. Good project management ensures continuity — the AI can reference project files, knowledge, and prior conversations without starting fresh each time.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Maintains context across multiple sessions</li>
              <li>Allows AI to access project-specific documents and data</li>
              <li>Reduces need to re-explain context repeatedly</li>
              <li>Enables specialized, domain-specific assistance</li>
            </ul>
          </div>

          {/* Platform Project Features */}
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How Platforms Handle Projects</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-green-200">
                    <th className="text-left py-3 px-4 font-semibold">Platform</th>
                    <th className="text-left py-3 px-4 font-semibold">Project Features</th>
                    <th className="text-left py-3 px-4 font-semibold">Caveats</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-medium">ChatGPT / Custom GPTs</td>
                    <td className="py-3 px-4">Upload files to GPTs, memory feature, API connections</td>
                    <td className="py-3 px-4">20-file limit, check privacy/sharing options</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-medium">Claude Projects</td>
                    <td className="py-3 px-4">Document connectors, contextual memory, file sources</td>
                    <td className="py-3 px-4">Be conscious of connector permissions</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-medium">Gemini</td>
                    <td className="py-3 px-4">Google Drive integration, workspace connections</td>
                    <td className="py-3 px-4">Tied to Google account permissions</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Custom Frameworks</td>
                    <td className="py-3 px-4">Vector stores, embeddings, knowledge bases</td>
                    <td className="py-3 px-4">Requires manual orchestration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Project Best Practices */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Setup Best Practices</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Create dedicated workspace/GPT per project</li>
                <li>• Upload only relevant files (docs, CSVs, research)</li>
                <li>• Instruct AI to prioritize project context</li>
                <li>• Version your files and archive old projects</li>
                <li>• Use vector stores for large document sets</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">File Management Tips</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Organize with clear naming conventions</li>
                <li>• Combine related docs to save file slots</li>
                <li>• Use markdown for better AI parsing</li>
                <li>• Include metadata headers in documents</li>
                <li>• Regularly clean up outdated files</li>
              </ul>
            </div>
          </div>

          {/* Project Workflow */}
          <div className="mt-6 bg-green-900 text-white rounded-lg p-6">
            <p className="font-semibold mb-3">Typical Project Workflow:</p>
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
                <p>Upload Files</p>
              </div>
              <span className="text-2xl">→</span>
              <div className="text-center">
                <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
                <p>Create Embeddings</p>
              </div>
              <span className="text-2xl">→</span>
              <div className="text-center">
                <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
                <p>Agent Queries</p>
              </div>
              <span className="text-2xl">→</span>
              <div className="text-center">
                <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">4</div>
                <p>Contextualized Response</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. PROMPTS */}
        <div id="prompts" className="bg-white rounded-xl shadow-md p-8 mb-8 scroll-mt-24">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">💬</span>
            <h2 className="text-3xl font-bold text-gray-900">4. Prompts</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What Are Prompts & Why They Matter</h3>
            <p className="text-gray-700 leading-relaxed">
              Prompts are the <strong>inputs and instructions</strong> you send to an AI agent. Well-crafted prompts guide clarity, specificity, reasoning, and output quality. Even with advanced reasoning models, prompts remain essential for structure and alignment.
            </p>
          </div>

          {/* Prompt Best Practices */}
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
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
          <div className="space-y-4 mb-6">
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

        {/* Platform Comparison Summary */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Quick Reference: Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-white/30">
                  <th className="text-left py-3 px-4 font-semibold">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold">Personas</th>
                  <th className="text-left py-3 px-4 font-semibold">Privacy Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Projects</th>
                  <th className="text-left py-3 px-4 font-semibold">Prompting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium">ChatGPT</td>
                  <td className="py-3 px-4">Custom Instructions</td>
                  <td className="py-3 px-4">Opt-out required</td>
                  <td className="py-3 px-4">File uploads, Memory</td>
                  <td className="py-3 px-4">Full support</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium">Claude</td>
                  <td className="py-3 px-4">System prompts</td>
                  <td className="py-3 px-4">Opt-in model</td>
                  <td className="py-3 px-4">Projects feature</td>
                  <td className="py-3 px-4">Full support</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium">Gemini</td>
                  <td className="py-3 px-4">Style settings</td>
                  <td className="py-3 px-4">Google account</td>
                  <td className="py-3 px-4">Drive integration</td>
                  <td className="py-3 px-4">Full support</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Custom GPTs</td>
                  <td className="py-3 px-4">Built-in config</td>
                  <td className="py-3 px-4">Per-GPT settings</td>
                  <td className="py-3 px-4">Knowledge files</td>
                  <td className="py-3 px-4">Template support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Launch Checklist */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 New GPT/Project Launch Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Define persona (voice, tone, expertise)</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Confirm privacy/training toggle set to OFF</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Create project workspace</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Upload context files and documents</span>
              </label>
            </div>
            <div className="space-y-3">
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Draft initial prompt templates</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Test with edge cases and examples</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Review behavior and iterate</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Document configuration for team</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
