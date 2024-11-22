import { Section } from '@/components/customUi/Section'
import { TestimonialCard } from '@/components/customUi/TestimonialCard'

export const Testimonials = () => {
  return (
    <Section title="TESTIMONIALS" subtitle="Hear what our clients say">
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
