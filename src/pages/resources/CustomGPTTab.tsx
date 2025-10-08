import CollapsibleSection from '../../components/CollapsibleSection'

export default function CustomGPTTab() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Build a Custom GPT</h1>
        <p className="text-xl mb-4">
          Create your own specialized AI assistant tailored to your exact needs—no coding required.
        </p>
        <p className="text-lg">
          Custom GPTs combine personalized instructions, specialized knowledge, and external capabilities
          to become expert assistants for any domain or task.
        </p>
      </div>

      {/* What is a Custom GPT */}
      <CollapsibleSection title="What is a Custom GPT?" defaultOpen={true}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Custom GPTs are tailored versions of ChatGPT that you can create to solve specific problems
            or assist with specialized tasks. Think of them as expert assistants that you train with
            your own instructions, knowledge, and capabilities.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">A Custom GPT Combines:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Custom Instructions:</strong> Define personality, tone, and behavior guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Specialized Knowledge:</strong> Upload files (PDFs, docs, spreadsheets) with domain-specific information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>External API Capabilities:</strong> Connect to real-time data and external services via Actions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Specialized Tools:</strong> Web browsing, image generation (DALL·E), code interpreter, and data analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">Requirements to Create Custom GPTs:</h3>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>ChatGPT Plus, Pro, Team, Enterprise, or Edu subscription</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Free users can <em>use</em> GPTs but cannot create them</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Why Build a Custom GPT */}
      <CollapsibleSection title="Why Build a Custom GPT?" defaultOpen={false}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">
            Custom GPTs solve the "context reset" problem—instead of re-explaining your needs every
            conversation, your GPT remembers its purpose, has access to your materials, and follows
            your preferred approach consistently.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🎓 Education</h3>
              <p className="text-sm text-gray-700">
                Create tutors for specific subjects, grade levels, and learning styles. Upload curriculum
                materials, past papers, and teaching protocols.
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                Example: French GCSE tutor that knows exam boards, tracks student progress, and adapts to learning style
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">💼 Business</h3>
              <p className="text-sm text-gray-700">
                Build assistants for customer support, sales enablement, or internal documentation.
                Connect to CRMs and knowledge bases.
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                Example: Customer support agent with product docs, troubleshooting guides, and ticket creation via API
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🔬 Research</h3>
              <p className="text-sm text-gray-700">
                Create research assistants with specialized knowledge in your field. Upload papers,
                datasets, and methodologies.
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                Example: Literature review assistant for biomedical research with journal access and citation formatting
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">✍️ Creative Work</h3>
              <p className="text-sm text-gray-700">
                Design writing assistants that understand your style, brand voice, or creative constraints.
                Upload style guides and examples.
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                Example: Content writer that follows brand guidelines, SEO requirements, and maintains consistent tone
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span><strong>Consistency:</strong> Same behavior every conversation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span><strong>Efficiency:</strong> No need to repeat context</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span><strong>Specialization:</strong> Expert in your domain</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span><strong>Sharing:</strong> Others can use your GPT</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* How to Build: Getting Started */}
      <CollapsibleSection title="1. Getting Started: Access the GPT Builder" defaultOpen={false}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Two ways to start building your Custom GPT:
          </p>

          <div className="space-y-3">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Option 1: Direct Link</h3>
              <p className="text-sm text-gray-700 mb-2">Navigate directly to the GPT editor:</p>
              <a
                href="https://chatgpt.com/gpts/editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Open GPT Editor →
              </a>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Option 2: Via GPT Library</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Go to <a href="https://chatgpt.com/gpts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">chatgpt.com/gpts</a></span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Click the "+ Create" button in the top right corner</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Two Building Methods:</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-gray-900">Create Tab (Conversational) - Easy Mode</h5>
                <p className="text-sm text-gray-700">Message the GPT Builder naturally, like chatting with ChatGPT. It guides you through questions about your GPT's purpose and suggests configurations.</p>
                <p className="text-xs text-gray-600 italic mt-1">Example: "Make a French tutor that helps with GCSE preparation"</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-gray-900">Configure Tab (Direct Setup) - Advanced Mode</h5>
                <p className="text-sm text-gray-700">Manually set all parameters yourself. Gives you more precise control over every setting.</p>
                <p className="text-xs text-gray-600 italic mt-1">Best for: Complex configurations, advanced users, or when you know exactly what you want</p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Essential Configuration */}
      <CollapsibleSection title="2. Essential Configuration Settings" defaultOpen={false}>
        <div className="space-y-6">
          {/* Basic Settings */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Basic Settings</h3>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📝 Name</h4>
                <p className="text-sm text-gray-700 mb-2">Clear, descriptive title for your GPT</p>
                <p className="text-xs text-gray-600 italic">Example: "French GCSE Tutor" or "Marketing Copy Assistant"</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📄 Description</h4>
                <p className="text-sm text-gray-700 mb-2">Brief explanation of what your GPT does (appears in search results)</p>
                <p className="text-xs text-gray-600 italic">Example: "Personalized French tutor for GCSE students aiming for Grade 9"</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🖼️ Profile Image</h4>
                <p className="text-sm text-gray-700 mb-2">Custom icon for your GPT (can be AI-generated or uploaded)</p>
                <p className="text-xs text-gray-600 italic">Tip: Use DALL·E to generate a relevant icon within the builder</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">💬 Conversation Starters</h4>
                <p className="text-sm text-gray-700 mb-2">4 example prompts to help users begin (shows on GPT's landing page)</p>
                <div className="text-xs text-gray-600 mt-2">
                  <p className="font-semibold mb-1">Examples:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>"Help me practice French speaking for tomorrow"</li>
                    <li>"Can we work on the subjunctive mood?"</li>
                    <li>"Give me a GCSE-style reading comprehension exercise"</li>
                    <li>"Test my vocabulary on [topic]"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions - Most Important */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">⭐ Instructions (Most Important!)</h3>
            <p className="text-gray-700 mb-4">
              This is where you define your GPT's personality, behavior, and approach. Be specific,
              detailed, and clear. This is the "brain" of your GPT.
            </p>

            <div className="bg-white p-4 rounded border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-2">Example Structure:</h4>
              <pre className="text-xs bg-gray-50 p-4 rounded overflow-x-auto font-mono text-gray-800">
{`You are a French GCSE tutor specializing in helping
students achieve Grade 9.

Core behaviors:
• Adapt explanations to student's learning style
• Use the UK GCSE curriculum framework
• Provide practice questions similar to exam format
• Give encouraging feedback
• Track common mistakes and address them

Always:
• Speak clearly and at an appropriate level
• Use examples relevant to teenage students
• Celebrate progress, no matter how small

Never:
• Give direct exam answers without explanation
• Use complex linguistic terminology unnecessarily
• Discourage students who are struggling`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tips for Writing Great Instructions:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Be Specific:</strong> Clear, detailed guidelines prevent ambiguity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Use Examples:</strong> Show desired behavior with sample responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Set Boundaries:</strong> Define what the GPT should NOT do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Give Personality:</strong> Consistent voice and tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Error Handling:</strong> How to respond when unsure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Knowledge & Files */}
      <CollapsibleSection title="3. Adding Knowledge: Upload Files" defaultOpen={false}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Upload files to give your GPT specialized knowledge. Your GPT can search across all uploaded
            content, quote specific sections, and synthesize information from multiple sources.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">File Limits & Specifications:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Maximum Files:</strong> 20 files per GPT</li>
              <li><strong>File Size:</strong> Up to 512MB per file</li>
              <li><strong>Text Files:</strong> 2M tokens per file max</li>
              <li><strong>Spreadsheets:</strong> ~50MB max</li>
              <li><strong>Images:</strong> 20MB max</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Supported File Types:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Documents:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>PDF</li>
                  <li>Word (.docx)</li>
                  <li>Text (.txt)</li>
                  <li>Markdown (.md)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Files:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>CSV</li>
                  <li>Excel (.xlsx)</li>
                  <li>PowerPoint (.pptx)</li>
                  <li>Code files (most languages)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Best Practices for Knowledge Files:</h4>
            <ol className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span><strong>Organization:</strong> Structure content with clear headers and sections</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span><strong>Format:</strong> Use markdown when possible for better parsing</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span><strong>Focus:</strong> Keep files focused on specific topics or domains</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span><strong>Updates:</strong> Replace files when content changes</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">5.</span>
                <span><strong>Privacy:</strong> Never upload sensitive or private data</span>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Strategic File Organization (20-File Limit):</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>5-7 files:</strong> Instruction protocols and teaching guides</li>
              <li><strong>10-12 files:</strong> Reference materials (documents, specifications)</li>
              <li><strong>1-3 files:</strong> Reserved for updates and testing</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2 italic">
              Tip: Combine related content into single files with clear sections rather than many small files
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Capabilities */}
      <CollapsibleSection title="4. Capabilities: Enable Tools" defaultOpen={false}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Choose which tools your GPT can use. Each capability extends what your GPT can do beyond
            text generation.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">🌐</span>
                Web Browsing
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Search and retrieve current information from the internet
              </p>
              <p className="text-xs text-gray-600 italic">
                Use for: Real-time data, current events, fact-checking, research
              </p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                DALL·E Image Generation
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Create custom images based on text descriptions
              </p>
              <p className="text-xs text-gray-600 italic">
                Use for: Visual aids, diagrams, creative content, illustrations
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">💻</span>
                Code Interpreter & Data Analysis
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Run Python code, analyze data files, create charts
              </p>
              <p className="text-xs text-gray-600 italic">
                Use for: Data analysis, calculations, file processing, visualizations
              </p>
            </div>

            <div className="bg-white border-2 border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">✏️</span>
                Canvas
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Collaborative editing interface for documents and code
              </p>
              <p className="text-xs text-gray-600 italic">
                Use for: Writing, editing, coding projects, iterative content creation
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Recommendation:</h4>
            <p className="text-sm text-gray-700">
              Start with all capabilities enabled unless you have a specific reason to disable one.
              You can always adjust later based on how users interact with your GPT.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Actions (Advanced) */}
      <CollapsibleSection title="5. Actions: Connect to External APIs (Advanced)" defaultOpen={false}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Actions let your GPT interact with external APIs, enabling real-time data retrieval,
            integration with other services, and performing operations beyond ChatGPT's native capabilities.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">⚠️ Advanced Feature</h4>
            <p className="text-sm text-gray-700">
              Actions require technical knowledge of APIs and OpenAPI schemas. Most GPTs don't need
              Actions to be valuable. Skip this section if you're building your first GPT.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">What Actions Enable:</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span>Retrieve data from external databases or CRMs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span>Create tickets, send emails, post updates to other systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span>Access real-time information (weather, stock prices, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                <span>Perform calculations or operations via specialized services</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Setting Up Actions (High-Level):</h4>
            <ol className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span><strong>Create OpenAPI Schema:</strong> Define your API endpoints in OpenAPI format. Use the <a href="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ActionsGPT</a> helper to generate schemas.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span><strong>Choose Authentication:</strong> No auth, API key, or OAuth 2.0</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span><strong>Add to GPT:</strong> Paste schema in Actions section, configure auth, test endpoints</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span><strong>Privacy Policy Required:</strong> Must provide privacy policy URL for GPTs with Actions</span>
              </li>
            </ol>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Important Limits:</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• 45-second timeout per request</li>
              <li>• Request/response payloads must be under 100,000 characters</li>
              <li>• Custom headers not supported</li>
              <li>• Consequential actions (that affect real data) require user confirmation</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Publishing */}
      <CollapsibleSection title="6. Publishing & Sharing Your GPT" defaultOpen={false}>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Once you've configured your GPT, choose how to share it with others.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">🔒</span>
                Private
              </h3>
              <p className="text-sm text-gray-700 mb-2">Only you can access</p>
              <p className="text-xs text-gray-600">
                <strong>Use for:</strong> Personal use, testing, private assistants
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">🔗</span>
                Anyone with Link
              </h3>
              <p className="text-sm text-gray-700 mb-2">Unlisted but shareable</p>
              <p className="text-xs text-gray-600">
                <strong>Use for:</strong> Team sharing, limited distribution, beta testing
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-2xl mr-2">🌍</span>
                Public (GPT Store)
              </h3>
              <p className="text-sm text-gray-700 mb-2">Listed in GPT Store</p>
              <p className="text-xs text-gray-600">
                <strong>Requires:</strong> Verified Builder Profile
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Setting Up Builder Profile (for Public GPTs):</h4>
            <ol className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span><strong>Name Verification:</strong> Uses your ChatGPT Plus billing name. Toggle "Show your name" to display publicly.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span><strong>Domain Verification (Recommended):</strong> Add DNS TXT record to your domain. Displays as "by yourdomain.com"</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span><strong>Social Links (Optional):</strong> Connect Twitter, GitHub, or LinkedIn for credibility</span>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Publishing Process:</h4>
            <ol className="text-sm text-gray-700 space-y-1">
              <li>1. Complete GPT configuration</li>
              <li>2. Click "Publish" or "Share" button</li>
              <li>3. Select visibility level</li>
              <li>4. Choose appropriate category (if public)</li>
              <li>5. Add Privacy Policy URL (required if using Actions)</li>
              <li>6. Submit—most GPTs appear in store within minutes</li>
            </ol>
          </div>
        </div>
      </CollapsibleSection>

      {/* Testing & Best Practices */}
      <CollapsibleSection title="7. Testing & Best Practices" defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-3">Testing Your GPT</h3>
            <p className="text-sm text-gray-700 mb-3">
              Create an evaluation set to thoroughly test your GPT before sharing:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>5-10 representative use cases:</strong> Typical questions or tasks users will ask</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Edge cases:</strong> Unusual requests, ambiguous queries, off-topic questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Complex interactions:</strong> Multi-step tasks, follow-up questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Different personas:</strong> Test as if you're different types of users</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-3">Common Issues & Solutions</h3>

            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900">GPT not following instructions?</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1 mt-1">
                  <li>Make instructions more explicit and detailed</li>
                  <li>Use numbered steps for complex processes</li>
                  <li>Add examples of correct behavior in instructions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Actions not working?</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1 mt-1">
                  <li>Test API in external tool (Postman) first</li>
                  <li>Check authentication settings and credentials</li>
                  <li>Verify callback URLs are correct</li>
                  <li>Review API response format matches schema</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Poor performance?</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1 mt-1">
                  <li>Simplify or reorganize knowledge base files</li>
                  <li>Break complex instructions into clear steps</li>
                  <li>Remove conflicting or redundant guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-3">Best Practices Summary</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Be specific and detailed</li>
                  <li>Use examples to show desired behavior</li>
                  <li>Set clear boundaries</li>
                  <li>Define error handling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Discovery:</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Clear, searchable name</li>
                  <li>Compelling description</li>
                  <li>Relevant category</li>
                  <li>Useful conversation starters</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">Security & Privacy:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Never include API keys or secrets in instructions</li>
              <li>• Use OAuth for user-specific data access</li>
              <li>• Be transparent about data usage in your description</li>
              <li>• Follow OpenAI usage policies</li>
              <li>• Include privacy policy URL for public GPTs with Actions</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Quick Start Checklist */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Checklist</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-gray-900 mb-3">Simple GPT (No Actions)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Name and description</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Core instructions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Upload relevant knowledge files</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Add conversation starters</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Test with 5+ example queries</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Publish privately first</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Iterate based on testing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-gray-900 mb-3">Advanced GPT (With Actions)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Complete simple GPT steps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Design API endpoints needed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Generate OpenAPI schema</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Test API independently</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Configure authentication</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Add to GPT and test each action</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Set consequential flags appropriately</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Verify domain (if public)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Add privacy policy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☐</span>
                <span>Extensive testing before release</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Tips */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-3">Final Tips for Success</h2>
        <ul className="space-y-2 text-lg">
          <li className="flex items-start">
            <span className="mr-3">💡</span>
            <span><strong>Start Simple:</strong> Build basic version first, then add complexity</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">🧪</span>
            <span><strong>Test Thoroughly:</strong> Try edge cases and unusual requests</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">🔄</span>
            <span><strong>Iterate Continuously:</strong> Improve based on real usage</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">👥</span>
            <span><strong>Get Feedback:</strong> Share with test users before going public</span>
          </li>
        </ul>
        <p className="mt-4 text-lg">
          Remember: Your GPT will improve over time. The key is to start, test, and refine based
          on how people actually use it.
        </p>
      </div>
    </div>
  )
}
