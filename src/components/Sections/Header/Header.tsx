'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { navLinks } from '@/components/Sections/Header/navLinks'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const ref = useRef<any | null>(null)

  const onMenuClick = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const handleOutSideClick = (event: Event) => {
      if (!ref.current?.contains(event.target)) {
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
      className="fixed z-[9999] w-full flex justify-between lg:justify-around items-center text-primary-foreground py-6 px-mobile-global-spacer md:px-md-global-spacer lg:px-lg-global-spacer bg-primary"
      ref={ref}
    >
      <Link href="/public" className="w-32">
        <h2>logo</h2>
      </Link>
      <ul className="hidden lg:flex items-center gap-4 font-semibold text-base">
        {navLinks.map((nav, index) => (
          <Link
            key={index}
            className={`p-3 whitespace-nowrap hover:bg-primary-foreground hover:text-primary rounded-md transition-all cursor-pointer ${pathname === nav.link ? 'font-bold text-md underline underline-offset-8' : ''}`}
            href={nav.link}
          >
            {nav.title}
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-8">
        <Select>
          <SelectTrigger className="z-50">
            <SelectValue placeholder="EN" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="z-50">
              <SelectLabel>Languages</SelectLabel>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="pl">Polish</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Menu
          className="lg:hidden cursor-pointer block"
          color="white"
          onClick={onMenuClick}
        />
      </div>

      <div
        className={`z-[9999] absolute lg:hidden  left-0 w-full bg-primary flex flex-col items-center gap-6 font-semibold text-md transform transition-transform ${isOpen ? ' opacity-100 top-[4.3rem]' : ' top-[-30rem] opacity-0'}`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
      >
        {navLinks.map((nav, index) => (
          <Link
            key={index}
            className={`z-[9999] list-none w-full text-center p-4 hover:bg-primary-foreground hover:text-primary rounded-md transition-all cursor-pointer ${pathname === nav.link ? 'font-bold underline underline-offset-8' : ''}`}
            href={nav.link}
            onClick={onMenuClick}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </header>
  )
}
