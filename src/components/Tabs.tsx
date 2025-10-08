import { ReactNode } from 'react'

export interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export function Tabs({ tabs, activeTab, onTabChange, className = '' }: TabsProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="border-b border-gray-200">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab-id={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-6 py-4 font-semibold transition-colors relative ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

interface TabPanelProps {
  children: ReactNode
  className?: string
}

export function TabPanel({ children, className = '' }: TabPanelProps) {
  return <div className={className}>{children}</div>
}
