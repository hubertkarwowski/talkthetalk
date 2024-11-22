import Image from 'next/image'
import image from '@/../public/about-me-hero.webp'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Section } from '@/components/customUi/Section'

import model from '../../../../public/model.jpg'

export const ProofreadingSection = () => {
  return (
    <>
      <section className="relative h-[700px]">
        <Image
          alt="laptop and work"
          src={image}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center p-12">
          <Card className=" max-w-[700px] border-[1rem] border-primary bg-secondary p-8">
            <CardHeader className="text-4xl font-semibold text-center text-secondary-foreground">
              <h2>Get to know me</h2>
            </CardHeader>
            <CardContent className="text-pretty text-primary-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but als
            </CardContent>
            <CardFooter className="flex justify-center items-center pb-4">
              <Button>Read more</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <Section title="Lorem ipsum" subtitle="lorem ipsum">
        <div className="md:flex md:justify-between md:items-center md:gap-8">
          <div className="md:w-1/2">
            <p>
              Jestem native speakerem języka angielskiego oraz akredytowanym
              coachem stylu życia, z ponad tysiącem przeprowadzonych lekcji.
              Moją misją jest wspieranie jak największej liczby osób w pewnym i
              płynnym posługiwaniu się językiem angielskim.
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
          </div>
          <div className="max-w-[250px] mx-auto relative mt-12 md:max-w-[400px] md:w-1/2">
            <div className="w-full h-full border border-amber-200 left-2 top-2 absolute" />
            <Image
              src={model}
              alt="abstract particles"
              className="relative z-10"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
