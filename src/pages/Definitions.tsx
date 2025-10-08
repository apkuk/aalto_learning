interface Definition {
  term: string
  definition: string
  link: string
  category: 'Core Concepts' | 'Technologies' | 'Techniques' | 'Platforms'
}

export default function Definitions() {
  const definitions: Definition[] = [
    {
      term: 'LLM (Large Language Model)',
      definition: 'A deep learning model trained on massive text datasets to understand and generate human-like text. Examples include GPT-4, Claude, and Gemini.',
      link: 'https://openai.com/research/language-models',
      category: 'Core Concepts'
    },
    {
      term: 'API (Application Programming Interface)',
      definition: 'A set of protocols and tools that allows different software applications to communicate with each other. AI APIs enable programmatic access to AI models.',
      link: 'https://platform.openai.com/docs/api-reference',
      category: 'Technologies'
    },
    {
      term: 'Vector Store',
      definition: 'A database optimized for storing and querying high-dimensional vectors (embeddings), enabling efficient similarity search for AI applications.',
      link: 'https://www.pinecone.io/learn/vector-database/',
      category: 'Technologies'
    },
    {
      term: 'Embeddings',
      definition: 'Numerical representations of data (text, images, etc.) as vectors in high-dimensional space, capturing semantic meaning and enabling similarity comparisons.',
      link: 'https://platform.openai.com/docs/guides/embeddings',
      category: 'Core Concepts'
    },
    {
      term: 'Prompt Engineering',
      definition: 'The practice of designing and optimizing input prompts to elicit desired responses from AI models, crucial for effective AI utilization.',
      link: 'https://www.promptingguide.ai/',
      category: 'Techniques'
    },
    {
      term: 'Prompt Chaining',
      definition: 'A technique where the output of one prompt becomes the input for another, enabling complex multi-step reasoning and task completion.',
      link: 'https://docs.anthropic.com/claude/docs/prompt-chaining',
      category: 'Techniques'
    },
    {
      term: 'AI Agent',
      definition: 'An autonomous system that uses AI to perceive its environment, make decisions, and take actions to achieve specific goals without constant human intervention.',
      link: 'https://www.anthropic.com/research/building-effective-agents',
      category: 'Core Concepts'
    },
    {
      term: 'Fine-tuning',
      definition: 'The process of further training a pre-trained model on specific data to specialize it for particular tasks or domains.',
      link: 'https://platform.openai.com/docs/guides/fine-tuning',
      category: 'Techniques'
    },
    {
      term: 'RAG (Retrieval Augmented Generation)',
      definition: 'A technique that enhances LLM responses by retrieving relevant information from external knowledge bases before generating answers.',
      link: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/',
      category: 'Techniques'
    },
    {
      term: 'Token',
      definition: 'The basic unit of text processing in LLMs. A token can be a word, part of a word, or punctuation. Models have token limits for input and output.',
      link: 'https://platform.openai.com/tokenizer',
      category: 'Core Concepts'
    },
    {
      term: 'Temperature',
      definition: 'A parameter controlling randomness in AI model outputs. Lower values (0-0.3) produce focused responses, higher values (0.7-1.0) increase creativity.',
      link: 'https://platform.openai.com/docs/guides/text-generation',
      category: 'Techniques'
    },
    {
      term: 'GPT (Generative Pre-trained Transformer)',
      definition: 'A type of neural network architecture designed for natural language processing, forming the basis of models like GPT-4 and ChatGPT.',
      link: 'https://openai.com/research/gpt-4',
      category: 'Technologies'
    },
    {
      term: 'Multimodal AI',
      definition: 'AI systems capable of processing and generating multiple types of data (text, images, audio, video) in an integrated manner.',
      link: 'https://openai.com/research/gpt-4v-system-card',
      category: 'Core Concepts'
    },
    {
      term: 'Claude',
      definition: 'Anthropic\'s AI assistant focused on being helpful, harmless, and honest, with strong capabilities in analysis, coding, and creative tasks.',
      link: 'https://www.anthropic.com/claude',
      category: 'Platforms'
    },
    {
      term: 'Gemini',
      definition: 'Google\'s multimodal AI model family designed for diverse tasks including text, code, image, and video understanding.',
      link: 'https://deepmind.google/technologies/gemini/',
      category: 'Platforms'
    },
    {
      term: 'Context Window',
      definition: 'The maximum amount of text (in tokens) an AI model can process at once, including both input prompt and generated response.',
      link: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them',
      category: 'Core Concepts'
    }
  ]

  const categories = ['Core Concepts', 'Technologies', 'Techniques', 'Platforms'] as const

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Definitions & Glossary
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive glossary of key AI, ML, and platform terms with links to authoritative sources.
            Click on any term to learn more from official documentation.
          </p>
        </div>

        {/* Definitions by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className={`w-2 h-8 mr-3 rounded ${
                category === 'Core Concepts' ? 'bg-blue-500' :
                category === 'Technologies' ? 'bg-green-500' :
                category === 'Techniques' ? 'bg-purple-500' :
                'bg-orange-500'
              }`}></span>
              {category}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {definitions
                .filter((def) => def.category === category)
                .map((def, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-l-primary"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {def.term}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {def.definition}
                    </p>
                    <a
                      href={def.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.promptingguide.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Prompt Engineering Guide</h3>
              <p className="text-sm text-gray-600">Comprehensive guide to prompt engineering techniques</p>
            </a>
            <a
              href="https://learn.deeplearning.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">DeepLearning.AI</h3>
              <p className="text-sm text-gray-600">Free courses on AI and machine learning</p>
            </a>
            <a
              href="https://huggingface.co/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Hugging Face Learn</h3>
              <p className="text-sm text-gray-600">Open-source ML tutorials and documentation</p>
            </a>
            <a
              href="https://github.com/openai/openai-cookbook"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-1">OpenAI Cookbook</h3>
              <p className="text-sm text-gray-600">Examples and guides for OpenAI API usage</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
