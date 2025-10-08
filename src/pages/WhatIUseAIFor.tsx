import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import DeepResearchTab from './whatiuseitfor/DeepResearchTab'
import MediaTab from './whatiuseitfor/MediaTab'
import CodingTab from './whatiuseitfor/CodingTab'
import EfficiencyTab from './whatiuseitfor/EfficiencyTab'
import ExpertiseTab from './whatiuseitfor/ExpertiseTab'

export default function WhatIUseAIFor() {
  const [activeTab, setActiveTab] = useState('deep-research')

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              What I Use AI For
            </h1>
            <div className="bg-yellow-100 border-2 border-yellow-400 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-yellow-800">10 minutes</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Real-world use cases from my daily work - with measurable results
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
            <p className="text-gray-800">
              These aren't theoretical examples - they're actual projects and workflows I use every single day.
              You'll see the transformation from "before AI" to "with AI" for each category.
            </p>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">20+ hours</div>
            <p className="text-gray-700">Saved per week through AI automation</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">$50K+</div>
            <p className="text-gray-700">In avoided costs for developers and designers</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">10x</div>
            <p className="text-gray-700">Faster project completion and iteration</p>
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
              id: 'media',
              label: 'Media',
              content: <MediaTab />
            },
            {
              id: 'coding-dev',
              label: 'Coding & Development',
              content: <CodingTab />
            },
            {
              id: 'efficiency',
              label: 'Efficiency & Automation',
              content: <EfficiencyTab />
            },
            {
              id: 'expertise',
              label: 'Domain Expertise',
              content: <ExpertiseTab />
            }
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What AI Enables:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Speed:</strong> Complete projects in hours instead of weeks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Cost:</strong> Reduce expenses by 80-95% for many tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Capability:</strong> Do things you couldn't before</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✓</span>
                  <span><strong>Iteration:</strong> Try multiple approaches effortlessly</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Principles:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Start small:</strong> Begin with simple tasks to build confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Iterate:</strong> AI gets better with feedback and refinement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Verify:</strong> Always review AI output for accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">→</span>
                  <span><strong>Learn:</strong> Each use case teaches you more about AI's strengths</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
