import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import DeepResearchTab from './deep-dive/DeepResearchTab'
import ImageGenerationTab from './deep-dive/ImageGenerationTab'
import CodingTab from './deep-dive/CodingTab'
import EfficiencyTab from './deep-dive/EfficiencyTab'
import ExpertiseTab from './deep-dive/ExpertiseTab'

export default function DeepDives() {
  const [activeTab, setActiveTab] = useState('deep-research')

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Deep Dives
            </h1>
            <div className="bg-red-100 border-2 border-red-400 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-red-800">50 minutes</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            In-depth exploration of key AI applications - HALF presentation, HALF hands-on practice for each topic
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
            <p className="text-gray-800">
              <strong>Format:</strong> For each deep dive, I'll demonstrate the techniques for a few minutes, then YOU practice yourself. This is where the real learning happens!
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We'll Cover in Deep Dives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Deep Research</h3>
              <p className="text-sm text-gray-700">
                Prompt engineering, browsing, and AI agents for comprehensive research
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-900 mb-2">Image Generation</h3>
              <p className="text-sm text-gray-700">
                Creating visuals with DALL-E, Stable Diffusion, and generation techniques
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 mb-2">Coding</h3>
              <p className="text-sm text-gray-700">
                Chat-based generation, code vetting, and automation workflows
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-sm text-gray-700">
                Workflow automation and agent orchestration for productivity
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-sm text-gray-700">
                Domain specialization and custom models for specific use cases
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'deep-research',
              label: 'Deep Research',
              content: <DeepResearchTab />
            },
            {
              id: 'image-generation',
              label: 'Image Generation',
              content: <ImageGenerationTab />
            },
            {
              id: 'coding',
              label: 'Coding',
              content: <CodingTab />
            },
            {
              id: 'efficiency',
              label: 'Efficiency',
              content: <EfficiencyTab />
            },
            {
              id: 'expertise',
              label: 'Expertise',
              content: <ExpertiseTab />
            }
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Hands-On Reminder */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg p-8 mt-8">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl font-bold text-gray-900">Remember: This is HANDS-ON!</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Each Deep Dive:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">1.</span>
                <div>
                  <strong>Watch the demonstration:</strong> I'll show you the technique in action
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">2.</span>
                <div>
                  <strong>Practice immediately:</strong> YOU try the same technique yourself
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">3.</span>
                <div>
                  <strong>Experiment freely:</strong> Don't worry about making mistakes - that's how you learn!
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">4.</span>
                <div>
                  <strong>Ask questions:</strong> If something doesn't work or you're curious, speak up!
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
            <p className="text-gray-800">
              <strong>Remember:</strong> The AI will make mistakes. You'll make mistakes. That's PERFECT - it's how you learn what works and what doesn't!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
