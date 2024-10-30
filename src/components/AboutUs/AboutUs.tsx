import Image from 'next/image'
import abstract1 from '@/../public/abstract_1.svg'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/Section'

export const AboutUs = () => {
  return (
    <Section secondaryColor subtitle="Get to know our goals!" title="About Us">
      <div className="flex flex-col items-center justify-center text-secondary-foreground md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but als
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