import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FloatingTimer from './FloatingTimer'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/intro-session', label: 'Introduction' },
  { path: '/my-ai-stack', label: 'My AI Stack' },
  { path: '/what-i-use-ai-for', label: 'What I Use AI For' },
  { path: '/5ps', label: '4Ps' },
  { path: '/next-steps', label: 'Next Steps' },
  { path: '/resources', label: 'Resources' },
  { path: '/insights', label: 'Insights' },
  { path: '/summary', label: 'Summary' },
]

const timerOptions = [
  { minutes: 3, color: 'bg-blue-500 hover:bg-blue-600', label: '3 MIN' },
  { minutes: 5, color: 'bg-purple-500 hover:bg-purple-600', label: '5 MIN' },
  { minutes: 8, color: 'bg-indigo-500 hover:bg-indigo-600', label: '8 MIN' },
  { minutes: 10, color: 'bg-pink-500 hover:bg-pink-600', label: '10 MIN' },
  { minutes: 15, color: 'bg-orange-500 hover:bg-orange-600', label: '15 MIN' },
]

export default function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [timerDropdownOpen, setTimerDropdownOpen] = useState(false)
  const [floatingTimerOpen, setFloatingTimerOpen] = useState(false)
  const [selectedMinutes, setSelectedMinutes] = useState(5)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTimerDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleTimerSelect = (minutes: number) => {
    setSelectedMinutes(minutes)
    setFloatingTimerOpen(true)
    setTimerDropdownOpen(false)
  }

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                AI Learning Platform
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Timer Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setTimerDropdownOpen(!timerDropdownOpen)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  Timer ⏱️
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${timerDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {timerDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                      <p className="text-xs font-semibold text-gray-600">Select Duration</p>
                    </div>
                    <div className="py-1">
                      {timerOptions.map((option) => (
                        <button
                          key={option.minutes}
                          onClick={() => handleTimerSelect(option.minutes)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group"
                        >
                          <span className="font-medium text-gray-700 group-hover:text-primary">
                            {option.label}
                          </span>
                          <span className="text-2xl">⏱️</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
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
              {navItems.map((item) => (
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
                  {item.label}
                </Link>
              ))}

              {/* Timer options in mobile menu */}
              <div className="border-t border-gray-200 pt-2 mt-2">
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
              </div>
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
