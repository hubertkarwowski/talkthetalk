import { useLocale, useTranslations } from 'next-intl'

// A Client Component that registers an event listener for
// the `change` event of the select, uses `useRouter`
// to change the locale and uses `useTransition` to display
// a loading state during the transition.
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function LocaleSwitcher() {
  const t = useTranslations('header')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('switch')}>
      <option value="en">{t('en')}</option>
      <option value="pl">{t('pl')}</option>
    </LocaleSwitcherSelect>
  )
}
