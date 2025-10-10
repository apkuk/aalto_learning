import { useTranslation } from 'react-i18next';

export default function Summary() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('summary.title')}</h1>

        {/* Quick Recap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('summary.quickRecap')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('summary.quickRecapText')}
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('summary.nextSteps')}</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps1')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps2')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps3')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps4')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps5')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps6')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span className="text-gray-700">{t('summary.nextSteps7')}</span>
            </li>
          </ul>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">{t('summary.summaryHeading')}</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section1Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section1Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section2Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('summary.section2Text')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section3Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section3Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section4Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section4Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section5Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section5Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section6Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('summary.section6Text')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section7Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section7Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section8Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section8Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section9Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('summary.section9Text')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section10Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section10Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section11Title')}</h3>
              <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('summary.section11Text') }} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('summary.section12Title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('summary.section12Text')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
