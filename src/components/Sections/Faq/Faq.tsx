import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section } from '@/components/customUi/Section'

import abstract1 from '../../../../public/abstract_1.svg'

export const Faq = () => {
  return (
    <Section
      title="FAQ"
      subtitle="Got questions? We have answers!"
      secondaryColor
    >
      <div className={`absolute w-[100px] md:w-[150px] -top-24 left-10 z-10`}>
        <Image src={abstract1} alt="abstract particles" />
      </div>
      <div
        className={`absolute w-[100px] md:w-[150px] -bottom-24 right-10 z-10`}
      >
        <Image src={abstract1} alt="abstract particles" />
      </div>
      <div className="relative">
        <div className="w-full border-amber-200 border-solid border-2">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-secondary text-secondary-foreground p-6 lg:p-24"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  )
}
