import Image from 'next/image'
import abstract1 from '@/../public/abstract_1.svg'

import { Section } from '@/components/ui/Section'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

export const Testimonials = () => {
  return (
    <Section title="TESTIMONIALS" subtitle="Hear what our clients say">
      <Image
        width={200}
        height={200}
        src={abstract1}
        alt="abstract particles"
        className="absolute -top-10 right-10"
      />
      <p className="-mt-10">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim.
      </p>
      <div className="flex flex-col items-center md:flex-row flex-wrap gap-8 lg:justify-between mt-12">
        <TestimonialCard
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco"
          userTitle="Student"
          fullName="Sophie Moore"
        />
        <TestimonialCard
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco"
          userTitle="Student"
          fullName="Sophie Moore"
        />
      </div>
    </Section>
  )
}
