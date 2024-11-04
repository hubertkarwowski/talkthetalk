import Image from 'next/image'

import { Contact } from '@/components/ui/Contact'
import { Section } from '@/components/ui/Section'
import { Services } from '@/components/Sections/Services/Services'

import model from '../../../../public/model.jpg'

export default function AboutMePage() {
  return (
    <div className="pt-12">
      <Section title="Lorem ipsum" subtitle="lorem ipsum" secondaryColor>
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
      <Section
        title="Kto najbardziej skorzysta z moich
usług?"
        subtitle="lorem ipsum"
      >
        <div className="md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-8">
          <div className="md:w-1/2 space-y-4">
            <p>
              Zajęci profesjonaliści: Dorośli, którzy cenią swój czas i
              potrzebują szybkich, skutecznych lekcji angielskiego do ogólnego
              użytku, biznesu, przygotowania do egzaminów lub konwersacji. Wielu
              moich klientów pełni odpowiedzialne funkcje i potrzebuje
              sprawdzonego nauczyciela, który zapewni szybki postęp oraz sprawi,
              że nauka będzie przyjemna.
            </p>
            <p>
              Uczniowie: Dzieci i nastolatkowie, którzy uważają tradycyjne
              szkolne lekcje za mało inspirujące i nieskuteczne. Rodzice
              poszukujący dynamicznego i angażującego podejścia do nauczania
              przekonają się, że ich dzieci nie tylko chętnie uczą się, ale
              również robią znaczne postępy. Regularnie dostarczam
              spersonalizowane raporty o postępach, aby rodzice byli na bieżąco.
            </p>
            <p>
              Każdy szukający ekscytującej nauki: Jeśli masz dość nudnych,
              powtarzalnych ćwiczeń i chcesz lekcji pełnych energii i
              entuzjazmu, moje zajęcia będą dla Ciebie satysfakcjonujące i
              owocne.
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
      <Services />
      <Contact />
    </div>
  )
}
