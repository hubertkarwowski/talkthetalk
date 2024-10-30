import Image from 'next/image'
import abstract1 from '@/../public/abstract_1.svg'
import { PenIcon } from 'lucide-react'

import { CardTitle } from '@/components/ui/card'
import { CardWithBorder } from '@/components/ui/CardWithBorder'
import { Section } from '@/components/ui/Section'
import { Separator } from '@/components/ui/separator'

export const Services = () => {
  return (
    <Section title="SERVICES" subtitle="What we do to help you" secondaryColor>
      <div className="flex flex-col items-center md:flex-row flex-wrap gap-8 lg:justify-between">
        <CardWithBorder
          height="360px"
          width="280px"
          headerChildren={
            <PenIcon className="mx-auto" size={60} strokeWidth={1} />
          }
          contentChildren={
            <>
              <Separator className="mb-4" />
              <CardTitle className="text-2xl mb-2">Title #1</CardTitle>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </>
          }
        />
        <CardWithBorder
          height="360px"
          width="280px"
          headerChildren={
            <PenIcon className="mx-auto" size={60} strokeWidth={1} />
          }
          contentChildren={
            <>
              <Separator className="mb-4" />
              <CardTitle className="text-2xl mb-2">Title #1</CardTitle>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </>
          }
        />
        <CardWithBorder
          height="360px"
          width="280px"
          headerChildren={
            <PenIcon className="mx-auto" size={60} strokeWidth={1} />
          }
          contentChildren={
            <>
              <Separator className="mb-4" />
              <CardTitle className="text-2xl mb-2">Title #1</CardTitle>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </>
          }
        />
      </div>
    </Section>
  )
}
