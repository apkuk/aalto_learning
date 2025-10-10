import { useTranslation } from 'react-i18next'

export default function WorkshopAgendaTab() {
  const { t } = useTranslation()

  const agenda = [
    {
      title: t('introduction.agenda.item1Title'),
      duration: t('introduction.agenda.item1Duration'),
      description: t('introduction.agenda.item1Desc'),
      color: 'bg-green-100 border-green-400',
      emphasis: [
        t('introduction.agenda.item1Point1'),
        t('introduction.agenda.item1Point2'),
        t('introduction.agenda.item1Point3'),
        t('introduction.agenda.item1Point4'),
        t('introduction.agenda.item1Point5')
      ]
    },
    {
      title: t('introduction.agenda.item2Title'),
      duration: t('introduction.agenda.item2Duration'),
      description: t('introduction.agenda.item2Desc'),
      color: 'bg-blue-100 border-blue-400'
    },
    {
      title: t('introduction.agenda.item3Title'),
      duration: t('introduction.agenda.item3Duration'),
      description: t('introduction.agenda.item3Desc'),
      color: 'bg-purple-100 border-purple-400',
      breakdown: [
        t('introduction.agenda.item3Break1'),
        t('introduction.agenda.item3Break2')
      ]
    },
    {
      title: t('introduction.agenda.item4Title'),
      duration: t('introduction.agenda.item4Duration'),
      description: t('introduction.agenda.item4Desc'),
      color: 'bg-yellow-100 border-yellow-400',
      note: t('introduction.agenda.item4Note')
    },
    {
      title: t('introduction.agenda.item5Title'),
      duration: t('introduction.agenda.item5Duration'),
      description: t('introduction.agenda.item5Desc'),
      color: 'bg-teal-100 border-teal-400',
      breakdown: [
        t('introduction.agenda.item5Break1'),
        t('introduction.agenda.item5Break2')
      ],
      subtopics: [
        t('introduction.agenda.item5Topic1'),
        t('introduction.agenda.item5Topic2'),
        t('introduction.agenda.item5Topic3'),
        t('introduction.agenda.item5Topic4')
      ]
    },
    {
      title: t('introduction.agenda.item6Title'),
      duration: t('introduction.agenda.item6Duration'),
      description: t('introduction.agenda.item6Desc'),
      color: 'bg-red-100 border-red-400',
      subtopics: [
        t('introduction.agenda.item6Topic1'),
        t('introduction.agenda.item6Topic2'),
        t('introduction.agenda.item6Topic3'),
        t('introduction.agenda.item6Topic4'),
        t('introduction.agenda.item6Topic5')
      ]
    },
    {
      title: t('introduction.agenda.item7Title'),
      duration: t('introduction.agenda.item7Duration'),
      description: t('introduction.agenda.item7Desc'),
      color: 'bg-indigo-100 border-indigo-400'
    },
    {
      title: t('introduction.agenda.item8Title'),
      duration: t('introduction.agenda.item8Duration'),
      description: t('introduction.agenda.item8Desc'),
      color: 'bg-pink-100 border-pink-400'
    },
    {
      title: t('introduction.agenda.item9Title'),
      duration: t('introduction.agenda.item9Duration'),
      description: t('introduction.agenda.item9Desc'),
      color: 'bg-orange-100 border-orange-400',
      subtopics: [
        t('introduction.agenda.item9Topic1'),
        t('introduction.agenda.item9Topic2'),
        t('introduction.agenda.item9Topic3'),
        t('introduction.agenda.item9Topic4'),
        t('introduction.agenda.item9Topic5'),
        t('introduction.agenda.item9Topic6'),
        t('introduction.agenda.item9Topic7'),
        t('introduction.agenda.item9Topic8')
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
          <div className="flex items-center">
            <span className="font-semibold mr-2">{t('introduction.agenda.durationLabel')}</span>
            {t('introduction.agenda.durationValue')}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">{t('introduction.agenda.formatLabel')}</span>
            {t('introduction.agenda.formatValue')}
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-lg font-bold text-gray-900">
            {t('introduction.agenda.handsOnNote')}
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
                <p className="font-bold text-gray-800 mb-2">{t('introduction.agenda.item1Focus')}</p>
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
                <p className="font-bold text-gray-800 mb-2">
                  {index === 2 ? t('introduction.agenda.item3Breakdown') : index === 4 ? t('introduction.agenda.item1Focus') : 'Session Breakdown:'}
                </p>
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
                {t('introduction.agenda.item4Note').includes(':') ? item.note : `Note: ${item.note}`}
              </div>
            )}

            {item.subtopics && (
              <div className="mt-4 pl-4 border-l-2 border-gray-300">
                <p className="font-semibold text-gray-800 mb-2">
                  {index === 4 ? t('introduction.agenda.item5Topics') : 'Topics covered:'}
                </p>
                <ul className="space-y-2">
                  {item.subtopics.map((subtopic, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{subtopic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">{t('introduction.agenda.outcomesTitle')}</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 text-2xl">✓</span>
            <span>{t('introduction.agenda.outcome1')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">✓</span>
            <span>{t('introduction.agenda.outcome2')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">✓</span>
            <span>{t('introduction.agenda.outcome3')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">✓</span>
            <span>{t('introduction.agenda.outcome4')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">✓</span>
            <span>{t('introduction.agenda.outcome5')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">✓</span>
            <span>{t('introduction.agenda.outcome6')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
