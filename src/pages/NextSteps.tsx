import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs } from '../components/Tabs'
import WrapAndQATab from './nextsteps/WrapAndQATab'
import MVPSprintTab from './nextsteps/MVPSprintTab'
import AaltoStrategyTab from './nextsteps/AaltoStrategyTab'

export default function NextSteps() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('wrap')

  const tabs = [
    {
      id: 'wrap',
      label: t('nextSteps.tabs.wrap'),
      content: <WrapAndQATab />
    },
    {
      id: 'mvp-sprint',
      label: t('nextSteps.tabs.mvpSprint'),
      content: <MVPSprintTab />
    },
    {
      id: 'aalto-strategy',
      label: 'Aalto Strategy',
      content: <AaltoStrategyTab />
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('nextSteps.header.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('nextSteps.header.subtitle')}
          </p>
        </div>

        {/* Tabbed Content */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
