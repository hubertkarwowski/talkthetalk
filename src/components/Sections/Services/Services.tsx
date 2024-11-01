import { PenIcon } from 'lucide-react'

import { CardTitle } from '@/components/ui/card'
import { CardWithBorder } from '@/components/ui/CardWithBorder'
import { Section } from '@/components/ui/Section'
import { Separator } from '@/components/ui/separator'

const listOfServices = [
  {
    title: 'Ogólne i specjalistyczne kursy angielskiego:',
    description:
      'Od poziomu początkującego do zaawansowanego,\n' +
      'pomogę Ci szybko się rozwijać, niezależnie od aktualnego etapu.',
  },
  {
    title: 'Konwersacja i wymowa',
    description:
      'wymowa: Pokonaj bariery językowe i popraw swoje umiejętności mówienia z\n' +
      'pewnością siebie i klarownością.',
  },
  {
    title: 'Przygotowanie do egzaminów i certyfikacji',
    description:
      'Przygotuj się do egzaminów takich jak Egzamin\n' +
      'ósmoklasisty, Matura, FCE, CAE, CPE, IELTS i innych. Osiągnij sukces dzięki ukierunkowanemu\n' +
      'przygotowaniu.',
  },
  {
    title: 'Angielski akademicki i zawodowy',
    description:
      'Nadrobisz zaległości w szkole lub na uczelni, lub ulepszysz swój\n' +
      'angielski biznesowy, zdobywając praktyczne umiejętności gotowe do pracy',
  },
]

export const Services = () => {
  return (
    <Section title="SERVICES" subtitle="What we do to help you" secondaryColor>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4">
        {listOfServices.map((service) => (
          <CardWithBorder
            key={service.title}
            headerChildren={
              <PenIcon className="mx-auto" size={60} strokeWidth={1} />
            }
            contentChildren={
              <>
                <Separator className="mb-4" />
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p>{service.description}</p>
              </>
            }
          />
        ))}
      </div>
    </Section>
  )
}
