import { Star } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Props {
  fullName?: string
  userTitle?: string
  review: string
}

export const TestimonialCard = ({ fullName, userTitle, review }: Props) => {
  return (
    <div className="relative mx-auto">
      <div
        className={`w-full lg:w-[400px] h-[300px] border-2 absolute border-solid border-accent top-3 left-3 z-0`}
      />
      <Card
        className={`w-full lg:w-[400px] h-[300px] z-10 relative bg-secondary`}
      >
        <CardHeader>
          <div className="px-4">
            <div className="flex gap-1 mb-2">
              <Star fill="#FABA04" strokeWidth="0" />
              <Star fill="#FABA04" strokeWidth="0" />
              <Star fill="#FABA04" strokeWidth="0" />
              <Star fill="#FABA04" strokeWidth="0" />
              <Star fill="#FABA04" strokeWidth="0" />
            </div>
            <p>{review}</p>
          </div>
        </CardHeader>
        <CardContent className="text-md">
          <Separator className="mb-4" />
          <p className="text-lg mb-1 font-semibold">{fullName}</p>
          <p>{userTitle}</p>
        </CardContent>
      </Card>
    </div>
  )
}
