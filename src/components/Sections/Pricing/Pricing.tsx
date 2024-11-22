import Link from 'next/link'
import { Book, CircleCheck, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Section } from '@/components/customUi/Section'

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CircleCheck size={32} className="my-auto text-accent" />
    <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-lg">
      {text}
    </p>
  </div>
)

export const plans = [
  {
    icon: <Book />,
    id: 'basic',
    title: 'Basic Package',
    description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    price: '420-470 ZŁ',
    perks: [
      { description: 'lorem 1' },
      { description: 'lorem 12' },
      { description: 'lorem 13' },
    ],
  },
  {
    icon: <Sparkles />,
    id: 'premium',
    title: 'Premium',
    description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    price: '420-470 ZŁ',
    perks: [
      { description: 'lorem 1' },
      { description: 'lorem 12' },
      { description: 'lorem 13' },
    ],
  },
]

export const Pricing = () => {
  return (
    <Section title="Pricing Card" subtitle="Here is our pricing card">
      <Tabs defaultValue={plans[1].id} className="relative">
        <div
          className={`w-full mt-20 h-[440px] border-2 absolute border-solid border-accent top-6 left-6 z-0`}
        />
        <TabsList className="grid w-full grid-cols-2">
          {plans.map((plan) => (
            <TabsTrigger key={plan.id} value={plan.id}>
              {plan.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {plans.map((plan) => (
          <TabsContent key={plan.id} value={plan.id} className="mt-12">
            <Card className="z-10 relative text-center md:text-left">
              <CardContent className="p-0 flex h-[440px] flex-col md:flex-row">
                <div className="bg-[#EAEAEA] h-[220px] md:h-[440px] md:w-1/2 p-6 md:p-12 flex items-center justify-between">
                  <div className="h-full flex flex-col space-y-2 md:space-y-6 my-auto justify-center items-center md:items-start mx-auto">
                    <div className="flex justify-center gap-2 items-center">
                      <div className="p-4 w-fit bg-accent rounded">
                        {plan.icon}
                      </div>
                      <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                        {plan.title}
                      </h2>
                    </div>
                    <p>{plan.description}</p>
                    <p>
                      <span className="font-extrabold text-xl md:text-2xl lg:text-3xl">
                        {plan.price}
                      </span>
                      /lesson
                    </p>
                    <Button className="w-fit">Book a lesson</Button>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] h-[220px] md:h-[440px] md:w-1/2 p-6 md:p-12 flex items-center justify-between">
                  <div className="h-full flex flex-col space-y-6 my-auto justify-center">
                    {plan.perks.map((perk) => (
                      <CheckItem
                        text={perk.description}
                        key={perk.description}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      <div className="flex w-full mx-auto">
        <Button className="mt-24 mx-auto" asChild>
          <Link href="/public">Check the pricing plan</Link>
        </Button>
      </div>
    </Section>
  )
}
