import { useState } from 'react'
import Timer from '../components/Timer'

export default function TimerPage() {
  const [selectedMinutes, setSelectedMinutes] = useState<number | null>(null)
  const [key, setKey] = useState(0) // Key to force timer remount

  const timerOptions = [
    { minutes: 3, color: 'bg-blue-500 hover:bg-blue-600', label: '3 MIN' },
    { minutes: 5, color: 'bg-purple-500 hover:bg-purple-600', label: '5 MIN' },
    { minutes: 8, color: 'bg-indigo-500 hover:bg-indigo-600', label: '8 MIN' },
    { minutes: 10, color: 'bg-pink-500 hover:bg-pink-600', label: '10 MIN' },
    { minutes: 15, color: 'bg-orange-500 hover:bg-orange-600', label: '15 MIN' },
  ]

  const handleTimerSelect = (minutes: number) => {
    setSelectedMinutes(minutes)
    setKey((prev) => prev + 1) // Force remount to reset timer
  }

  const handleTimerComplete = () => {
    // Optional: Add notification or sound
    console.log('Timer completed!')
  }

  const handleBackToSelection = () => {
    setSelectedMinutes(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {!selectedMinutes ? (
        // Timer Selection Screen
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Workshop Timer
            </h1>
            <p className="text-3xl text-gray-300">
              Select a duration to begin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl w-full">
            {timerOptions.map((option) => (
              <button
                key={option.minutes}
                onClick={() => handleTimerSelect(option.minutes)}
                className={`${option.color} text-white text-4xl font-bold py-20 px-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 active:scale-95 border-4 border-white/20`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="text-8xl">⏱️</div>
                  <div>{option.label}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-400">
              💡 Tip: Timer is visible and large enough for Zoom sharing
            </p>
          </div>
        </div>
      ) : (
        // Timer Display Screen
        <div className="min-h-screen flex flex-col">
          {/* Back button */}
          <div className="p-8">
            <button
              onClick={handleBackToSelection}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xl font-semibold rounded-xl backdrop-blur-sm transition-all duration-200 border border-white/20"
            >
              ← Back to Timer Selection
            </button>
          </div>

          {/* Timer */}
          <div className="flex-grow flex items-center justify-center pb-16">
            <Timer
              key={key}
              minutes={selectedMinutes}
              onComplete={handleTimerComplete}
              onReset={() => setKey((prev) => prev + 1)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
