import { useTranslation } from 'react-i18next'

export default function SessionOverview() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      {/* Learning Philosophy - Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md border-l-4 border-yellow-400 p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('introduction.sessionOverview.heroTitle')}
          </h2>
          <p className="text-xl text-gray-700 italic">
            {t('introduction.sessionOverview.heroSubtitle')}
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.principle1Title')}</h3>
                <p className="text-gray-700">
                  {t('introduction.sessionOverview.principle1Text')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.principle2Title')}</h3>
                <p className="text-gray-700">
                  {t('introduction.sessionOverview.principle2Text')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">📚</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.principle3Title')}</h3>
                <p className="text-gray-700">
                  {t('introduction.sessionOverview.principle3Text')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start">
              <div className="text-3xl mr-4">🎉</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.principle4Title')}</h3>
                <p className="text-gray-700">
                  {t('introduction.sessionOverview.principle4Text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Goals */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('introduction.sessionOverview.goalsTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('introduction.sessionOverview.byEndTitle')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>{t('introduction.sessionOverview.byEnd1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>{t('introduction.sessionOverview.byEnd2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>{t('introduction.sessionOverview.byEnd3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
                <span>{t('introduction.sessionOverview.byEnd4')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('introduction.sessionOverview.whatCoverTitle')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>{t('introduction.sessionOverview.whatCover1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>{t('introduction.sessionOverview.whatCover2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>{t('introduction.sessionOverview.whatCover3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span>{t('introduction.sessionOverview.whatCover4')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Workshop Format */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('introduction.sessionOverview.howWorksTitle')}</h2>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.step1Title')}</h3>
              <p className="text-gray-700">
                {t('introduction.sessionOverview.step1Text')}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.step2Title')}</h3>
              <p className="text-gray-700">
                {t('introduction.sessionOverview.step2Text')}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.step3Title')}</h3>
              <p className="text-gray-700">
                {t('introduction.sessionOverview.step3Text')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expectations */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('introduction.sessionOverview.expectTitle')}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.expect1Title')}</h3>
            <p className="text-sm text-gray-700">
              {t('introduction.sessionOverview.expect1Text')}
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.expect2Title')}</h3>
            <p className="text-sm text-gray-700">
              {t('introduction.sessionOverview.expect2Text')}
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">{t('introduction.sessionOverview.expect3Title')}</h3>
            <p className="text-sm text-gray-700">
              {t('introduction.sessionOverview.expect3Text')}
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('introduction.sessionOverview.needTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('introduction.sessionOverview.requiredTitle')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t('introduction.sessionOverview.required1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t('introduction.sessionOverview.required2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t('introduction.sessionOverview.required3')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('introduction.sessionOverview.helpfulTitle')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>{t('introduction.sessionOverview.helpful1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>{t('introduction.sessionOverview.helpful2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>{t('introduction.sessionOverview.helpful3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
