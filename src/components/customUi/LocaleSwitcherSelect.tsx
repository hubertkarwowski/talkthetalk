'use client'

import { ChangeEvent, ReactNode, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { Locale, usePathname, useRouter } from '@/i18n/routing'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label
      className={clsx(
        'w-full max-w-xs relative inline-block lg:w-[100px] text-primary-foreground',
        isPending && 'transition-opacity [&:disabled]:opacity-50'
      )}
    >
      <p className="sr-only">{label}</p>
      <div className="relative bg-secondary ">
        <select
          className="w-full appearance-none rounded-lg bg-transparent py-3 pl-4 pr-8 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent">
          <ChevronDown />
        </div>
      </div>
    </label>
  )
}
