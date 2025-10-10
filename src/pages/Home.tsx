import { useRef, useState, type MouseEvent } from 'react';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClose = () => {
    handleStop();
    setIsVideoOpen(false);
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="group flex items-center gap-4 rounded-2xl border border-yellow-200 bg-white/90 px-5 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            aria-haspopup="dialog"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-500 group-hover:bg-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 00-4.546 12.32c.347.293.546.712.546 1.156V17a1 1 0 001 1h.01a1 1 0 011 1 3 3 0 006 0 1 1 0 011-1H15a1 1 0 001-1v-1.524c0-.444.199-.863.546-1.156A7 7 0 0012 2z" />
                <path d="M9.343 21a3 3 0 005.314 0H9.343z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">Watch Our Story</p>
              <p className="text-sm text-gray-600">Learn how Finnish AI powers renewable energy</p>
            </div>
          </button>
        </div>

        {/* What is this site about */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is this site about?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This microsite was built in approximately an hour using AI tools. It serves as a practical
            demonstration of what's possible when you leverage modern AI-powered development workflows.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Throughout this resource, I'll walk you through:
          </p>
          <ul className="space-y-2 text-lg text-gray-700 ml-6">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>Introduction to the Session:</strong> Workshop overview and agenda</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>My AI Stack:</strong> The AI tools and platforms I use daily</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>What I Use AI For:</strong> Real-world applications across 5 key areas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>Resources:</strong> AI tools, learning materials, communities, AI terms, and step-by-step app building guides</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This site itself is proof that with the right AI tools and approach, anyone can create
            professional digital solutions quickly and effectively.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Comprehensive Glossary
            </h3>
            <p className="text-gray-600">
              Clear definitions of key AI, ML, and platform terms with links to authoritative sources
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Workshop Materials
            </h3>
            <p className="text-gray-600">
              Detailed agendas, walkthroughs, and resources for hands-on learning experiences
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Practical Guides
            </h3>
            <p className="text-gray-600">
              Step-by-step tutorials for building custom GPTs, deep research, and coding integrations
            </p>
          </div>
        </div>

        {/* What You'll Find */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Find Here</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔍 Deep Research Tools</h3>
              <p className="text-gray-700">
                Comparative guides for Gemini, Claude, Grok, and OpenAI with example prompts and best practices
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🤖 Custom GPT Building</h3>
              <p className="text-gray-700">
                Architecture overviews, prompt design strategies, and agent orchestration techniques
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💻 Coding Integration</h3>
              <p className="text-gray-700">
                IDE workflows, version control, AI assistants, and deployment pipelines
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📖 AI Definitions</h3>
              <p className="text-gray-700">
                Clear, concise explanations of LLMs, embeddings, vector stores, APIs, and more
              </p>
            </div>
          </div>
        </div>
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Finnish AI Renewable Energy Company video modal"
            onClick={handleOverlayClick}
          >
            <div className="flex w-[90vw] max-w-5xl flex-col rounded-3xl bg-neutral-900/95 shadow-2xl backdrop-blur">
              <div className="relative flex-1 overflow-hidden rounded-t-3xl">
                <video
                  ref={videoRef}
                  src="/assets/Finnish_AI_Renewable_Energy_Company.mp4"
                  className="h-full w-full object-contain bg-black"
                  preload="metadata"
                />
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-4 right-4 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Close
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 px-6 py-4">
                <button
                  type="button"
                  onClick={handlePlay}
                  className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                >
                  Play
                </button>
                <button
                  type="button"
                  onClick={handleStop}
                  className="rounded-full bg-neutral-800 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Stop
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:text-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
