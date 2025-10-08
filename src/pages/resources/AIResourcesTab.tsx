export default function AIResourcesTab() {
  const resources = {
    aiPlatforms: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'OpenAI\'s conversational AI - GPT-5 with deep research' },
      { name: 'Claude', url: 'https://claude.ai', description: 'Anthropic\'s AI assistant - excellent for analysis and coding' },
      { name: 'Gemini', url: 'https://gemini.google.com', description: 'Google\'s multimodal AI with real-time web access' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai', description: 'AI-powered search with citations' },
      { name: 'Grok', url: 'https://grok.x.ai', description: 'X\'s AI with real-time social media access' },
    ],
    codingTools: [
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI pair programmer in your IDE' },
      { name: 'Claude Code', url: 'https://claude.com/claude-code', description: 'AI coding assistant with artifacts' },
      { name: 'VS Code', url: 'https://code.visualstudio.com', description: 'Free, powerful code editor' },
      { name: 'Cursor', url: 'https://cursor.sh', description: 'AI-first code editor' },
      { name: 'Replit Agent', url: 'https://replit.com', description: 'AI coding agent in browser' },
    ],
    deployment: [
      { name: 'GitHub', url: 'https://github.com', description: 'Version control and code hosting' },
      { name: 'Netlify', url: 'https://www.netlify.com', description: 'Auto-deploy from GitHub - free tier' },
      { name: 'Vercel', url: 'https://vercel.com', description: 'Alternative deployment platform' },
    ],
    imageGeneration: [
      { name: 'DALL-E 3', url: 'https://openai.com/dall-e-3', description: 'OpenAI\'s image generation (via ChatGPT)' },
      { name: 'Midjourney', url: 'https://www.midjourney.com', description: 'High-quality AI art generation' },
      { name: 'Stable Diffusion', url: 'https://stability.ai', description: 'Open-source image generation' },
      { name: 'Adobe Firefly', url: 'https://www.adobe.com/products/firefly.html', description: 'Adobe\'s commercial-safe AI' },
    ],
    automation: [
      { name: 'Make.com', url: 'https://www.make.com', description: 'Visual workflow automation' },
      { name: 'Zapier', url: 'https://zapier.com', description: 'Connect apps and automate workflows' },
      { name: 'n8n', url: 'https://n8n.io', description: 'Open-source workflow automation' },
    ],
  }

  return (
    <div className="space-y-8">
      {/* AI Platforms */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">🤖</span>
          AI Platforms & Chat Assistants
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.aiPlatforms.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border-l-4 border-blue-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">
                {resource.name} →
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Coding Tools */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">💻</span>
          Coding & Development Tools
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.codingTools.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border-l-4 border-purple-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600">
                {resource.name} →
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Deployment */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">🚀</span>
          Deployment & Hosting
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {resources.deployment.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border-l-4 border-green-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600">
                {resource.name} →
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Image Generation */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">🎨</span>
          Image Generation
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.imageGeneration.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-pink-50 hover:bg-pink-100 rounded-lg border-l-4 border-pink-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600">
                {resource.name} →
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Automation */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-4xl mr-3">⚡</span>
          Automation & Workflows
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {resources.automation.map((resource, idx) => (
            <a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border-l-4 border-orange-500 transition-colors group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600">
                {resource.name} →
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
