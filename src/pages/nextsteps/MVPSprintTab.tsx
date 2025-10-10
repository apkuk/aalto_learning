import { useTranslation } from 'react-i18next'
import Badge from '../../components/Badge'

export default function MVPSprintTab() {
  const { t } = useTranslation()

  const steps = [
    {
      number: 1,
      title: t('nextSteps.mvpSprint.step1Title'),
      duration: t('nextSteps.mvpSprint.step1Duration'),
      description: t('nextSteps.mvpSprint.step1Desc'),
      details: [
        t('nextSteps.mvpSprint.step1Detail1'),
        t('nextSteps.mvpSprint.step1Detail2'),
        t('nextSteps.mvpSprint.step1Detail3'),
        t('nextSteps.mvpSprint.step1Detail4')
      ],
      examples: [
        t('nextSteps.mvpSprint.step1Example1'),
        t('nextSteps.mvpSprint.step1Example2'),
        t('nextSteps.mvpSprint.step1Example3'),
        t('nextSteps.mvpSprint.step1Example4')
      ]
    },
    {
      number: 2,
      title: t('nextSteps.mvpSprint.step2Title'),
      duration: t('nextSteps.mvpSprint.step2Duration'),
      description: t('nextSteps.mvpSprint.step2Desc'),
      details: [
        t('nextSteps.mvpSprint.step2Detail1'),
        t('nextSteps.mvpSprint.step2Detail2'),
        t('nextSteps.mvpSprint.step2Detail3'),
        t('nextSteps.mvpSprint.step2Detail4'),
        t('nextSteps.mvpSprint.step2Detail5')
      ],
      prompt: `I want to create a [PROJECT TYPE]. Can you help me write a Project Requirements Document (PRD)?

The project should:
- [Main purpose]
- [Key feature 1]
- [Key feature 2]
- [Key feature 3]

Target users: [Who will use this]
Design: [Any style preferences - modern, minimal, colorful, etc.]

Please create a comprehensive PRD that a coding AI could use to build this project.`
    },
    {
      number: 3,
      title: t('nextSteps.mvpSprint.step3Title'),
      duration: t('nextSteps.mvpSprint.step3Duration'),
      description: t('nextSteps.mvpSprint.step3Desc'),
      options: [
        {
          name: t('nextSteps.mvpSprint.step3OptionA'),
          requirements: [
            t('nextSteps.mvpSprint.step3OptionAReq1'),
            t('nextSteps.mvpSprint.step3OptionAReq2'),
            t('nextSteps.mvpSprint.step3OptionAReq3')
          ]
        },
        {
          name: t('nextSteps.mvpSprint.step3OptionB'),
          requirements: [
            t('nextSteps.mvpSprint.step3OptionBReq1'),
            t('nextSteps.mvpSprint.step3OptionBReq2'),
            t('nextSteps.mvpSprint.step3OptionBReq3')
          ]
        }
      ],
      note: t('nextSteps.mvpSprint.step3Note')
    },
    {
      number: 4,
      title: t('nextSteps.mvpSprint.step4Title'),
      duration: t('nextSteps.mvpSprint.step4Duration'),
      description: t('nextSteps.mvpSprint.step4Desc'),
      steps: [
        t('nextSteps.mvpSprint.step4Step1'),
        t('nextSteps.mvpSprint.step4Step2'),
        t('nextSteps.mvpSprint.step4Step3'),
        t('nextSteps.mvpSprint.step4Step4'),
        t('nextSteps.mvpSprint.step4Step5')
      ],
      tips: [
        t('nextSteps.mvpSprint.step4Tip1'),
        t('nextSteps.mvpSprint.step4Tip2'),
        t('nextSteps.mvpSprint.step4Tip3'),
        t('nextSteps.mvpSprint.step4Tip4')
      ]
    },
    {
      number: 5,
      title: t('nextSteps.mvpSprint.step5Title'),
      duration: t('nextSteps.mvpSprint.step5Duration'),
      description: t('nextSteps.mvpSprint.step5Desc'),
      steps: [
        t('nextSteps.mvpSprint.step5Step1'),
        t('nextSteps.mvpSprint.step5Step2'),
        t('nextSteps.mvpSprint.step5Step3'),
        t('nextSteps.mvpSprint.step5Step4')
      ],
      note: t('nextSteps.mvpSprint.step5Note')
    },
    {
      number: 6,
      title: t('nextSteps.mvpSprint.step6Title'),
      duration: t('nextSteps.mvpSprint.step6Duration'),
      description: t('nextSteps.mvpSprint.step6Desc'),
      steps: [
        t('nextSteps.mvpSprint.step6Step1'),
        t('nextSteps.mvpSprint.step6Step2'),
        t('nextSteps.mvpSprint.step6Step3'),
        t('nextSteps.mvpSprint.step6Step4'),
        t('nextSteps.mvpSprint.step6Step5')
      ],
      bonus: t('nextSteps.mvpSprint.step6Bonus')
    },
    {
      number: 7,
      title: t('nextSteps.mvpSprint.step7Title'),
      duration: t('nextSteps.mvpSprint.step7Duration'),
      description: t('nextSteps.mvpSprint.step7Desc'),
      actions: [
        t('nextSteps.mvpSprint.step7Action1'),
        t('nextSteps.mvpSprint.step7Action2'),
        t('nextSteps.mvpSprint.step7Action3'),
        t('nextSteps.mvpSprint.step7Action4'),
        t('nextSteps.mvpSprint.step7Action5')
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Duration Badge */}
      <div className="flex justify-end">
        <div className="bg-orange-100 border-2 border-orange-400 px-4 py-2 rounded-lg">
          <span className="text-sm font-semibold text-orange-800">{t('nextSteps.mvpSprint.duration')}</span>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          <div className="text-center flex-1 min-w-[300px]">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('nextSteps.mvpSprint.heroTitle')}
            </h2>
            <p className="text-xl text-gray-700">
              {t('nextSteps.mvpSprint.heroSubtitle')}
            </p>
          </div>
          <a
            href="https://chatgpt.com/share/68e91205-5520-800a-928d-8a24bf5e484e"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border-2 border-primary bg-gradient-to-r from-primary to-secondary px-5 py-4 shadow-md transition hover:scale-105 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary self-start"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white group-hover:bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.06Z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-base font-semibold text-white whitespace-nowrap">{t('nextSteps.mvpSprint.ctaButton')}</p>
              <p className="text-xs text-white/90">{t('nextSteps.mvpSprint.ctaSubtitle')}</p>
            </div>
          </a>
        </div>

        <div className="bg-white rounded-lg p-6 mt-6">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('nextSteps.mvpSprint.accomplishTitle')}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">💡</div>
              <p className="font-semibold text-gray-900">{t('nextSteps.mvpSprint.accomplish1Title')}</p>
              <p className="text-sm text-gray-600">{t('nextSteps.mvpSprint.accomplish1Subtitle')}</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">🛠️</div>
              <p className="font-semibold text-gray-900">{t('nextSteps.mvpSprint.accomplish2Title')}</p>
              <p className="text-sm text-gray-600">{t('nextSteps.mvpSprint.accomplish2Subtitle')}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🌐</div>
              <p className="font-semibold text-gray-900">{t('nextSteps.mvpSprint.accomplish3Title')}</p>
              <p className="text-sm text-gray-600">{t('nextSteps.mvpSprint.accomplish3Subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('nextSteps.mvpSprint.needTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.requiredAccountsTitle')}</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.mvpSprint.requiredAccount1') }} />
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.mvpSprint.requiredAccount2') }} />
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.mvpSprint.requiredAccount3') }} />
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.recommendedToolsTitle')}</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.mvpSprint.recommendedTool1') }} />
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: t('nextSteps.mvpSprint.recommendedTool2') }} />
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>{t('nextSteps.mvpSprint.recommendedTool3')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
          <p className="text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: t('nextSteps.mvpSprint.costNote') }} />
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">{t('nextSteps.mvpSprint.guideTitle')}</h2>

        {steps.map((step) => (
          <div key={step.number} className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start mb-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <Badge color="gray" size="small">
                    {step.duration}
                  </Badge>
                </div>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>
            </div>

            {step.details && (
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.step1KeyPoints')}</h4>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 font-bold">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.examples && (
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.step1Examples')}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {step.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.prompt && (
              <div className="bg-purple-50 rounded-lg p-6 mb-4 border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.step2PromptTitle')}</h4>
                <div className="bg-white rounded p-4 font-mono text-sm text-gray-700 whitespace-pre-wrap">
                  {step.prompt}
                </div>
              </div>
            )}

            {step.options && (
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                {step.options.map((option, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">{option.name}</h4>
                    <ul className="space-y-2">
                      {option.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start text-gray-700 text-sm">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {step.steps && (
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.step4Steps')}</h4>
                <ol className="space-y-2">
                  {step.steps.map((substep, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="font-bold text-primary mr-3">{idx + 1}.</span>
                      <span>{substep}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {step.tips && (
              <div className="bg-green-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.step4Tips')}</h4>
                <ul className="space-y-2">
                  {step.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-green-600 mr-2">💡</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.actions && (
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.step7Actions')}</h4>
                <ul className="space-y-2">
                  {step.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2 font-bold">→</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.bonus && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: step.bonus }} />
              </div>
            )}

            {step.note && (
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: step.note }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('nextSteps.mvpSprint.checklistTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.planningTitle')}</h3>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist1')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist2')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist3')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist4')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist5')}</span>
            </label>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-3">{t('nextSteps.mvpSprint.buildingTitle')}</h3>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist6')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist7')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist8')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist9')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist10')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist11')}</span>
            </label>
            <label className="flex items-start cursor-pointer">
              <input type="checkbox" className="mt-1 mr-3" />
              <span className="text-gray-700">{t('nextSteps.mvpSprint.checklist12')}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Final Encouragement */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold mb-4">{t('nextSteps.mvpSprint.finalTitle')}</h2>
        <p className="text-xl mb-6 leading-relaxed">
          {t('nextSteps.mvpSprint.finalText')}
        </p>
        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg font-semibold mb-2">
            {t('nextSteps.mvpSprint.finalQuote')}
          </p>
          <p className="text-sm">
            {t('nextSteps.mvpSprint.finalNote')}
          </p>
        </div>
      </div>
    </div>
  )
}
