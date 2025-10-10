export default function Summary() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Meeting Summary</h1>

        {/* Quick Recap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Quick Recap</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The meeting began with technical difficulties being resolved before transitioning into a discussion about Mika's B2C renewable energy company and their readiness to implement AI solutions. Andrew, a former corporate executive, shared his journey into AI and demonstrated various AI tools and their applications, including document scanning, research, and media creation capabilities. The session concluded with Andrew providing guidance on effective AI usage, emphasizing privacy considerations, prompt engineering, and practical applications for both personal and professional projects.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Next Steps</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Mika to submit the AI survey if not already completed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Team to explore and practice using different AI models that they haven't used before.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Team to implement AI projects following the sprint process outlined by Andrew.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Team to work in small groups to develop AI solutions that could make Aalto Energia the first renewable energy company in Finland powered by AI.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Team to consider how to clean up their data using AI solutions as mentioned during the discussion.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Team to explore deep research methodology using multiple AI models for important projects requiring accuracy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Team to review their AI privacy settings across different platforms they use.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Andrew to provide meeting summary and transcript to the team.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Andrew to potentially return for a follow-up session to help build an actual AI solution.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">Mika to share the website link with the team containing all the resources Andrew presented.</span>
            </li>
          </ul>
        </div>

        {/* Detailed Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Detailed Summary</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resolving Video Call Issues</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew and Mika experienced technical difficulties with their video call, including issues with sound and screen sharing. They eventually resolved the problems and discussed Mika's work with his company, which is a B2C renewable energy firm. Mika mentioned that he has a great team and limited customer contact, which he finds relieving. They briefly touched on a survey that Mika had sent out, noting that only one person had completed it so far.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Solutions in Energy Sector</h3>
              <p className="text-gray-700 leading-relaxed">
                The meeting began with Mika confirming their readiness to implement cutting-edge AI solutions, and Andrew expressed enthusiasm. Mika submitted insights and confirmed details, while Andrew noted the submission. They discussed the use of AI for tasks like document scanning, with Google AI performing well in this area. Mika shared a humorous cultural observation about Swedes and Finns, and the group prepared for introductions. The event, themed "AI Key Coff," aimed to explore AI's significance in the energy sector, with Mika emphasizing its potential impact and inviting Andrew to help navigate this new phase.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Learning and Practical Applications</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew, a former corporate executive, shared his journey into AI after leaving his job of 20 years to focus on learning and applying AI. He demonstrated a quick AI-generated video and outlined his AI stack, which includes tools for thinking and research, building and creating, and automation. Andrew emphasized the importance of hands-on learning with AI and planned to spend the session demonstrating practical applications and allowing participants to experiment with various AI tools.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Tools and Applications Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew demonstrated various AI tools and their applications, including Google AI Studio, Claude, and Google Notebook LM. He explained how to create custom GPT models, use AI for coding and creative writing, and leverage different AI tools for specific tasks. Andrew also shared his methodology for conducting deep research using multiple AI models to ensure accuracy and credibility. He emphasized the importance of using AI tools effectively and responsibly, citing an example of AI-generated research that was later found to be inaccurate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Content Verification Techniques</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew discussed the importance of verifying AI-generated content, particularly in professional settings, and emphasized the use of "deep research" by asking multiple Large Language Models (LLMs) the same question to ensure accuracy. He suggested that participants experiment with different LLMs, such as Google AI Studio, Perplexity, and Claude, to explore their capabilities and create prompts for deep research. Andrew also demonstrated how to access and use these tools, highlighting the benefits of consolidating information from various sources to produce high-quality outputs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Tools for Research and Media</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew and Mika discussed various AI tools for research and media creation. Andrew explained how to use ChatGPT and other AI models like Gemini and Nano Banana for deep research and creating visual content. They explored the differences between Google AI Studio and Gemini, noting that Google AI Studio is free but less accessible, while Gemini offers more features but requires payment. Andrew also touched on the evolving landscape of stock images, suggesting that AI-generated images could soon replace traditional stock photos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Usage Optimization Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew demonstrated AI video generation capabilities and discussed the limitations and potential issues with AI-generated content, particularly with objects like glasses and bottles. He explained how AI can be used for personal assistance and expert advice, emphasizing the importance of verifying information, especially for critical matters like taxes and legal advice. Andrew introduced the "four P's" framework for optimizing AI usage: personas, privacy, projects, and prompts, highlighting the significance of personalizing AI interactions, managing privacy settings, organizing projects for better context, and crafting effective prompts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Privacy Settings and Data Policies</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew discussed the privacy settings and data usage policies of different AI models, highlighting the importance of understanding how personal data is handled. He explained that Anthropic's Claude is more conservative with data by default, while ChatGPT automatically opts users in for data sharing. Andrew also mentioned a past issue where shared chat URLs could be indexed by Google, potentially exposing personal information. He encouraged attendees to review their privacy settings and consider the trade-offs between data sharing and the benefits of AI assistance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Privacy and Prompt Engineering</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew discussed the importance of understanding privacy settings and the risks associated with sharing information on various platforms, emphasizing the need for caution, especially with AI tools like Grok. He highlighted the significance of prompt engineering and provided examples of how to effectively use projects and iteration with AI tools. Andrew also explained the importance of context and feedback in improving AI outputs, noting that while precise prompts are crucial for deep research, iterative feedback is more beneficial for other tasks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Prompt Engineering for MVPs</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew demonstrated how to use AI for prompt engineering and creating minimum viable products (MVPs). He explained a process involving brainstorming, generating ideas, and developing project requirements documents that can be used to create AI-powered solutions. Andrew emphasized the importance of context, privacy, and effective prompting when interacting with AI. He also showed an example of a custom GPT model that collects and analyzes user responses from interviews, demonstrating how free tools can be linked to create useful applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Interview Tool Demo</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew demonstrated a custom GPT application for conducting interviews in English or Finnish, which includes voice capabilities and can be customized with company logos and questions. He encouraged participants to explore the tool and provided guidance on using AI for learning and personal projects, emphasizing that if they don't know how to do something with AI, they can ask AI to teach them. Andrew concluded by recommending that participants choose a personal project to apply AI skills, and provided links to resources and a summary of the meeting for further reference.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Development Without Coding Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew shared his experience with AI learning resources and a structured approach to building AI solutions. He explained how to use AI tools like ChatGPT to create project requirements documents, prototypes, and websites without coding skills, suggesting a sprint-based methodology for teams to develop AI-powered solutions. Mika inquired about using AI to assess and improve data quality, to which Andrew provided guidance on how to structure the problem, gather context, and use AI to analyze and propose solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Prototyping and Tool Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Andrew shared insights on effective AI usage, emphasizing iterative prototyping, time-boxed activities, and leveraging diverse team expertise. He highlighted the importance of focusing on learning specific tools rather than trying to become an AI expert, and demonstrated how to use AI for coding tasks like creating a simple tennis game. Participants expressed interest in applying these concepts to improve their efficiency and learn new AI tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
