import CollapsibleSection from '../../components/CollapsibleSection'

export default function BuildAppTab() {
  return (
    <div className="space-y-6">
      {/* Hero Intro */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-4xl font-bold mb-4">Build an App from Scratch: Step-by-Step Workflow</h1>
            <p className="text-xl">
              No prior coding? No problem. Use AI + IDE + Git + Netlify to go from idea → live app in hours.
            </p>
          </div>
          <a
            href="https://chatgpt.com/share/68e91205-5520-800a-928d-8a24bf5e484e"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border-2 border-white bg-white/10 backdrop-blur-sm px-5 py-4 shadow-md transition hover:bg-white/20 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white group-hover:bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.06Z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-base font-semibold text-white whitespace-nowrap">Start your AI Sprint Now!</p>
              <p className="text-xs text-white/90">Build your AI-powered app today</p>
            </div>
          </a>
        </div>

        {/* Flow Timeline */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[120px] text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="text-sm font-semibold">Setup Tools</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="text-3xl mb-2">🐙</div>
              <div className="text-sm font-semibold">Create GitHub</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-sm font-semibold">Setup Netlify</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="text-3xl mb-2">🎤</div>
              <div className="text-sm font-semibold">Voice PRD</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="text-3xl mb-2">🤖</div>
              <div className="text-sm font-semibold">AI Generates Code</div>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-sm font-semibold">Deploy & Iterate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Setup Your Tooling */}
      <CollapsibleSection title="1. Setup Your Tooling" icon="⚙️" defaultOpen={true}>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Get your local development environment ready with the essential tools.
          </p>

          {/* Install VS Code */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Install VS Code</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Download from <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Visual Studio Code</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Free, cross-platform, and well-supported by the community</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Industry-standard code editor with rich extension ecosystem</span>
              </li>
            </ul>
          </div>

          {/* Install AI Coding Agent */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Install / Enable an AI Coding Agent</h3>
            <p className="text-gray-700 mb-4">Two primary options:</p>

            {/* Claude Code */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Claude Code
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Official VS Code extension available in the <a href="https://marketplace.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VS Code Marketplace</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Extension augments a separately installed Claude Code CLI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>In your terminal (inside project folder), run <code className="bg-gray-100 px-2 py-1 rounded">claude</code> to start/link</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Claude Dev</strong> (open source/community extension) is another route that allows autonomous editing and terminal commands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Supports permissioned terminal execution, diff inspections, etc.</span>
                </li>
              </ul>
            </div>

            {/* Codex */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🤖</span>
                Codex (OpenAI)
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Official site: <a href="https://openai.com/codex/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI Codex</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Has CLI and IDE extension options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Link via your ChatGPT/OpenAI account (Plus, Pro, Business, Edu, or Enterprise)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Account & Pricing */}
          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💳 Account / Pricing Considerations</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>Claude Code:</strong> Requires a Claude subscription (Pro, etc.) to fully function</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span><strong>OpenAI/Codex:</strong> Available to ChatGPT Plus/Pro/Business/Enterprise account holders</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Free/trial tiers typically have limited usage quotas</span>
              </li>
            </ul>
          </div>

          {/* Login / Authentication */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">🔐 Login / Authentication</h3>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">1.</span>
                <span>Sign in via your Claude/OpenAI account</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">2.</span>
                <span>In VS Code, open the extension or run the CLI to connect</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">3.</span>
                <span>Verify that the agent sees your workspace (so it knows context)</span>
              </li>
            </ol>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 2: Create GitHub & Repository */}
      <CollapsibleSection title="2. Create GitHub & Repository" icon="🐙" defaultOpen={false}>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Create a remote location to host and version your code, so AI + VS Code can push there and Netlify can deploy.
          </p>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Steps:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">1.</span>
                <div>
                  <strong>Sign up for GitHub</strong> (if not already) — <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">2.</span>
                <div>
                  <strong>Create a new repository</strong> (public or private)
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Click "New repository" button</li>
                    <li>• Give it a meaningful name</li>
                    <li>• Choose public or private visibility</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">3.</span>
                <div>
                  <strong>Clone / link locally</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• In VS Code, open a new folder/workspace</li>
                    <li>• Use <code className="bg-gray-100 px-2 py-1 rounded">git init</code> locally and set remote: <code className="bg-gray-100 px-2 py-1 rounded">git remote add origin [your-repo-url]</code></li>
                    <li>• Or use VS Code's built-in Git/GitHub integration ("Clone Repository")</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">4.</span>
                <div>
                  <strong>Make your first commit/push</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Create empty scaffold or README.md commit</li>
                    <li>• Push to main or master branch</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Expert Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use <code className="bg-white px-2 py-1 rounded">.gitignore</code> to omit node_modules, build artifacts, credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Commit small steps — frequent commits help debugging</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use branch naming for features/fixes (e.g., feature/add-login, fix/button-styling)</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 3: Prepare Netlify & Link to GitHub */}
      <CollapsibleSection title="3. Prepare Netlify & Link to GitHub" icon="🌐" defaultOpen={false}>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Configure hosting/deployment so that when code is pushed to GitHub, Netlify auto-deploys.
          </p>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Steps:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">1.</span>
                <div>
                  <strong>Create a Netlify account</strong> — <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Netlify.com</a>
                  <p className="text-sm text-gray-600 mt-2">Free plan: "Build and deploy free forever" with unlimited deploy previews, custom domains, functions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">2.</span>
                <div>
                  <strong>Link Netlify to GitHub</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• In Netlify dashboard, click "New site from Git"</li>
                    <li>• Authorize GitHub so Netlify can access your repositories</li>
                    <li>• Select your repository & branch</li>
                    <li>• (Optional) Set build commands and publish directory</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">3.</span>
                <div>
                  <strong>Configure netlify.toml file</strong>
                  <p className="text-gray-700 mt-2 mb-2">Create this file in your project root:</p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`[build]
  command = "npm run build"
  publish = "dist"

[context.production.environment]
  # e.g. API keys

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`}
                  </pre>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">4.</span>
                <div>
                  <strong>Initial Deploy / Preview</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Netlify will build on first push</li>
                    <li>• You may see errors — capture logs for debugging</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 4: Voice-Driven PRD Creation */}
      <CollapsibleSection title="4. Voice-Driven PRD Creation" icon="🎤" defaultOpen={false}>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Use voice → transcription → AI to generate your Project Requirements Document (PRD).
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What is a PRD?</h3>
            <p className="text-gray-700">
              A Project Requirements Document outlines the scope, user stories, data model, endpoints, pages, UI structure, tech stack, dependencies, and acceptance criteria for your project.
            </p>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Steps:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">1.</span>
                <div>
                  <strong>In ChatGPT (browser or app), enable microphone</strong> (if supported)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">2.</span>
                <div>
                  <strong>Record yourself for 1-10 minutes describing:</strong>
                  <div className="bg-blue-50 p-4 rounded-lg mt-3 text-sm">
                    <p className="italic text-gray-700">
                      "I want to build a Netlify-based web app. It must have features A, B, C, D. It should be an MVP with &lt;20 files. It should optionally integrate with X API. I want the architecture to be clean with components + routing. After you produce the PRD, I'll iterate on it."
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">3.</span>
                <div>
                  <strong>AI will generate a detailed PRD</strong>
                  <p className="text-gray-700 mt-2">Including: scope, user stories, data model, endpoints, pages, UI structure, tech stack, dependencies</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">4.</span>
                <div>
                  <strong>Review the PRD; refine via chat</strong>
                  <p className="text-gray-700 mt-2">Either with ChatGPT or Claude — iterate until it's exactly what you want</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">5.</span>
                <div>
                  <strong>Optionally convert to alternate format</strong>
                  <p className="text-gray-700 mt-2">Canvas, PDF, markdown — whatever works best for your workflow</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Tip</h3>
            <p className="text-gray-700">
              Always include acceptance criteria, edge cases, and constraints in the PRD for precision. The more specific you are, the better the AI-generated code will be.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 5: Generate Code via AI Agent */}
      <CollapsibleSection title="5. Generate Code via AI Agent" icon="🤖" defaultOpen={false}>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Feed your PRD to the code agent (Claude Code/Codex) to scaffold and generate your application.
          </p>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Steps:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">1.</span>
                <div>
                  <strong>In VS Code, create a clean folder/workspace</strong> (no prior files)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">2.</span>
                <div>
                  <strong>Install & activate your chosen AI agent extension/CLI</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">3.</span>
                <div>
                  <strong>Open the PRD in the editor or provide it via prompt</strong>
                  <p className="text-gray-700 mt-2">Copy the PRD text and paste it into the agent's chat interface</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">4.</span>
                <div>
                  <strong>Use agent "project/scaffold mode"</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• In <strong>Claude Code:</strong> Turn on edit/auto-edit mode (so it can create files)</li>
                    <li>• In <strong>Codex:</strong> Use agent mode or instruct it to "generate full app skeleton and push to GitHub"</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">5.</span>
                <div>
                  <strong>The agent should:</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Create project structure (folders, config files, package.json, index.html, etc.)</li>
                    <li>• Create components/pages/routes/styles</li>
                    <li>• Add placeholder logic/dummy data</li>
                    <li>• Set up API calls (if required)</li>
                    <li>• Run build commands or scripts if needed</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">6.</span>
                <div>
                  <strong>Ask the agent to commit and push to GitHub</strong>
                  <p className="text-gray-700 mt-2">It should use git commands automatically</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Expert Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Supervise the first few generations — examine diffs before accepting changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Limit how much the agent writes at once; break tasks into small chunks (scaffold → UI → logic → tests)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Review generated code for best practices, security issues, and optimization opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 6: Deploy / Fix / Iterate */}
      <CollapsibleSection title="6. Deploy / Fix / Iterate" icon="🚀" defaultOpen={false}>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Push your site live and handle any errors that arise.
          </p>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Steps:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">1.</span>
                <div>
                  <strong>Netlify auto-triggers deploy</strong> when code is pushed to GitHub
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">2.</span>
                <div>
                  <strong>Check deployment status/logs</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• In Netlify, view build logs & errors</li>
                    <li>• Common failures: build command wrong, missing dependencies, misconfigured publish folder</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">3.</span>
                <div>
                  <strong>If deploy fails:</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Copy error log text</li>
                    <li>• Go back to your AI agent and prompt: "Here's the deploy log errors, please fix them and push a corrected commit"</li>
                    <li>• Approve changes in agent, let it commit, push again</li>
                    <li>• Netlify will auto-retry build</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">4.</span>
                <div>
                  <strong>Validate live site</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Open the URL, check homepage, links, assets</li>
                    <li>• Check console errors/broken assets</li>
                    <li>• Test on different devices and browsers</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-lg">5.</span>
                <div>
                  <strong>Iterate improvements</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    <li>• Add validations, styling, error handling</li>
                    <li>• Add tests, optimization, accessibility</li>
                    <li>• Use agent to assist with new features/bug fixes</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎉 Success!</h3>
            <p className="text-gray-700">
              Once your site is live and working, you have a fully functional web application built with AI assistance. From here, you can continue to iterate, add features, and improve based on user feedback.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 7: Tips, Troubleshooting & Best Practices */}
      <CollapsibleSection title="7. Tips, Troubleshooting & Best Practices" icon="💡" defaultOpen={false}>
        <div className="space-y-6">
          {/* Usability Tips */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usability / Non-Technical Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Always backup/commit frequently — AI might overwrite unwanted code</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Start with very minimal MVP — resist overengineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use clear, structured PRDs (user stories, acceptance criteria)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Review diff changes before accepting them</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Limit agent autonomy in early stages; keep human-in-the-loop</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Test locally before pushing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use environment variables for secrets; never embed keys in code</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use .gitignore to avoid leaking build artifacts or local secrets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use lint/formatting tools (ESLint, Prettier)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Name branches/features clearly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Add README.md with setup instructions</span>
              </li>
            </ul>
          </div>

          {/* Troubleshooting */}
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting Common Issues</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">❌ Build cannot find build/ or dist/ folder</h4>
                <p className="text-gray-700 text-sm">→ Check your publish settings in Netlify and ensure build command outputs to correct directory</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">❌ Dependency version mismatches</h4>
                <p className="text-gray-700 text-sm">→ Pin versions in package.json, test locally with same versions</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">❌ Missing environment variables</h4>
                <p className="text-gray-700 text-sm">→ Set in Netlify dashboard and local .env file</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">❌ Agent generating incorrect import/syntax</h4>
                <p className="text-gray-700 text-sm">→ Ask it to target framework (React, Svelte, vanilla JS) explicitly in your prompt</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">❌ Rate limits / AI agent quotas</h4>
                <p className="text-gray-700 text-sm">→ Monitor usage, upgrade subscription if needed</p>
              </div>
            </div>
          </div>

          {/* Final Checklist */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Final Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">VS Code installed</span>
                </label>
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">AI agent active (Claude Code or Codex)</span>
                </label>
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">GitHub repo created</span>
                </label>
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">Netlify linked to GitHub</span>
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">PRD created</span>
                </label>
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">App scaffolded by AI</span>
                </label>
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">Successfully deployed</span>
                </label>
                <label className="flex items-start p-3 bg-white rounded hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-gray-700">Tested and validated</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
