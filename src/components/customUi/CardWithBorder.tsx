import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Props {
  headerChildren?: ReactNode
  contentChildren?: ReactNode
}

export const CardWithBorder = ({ headerChildren, contentChildren }: Props) => {
  return (
    <div>
      <Card
        className={` w-[300px] h-[420px] z-10 relative border-[6px] border-accent`}
      >
        <CardHeader className="h-[80px] text-xl mb-2 text-center flex justify-center items-center">
          {headerChildren}
        </CardHeader>
        <CardContent className="md:text-lg lg:text-base h-[250px]">
          <Separator className="mb-4" />
          {contentChildren}
        </CardContent>
        <CardFooter className="flex items-center justify-center ">
          <Button>Learn more</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
