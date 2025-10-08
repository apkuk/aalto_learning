interface ResearchTool {
  name: string
  provider: string
  description: string
  strengths: string[]
  limitations: string[]
  bestFor: string
  link: string
  color: string
}

export default function DeepResearch() {
  const tools: ResearchTool[] = [
    {
      name: 'ChatGPT (GPT-4)',
      provider: 'OpenAI',
      description: 'Advanced conversational AI with strong reasoning, coding, and creative capabilities. GPT-4 excels at complex analysis and multi-step problem solving.',
      strengths: [
        'Excellent reasoning and analysis',
        'Strong code generation and debugging',
        'Large context window (128k tokens)',
        'Web browsing capability (Plus/Pro)',
        'DALL-E integration for images'
      ],
      limitations: [
        'Knowledge cutoff (training data limit)',
        'Can be verbose',
        'Occasional hallucinations on facts'
      ],
      bestFor: 'Complex reasoning, coding tasks, creative writing, and general-purpose research',
      link: 'https://chat.openai.com',
      color: 'bg-green-500'
    },
    {
      name: 'Claude',
      provider: 'Anthropic',
      description: 'Constitutional AI focused on being helpful, harmless, and honest. Exceptional at analysis, long-form content, and nuanced understanding.',
      strengths: [
        'Excellent for long documents (200k tokens)',
        'Strong analytical capabilities',
        'Thoughtful, nuanced responses',
        'Great for editing and writing',
        'Artifact feature for code/documents'
      ],
      limitations: [
        'More conservative/cautious',
        'No image generation',
        'Limited web browsing'
      ],
      bestFor: 'Document analysis, research synthesis, technical writing, and detailed explanations',
      link: 'https://claude.ai',
      color: 'bg-orange-500'
    },
    {
      name: 'Gemini',
      provider: 'Google DeepMind',
      description: 'Multimodal AI with deep integration to Google services. Strong at research with access to Google Search and real-time information.',
      strengths: [
        'Real-time web access',
        'Google Search integration',
        'Multimodal (text, image, video)',
        'Large context window (1M+ tokens)',
        'Free tier available'
      ],
      limitations: [
        'Inconsistent response quality',
        'Privacy concerns (Google)',
        'Less specialized than competitors'
      ],
      bestFor: 'Current events research, fact-checking, multimodal tasks, and accessing latest information',
      link: 'https://gemini.google.com',
      color: 'bg-blue-500'
    },
    {
      name: 'Grok',
      provider: 'xAI',
      description: 'AI with real-time access to X (Twitter) data and a more casual, direct communication style. Built for current information and social media insights.',
      strengths: [
        'Real-time X/Twitter integration',
        'Access to current events',
        'Direct, uncensored responses',
        'Social media trend analysis'
      ],
      limitations: [
        'Limited to X Premium users',
        'Newer, less refined',
        'Potential bias toward X data'
      ],
      bestFor: 'Social media research, real-time news, trend analysis, and current events',
      link: 'https://grok.x.ai',
      color: 'bg-gray-800'
    },
    {
      name: 'Perplexity',
      provider: 'Perplexity AI',
      description: 'Search-focused AI that provides sourced answers with citations. Combines LLM capabilities with real-time web search.',
      strengths: [
        'Real-time web search',
        'Automatic citations',
        'Source transparency',
        'Research mode available',
        'Free tier available'
      ],
      limitations: [
        'Limited conversation depth',
        'Focus on factual queries',
        'Less creative/generative'
      ],
      bestFor: 'Research with citations, fact-checking, academic research, and verifiable information',
      link: 'https://www.perplexity.ai',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Deep Research Tools
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Comprehensive comparison of leading AI platforms for deep research, analysis, and information gathering.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Use multiple tools for comprehensive research. Each has unique strengths —
              combine them for best results. Cross-reference important facts across platforms.
            </p>
          </div>
        </div>

        {/* Tool Comparisons */}
        <div className="space-y-6 mb-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`${tool.color} h-2`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{tool.name}</h2>
                    <p className="text-gray-600">{tool.provider}</p>
                  </div>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${tool.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                  >
                    Visit →
                  </a>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Strengths
                    </h3>
                    <ul className="space-y-2">
                      {tool.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <span className="text-orange-500 mr-2">!</span>
                      Limitations
                    </h3>
                    <ul className="space-y-2">
                      {tool.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Best For:</p>
                  <p className="text-sm text-gray-700">{tool.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Best Practices */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Effective Prompt Strategies</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Be specific and provide context</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Request citations and sources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Ask for step-by-step reasoning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Use role prompting ("Act as an expert...")</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Iterate and refine your queries</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verification Techniques</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Cross-reference across multiple AI tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Verify facts with original sources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Check publication dates for currency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Be skeptical of statistical claims</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Use specialized tools for critical research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Example Prompts */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Research Prompts</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Comparative Analysis:</p>
              <code className="text-sm text-gray-700 block bg-gray-50 p-3 rounded">
                "Compare and contrast the main approaches to [topic]. Provide a table showing pros, cons, and use cases for each approach. Include recent developments from 2024-2025."
              </code>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Deep Technical Research:</p>
              <code className="text-sm text-gray-700 block bg-gray-50 p-3 rounded">
                "Explain [technical concept] as if to a senior engineer. Include: 1) Core principles, 2) Implementation considerations, 3) Common pitfalls, 4) Best practices. Provide code examples."
              </code>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Trend Analysis:</p>
              <code className="text-sm text-gray-700 block bg-gray-50 p-3 rounded">
                "What are the latest developments in [field] as of October 2025? Focus on: industry trends, breakthrough research, major product launches, and expert predictions. Cite sources."
              </code>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Problem Solving:</p>
              <code className="text-sm text-gray-700 block bg-gray-50 p-3 rounded">
                "I'm encountering [specific problem]. Walk me through: 1) Likely root causes, 2) Diagnostic steps, 3) Solutions ranked by effectiveness, 4) Prevention strategies. Think step-by-step."
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
