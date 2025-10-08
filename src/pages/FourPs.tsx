import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import PersonasTab from './4Ps/PersonasTab'
import PrivacyTab from './4Ps/PrivacyTab'
import ProjectsTab from './4Ps/ProjectsTab'
import PromptsTab from './4Ps/PromptsTab'

export default function FourPs() {
  const [activeTab, setActiveTab] = useState('personas')

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The 4Ps of AI Agent Management
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            When working with AI agents (ChatGPT, Claude, Gemini, etc.), these four dimensions determine how the agent behaves, how your data is treated, how projects are scoped, and how you interact via prompts.
          </p>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveTab('personas')}
              className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">👤</div>
              <div className="font-semibold text-gray-900">Personas</div>
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-gray-900">Privacy</div>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">📁</div>
              <div className="font-semibold text-gray-900">Projects</div>
            </button>
            <button
              onClick={() => setActiveTab('prompts')}
              className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors"
            >
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-900">Prompts</div>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'personas',
              label: 'Personas',
              content: <PersonasTab />
            },
            {
              id: 'privacy',
              label: 'Privacy',
              content: <PrivacyTab />
            },
            {
              id: 'projects',
              label: 'Projects',
              content: <ProjectsTab />
            },
            {
              id: 'prompts',
              label: 'Prompts',
              content: <PromptsTab />
            }
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Platform Comparison Summary */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6">Quick Reference: Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-white/30">
                  <th className="text-left py-3 px-4 font-semibold">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold">Personas</th>
                  <th className="text-left py-3 px-4 font-semibold">Privacy Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Projects</th>
                  <th className="text-left py-3 px-4 font-semibold">Prompting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium">ChatGPT</td>
                  <td className="py-3 px-4">Custom Instructions</td>
                  <td className="py-3 px-4">Opt-out required</td>
                  <td className="py-3 px-4">File uploads, Memory</td>
                  <td className="py-3 px-4">Full support</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium">Claude</td>
                  <td className="py-3 px-4">System prompts</td>
                  <td className="py-3 px-4">Opt-in model</td>
                  <td className="py-3 px-4">Projects feature</td>
                  <td className="py-3 px-4">Full support</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium">Gemini</td>
                  <td className="py-3 px-4">Style settings</td>
                  <td className="py-3 px-4">Google account</td>
                  <td className="py-3 px-4">Drive integration</td>
                  <td className="py-3 px-4">Full support</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Custom GPTs</td>
                  <td className="py-3 px-4">Built-in config</td>
                  <td className="py-3 px-4">Per-GPT settings</td>
                  <td className="py-3 px-4">Knowledge files</td>
                  <td className="py-3 px-4">Template support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Launch Checklist */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">New GPT/Project Launch Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Define persona (voice, tone, expertise)</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Confirm privacy/training toggle set to OFF</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Create project workspace</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Upload context files and documents</span>
              </label>
            </div>
            <div className="space-y-3">
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Draft initial prompt templates</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Test with edge cases and examples</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Review behavior and iterate</span>
              </label>
              <label className="flex items-start p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-gray-700">Document configuration for team</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
