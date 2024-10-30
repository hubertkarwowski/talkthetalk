import React, { ReactNode } from 'react'

interface Props {
  secondaryColor?: boolean
  children: ReactNode
  title?: string
  subtitle?: string
  subtitleClassNames?: string
  titleClassNames?: string
}

export const Section = ({
  secondaryColor,
  children,
  title,
  subtitle,
  subtitleClassNames,
  titleClassNames,
}: Props) => {
  return (
    <section
      className={`px-[100px] py-24 relative ${secondaryColor ? 'bg-secondary' : 'bg-primary'}`}
    >
      {title && (
        <div className="flex items-center">
          <div
            className={`w-8 h-0.5 mr-2 ${secondaryColor ? 'bg-accent-foreground' : 'bg-accent'}`}
          />
          <p
            className={`${secondaryColor ? 'text-secondary-foreground' : 'text-primary-foreground'} ${titleClassNames} text-lg font-semibold uppercase tracking-widest
 `}
          >
            {title}
          </p>
        </div>
      )}
      {subtitle && (
        <h3
          className={`${secondaryColor ? 'text-secondary-foreground' : 'text-primary-foreground'} ${subtitleClassNames} text-3xl font-bold`}
        >
          {subtitle}
        </h3>
      )}
      <div
        className={`mt-12 ${secondaryColor ? 'text-secondary-foreground' : 'text-primary-foreground'}`}
      >
        {children}
      </div>
    </section>
  )
}
