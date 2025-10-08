import { useState } from 'react'
import { Tabs } from '../components/Tabs'
import DeepResearchTab from './deep-dive/DeepResearchTab'
import ImageGenerationTab from './deep-dive/ImageGenerationTab'
import CodingTab from './deep-dive/CodingTab'
import EfficiencyTab from './deep-dive/EfficiencyTab'
import ExpertiseTab from './deep-dive/ExpertiseTab'

export default function WorkshopAgenda() {
  const [activeTab, setActiveTab] = useState('deep-research')
  const agenda = [
    {
      title: 'Introduction to the Session',
      duration: '5 minutes',
      description: 'Workshop goals, format, and expectations',
      color: 'bg-green-100 border-green-400',
      emphasis: [
        'HANDS-ON workshop - you will PRACTICE, not just watch',
        'Get your hands dirty with real AI tools',
        'Purpose: Have FUN while learning!'
      ]
    },
    {
      title: 'Introduction to Andrew / Who Am I',
      duration: '10 minutes',
      description: 'Background, AI journey, and credibility in the field',
      color: 'bg-blue-100 border-blue-400'
    },
    {
      title: 'My AI Stack',
      duration: '20 minutes',
      description: 'Overview of tools used and how they integrate',
      color: 'bg-purple-100 border-purple-400',
      breakdown: [
        'First 10 minutes: Andrew presents the AI stack',
        'Next 10 minutes: YOU play with the tools yourself!'
      ]
    },
    {
      title: 'What I Use AI For',
      duration: '10 minutes',
      description: 'Real-world use cases with hands-on practice opportunities',
      color: 'bg-yellow-100 border-yellow-400',
      note: 'Includes hands-on component for participants'
    },
    {
      title: 'Deep Dives',
      duration: '60 minutes',
      description: 'In-depth exploration of key AI applications - HALF presentation, HALF hands-on practice for each topic',
      color: 'bg-red-100 border-red-400',
      subtopics: [
        'Deep Research: Prompt engineering, browsing, and AI agents',
        'Image Generation: DALL·E, Stable Diffusion, and techniques',
        'Coding: Chat-based generation, code vetting, and automation',
        'Efficiency: Workflow automation and agent orchestration',
        'Expertise: Domain specialization and custom models'
      ]
    },
    {
      title: 'Wrap & Q&A',
      duration: '10 minutes',
      description: 'Key takeaways and questions from participants',
      color: 'bg-indigo-100 border-indigo-400'
    },
    {
      title: 'Next Steps / Resources',
      duration: '5 minutes',
      description: 'Links to microsite, GitHub, and further reading',
      color: 'bg-pink-100 border-pink-400'
    },
    {
      title: 'What are you going to do now?',
      duration: 'Sprint Activity',
      description: 'Your hands-on MVP building journey starts here!',
      color: 'bg-orange-100 border-orange-400',
      subtopics: [
        'Go away and brainstorm ideas for your own MVP',
        'Learn how to create a Project Requirements Document (PRD)',
        'Set up VS Code with GitHub Copilot OR Claude Code',
        'Use Claude Pro OR ChatGPT Plus to develop your ideas',
        'Take your PRD and work with coding agents to build a basic MVP',
        'Publish your project to GitHub',
        'Configure GitHub to auto-deploy to Netlify',
        'See and test your live site in action!'
      ]
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Workshop Agenda
            </h1>
            <div className="w-24 h-24 rounded-lg flex items-center justify-center">
              <img
                src="/assets/aalto-energia-logo.svg"
                alt="Aalto Energia Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            2-Hour AI Workshop for Aalto Energia
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Duration:</span>
              2 hours (120 minutes)
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Format:</span>
              HANDS-ON Interactive Workshop
            </div>
          </div>
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-lg font-bold text-gray-900">
              This is a HANDS-ON workshop - you'll PRACTICE, not just watch!
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {agenda.map((item, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md border-l-4 ${item.color} p-6 hover:shadow-xl transition-shadow`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {index + 1}. {item.title}
                </h3>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.duration}
                </span>
              </div>
              <p className="text-gray-700 mb-3">{item.description}</p>

              {item.emphasis && (
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="font-bold text-gray-800 mb-2">Workshop Focus:</p>
                  <ul className="space-y-2">
                    {item.emphasis.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-600 mr-2 font-bold">→</span>
                        <span className="text-gray-800 font-semibold">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.breakdown && (
                <div className="mt-4 bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                  <p className="font-bold text-gray-800 mb-2">Session Breakdown:</p>
                  <ul className="space-y-2">
                    {item.breakdown.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2 font-bold">→</span>
                        <span className="text-gray-800">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.note && (
                <div className="mt-3 text-sm italic text-gray-600 bg-gray-50 p-3 rounded">
                  Note: {item.note}
                </div>
              )}

              {item.title === 'Deep Dives' ? (
                <div className="mt-6">
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
                </div>
              ) : item.subtopics ? (
                <div className="mt-4 pl-4 border-l-2 border-gray-300">
                  <p className="font-semibold text-gray-800 mb-2">Topics covered:</p>
                  <ul className="space-y-2">
                    {item.subtopics.map((subtopic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{subtopic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Workshop Outcomes</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>HANDS-ON experience with modern AI tools and their practical applications</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Real practice building and deploying AI solutions - not just watching!</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Access to curated resources and ongoing support materials</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Practical strategies for integrating AI into your workflow</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>A clear path forward to build your own MVP with AI coding agents</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✓</span>
              <span>Most importantly: Have FUN while learning!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
