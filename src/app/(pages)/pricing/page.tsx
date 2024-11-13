import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Contact } from '@/components/customUi/Contact'
import { Section } from '@/components/customUi/Section'
import { Pricing } from '@/components/Sections/Pricing/Pricing'
import { Services } from '@/components/Sections/Services/Services'

import abstract1 from '../../../../public/abstract_1.svg'

export default function AboutMe() {
  const lessons = [
    {
      lessonType: 'Conversation',
      price: '85 PLN',
    },
    {
      lessonType: 'Conversation + Materials',
      price: '90 PLN',
    },
    {
      lessonType: 'Exam Preparation',
      price: '95 PLN',
    },
    {
      lessonType: 'Business',
      price: '100 PLN',
    },
  ]
  return (
    <div>
      <Section
        title="Pricing Card"
        subtitle="Here is our pricing card"
        secondaryColor
      >
        <div
          className={`absolute w-[100px] md:w-[150px] -bottom-28 right-10 z-10`}
        >
          <Image src={abstract1} alt="abstract particles" />
        </div>
        <Table className="max-w-[700px] mx-auto">
          <TableCaption>
            Zajęcia odbywają się online i wystawiamy faktury.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Lesson Type</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lessons.map((lesson) => (
              <TableRow key={lesson.lessonType}>
                <TableCell className="font-medium">
                  {lesson.lessonType}
                </TableCell>
                <TableCell className="text-right">{lesson.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>
      <Pricing />
      <Services />
      <Contact />
    </div>
  )
}
