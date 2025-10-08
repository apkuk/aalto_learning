export default function ProjectsTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
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
      <div className="bg-green-50 rounded-lg p-6">
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
      <div className="bg-green-900 text-white rounded-lg p-6">
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
  )
}
