type Messages = typeof import('./src/messages/en.json')
type PlMessages = typeof import('./src/messages/pl.json')

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages, PlMessages {}
}
