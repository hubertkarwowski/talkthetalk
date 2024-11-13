import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="py-48">
      <h2 className="text-center text-5xl">Szukana strona nie istnieje</h2>
      <p className="mt-6 text-center text-2xl">Ślimak zabłądził</p>
      <p className="mt-6 text-center">
        <Link className={buttonVariants({ variant: 'default' })} href="/">
          Wróć do strony głównej
        </Link>
      </p>
    </section>
  )
}