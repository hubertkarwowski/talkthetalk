import Image from 'next/image'
import abstract1 from '@/../public/abstract_1.svg'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section } from '@/components/ui/Section'

export const Faq = () => {
  return (
    <Section title="FAQ" subtitle="Got questions? We have answers!">
      <Image
        width={200}
        height={200}
        src={abstract1}
        alt="abstract particles"
        className="absolute -top-10 right-10"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full bg-secondary text-secondary-foreground p-6"
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
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  )
}