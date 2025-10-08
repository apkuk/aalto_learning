import { useState, useEffect } from 'react'
import Timer from './Timer'

interface FloatingTimerProps {
  isOpen: boolean
  onClose: () => void
  minutes: number
}

export default function FloatingTimer({ isOpen, onClose, minutes }: FloatingTimerProps) {
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (isOpen) {
      // Reset timer when opened with new duration
      setKey((prev) => prev + 1)
    }
  }, [isOpen, minutes])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl border-2 border-purple-500/50 overflow-hidden">
        {/* Header */}
        <div className="bg-black/30 px-4 py-2 flex items-center justify-between border-b border-purple-500/30">
          <span className="text-white font-semibold text-sm">Workshop Timer</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close timer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Timer Content */}
        <div className="p-6">
          <Timer
            key={key}
            minutes={minutes}
            onComplete={() => {
              // Optional: Add notification
              console.log('Timer completed!')
            }}
            onReset={() => setKey((prev) => prev + 1)}
          />
        </div>
      </div>
    </div>
  )
}
