import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import ChatTab from './mystack/ChatTab'
import MediaTab from './mystack/MediaTab'
import ProductivityTab from './mystack/ProductivityTab'
import CodingDevTab from './mystack/CodingDevTab'
import OtherAppsTab from './mystack/OtherAppsTab'

export default function MyAIStack() {
  const [activeTab, setActiveTab] = useState('chat')

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              My AI Stack
            </h1>
            <div className="bg-purple-100 border-2 border-purple-400 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-purple-800">15 minutes</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            The AI tools and platforms I use daily to supercharge my productivity
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded mt-4">
            <p className="text-gray-800">
              <strong>Session Breakdown:</strong> First 7 minutes - Andrew presents the stack.
              Next 8 minutes - YOU play with the tools yourself!
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How My AI Tools Work Together</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            These tools aren't isolated - they form an integrated workflow that allows me to research,
            create, code, and deploy rapidly. Each tool has its strengths, and knowing when to use
            which one is key to maximizing productivity.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">Thinking & Research</h3>
              <p className="text-sm text-gray-700">
                ChatGPT, Claude, Gemini, Perplexity, and Google AI Studio help me explore ideas, conduct research,
                and refine concepts before execution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Building & Creating</h3>
              <p className="text-sm text-gray-700">
                Coding tools and media generators transform ideas into reality - from websites
                to visual and video assets.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Automation & Deployment</h3>
              <p className="text-sm text-gray-700">
                Productivity platforms and deployment tools keep everything running smoothly
                and make my work instantly accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'chat',
              label: 'Chat',
              content: <ChatTab />
            },
            {
              id: 'media',
              label: 'Media',
              content: <MediaTab />
            },
            {
              id: 'productivity',
              label: 'Productivity',
              content: <ProductivityTab />
            },
            {
              id: 'coding-dev',
              label: 'Coding & Development',
              content: <CodingDevTab />
            },
            {
              id: 'other-apps',
              label: 'Other Cool Apps',
              content: <OtherAppsTab />
            }
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Hands-On Practice */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8 mt-8">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl font-bold text-gray-900">Your Turn: Hands-On Practice!</h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Activities (8 minutes)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">1.</span>
                <div>
                  <strong>Try a Chat AI:</strong> Open ChatGPT, Claude, or Gemini and ask it to explain a concept you're curious about
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">2.</span>
                <div>
                  <strong>Compare Responses:</strong> Ask the same question to two different AI tools and notice the differences
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">3.</span>
                <div>
                  <strong>Explore Perplexity:</strong> Try a research query and see how it provides sources
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">4.</span>
                <div>
                  <strong>Experiment Freely:</strong> Play around with any of these tools - there's no wrong way to explore!
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-gray-800">
              <strong>Remember:</strong> The goal is to get comfortable with the tools. Don't worry about
              "doing it right" - just explore and see what happens!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
