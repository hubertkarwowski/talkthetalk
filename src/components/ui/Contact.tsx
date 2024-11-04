import { ContactForm } from '@/components/ui/ContactForm'
import { Section } from '@/components/ui/Section'

export const Contact = ({ isSecondary }: { isSecondary?: boolean }) => {
  return (
    <Section
      title="CONTACT"
      subtitle="Are you ready for a lesson?"
      secondaryColor={isSecondary}
    >
      <ContactForm />
    </Section>
  )
}
