import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FloatingTimer from './FloatingTimer'

const mainNavItems = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/about', labelKey: 'nav.about' },
  { path: '/intro-session', labelKey: 'nav.introduction' },
  { path: '/resources', labelKey: 'nav.resources' },
  { path: '/insights', labelKey: 'nav.insights' },
  { path: '/next-steps', labelKey: 'nav.nextSteps' },
]

const workshopItems = [
  { path: '/my-ai-stack', labelKey: 'nav.myStack' },
  { path: '/what-i-use-ai-for', labelKey: 'nav.whatIUse' },
  { path: '/5ps', labelKey: 'nav.fourPs' },
  { path: '/summary', labelKey: 'nav.summary' },
]

const allNavItems = [...mainNavItems, ...workshopItems]

export default function Navigation() {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [workshopDropdownOpen, setWorkshopDropdownOpen] = useState(false)
  const [floatingTimerOpen, setFloatingTimerOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selectedMinutes = 5

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const isWorkshopActive = workshopItems.some(item => location.pathname === item.path)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setWorkshopDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:grid md:grid-cols-3 md:items-center h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <Link to="/" className="text-xl font-bold text-primary">
                {t('nav.title')}
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="flex items-center justify-center space-x-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              ))}

              {/* Workshop Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setWorkshopDropdownOpen(!workshopDropdownOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isWorkshopActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-expanded={workshopDropdownOpen}
                  aria-haspopup="true"
                >
                  {t('nav.workshop')}
                  <svg
                    className={`w-4 h-4 transition-transform ${workshopDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {workshopDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {workshopItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setWorkshopDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'bg-primary text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          role="menuitem"
                        >
                          {t(item.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Language Switcher */}
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`p-1 rounded transition-transform hover:scale-110 ${
                  i18n.language === 'en' ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label="Switch to English"
                title="English"
              >
                <span className="text-2xl">🇬🇧</span>
              </button>
              <button
                onClick={() => changeLanguage('fi')}
                className={`p-1 rounded transition-transform hover:scale-110 ${
                  i18n.language === 'fi' ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label="Vaihda suomeksi"
                title="Suomi"
              >
                <span className="text-2xl">🇫🇮</span>
              </button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex md:hidden justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-xl font-bold text-primary">
                {t('nav.title')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Language Switcher - Mobile */}
              <div className="flex items-center justify-center gap-4 py-3 border-b border-gray-200 mb-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`p-2 rounded transition-transform hover:scale-110 ${
                    i18n.language === 'en' ? 'ring-2 ring-primary' : 'opacity-60'
                  }`}
                  aria-label="Switch to English"
                >
                  <span className="text-3xl">🇬🇧</span>
                </button>
                <button
                  onClick={() => changeLanguage('fi')}
                  className={`p-2 rounded transition-transform hover:scale-110 ${
                    i18n.language === 'fi' ? 'ring-2 ring-primary' : 'opacity-60'
                  }`}
                  aria-label="Vaihda suomeksi"
                >
                  <span className="text-3xl">🇫🇮</span>
                </button>
              </div>

              {allNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              ))}

              {/* Timer options in mobile menu - COMMENTED OUT */}
              {/* <div className="border-t border-gray-200 pt-2 mt-2">
                <p className="px-3 py-2 text-xs font-semibold text-gray-600">Timer</p>
                {timerOptions.map((option) => (
                  <button
                    key={option.minutes}
                    onClick={() => {
                      handleTimerSelect(option.minutes)
                      setMobileMenuOpen(false)
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>{option.label}</span>
                    <span>⏱️</span>
                  </button>
                ))}
              </div> */}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Timer */}
      <FloatingTimer
        isOpen={floatingTimerOpen}
        onClose={() => setFloatingTimerOpen(false)}
        minutes={selectedMinutes}
      />
    </>
  )
}
