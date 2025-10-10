import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Photo */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8">
              <img
                src="/assets/APK.jpeg"
                alt="Andrew Kilshaw"
                className="rounded-lg shadow-xl w-full max-w-xs object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {t('about.name')}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {t('about.role')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🇬🇧 {t('about.ukBadge')}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🇺🇸 {t('about.usBadge')}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {t('about.globalBadge')}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('about.intro')}
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.currentFocusTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('about.currentFocusPara1')}
          </p>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('about.currentFocusPara2') }}
          />
        </div>

        {/* Professional Experience */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.experienceTitle')}</h2>

          <div className="space-y-8">
            {/* TalentOptima */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">TalentOptima Ltd</h3>
                  <p className="text-lg text-primary font-semibold">{t('about.talentOptimaRole')}</p>
                </div>
                <span className="text-gray-600 font-medium">{t('about.talentOptimaYears')}</span>
              </div>
              <p className="text-gray-700 mb-3">
                {t('about.talentOptimaPara')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">1.</span>
                  <span>{t('about.talentOptimaPassion1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">2.</span>
                  <span>{t('about.talentOptimaPassion2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">3.</span>
                  <span>{t('about.talentOptimaPassion3')}</span>
                </li>
              </ul>
              <a
                href="https://talentoptima.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-3"
              >
                {t('about.talentOptimaLink')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Sanofi */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('about.sanofiTitle')}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{t('about.sanofiRole')}</p>
                </div>
                <span className="text-gray-600 font-medium">{t('about.sanofiYears')}</span>
              </div>
              <p className="text-gray-700 mb-3">
                {t('about.sanofiPara')}
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('about.sanofiBullet1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('about.sanofiBullet2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('about.sanofiBullet3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('about.sanofiBullet4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('about.sanofiBullet5')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('about.sanofiBullet6')}</span>
                </li>
              </ul>
            </div>

            {/* Shell */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('about.shellTitle')}</h3>
                  <p className="text-lg text-yellow-600 font-semibold">{t('about.shellRole')}</p>
                </div>
                <span className="text-gray-600 font-medium">{t('about.shellYears')}</span>
              </div>
              <p className="text-gray-700 mb-2">
                {t('about.shellPara')}
              </p>
              <p className="text-gray-700 font-semibold">
                {t('about.shellAchievement')}
              </p>
            </div>

            {/* Nike */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('about.nikeTitle')}</h3>
                  <p className="text-lg text-orange-600 font-semibold">{t('about.nikeRole')}</p>
                </div>
                <span className="text-gray-600 font-medium">{t('about.nikeYears')}</span>
              </div>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">{t('about.nikeRole1Title')}</p>
                  <p className="text-sm">{t('about.nikeRole1Desc')}</p>
                </div>
                <div>
                  <p className="font-semibold">{t('about.nikeRole2Title')}</p>
                  <p className="text-sm">{t('about.nikeRole2Desc')}</p>
                </div>
                <div>
                  <p className="font-semibold">{t('about.nikeRole3Title')}</p>
                  <p className="text-sm">{t('about.nikeRole3Desc')}</p>
                </div>
                <div>
                  <p className="font-semibold">{t('about.nikeRole4Title')}</p>
                  <p className="text-sm">{t('about.nikeRole4Desc')}</p>
                </div>
              </div>
            </div>

            {/* BlackRock/BGI */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('about.blackrockTitle')}</h3>
                  <p className="text-lg text-purple-600 font-semibold">{t('about.blackrockRole')}</p>
                </div>
                <span className="text-gray-600 font-medium">{t('about.blackrockYears')}</span>
              </div>
              <p className="text-gray-700 text-sm">
                {t('about.blackrockDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.expertiseTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">{t('about.expertiseAI')}</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• {t('about.expertiseAIBullet1')}</li>
                <li>• {t('about.expertiseAIBullet2')}</li>
                <li>• {t('about.expertiseAIBullet3')}</li>
                <li>• {t('about.expertiseAIBullet4')}</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">{t('about.expertiseOrg')}</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• {t('about.expertiseOrgBullet1')}</li>
                <li>• {t('about.expertiseOrgBullet2')}</li>
                <li>• {t('about.expertiseOrgBullet3')}</li>
                <li>• {t('about.expertiseOrgBullet4')}</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">{t('about.expertiseTalent')}</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• {t('about.expertiseTalentBullet1')}</li>
                <li>• {t('about.expertiseTalentBullet2')}</li>
                <li>• {t('about.expertiseTalentBullet3')}</li>
                <li>• {t('about.expertiseTalentBullet4')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Background */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.educationTitle')}</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold">{t('about.education1')}</p>
                <p className="text-sm text-gray-600">{t('about.education1School')}</p>
              </div>
              <div>
                <p className="font-semibold">{t('about.education2')}</p>
                <p className="text-sm text-gray-600">{t('about.education2School')}</p>
              </div>
              <div>
                <p className="font-semibold">{t('about.education3')}</p>
                <p className="text-sm text-gray-600">{t('about.education3School')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.globalExpTitle')}</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇬🇧</span>
                <span>{t('about.globalExpUK')}</span>
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇺🇸</span>
                <span>{t('about.globalExpUS')}</span>
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇫🇷</span>
                <span>{t('about.globalExpFR')}</span>
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇨🇭</span>
                <span>{t('about.globalExpCH')}</span>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                {t('about.globalExpNote')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact/Networks */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">{t('about.connectTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="font-semibold mb-1">{t('about.connectEmail')}</p>
              <a href="mailto:andrew@talentoptima.co" className="hover:underline">
                andrew@talentoptima.co
              </a>
            </div>
            <div>
              <p className="font-semibold mb-1">{t('about.connectPhone')}</p>
              <a href="tel:+447307332331" className="hover:underline">
                +44 7307 332 331
              </a>
            </div>
            <div>
              <p className="font-semibold mb-1">{t('about.connectLocation')}</p>
              <p>{t('about.connectLocationValue')}</p>
            </div>
          </div>

          <div className="mb-6 pt-6 border-t border-white/20">
            <p className="font-semibold mb-3">{t('about.connectNetworks')}</p>
            <a
              href="https://www.linkedin.com/in/apkilshaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors mb-3"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              {t('about.connectLinkedin')}
            </a>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-sm">
              <strong>{t('about.connectNetworksNote')}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
