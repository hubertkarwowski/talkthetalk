import { Contact } from '@/components/customUi/Contact'
import { AboutMe } from '@/components/Sections/AboutMe/AboutMe'
import { BlogSection } from '@/components/Sections/Blog/BlogSection'
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
      <BlogSection />
      <Contact isSecondary />
    </>
  )
}
