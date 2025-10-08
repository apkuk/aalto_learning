import { ReactNode } from 'react'

type BadgeColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray' | 'teal' | 'indigo' | 'pink'
type BadgeSize = 'small' | 'medium' | 'large'

interface BadgeProps {
  children: ReactNode
  color?: BadgeColor
  size?: BadgeSize
  className?: string
}

const colorStyles: Record<BadgeColor, string> = {
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  red: 'bg-red-100 text-red-800 border-red-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  gray: 'bg-gray-100 text-gray-800 border-gray-200',
  teal: 'bg-teal-100 text-teal-800 border-teal-200',
  indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  pink: 'bg-pink-100 text-pink-800 border-pink-200'
}

const sizeStyles: Record<BadgeSize, string> = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-3 py-1 text-sm',
  large: 'px-4 py-2 text-base'
}

export default function Badge({
  children,
  color = 'blue',
  size = 'medium',
  className = ''
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full border'

  return (
    <span className={`${baseStyles} ${colorStyles[color]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  )
}
