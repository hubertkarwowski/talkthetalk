'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Link } from '@/i18n/routing'
import { Menu } from 'lucide-react'

import LocaleSwitcher from '@/components/customUi/LocaleSwitcher'
import { navLinks } from '@/components/Sections/Header/navLinks'

import logo from '../../../../public/logo.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const ref = useRef<HTMLElement | null>(null)

  const onMenuClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [ref, setIsOpen])

  return (
    <header
      className="fixed z-[9999] w-full bg-primary text-primary-foreground py-6 px-mobile-global-spacer md:px-md-global-spacer xl:px-lg-global-spacer border-accent border-b-8 text-sm xl:text-base"
      ref={ref}
    >
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 items-center">
        <div className="col-span-1 flex justify-start w-[200px]">
          <Link href="/">
            <Image src={logo} alt="Talk The Talk Tutoring logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex lg:col-span-2 justify-center items-center gap-4 font-semibold">
          {navLinks.map((nav, index) => (
            <Link
              key={index}
              className={`p-3 whitespace-nowrap hover:bg-primary-foreground hover:text-primary rounded-md transition-all cursor-pointer ${pathname === nav.link ? 'font-bold text-md underline underline-offset-8' : ''}`}
              href={nav.link}
            >
              {nav.title}
            </Link>
          ))}

          <LocaleSwitcher />
        </ul>

        {/* Menu */}
        <div className="flex lg:hidden justify-end">
          <Menu
            className=" cursor-pointer text-accent"
            onClick={onMenuClick}
            size={30}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`z-[9999] absolute lg:hidden left-0 w-full bg-primary flex flex-col items-center gap-6 font-semibold text-md transform transition-transform ${isOpen ? ' opacity-100 top-[10.1rem]' : ' top-[-40rem] opacity-0'}`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
      >
        {navLinks.map((nav, index) => (
          <Link
            key={index}
            className={`list-none w-full text-center p-4 hover:bg-primary-foreground hover:text-primary rounded-md transition-all cursor-pointer ${pathname === nav.link ? 'font-bold underline underline-offset-8' : ''}`}
            href={nav.link}
            onClick={onMenuClick}
          >
            {nav.title}
          </Link>
        ))}
        <div className={`bg-accent list-none w-full text-center`}>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
