import React, { ReactNode } from 'react'

interface Props {
  secondaryColor?: boolean
  children: ReactNode
  title?: string
  subtitle?: string
  wrapperClassName?: string
}

export const Section = ({
  secondaryColor,
  children,
  title,
  subtitle,
  wrapperClassName,
}: Props) => {
  return (
    <section
      className={`px-mobile-global-spacer md:px-md-global-spacer lg:px-lg-global-spacer py-20 relative ${secondaryColor ? 'bg-secondary' : 'bg-primary'}`}
    >
      {title && (
        <div className="flex items-center justify-center text-center">
          <div
            className={`w-8 h-0.5 mr-2 ${secondaryColor ? 'bg-accent-foreground' : 'bg-accent'}`}
          />
          <p
            className={`${secondaryColor ? 'text-secondary-foreground' : 'text-primary-foreground'} text-lg font-semibold uppercase tracking-widest
 `}
          >
            {title}
          </p>
          <div
            className={`w-8 h-0.5 ml-2 ${secondaryColor ? 'bg-accent-foreground' : 'bg-accent'}`}
          />
        </div>
      )}
      {subtitle && (
        <h3
          className={`${secondaryColor ? 'text-secondary-foreground' : 'text-primary-foreground'} text-3xl font-bold text-center`}
        >
          {subtitle}
        </h3>
      )}
      <div
        className={`mt-12 max-w-[1000px] mx-auto ${secondaryColor ? 'text-secondary-foreground' : 'text-primary-foreground'} ${wrapperClassName}`}
      >
        {children}
      </div>
    </section>
  )
}
