import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import image from '../../../../public/about-me-hero.webp'

export const Hero = () => {
  const t = useTranslations('hero')
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
          <CardHeader className="text-5xl font-semibold text-center text-secondary-foreground">
            <h2>Talk The Talk</h2>
          </CardHeader>
          <CardContent className="text-pretty text-primary-foreground">
            {t('heading')}
          </CardContent>
          <CardFooter className="flex justify-center items-center pb-4">
            <Button className="px-12 py-6">Book a lesson</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
