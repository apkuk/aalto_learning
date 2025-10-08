export default function SessionOverview() {
  return (
    <div className="space-y-8">
      {/* Learning Philosophy - Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md border-l-4 border-yellow-400 p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            This is a HANDS-ON Workshop
          </h2>
          <p className="text-xl text-gray-700 italic">
            You will PRACTICE, not just watch!
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI is Best Learned by DOING</h3>
                <p className="text-gray-700">
                  Theory is great, but the real magic happens when you get your hands on the tools.
                  Today, you'll be actively experimenting and building alongside me.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You WILL Make Mistakes. That's PERFECT!</h3>
                <p className="text-gray-700">
                  The AI will make mistakes too. This isn't a bug - it's how you learn!
                  Every error teaches you something new about how AI thinks and responds.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">📚</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mistakes Are Your Teachers</h3>
                <p className="text-gray-700">
                  Each unexpected result is an opportunity for insight. We'll embrace them together
                  and discover what they reveal about effective AI interaction.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">🎉</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Have FUN While Learning!</h3>
                <p className="text-gray-700">
                  This isn't a lecture - it's an adventure into what AI can do.
                  Experiment boldly, ask questions freely, and enjoy the journey of discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Goals */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Workshop Goals</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">By the End of Today:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>Understand what AI can (and can't) do for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>Know which AI tools to use for different tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>Have hands-on experience with real AI workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>Feel confident exploring AI on your own</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What We'll Cover:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>My personal AI toolkit and workflow</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>Real-world use cases from my daily work</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>Deep dives into research, coding, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>Building your own AI-powered projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Workshop Format */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Workshop Works</h2>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">I'll Show You First</h3>
              <p className="text-gray-700">
                Brief demonstrations of tools and techniques - just enough to get you oriented.
                We're keeping presentations short so you have maximum time to practice.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Then YOU Try It</h3>
              <p className="text-gray-700">
                Immediately after each demonstration, you'll practice the same techniques yourself.
                This is where the real learning happens - through direct experience.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Learn Together</h3>
              <p className="text-gray-700">
                Questions are encouraged at any time! If something doesn't work as expected,
                we'll troubleshoot together. That's often when the best insights emerge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expectations */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Fast-Paced</h3>
            <p className="text-sm text-gray-700">
              We're covering a lot in 2 hours, so we'll keep things moving. Stay engaged!
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-900 mb-2">Interactive</h3>
            <p className="text-sm text-gray-700">
              This isn't passive learning. You'll be actively using AI tools throughout.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">Iterative</h3>
            <p className="text-sm text-gray-700">
              We'll experiment, learn from results, and refine our approach as we go.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Required for Today:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>A laptop or computer (tablets may be limited)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Internet connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Curiosity and willingness to experiment</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Helpful to Have:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>ChatGPT or Claude account (free tier is fine)</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>GitHub account (for later exercises)</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Open mind about what's possible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
