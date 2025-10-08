import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import AIResourcesTab from './resources/AIResourcesTab'
import LearningResourcesTab from './resources/LearningResourcesTab'
import CommunitiesTab from './resources/CommunitiesTab'
import AITermsTab from './resources/AITermsTab'

export default function Resources() {
  const [activeTab, setActiveTab] = useState('ai-resources')

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

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'ai-resources',
              label: 'Links to AI Resources',
              content: <AIResourcesTab />
            },
            {
              id: 'learning',
              label: 'Learning Resources',
              content: <LearningResourcesTab />
            },
            {
              id: 'communities',
              label: 'Communities & Forums',
              content: <CommunitiesTab />
            },
            {
              id: 'ai-terms',
              label: 'AI Terms & Definitions',
              content: <AITermsTab />
            }
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mt-8">
          <h2 className="text-3xl font-bold mb-4">Workshop Materials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">This Website</h3>
              <p className="text-sm mb-3">
                Built in ~60 minutes using AI tools. View source code on GitHub to see how it was created.
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
