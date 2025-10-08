export default function BuildCustomGPT() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Build a Custom GPT
          </h1>
          <p className="text-lg text-gray-600">
            Complete guide to creating custom GPTs with OpenAI - from basic setup to advanced features
          </p>
        </div>

        {/* What are Custom GPTs */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Custom GPTs?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Custom GPTs are specialized versions of ChatGPT that you can create for specific purposes.
            They combine custom instructions, specific knowledge from uploaded files, external API capabilities,
            and specialized tools to help with particular tasks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Think of them as your own AI assistant trained for your specific needs - whether that's a
            French tutor, a coding helper, a business analyst, or anything else you can imagine.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">What You Can Customize:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Instructions on how the GPT should behave</li>
              <li>Knowledge files (PDFs, documents, spreadsheets)</li>
              <li>External API connections (Actions)</li>
              <li>Capabilities (web browsing, image generation, code analysis)</li>
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">To Create Custom GPTs:</h3>
              <p className="text-gray-700 mb-3">
                You need a paid ChatGPT subscription:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>ChatGPT Plus</strong> - $20/month (for individuals)</li>
                <li><strong>ChatGPT Pro</strong> - $200/month (advanced features)</li>
                <li><strong>ChatGPT Team</strong> - For teams and organizations</li>
                <li><strong>ChatGPT Enterprise or Edu</strong> - For large organizations</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <p className="text-gray-700">
                <strong>Note:</strong> Free ChatGPT users can use custom GPTs that others have created and shared,
                but they cannot create their own.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <p className="text-gray-700">
                <strong>GPT-5 Migration:</strong> Custom GPTs automatically use the latest GPT-5 models,
                giving you access to improved reasoning and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Creation Process */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Creation Process</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-start mb-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">Access the GPT Builder</h3>
              </div>
              <p className="text-gray-700 mb-3">Two ways to start:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Go directly to <code className="bg-gray-100 px-2 py-1 rounded text-sm">chatgpt.com/gpts/editor</code></li>
                <li>Visit <code className="bg-gray-100 px-2 py-1 rounded text-sm">chatgpt.com/gpts</code> and click "+ Create" in the top right</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-start mb-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">Choose Your Building Method</h3>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <h4 className="font-bold text-gray-900 mb-2">Option A: Create Tab (Conversational)</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Talk to the GPT Builder naturally and it will guide you through the process.
                </p>
                <code className="text-sm text-gray-600 block bg-white p-2 rounded">
                  "Make a French tutor that helps with GCSE preparation"
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Option B: Configure Tab (Manual Setup)</h4>
                <p className="text-gray-700 text-sm">
                  Manually set all parameters yourself - gives you more control over specific settings.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-start mb-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">Add Basic Information</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Name:</strong> Clear, descriptive title for your GPT</li>
                <li><strong>Description:</strong> What your GPT does (appears in search results)</li>
                <li><strong>Image:</strong> Upload or generate an icon for your GPT</li>
                <li><strong>Conversation Starters:</strong> 4 example prompts to help users get started</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex items-start mb-3">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">Configure Settings</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Set up instructions, upload knowledge files, enable capabilities, and add actions (see detailed sections below).
              </p>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <div className="flex items-start mb-3">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">Test and Publish</h3>
              </div>
              <p className="text-gray-700">
                Use the preview panel to test your GPT, then click "Publish" and choose who can access it
                (just you, anyone with a link, or everyone).
              </p>
            </div>
          </div>
        </div>

        {/* Configuration Settings */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Configuration Settings</h2>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instructions (Most Important)</h3>
            <p className="text-gray-700 mb-4">
              This is where you define your GPT's personality, behavior, and expertise. Be specific and clear.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Example Instructions:</p>
              <div className="bg-white rounded p-4 font-mono text-sm text-gray-700 whitespace-pre-wrap">
{`You are a French GCSE tutor specialized in helping students achieve Grade 9.

Core behaviors:
- Adapt explanations to student's learning style
- Use the UK GCSE curriculum framework
- Provide practice questions similar to exam format
- Give encouraging feedback
- Track common mistakes and address them

Always:
- Speak clearly and at an appropriate level
- Use examples relevant to teenage students
- Celebrate progress, no matter how small

Never:
- Give direct exam answers without explanation
- Use complex linguistic terminology unnecessarily
- Discourage students who are struggling`}
              </div>
            </div>
          </div>

          {/* Knowledge Files */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Files</h3>
            <p className="text-gray-700 mb-4">
              Upload files that your GPT can search through and reference when answering questions.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">File Limits:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Up to 20 files per GPT</li>
                  <li>512MB per file maximum</li>
                  <li>2M tokens per text file</li>
                  <li>~50MB for spreadsheets</li>
                  <li>20MB for images</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Supported File Types:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Documents: PDF, Word, TXT, Markdown</li>
                  <li>Spreadsheets: CSV, Excel</li>
                  <li>Presentations: PowerPoint</li>
                  <li>Code: Most programming languages</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Tip:</strong> Since you have a 20-file limit, organize strategically. Consider combining
                related content into single files with clear sections rather than many small files.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h3>
            <p className="text-gray-700 mb-4">
              Enable or disable these built-in features for your GPT:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Web Browsing</h4>
                <p className="text-sm text-gray-700">
                  Let your GPT search the internet and retrieve current information
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">DALL-E Image Generation</h4>
                <p className="text-sm text-gray-700">
                  Allow your GPT to create images based on descriptions
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Code Interpreter</h4>
                <p className="text-sm text-gray-700">
                  Enable running Python code and analyzing data
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Canvas</h4>
                <p className="text-sm text-gray-700">
                  Collaborative editing interface for documents and code
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GPT Actions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">GPT Actions (API Integrations)</h2>

          <p className="text-gray-700 mb-6">
            Actions let your GPT connect to external APIs, enabling it to retrieve data from other
            services, perform operations in other applications, or access real-time information.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What You Can Do with Actions:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pull data from external databases</li>
              <li>Send emails or messages</li>
              <li>Interact with business tools (CRM, project management)</li>
              <li>Access real-time information (weather, stock prices, etc.)</li>
              <li>Perform operations in other applications</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Setting Up an Action:</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">1. Create an OpenAPI Schema</h4>
                <p className="text-sm text-gray-700 mb-2">
                  You need an OpenAPI specification that describes your API. Use the Actions GPT to help generate this.
                </p>
                <a
                  href="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Try Actions GPT
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">2. Choose Authentication Method</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li><strong>No Authentication:</strong> For public APIs</li>
                  <li><strong>API Key:</strong> Simple token-based authentication</li>
                  <li><strong>OAuth 2.0:</strong> For user-specific access to services</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">3. Add to Your GPT</h4>
                <p className="text-sm text-gray-700">
                  Paste your OpenAPI schema in the Actions section, configure authentication, and test each endpoint.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-gray-900 mb-2">Important Limits:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>45-second timeout per API request</li>
              <li>Request/response payloads must be under 100,000 characters</li>
              <li>Custom headers are not supported</li>
            </ul>
          </div>
        </div>

        {/* Publishing & Sharing */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Publishing & Sharing Options</h2>

          <div className="space-y-4 mb-6">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Private</h3>
              <p className="text-gray-700 text-sm">
                Only you can access. Perfect for personal use or testing before sharing.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anyone with Link</h3>
              <p className="text-gray-700 text-sm">
                Unlisted but shareable. Good for sharing with specific people or groups without making it public.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Everyone (Public)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Listed in the GPT Store where anyone can find and use it. Requires a verified Builder Profile.
              </p>
              <div className="bg-blue-50 rounded p-3 mt-2">
                <p className="text-xs text-gray-700">
                  <strong>Builder Profile Requirements:</strong> To publish publicly, you need to verify your name
                  (from billing) or verify a domain you own.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Setting Up Domain Verification:</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
              <li>Go to Settings, then Builder Profile</li>
              <li>Click "Verify new domain"</li>
              <li>Add the provided DNS TXT record to your domain</li>
              <li>Once verified, your GPTs will show "by yourdomain.com"</li>
            </ol>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Writing Effective Instructions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Be specific and detailed about desired behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Include examples of how the GPT should respond</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Define clear boundaries (what it should NOT do)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Give it a consistent personality and tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Explain how to handle uncertainty or errors</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testing Your GPT</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Create 5-10 representative test cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Test edge cases and error conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Try complex multi-step interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Test with different user personas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Publish privately first, iterate, then go public</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimizing for Discovery</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Choose a clear, descriptive, searchable name</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Write a compelling description explaining value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Select the most relevant category</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Create conversation starters that showcase capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Design an eye-catching icon</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Privacy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">!</span>
                  <span>Never include API keys in instructions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">!</span>
                  <span>Use OAuth for user-specific data access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">!</span>
                  <span>Be transparent about how data is used</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">!</span>
                  <span>Include a privacy policy for public GPTs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">!</span>
                  <span>Don't upload sensitive or private data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Start Checklist */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Checklist</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Simple GPT (No Actions)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Name and description</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Core instructions</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Upload relevant knowledge files</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Add conversation starters</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Test with 5+ example queries</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Publish privately first</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Iterate based on testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Advanced GPT (With Actions)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Complete all simple GPT steps</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Design API endpoints needed</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Generate OpenAPI schema</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Test API independently</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Configure authentication</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Add actions and test each one</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Verify domain (if publishing publicly)</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Add privacy policy</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" disabled />
                  <span>Extensive testing before public release</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
