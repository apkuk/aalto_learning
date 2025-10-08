import { useState, useEffect, useRef } from 'react'

interface TimerProps {
  minutes: number
  onComplete?: () => void
  onReset?: () => void
}

export default function Timer({ minutes, onComplete, onReset }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isRunning && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            onComplete?.()
            // Play completion sound
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGWi77eaeUxALTKXh8LdjHQU2jdXzxnksBSF1xu/glEcKEla06eeVUAwPUKvm8bllHwU7ltf0x3krBSN4x/DglkcKE1az6eibUAwOTKrk8bVlIQQ9mNn0ynsqBSR5yPDglUcKEVOx5+aVUQ0OT6zo8rJlIQQ')
            audio.play().catch(() => {}) // Ignore errors if audio fails
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, isPaused, timeLeft, onComplete])

  useEffect(() => {
    setTimeLeft(minutes * 60)
    setIsRunning(false)
    setIsPaused(false)
  }, [minutes])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const getProgressPercentage = (): number => {
    return ((minutes * 60 - timeLeft) / (minutes * 60)) * 100
  }

  const getColorClass = (): string => {
    const percentage = (timeLeft / (minutes * 60)) * 100
    if (percentage > 50) return 'text-green-500'
    if (percentage > 20) return 'text-yellow-500'
    return 'text-red-500'
  }

  const handleStart = () => {
    setIsRunning(true)
    setIsPaused(false)
  }

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setTimeLeft(minutes * 60)
    setIsRunning(false)
    setIsPaused(false)
    onReset?.()
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Circular Progress */}
      <div className="relative w-96 h-96 mb-12">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="192"
            cy="192"
            r="176"
            stroke="currentColor"
            strokeWidth="16"
            fill="none"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx="192"
            cy="192"
            r="176"
            stroke="currentColor"
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 176}`}
            strokeDashoffset={`${2 * Math.PI * 176 * (1 - getProgressPercentage() / 100)}`}
            className={`${getColorClass()} transition-all duration-1000 ease-linear`}
            strokeLinecap="round"
          />
        </svg>

        {/* Time display in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-9xl font-bold ${getColorClass()} transition-colors duration-500`}>
              {formatTime(timeLeft)}
            </div>
            <div className="text-2xl text-gray-500 mt-4">
              {minutes} minute timer
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-6">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="px-12 py-6 bg-green-500 hover:bg-green-600 text-white text-3xl font-bold rounded-2xl shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            START
          </button>
        ) : (
          <button
            onClick={handlePause}
            className={`px-12 py-6 ${isPaused ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white text-3xl font-bold rounded-2xl shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95`}
          >
            {isPaused ? 'RESUME' : 'PAUSE'}
          </button>
        )}

        <button
          onClick={handleReset}
          className="px-12 py-6 bg-red-500 hover:bg-red-600 text-white text-3xl font-bold rounded-2xl shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          RESET
        </button>
      </div>

      {/* Status indicator */}
      {isRunning && !isPaused && (
        <div className="mt-8 flex items-center gap-3 text-green-500 text-xl font-semibold">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
          </span>
          Running...
        </div>
      )}

      {isPaused && (
        <div className="mt-8 text-yellow-500 text-xl font-semibold">
          ⏸ Paused
        </div>
      )}

      {timeLeft === 0 && (
        <div className="mt-8 text-red-500 text-3xl font-bold animate-pulse">
          🎉 TIME'S UP! 🎉
        </div>
      )}
    </div>
  )
}
