import { useRef, useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClose = () => {
    handleStop();
    setIsVideoOpen(false);
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="group flex items-center gap-4 rounded-2xl border border-yellow-200 bg-white/90 px-5 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            aria-haspopup="dialog"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-500 group-hover:bg-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 00-4.546 12.32c.347.293.546.712.546 1.156V17a1 1 0 001 1h.01a1 1 0 011 1 3 3 0 006 0 1 1 0 011-1H15a1 1 0 001-1v-1.524c0-.444.199-.863.546-1.156A7 7 0 0012 2z" />
                <path d="M9.343 21a3 3 0 005.314 0H9.343z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">{t('home.videoButton')}</p>
            </div>
          </button>

          <a
            href="https://chatgpt.com/share/68e91205-5520-800a-928d-8a24bf5e484e"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-primary bg-gradient-to-r from-primary to-secondary px-5 py-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white group-hover:bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.06Z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-lg font-semibold text-white">{t('home.ctaButton')}</p>
              <p className="text-sm text-white/90">{t('home.ctaSubtitle')}</p>
            </div>
          </a>
        </div>

        {/* What is this site about */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.siteTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('home.intro1')}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('home.intro2')}
          </p>
          <ul className="space-y-2 text-lg text-gray-700 ml-6">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>{t('home.bullet1Title')}</strong> {t('home.bullet1')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>{t('home.bullet2Title')}</strong> {t('home.bullet2')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>{t('home.bullet3Title')}</strong> {t('home.bullet3')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span><strong>{t('home.bullet4Title')}</strong> {t('home.bullet4')}</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            {t('home.conclusion')}
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('home.feature1Title')}
            </h3>
            <p className="text-gray-600">
              {t('home.feature1')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('home.feature2Title')}
            </h3>
            <p className="text-gray-600">
              {t('home.feature2')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('home.feature3Title')}
            </h3>
            <p className="text-gray-600">
              {t('home.feature3')}
            </p>
          </div>
        </div>

        {/* What You'll Find */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('home.whatYouFind')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔍 {t('home.section1Title')}</h3>
              <p className="text-gray-700">
                {t('home.section1')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🤖 {t('home.section2Title')}</h3>
              <p className="text-gray-700">
                {t('home.section2')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">💻 {t('home.section3Title')}</h3>
              <p className="text-gray-700">
                {t('home.section3')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📖 {t('home.section4Title')}</h3>
              <p className="text-gray-700">
                {t('home.section4')}
              </p>
            </div>
          </div>
        </div>
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Finnish AI Renewable Energy Company video modal"
            onClick={handleOverlayClick}
          >
            <div className="flex w-[90vw] max-w-5xl flex-col rounded-3xl bg-neutral-900/95 shadow-2xl backdrop-blur">
              <div className="relative flex-1 overflow-hidden rounded-t-3xl">
                <video
                  ref={videoRef}
                  src="/assets/Finnish_AI_Renewable_Energy_Company.mp4"
                  className="h-full w-full object-contain bg-black"
                  preload="metadata"
                />
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Close video"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 px-6 py-4">
                <button
                  type="button"
                  onClick={handlePlay}
                  className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                >
                  Play
                </button>
                <button
                  type="button"
                  onClick={handleStop}
                  className="rounded-full bg-neutral-800 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Stop
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
