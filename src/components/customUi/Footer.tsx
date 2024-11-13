'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/components/Sections/Header/navLinks'

import logo from '../../../public/logo.png'

export default function Footer() {
  const getCurrentYear = useMemo(() => new Date().getUTCFullYear(), [])

  const pathname = usePathname()

  return (
    <footer className="bg-primary text-primary-foreground lg:px-lg-global-spacer md:px-md-global-spacer px-mobile-global-spacer">
      <div className="container mx-auto py-14">
        <Separator className="mb-12" />

        <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
          <div className="xl:col-span-3 col-span-12">
            <Link href="/public">
              <Image
                src={logo}
                alt="Talk The Talk Tutoring logo"
                className="h-24"
              />
            </Link>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget
              dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum
            </p>
          </div>
          <div className="xl:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide font-semibold">
              Talk The Talk Tutoring
            </h5>
            <ul className="list-none mt-6 space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className={`${pathname === link.link ? 'font-bold underline underline-offset-8 hover:accent transition-all duration-500 ease-in-out' : 'hover:accent transition-all duration-500 ease-in-out'}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:col-span-2 md:col-span-3 col-span-12">
            <h5 className="tracking-wide font-semibold">Social Media</h5>
            <ul className="list-none mt-6 space-y-2">
              <li className="underline">
                <a href="tel:+48536056177" className="flex items-center gap-2">
                  <Facebook /> <span>Facebook</span>
                </a>
              </li>

              <li className="underline flex items-center gap-2">
                <Instagram /> <span>Instagram</span>
              </li>
            </ul>
          </div>
          <div className="xl:col-span-4 md:col-span-5 col-span-12">
            <h5 className="tracking-wide font-semibold">Contact</h5>
            <ul className="list-none mt-6 space-y-2">
              <li className="underline">
                <a href="tel:+48536056177" className="flex items-center gap-2">
                  <Phone /> <span>+48 536 056 177</span>
                </a>
              </li>
              <li className="underline">
                <a
                  href="mailto:talkthetalktutoringpl@gmail.com"
                  className="flex items-center gap-2 "
                >
                  <Mail /> <span>talkthetalktutoringpl@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Separator />
        <div className="md:text-left text-center container mx-auto py-7 px-6">
          <p className="text-gray-100 mt-6">
            Copyright{' '}
            <Link
              href="https://www.hubertkarwowskidev.pl/"
              target="_blank"
              className="underline"
            >
              Hubert Karwowski &copy; {getCurrentYear}
            </Link>{' '}
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
