import { Card, CardContent, CardHeader } from '@/components/ui/card'

const WIDTH = 560
const HEIGHT = 300

//TODO: finish it once ill know what design i need to implement
export const PricingCard = () => {
  return (
    <div className="relative">
      <div
        className={`w-[${WIDTH}px] h-[${HEIGHT}px] border-2 absolute border-solid border-amber-200 top-3 left-3 z-0`}
      />
      <Card className={`w-[${WIDTH}px] h-[${HEIGHT}px] z-10 relative`}>
        <CardHeader>xd</CardHeader>
        <CardContent className="text-md">xd</CardContent>
      </Card>
    </div>
  )
}
