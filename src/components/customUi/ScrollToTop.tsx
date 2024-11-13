'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }

  return (
    <div
      className={`border-[2px] border-primary-foreground fixed bottom-10 right-10 cursor-pointer bg-accent p-4 outline-none transition  duration-200 ease-in-out hover:scale-110 z-[9999] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp size={34} className="text-accent-foreground" />
    </div>
  )
}
