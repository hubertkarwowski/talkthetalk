import Image from 'next/image'

import { ContactForm } from '@/components/customUi/ContactForm'
import { Section } from '@/components/customUi/Section'

import abstract1 from '../../../public/abstract_1.svg'

export const Contact = ({ isSecondary }: { isSecondary?: boolean }) => {
  return (
    <Section
      title="CONTACT"
      subtitle="Are you ready for a lesson?"
      secondaryColor={isSecondary}
    >
      <div className={`absolute w-[100px] md:w-[150px] -top-10 right-10 z-10`}>
        <Image src={abstract1} alt="abstract particles" />
      </div>
      <ContactForm />
    </Section>
  )
}
