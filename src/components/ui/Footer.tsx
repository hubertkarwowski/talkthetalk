'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/components/Sections/Header/navLinks'

export default function Footer() {
  const getCurrentYear = useMemo(() => new Date().getUTCFullYear(), [])

  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <footer className="bg-primary text-primary-foreground p-12 text-center px-mobile-global-spacer md:px-md-global-spacer lg:px-lg-global-spacer">
      <Separator />
      <div className="flex flex-col items-center gap-12 py-6 lg:flex-row lg:text-left lg:justify-between">
        <div className="lg:w-[50ch]">
          <h2 className="text-xl">Header</h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum
          </p>
        </div>
        <div>
          <h2 className="text-xl">Links</h2>
          <ul className="mt-4 text-sm flex flex-col items-center justify-between text-primary-foreground gap-4 font-semibold lg:text-left lg:items-start">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className={`${pathname === link.link ? 'font-bold underline underline-offset-8' : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="flex justify-between items-center w-full mt-6">
        <h2 className="lg:w-1/3">LOGO</h2>
        <div className="lg:mt-0 mt-4 flex justify-center items-center gap-4 className='lg:w-1/3'">
          <Facebook />
          <Instagram />
        </div>
        <Button size="lg" className="lg:w-1/3">
          Book a lesson
        </Button>
      </div>
      <p className="text-gray-100 mt-6">
        Copyright{' '}
        <Link
          href="https://www.hubertkarwowskidev.pl/"
          target="_blank"
          className="underline"
        >
          Hubert Karwowski © {getCurrentYear}
        </Link>{' '}
        All rights reserved
      </p>
    </footer>
  )
}
