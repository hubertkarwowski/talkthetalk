import { CardTitle } from '@/components/ui/card'
import { CardWithBorder } from '@/components/customUi/CardWithBorder'
import { Section } from '@/components/customUi/Section'

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
]

export const Services = () => {
  return (
    <Section title="SERVICES" subtitle="What we do to help you" secondaryColor>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4">
        {listOfServices.map((service) => (
          <CardWithBorder
            key={service.title}
            headerChildren={<CardTitle>{service.title}</CardTitle>}
            contentChildren={<p>{service.description}</p>}
          />
        ))}
      </div>
    </Section>
  )
}
