import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/customUi/Section'

import abstract1 from '../../../../public/abstract_1.svg'
import model from '../../../../public/model.jpg'

export const Hero = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center text-primary-foreground md:flex-row">
        <div className="md:w-1/2 space-y-4 mr-6">
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
        <div className="md:w-1/2 mx-auto relative mt-24 md:mt-0 md:flex md:justify-end">
          <div className="max-w-[300px] md:max-w-[400px] relative">
            <Image
              src={model}
              alt="abstract particles"
              className="relative z-10"
            />
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
              className="absolute -bottom-10 left-36"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
