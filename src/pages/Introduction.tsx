import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs } from '../components/Tabs'
import SessionOverview from './Intro/SessionOverview'
import WorkshopAgendaTab from './Intro/WorkshopAgendaTab'

export default function Introduction() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('who-am-i')

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              {t('introduction.header.title')}
            </h1>
            <div className="bg-green-100 border-2 border-green-400 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-green-800">{t('introduction.header.duration')}</span>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            {t('introduction.header.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'who-am-i',
              label: t('introduction.tabs.whoAmI'),
              content: <SessionOverview />
            },
            {
              id: 'session-overview',
              label: t('introduction.tabs.agenda'),
              content: <WorkshopAgendaTab />
            }
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  )
}
