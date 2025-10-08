export default function PrivacyTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Why Privacy Matters</h3>
        <p className="text-gray-700 leading-relaxed">
          Privacy controls determine <strong>how your data, chats, and files are stored, shared, or used for model training</strong>. Defaults often lean toward using data for improvement unless you explicitly opt out. For work or sensitive topics, you need strong control.
        </p>
      </div>

      {/* Privacy Settings Table */}
      <div className="bg-purple-50 rounded-lg p-6">
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
      <div className="bg-red-50 border-l-4 border-red-500 p-6">
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

      {/* Note */}
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Privacy policies evolve frequently. Always check the latest terms and settings for each platform you use, especially before handling sensitive or confidential information.
        </p>
      </div>
    </div>
  )
}
