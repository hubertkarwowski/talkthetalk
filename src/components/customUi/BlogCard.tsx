import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import model from '../../../public/model.jpg'

type BlogCardProps = {
  title: string
  description: string
  date: string
  link: string
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  link,
}) => {
  return (
    <div className="relative">
      <div
        className={`w-full h-full border-2 absolute border-solid border-rose-400 top-2 left-2 z-0`}
      />
      <Card className="mx-auto flex w-[250px] flex-col md:w-[345px] hover:shadow-pink-300 duration-200 relative">
        <Link href={`/blog/${link}`}>
          <CardHeader className="relative">
            <Image
              src={model}
              // src={urlFor(post.titleImage).url()}
              alt="image"
              className="mx-auto rounded-lg object-cover"
            />
          </CardHeader>

          <CardContent className="flex flex-col">
            <div>
              <Badge variant="secondary" className="w-100 ">
                <Clock size={14} className="mr-2" />
                <span>{date}</span>
              </Badge>
            </div>
            <div className="mt-2">
              <Badge className="mr-2 hover:cursor-default">xDDD</Badge>
            </div>
            <h3 className="fw-bold mt-2 line-clamp-1 text-lg font-medium">
              {title}
            </h3>
            <p className="mt-2  line-clamp-4 h-[100px] text-sm ">
              {description}
            </p>
          </CardContent>
        </Link>
      </Card>
    </div>
  )
}
