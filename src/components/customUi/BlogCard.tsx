import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import { POSTS_EN_QUERYResult, POSTS_QUERYResult } from '../../../sanity.types'

type BlogCardProps = {
  data: POSTS_QUERYResult[number] | POSTS_EN_QUERYResult[number]
}

export const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <Card className="mx-auto flex w-[250px] flex-col md:w-[345px] hover:shadow-pink-300 duration-200 relative border-8 border-accent">
      <Link href={`/src/app/%5Blocale%5D/blog/${data.slug?.current}`}>
        <CardHeader className="relative">
          {data.mainImage && (
            <Image
              src={urlFor(data.mainImage).url()}
              alt="image"
              className="mx-auto rounded-lg object-cover"
              width={300}
              height={200}
            />
          )}
        </CardHeader>
        <CardContent className="flex flex-col">
          <h3 className="fw-bold mt-2 line-clamp-1 text-lg font-medium">
            {data.title}
          </h3>
          <p className="mt-2  line-clamp-4 h-[100px] text-sm ">
            {data.description}
          </p>
        </CardContent>
        <CardFooter className="py-2 flex items-center justify-end gap-2 ">
          <div>
            <Badge className="w-100 bg-secondary hover:cursor-default">
              <Clock size={14} className="mr-2" />
              <span>{data.publishedAt}</span>
            </Badge>
          </div>
          <div>
            <Badge className="mr-2 hover:cursor-default bg-secondary">
              xDDD
            </Badge>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
