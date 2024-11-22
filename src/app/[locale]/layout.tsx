import type { Metadata } from 'next'

import '../globals.css'

import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import Footer from '@/components/customUi/Footer'
import { ScrollToTop } from '@/components/customUi/ScrollToTop'
import { Header } from '@/components/Sections/Header/Header'
import { playfairDisplay, poppins } from '@/app/fonts'

//todo: rewrite metadata
export const metadata: Metadata = {
  description: 'Blog o lokalnych produktach i slow life w słodkim wydaniu',
  authors: [
    {
      name: 'Hubert Karwowski',
      url: 'https://www.linkedin.com/in/hubert-karwowski/',
    },
  ],
  creator: 'Hubert Karwowski',
  title: {
    default: 'Koszyk Ślimaka | Blog o lokalnych produktach i slow life',
    template: `%s | Koszyk Ślimaka`,
  },
  openGraph: {
    title: 'Koszyk Ślimaka | Blog o lokalnych produktach i slow life',
    description: 'Blog o lokalnych produktach i slow life w słodkim wydaniu',
    images: [
      {
        url: 'https://koszykslimaka.pl/images/logo.png',
        width: 1188,
        height: 1188,
      },
    ],
    url: 'https://koszykslimaka.pl',
    siteName: 'Koszyk Ślimaka',
    type: 'website',
    locale: 'pl_PL',
  },
  icons: {
    icon: 'https://koszykslimaka.pl/images/logo.png',
  },
  metadataBase: new URL('https://koszykslimaka.pl'),
  keywords: [
    'slow life',
    'slowlife',
    'koszykslimaka',
    'koszyk slimaka',
    'cozy blog',
    'lokalne',
    'eventy',
    'wydarzenia',
    'blog',
    'wrocław',
  ],
}

interface Props {
  locale: 'en' | 'pl'
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Props
}>) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${playfairDisplay.variable}`}
    >
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="pt-[10.1rem]">{children}</div>
          <ScrollToTop />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
