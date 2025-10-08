import { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  color?: string
}

export default function Card({
  title,
  children,
  className = '',
  color = 'border-primary'
}: CardProps) {
  const baseStyles = 'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow'
  const borderStyles = color ? `border-l-4 ${color}` : ''

  return (
    <div className={`${baseStyles} ${borderStyles} ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}
