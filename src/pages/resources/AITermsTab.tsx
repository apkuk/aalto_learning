import CollapsibleSection from '../../components/CollapsibleSection'

export default function AITermsTab() {
  const termCategories = [
    {
      category: 'Core AI Concepts',
      terms: [
        {
          term: 'LLM',
          fullName: 'Large Language Model',
          definition: 'A type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text. LLMs use deep learning techniques to process and produce language.',
          examples: [
            { name: 'ChatGPT (GPT-5)', url: 'https://chat.openai.com' },
            { name: 'Claude', url: 'https://claude.ai' },
            { name: 'Gemini', url: 'https://gemini.google.com' },
            { name: 'Llama', url: 'https://www.llama.com' }
          ],
          usage: 'Use LLMs for content generation, code writing, analysis, research, translation, summarization, and conversational AI applications. They\'re useful because they can understand context, follow complex instructions, and generate human-quality text across many domains.'
        },
        {
          term: 'Machine Learning',
          fullName: 'Machine Learning (ML)',
          definition: 'A subset of AI where systems learn patterns from data and improve their performance over time without being explicitly programmed for every scenario. The system "learns" from examples rather than following fixed rules.',
          examples: [
            { name: 'TensorFlow', url: 'https://www.tensorflow.org' },
            { name: 'PyTorch', url: 'https://pytorch.org' },
            { name: 'scikit-learn', url: 'https://scikit-learn.org' },
            { name: 'Hugging Face', url: 'https://huggingface.co' }
          ],
          usage: 'Use machine learning for prediction, classification, pattern recognition, and automation tasks. Common applications include spam filters, recommendation systems, fraud detection, image recognition, and predictive analytics. Useful when you have historical data and want the system to make decisions based on patterns in that data.'
        },
        {
          term: 'Agent / MCP',
          fullName: 'AI Agent / Model Context Protocol',
          definition: 'An AI system that can autonomously perform tasks, make decisions, and use tools to achieve goals. MCP (Model Context Protocol) is a standard that enables AI models to securely connect to external data sources and tools.',
          examples: [
            { name: 'OpenAI Agents', url: 'https://platform.openai.com/docs/assistants/overview' },
            { name: 'LangChain Agents', url: 'https://www.langchain.com' },
            { name: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT' },
            { name: 'CrewAI', url: 'https://www.crewai.com' }
          ],
          usage: 'Use agents when you need AI to autonomously complete multi-step tasks, make decisions, interact with external systems (APIs, databases, web), or orchestrate complex workflows. Useful for automation, data analysis, customer service, and any scenario where the AI needs to "take action" beyond just generating text.'
        },
        {
          term: 'Prompt Engineering',
          fullName: 'Prompt Engineering',
          definition: 'The practice of crafting effective instructions and queries to get optimal results from AI models. Involves structuring prompts with context, examples, constraints, and clear instructions.',
          examples: [
            { name: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai' },
            { name: 'OpenAI Prompting', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { name: 'Anthropic Prompt Library', url: 'https://docs.anthropic.com/en/prompt-library/library' },
            { name: 'Learn Prompting', url: 'https://learnprompting.org' }
          ],
          usage: 'Use prompt engineering to maximize AI effectiveness for any task. Critical skill for getting accurate, relevant, and useful outputs. Techniques include few-shot learning (providing examples), chain-of-thought prompting (asking for step-by-step reasoning), and role-based prompts ("You are an expert in..."). Essential for anyone working with AI tools.'
        }
      ]
    },
    {
      category: 'Advanced AI Techniques',
      terms: [
        {
          term: 'RAG',
          fullName: 'Retrieval Augmented Generation',
          definition: 'A technique that enhances AI responses by first retrieving relevant information from a knowledge base, then using that information to generate accurate, contextual answers. Combines search with generation.',
          examples: [
            { name: 'LangChain RAG', url: 'https://python.langchain.com/docs/tutorials/rag/' },
            { name: 'LlamaIndex', url: 'https://www.llamaindex.ai' },
            { name: 'OpenAI Assistants', url: 'https://platform.openai.com/docs/assistants/overview' },
            { name: 'Custom GPTs', url: 'https://chat.openai.com/gpts' }
          ],
          usage: 'Use RAG when you need AI to answer questions based on your own documents, databases, or specialized knowledge. Essential for building AI assistants that need to provide accurate, up-to-date information from specific sources. Reduces hallucinations by grounding responses in retrieved facts.'
        },
        {
          term: 'Fine-tuning',
          fullName: 'Model Fine-tuning',
          definition: 'The process of taking a pre-trained AI model and further training it on specific data to adapt it for a particular task or domain. Like teaching a general expert to specialize in your specific field.',
          examples: [
            { name: 'OpenAI Fine-tuning', url: 'https://platform.openai.com/docs/guides/fine-tuning' },
            { name: 'Anthropic Fine-tuning', url: 'https://docs.anthropic.com/en/docs/fine-tuning' },
            { name: 'Hugging Face', url: 'https://huggingface.co/docs/transformers/training' },
            { name: 'Azure OpenAI', url: 'https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/fine-tuning' }
          ],
          usage: 'Use fine-tuning when you need AI to perform very specific tasks with your organization\'s style, terminology, or proprietary knowledge. More expensive and technical than RAG but provides deeper customization. Best for specialized domains (legal, medical, technical) or when you need consistent tone and format.'
        },
        {
          term: 'Vector Store',
          fullName: 'Vector Database',
          definition: 'A specialized database that stores data as high-dimensional vectors (numerical representations) enabling fast similarity search. It converts text, images, or other data into mathematical representations that capture semantic meaning.',
          examples: [
            { name: 'Pinecone', url: 'https://www.pinecone.io' },
            { name: 'Weaviate', url: 'https://weaviate.io' },
            { name: 'Chroma', url: 'https://www.trychroma.com' },
            { name: 'Qdrant', url: 'https://qdrant.tech' }
          ],
          usage: 'Use vector stores for building AI applications that need to search through large amounts of data by meaning rather than exact keywords. Essential for RAG (Retrieval Augmented Generation) systems, semantic search, recommendation engines, and chatbots that need to reference specific knowledge bases.'
        },
        {
          term: 'Semantic Search',
          fullName: 'Semantic Search',
          definition: 'A search technique that understands the intent and contextual meaning of search queries rather than just matching keywords. It uses AI to find results based on conceptual similarity.',
          examples: [
            { name: 'Perplexity', url: 'https://www.perplexity.ai' },
            { name: 'Google Search', url: 'https://www.google.com' },
            { name: 'Elasticsearch', url: 'https://www.elastic.co' },
            { name: 'Algolia', url: 'https://www.algolia.com' }
          ],
          usage: 'Use semantic search when you need to find information based on meaning rather than exact word matches. Useful for knowledge bases, document search, customer support systems, and any application where users might phrase queries in different ways. More effective than traditional keyword search for complex queries.'
        }
      ]
    },
    {
      category: 'Development Tools & Approaches',
      terms: [
        {
          term: 'IDE',
          fullName: 'Integrated Development Environment',
          definition: 'A software application that provides comprehensive tools for software development including a code editor, debugger, compiler, and other features in a single interface.',
          examples: [
            { name: 'VS Code', url: 'https://code.visualstudio.com' },
            { name: 'Cursor', url: 'https://cursor.sh' },
            { name: 'IntelliJ IDEA', url: 'https://www.jetbrains.com/idea/' },
            { name: 'PyCharm', url: 'https://www.jetbrains.com/pycharm/' }
          ],
          usage: 'Use IDEs for professional software development. They\'re essential for writing, testing, and debugging code efficiently. Modern AI-powered IDEs like Cursor and VS Code with Copilot provide intelligent code completion, bug detection, and AI assistance, making coding accessible even to beginners.'
        },
        {
          term: 'Vibe Coding',
          fullName: 'Vibe Coding (Natural Language Programming)',
          definition: 'A development approach where you describe what you want in natural language and AI generates the code for you. Also called "prompt-driven development" or "AI-assisted coding".',
          examples: [
            { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
            { name: 'Claude Code', url: 'https://claude.com/claude-code' },
            { name: 'Codex', url: 'https://openai.com/codex/' },
            { name: 'Cursor', url: 'https://cursor.sh' }
          ],
          usage: 'Use vibe coding when you want to build software without deep programming knowledge. Perfect for rapid prototyping, creating MVPs, automating tasks, or learning to code. Instead of memorizing syntax, you describe your intent and the AI handles implementation details.'
        }
      ]
    },
    {
      category: 'Multi-modal AI',
      terms: [
        {
          term: 'Voice AI',
          fullName: 'Voice AI Technologies',
          definition: 'AI capabilities for processing and generating spoken language, including speech recognition, transcription, translation, text-to-speech, and real-time voice agents that can have conversations.',
          examples: [
            { name: 'OpenAI Whisper', url: 'https://openai.com/research/whisper' },
            { name: 'Google Speech-to-Text', url: 'https://cloud.google.com/speech-to-text' },
            { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
            { name: 'ChatGPT Voice', url: 'https://chat.openai.com' }
          ],
          usage: 'Use voice AI for transcription of meetings/interviews, real-time translation, creating audiobooks or podcasts from text, building voice assistants, accessibility features, and hands-free interaction. Voice agents can handle customer service calls, conduct research interviews, or provide interactive tutoring.'
        },
        {
          term: 'Image Generation',
          fullName: 'AI Image & Media Generation',
          definition: 'AI models that create images, videos, and visual content from text descriptions or transform existing media. Includes text-to-image, image-to-image, and increasingly video generation capabilities.',
          examples: [
            { name: 'DALL·E 3', url: 'https://openai.com/dall-e-3' },
            { name: 'Midjourney', url: 'https://www.midjourney.com' },
            { name: 'Stable Diffusion', url: 'https://stability.ai' },
            { name: 'Runway ML', url: 'https://runwayml.com' }
          ],
          usage: 'Use image generation for rapid prototyping of visual concepts, creating marketing materials, generating illustrations for presentations, designing UI mockups, or producing unique artwork. Video generation is emerging for creating animations, explainer videos, and short-form content. Useful when you need custom visuals without hiring designers or photographers.'
        },
        {
          term: 'Canvas',
          fullName: 'AI Collaborative Canvas',
          definition: 'An interactive workspace where AI can help create, edit, and refine documents, code, or visual content collaboratively. Provides a side-by-side view for iterative work with AI.',
          examples: [
            { name: 'Claude Canvas', url: 'https://claude.ai' },
            { name: 'ChatGPT Canvas', url: 'https://chat.openai.com' },
            { name: 'Notion AI', url: 'https://www.notion.so/product/ai' },
            { name: 'Miro AI', url: 'https://miro.com/ai/' }
          ],
          usage: 'Use canvas for collaborative writing and editing, code development with real-time feedback, creating structured documents, brainstorming and planning, or any work that benefits from iterative refinement with AI. Canvas allows you to see changes in context rather than replacing entire blocks of text.'
        },
        {
          term: 'Web Search',
          fullName: 'AI-Powered Web Search',
          definition: 'AI capability to search the internet in real-time, retrieve current information, and synthesize findings from multiple sources. Goes beyond static training data to access up-to-date information.',
          examples: [
            { name: 'Perplexity AI', url: 'https://www.perplexity.ai' },
            { name: 'ChatGPT with Search', url: 'https://chat.openai.com' },
            { name: 'Google Gemini', url: 'https://gemini.google.com' },
            { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' }
          ],
          usage: 'Use web search-enabled AI for current events, real-time data (stock prices, weather, sports scores), fact-checking recent information, finding latest research or documentation, comparing current product reviews, or any task requiring information published after the AI\'s training cutoff date.'
        },
        {
          term: 'Code Interpreter',
          fullName: 'Code Interpreter & Computer Use',
          definition: 'AI capability to write and execute code, analyze data files, create visualizations, and increasingly interact with computer interfaces directly to perform tasks. Enables AI to go beyond text generation to actually "do" things.',
          examples: [
            { name: 'ChatGPT Code Interpreter', url: 'https://chat.openai.com' },
            { name: 'Claude Computer Use', url: 'https://www.anthropic.com/news/3-5-models-and-computer-use' },
            { name: 'Google Colab', url: 'https://colab.research.google.com' },
            { name: 'Jupyter Notebooks', url: 'https://jupyter.org' }
          ],
          usage: 'Use code interpreter for data analysis and visualization, processing uploaded files (CSV, Excel, PDFs), mathematical calculations, creating charts and graphs, file format conversions, and running simulations. Computer use extends this to web browsing, form filling, clicking buttons, and interacting with software interfaces autonomously.'
        },
        {
          term: 'File & Semantic Search',
          fullName: 'File Upload & Semantic Search',
          definition: 'AI capability to ingest documents, images, and files, then search through them based on meaning and context rather than just keywords. Creates a knowledge base from your uploaded content.',
          examples: [
            { name: 'ChatGPT File Upload', url: 'https://chat.openai.com' },
            { name: 'Claude Projects', url: 'https://claude.ai' },
            { name: 'Google NotebookLM', url: 'https://notebooklm.google.com' },
            { name: 'Perplexity Collections', url: 'https://www.perplexity.ai' }
          ],
          usage: 'Use file upload and semantic search to analyze contracts or legal documents, research across multiple papers or reports, extract insights from financial statements, compare policy documents, create summaries of large document sets, or build a personal knowledge base. AI can answer questions by finding relevant passages across all uploaded files.'
        }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {termCategories.map((category, categoryIdx) => (
        <CollapsibleSection
          key={categoryIdx}
          title={category.category}
          defaultOpen={categoryIdx === 0}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {category.terms.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {item.term}
                    {item.fullName && item.fullName !== item.term && (
                      <span className="text-lg text-gray-600 font-normal ml-2">
                        ({item.fullName})
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-3">
                    {item.examples.map((example, exIdx) => (
                      <a
                        key={exIdx}
                        href={example.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors"
                      >
                        {example.name} →
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">When & Why to Use:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      ))}
    </div>
  )
}
