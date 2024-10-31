import { ReactNode } from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface Props {
  headerChildren?: ReactNode
  contentChildren?: ReactNode
  footerChildren?: ReactNode
}

export const CardWithBorder = ({
  headerChildren,
  contentChildren,
  footerChildren,
}: Props) => {
  return (
    <div className="relative">
      <div
        className={`w-full h-[280px] lg:w-[280px] lg:h-[360px] border-2 absolute border-solid border-accent top-3 left-3 z-0`}
      />
      <Card
        className={`w-full h-[280px] lg:w-[280px] lg:h-[360px] z-10 relative`}
      >
        <CardHeader>{headerChildren}</CardHeader>
        <CardContent className="text-md">{contentChildren}</CardContent>
        {footerChildren && <CardFooter>{footerChildren}</CardFooter>}
      </Card>
    </div>
  )
}
