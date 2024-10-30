import { AboutUs } from '@/components/AboutUs/AboutUs'
import { Faq } from '@/components/Faq/Faq'
import { Hero } from '@/components/Hero/Hero'
import { Services } from '@/components/Services/Services'
import { Testimonials } from '@/components/Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AboutUs />
      <Faq />
    </>
  )
}
