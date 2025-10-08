export default function Resources() {
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
      { name: 'Claude Code', url: 'https://claude.ai', description: 'AI coding assistant with artifacts' },
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
    learning: [
      { name: 'OpenAI Platform Docs', url: 'https://platform.openai.com/docs', description: 'Official OpenAI API documentation' },
      { name: 'Anthropic Docs', url: 'https://docs.anthropic.com', description: 'Claude API and best practices' },
      { name: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai', description: 'Comprehensive prompt engineering resource' },
      { name: 'DeepLearning.AI', url: 'https://learn.deeplearning.ai', description: 'Free AI courses' },
      { name: 'Hugging Face Learn', url: 'https://huggingface.co/learn', description: 'Open-source ML tutorials' },
    ],
    communities: [
      { name: 'OpenAI Community', url: 'https://community.openai.com', description: 'Official OpenAI forum' },
      { name: 'r/artificial', url: 'https://www.reddit.com/r/artificial/', description: 'Reddit AI community' },
      { name: 'AI Stack Exchange', url: 'https://ai.stackexchange.com', description: 'Q&A for AI practitioners' },
    ],
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-lg text-gray-600">
            Curated collection of AI tools, platforms, and learning resources referenced in the workshop.
            All links open in new tabs for easy exploration.
          </p>
        </div>

        {/* AI Platforms */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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

        {/* Learning Resources */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-4xl mr-3">📚</span>
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.learning.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg border-l-4 border-indigo-500 transition-colors group"
              >
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600">
                  {resource.name} →
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Communities */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-4xl mr-3">👥</span>
            Communities & Forums
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {resources.communities.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-teal-50 hover:bg-teal-100 rounded-lg border-l-4 border-teal-500 transition-colors group"
              >
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                  {resource.name} →
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Workshop Materials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">This Website</h3>
              <p className="text-sm mb-3">
                Built in ~15 minutes using AI tools. View source code on GitHub to see how it was created.
              </p>
              <a
                href="https://github.com/apkuk/aalto_learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                View on GitHub →
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Andrew</h3>
              <p className="text-sm mb-3">
                Questions about the workshop? Want to discuss AI implementation for your organization?
              </p>
              <a
                href="mailto:andrew@talentoptima.co"
                className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                andrew@talentoptima.co →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
