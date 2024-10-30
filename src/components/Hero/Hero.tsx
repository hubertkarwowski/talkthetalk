import Image from 'next/image'
import abstract1 from '@/../public/abstract_1.svg'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'

export const Hero = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center text-primary-foreground md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-0.5 bg-accent mr-2" />
            <p className="text-primary-foreground text-xl">
              All in One Meeting Scheduler
            </p>
          </div>

          <h3 className="text-primary-foreground text-5xl font-bold">
            Schedule meetings effortlessly
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat massa rhoncus odio feugiat
            tellus, elit massa sed.
          </p>
          <Button>Book a lesson</Button>
        </div>
        <div className="md:w-1/2 mx-auto relative">
          <Image
            width={200}
            height={200}
            src={abstract1}
            alt="abstract particles"
            className="absolute -top-10 -left-10"
          />
          <Image
            width={200}
            height={200}
            src={abstract1}
            alt="abstract particles"
            className="absolute -bottom-10 left-64"
          />
          <div className="w-[400px] h-[400px] bg-amber-500 relative" />
        </div>
      </div>
    </Section>
  )
}
