import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="py-12 bg-secondary">
      <h2 className="text-center text-5xl">Szukana strona nie istnieje</h2>
      <p className="mt-6 text-center text-2xl">Ślimak zabłądził</p>
      <p className="mt-6 text-center">
        <Link className={buttonVariants({ variant: 'default' })} href="/public">
          Wróć do strony głównej
        </Link>
      </p>
    </section>
  )
}
