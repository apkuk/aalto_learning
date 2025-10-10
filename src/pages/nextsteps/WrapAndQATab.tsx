import { useTranslation } from 'react-i18next'

export default function WrapAndQATab() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      {/* Duration Badge */}
      <div className="flex justify-end">
        <div className="bg-indigo-100 border-2 border-indigo-400 px-4 py-2 rounded-lg">
          <span className="text-sm font-semibold text-indigo-800">{t('nextSteps.wrap.duration')}</span>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('nextSteps.wrap.takeawaysTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              {t('nextSteps.wrap.coreConceptsTitle')}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">1.</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.wrap.concept1') }} />
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">2.</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.wrap.concept2') }} />
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">3.</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.wrap.concept3') }} />
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">4.</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.wrap.concept4') }} />
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛠️</span>
              {t('nextSteps.wrap.practicalSkillsTitle')}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>{t('nextSteps.wrap.skill1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>{t('nextSteps.wrap.skill2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>{t('nextSteps.wrap.skill3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">✓</span>
                <span>{t('nextSteps.wrap.skill4')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* What You Can Do Now */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('nextSteps.wrap.whatYouCanTitle')}</h2>

        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('nextSteps.wrap.immediateTitle')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.immediate1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.immediate2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.immediate3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.immediate4')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('nextSteps.wrap.nextWeekTitle')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.nextWeek1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.nextWeek2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold text-lg">→</span>
                <span>{t('nextSteps.wrap.nextWeek3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Q&A Format */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('nextSteps.wrap.questionsTitle')}</h2>

        <div className="space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('nextSteps.wrap.yourTimeTitle')}</h3>
            <p className="text-gray-700 mb-4">
              {t('nextSteps.wrap.yourTimeText')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.wrap.commonQuestionsTitle')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t('nextSteps.wrap.commonQ1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t('nextSteps.wrap.commonQ2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t('nextSteps.wrap.commonQ3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t('nextSteps.wrap.commonQ4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t('nextSteps.wrap.commonQ5')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.wrap.tipsTitle')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t('nextSteps.wrap.tip1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t('nextSteps.wrap.tip2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t('nextSteps.wrap.tip3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t('nextSteps.wrap.tip4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Encouragement */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-md p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('nextSteps.wrap.keepPracticingTitle')}
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          {t('nextSteps.wrap.keepPracticingText')}
        </p>
        <div className="bg-white rounded-lg p-6 inline-block">
          <p className="text-gray-800 font-semibold italic" dangerouslySetInnerHTML={{ __html: t('nextSteps.wrap.quoteText') }} />
        </div>
      </div>
    </div>
  )
}
