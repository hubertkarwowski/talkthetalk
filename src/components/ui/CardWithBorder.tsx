import { ReactNode } from 'react'
import { PenIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Props {
  headerChildren?: ReactNode
  contentChildren?: ReactNode
  footerChildren?: ReactNode
  width: string
  height: string
}

export const CardWithBorder = ({
  headerChildren,
  contentChildren,
  width,
  footerChildren,
  height,
}: Props) => {
  return (
    <div className="relative">
      <div
        className={`w-[${width}] h-[${height}] border-2 absolute border-solid border-amber-200 top-3 left-3 z-0`}
      />
      <Card className={`w-[${width}] h-[${height}] z-10 relative`}>
        <CardHeader>{headerChildren}</CardHeader>
        <CardContent className="text-md">{contentChildren}</CardContent>
        {footerChildren && <CardFooter>{footerChildren}</CardFooter>}
      </Card>
    </div>
  )
}
