import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/Section'

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={32} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm md:text-lg">
      {text}
    </p>
  </div>
)

export const Pricing = () => {
  return (
    <Section title="Pricing Card" subtitle="Here is our pricing card">
      <Tabs defaultValue="premium" className="relative">
        <div
          className={`w-full mt-20 h-[400px] border-2 absolute border-solid border-rose-400 top-3 left-4 z-0`}
        />
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="premium">Premium</TabsTrigger>
          <TabsTrigger value="basic">Basic</TabsTrigger>
        </TabsList>
        <TabsContent value="premium" className="mt-12">
          <Card className="z-10 relative">
            <CardContent className="p-0 flex h-[400px] flex-col md:flex-row">
              <div className="bg-amber-200 h-[200px] md:h-[400px] md:w-1/2 p-6 md:p-12 flex items-center justify-between">
                <div className="h-full flex flex-col space-y-2 md:space-y-6 my-auto justify-center">
                  <h2 className="text-xl md:text-3xl font-semibold">
                    Basic Package
                  </h2>
                  <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                  <p>
                    <span className="font-bold text-xl md:text-4xl">
                      420-470 ZŁ
                    </span>
                    /lesson
                  </p>
                  <Button size="lg">Book a lesson</Button>
                </div>
              </div>
              <div className="bg-amber-400 h-[200px] md:h-[400px] md:w-1/2 p-6 md:p-12 flex items-center justify-between">
                <div className="h-full flex flex-col space-y-6 my-auto justify-center">
                  <CheckItem text="Lorem ipsum #1" />
                  <CheckItem text="Lorem ipsum #1" />
                  <CheckItem text="Lorem ipsum #1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="flex w-full mx-auto">
        <Button className="mt-24 mx-auto" size="lg" asChild>
          <Link href="/">Check the pricing plan</Link>
        </Button>
      </div>
    </Section>
  )
}
