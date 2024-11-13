import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/customUi/Section'

import abstract1 from '../../../../public/abstract_1.svg'
import model from '../../../../public/model.jpg'

export const AboutMe = () => {
  return (
    <Section secondaryColor subtitle="Get to know our goals!" title="About Us">
      <div
        className={`absolute w-[100px] md:w-[150px] -bottom-28 right-10 z-10`}
      >
        <Image src={abstract1} alt="abstract particles" />
      </div>
      <div className="flex flex-col items-center justify-center text-secondary-foreground md:gap-12 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p>
            Jestem native speakerem języka angielskiego oraz akredytowanym
            coachem stylu życia, z ponad tysiącem przeprowadzonych lekcji. Moją
            misją jest wspieranie jak największej liczby osób w pewnym i płynnym
            posługiwaniu się językiem angielskim.
          </p>
          <p>
            Wnoszę do nauczania energię oraz wysokie oczekiwania, dbając o to,
            by lekcje były zarówno intensywne, jak i przyjemne. Skupiam się na
            pomocy w osiąganiu wymarzonych wyników w jak najkrótszym czasie.
          </p>
          <p>
            Oferuję kursy dostosowane do indywidualnych potrzeb, obejmujące
            poziomy od początkującego (A0) do zaawansowanego (C2), zarówno dla
            dorosłych, jak i młodszych uczniów. Każda lekcja jest
            spersonalizowana, aby spełniać Twoje cele i preferencje, unikając
            nudnej teorii i nieistotnych reguł.
          </p>
          <Button>Read more</Button>
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
