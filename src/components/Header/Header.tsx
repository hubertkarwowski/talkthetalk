'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/components/Header/navLinks'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-primary py-6 text-primary-foreground px-mobile-global-spacer md:px-md-global-spacer lg:px-lg-global-spacer">
      <nav className=" items-center justify-between hidden md:flex">
        <Link href="/talkthetalk/public">LOGO</Link>
        <ul className="flex items-center justify-between text-primary-foreground gap-4 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <Button size="lg">Book a lesson</Button>
      </nav>
      <nav className="flex items-center justify-between md:hidden relative">
        <Link href="/talkthetalk/public">LOGO</Link>
        {isOpen && (
          <>
            <ul
              className={`absolute py-4 w-full flex flex-col right-0 bg-primary items-center justify-between gap-4 font-semibold ${isOpen ? 'top-16' : 'top-96'}`}
            >
              {navLinks.map((link, index) => (
                <li key={index} className="p-4">
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
              <Button size="lg">Book a lesson</Button>
            </ul>
          </>
        )}
        <Button size="lg" onClick={() => setIsOpen((prevState) => !prevState)}>
          <HamburgerMenuIcon />
        </Button>
      </nav>
    </header>
  )
}
