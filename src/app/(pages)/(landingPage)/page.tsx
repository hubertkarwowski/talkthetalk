import { Contact } from '@/components/ui/Contact'
import { AboutUs } from '@/components/AboutUs/AboutUs'
import { Faq } from '@/components/Faq/Faq'
import { Hero } from '@/components/Hero/Hero'
import { Pricing } from '@/components/Pricing/Pricing'
import { Services } from '@/components/Services/Services'
import { Testimonials } from '@/components/Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AboutUs />
      <Pricing />
      <Faq />
      <Contact />
    </>
  )
}
