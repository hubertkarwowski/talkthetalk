import type { Metadata } from 'next'

import '../globals.css'

import Footer from '@/components/ui/Footer'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfairDisplay.variable}`}
    >
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
