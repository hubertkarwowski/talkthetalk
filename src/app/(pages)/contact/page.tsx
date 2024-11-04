import { ContactForm } from '@/components/ui/ContactForm'
import { Section } from '@/components/ui/Section'

export default function AboutMe() {
  return (
    <div className="pt-24">
      <Section title="CONTACT" subtitle="Are you ready for a lesson?">
        <ContactForm />
      </Section>
    </div>
  )
}
