import { PenIcon } from 'lucide-react'

import { CardTitle } from '@/components/ui/card'
import { CardWithBorder } from '@/components/ui/CardWithBorder'
import { Section } from '@/components/ui/Section'
import { Separator } from '@/components/ui/separator'

export const Services = () => {
  return (
    <Section title="SERVICES" subtitle="What we do to help you" secondaryColor>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4">
        <CardWithBorder
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
