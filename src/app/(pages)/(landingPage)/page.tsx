import { Contact } from '@/components/ui/Contact'
import { AboutMe } from '@/components/Sections/AboutMe/AboutMe'
import { Blog } from '@/components/Sections/Blog/Blog'
import { Faq } from '@/components/Sections/Faq/Faq'
import { Hero } from '@/components/Sections/Hero/Hero'
import { Pricing } from '@/components/Sections/Pricing/Pricing'
import { Services } from '@/components/Sections/Services/Services'
import { Testimonials } from '@/components/Sections/Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AboutMe />
      <Pricing />
      <Faq />
      <Blog />
      <Contact isSecondary />
    </>
  )
}
