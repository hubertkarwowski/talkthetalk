import { ContactForm } from '@/components/customUi/ContactForm'
import { Section } from '@/components/customUi/Section'

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
