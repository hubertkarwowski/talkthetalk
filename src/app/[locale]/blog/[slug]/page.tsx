import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { POST_QUERY } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await sanityFetch({
    query: POST_QUERY,
    params: { slug: slug },
  })
  if (!data || !slug) {
    return notFound()
  }

  return (
    <section className="relative mx-auto flex flex-col items-center bg-secondary px-6 py-8">
      {data.title ? (
        <>
          <h1 className="block text-center text-accent text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
            {data?.title}
          </h1>
          <Badge className="w-100 mx-auto mt-4">
            <Clock size={14} className="mr-2" />
            <span>{data.publishedAt}</span>
          </Badge>
        </>
      ) : null}
      {data.mainImage?.asset?._ref ? (
        <Suspense fallback="Wczytywanie...">
          <Image
            className="mx-auto mt-8 rounded-lg"
            src={urlFor(data.mainImage?.asset?._ref)
              .width(300)
              .height(300)
              .url()}
            width={300}
            height={300}
            alt={data.title || ''}
          />
        </Suspense>
      ) : null}
      {data.body ? (
        <article className="prose prose-md md:prose-xl mx-auto mt-16 prose-h2:text-accent prose-a:text-accent prose-li:marker:text-accent">
          <PortableText value={data.body} />
        </article>
      ) : null}
      <hr />
      <Link href="/public" className="pt-8">
        &larr; Return home
      </Link>
    </section>
  )
}
