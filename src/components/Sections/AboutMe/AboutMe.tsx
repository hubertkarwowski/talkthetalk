import Image from 'next/image'
import image from '@/../public/about-me-hero.webp'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const AboutMe = () => {
  return (
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
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but als
          </CardContent>
          <CardFooter className="flex justify-center items-center pb-4">
            <Button>Read more</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
