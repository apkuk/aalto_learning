import { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  children,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
