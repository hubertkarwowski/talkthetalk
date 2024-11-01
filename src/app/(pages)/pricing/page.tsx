import { Section } from '@/components/ui/Section'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pricing } from '@/components/Sections/Pricing/Pricing'

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
    <div className="pt-12">
      <Section
        title="Pricing Card"
        subtitle="Here is our pricing card"
        secondaryColor
      >
        <Table className="max-w-[700px] mx-auto">
          <TableCaption>
            Zajęcia odbywają się online i wystawiamy faktury.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Lesson Type</TableHead>
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
    </div>
  )
}
