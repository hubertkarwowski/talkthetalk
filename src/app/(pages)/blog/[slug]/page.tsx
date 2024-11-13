import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { QueryParams } from 'next-sanity'

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    // Metadata should never contain stega
    stega: false,
  })
  return {
    title: {
      template: `%s | ${data?.title}`,
      default: data?.title || 'Blog',
    },
  }
}

export default async function Page({ params }: { params: QueryParams }) {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params,
  })
  if (!data) {
    return notFound()
  }
  return (
    <div className="container mx-auto prose prose-lg p-4">
      {data.title ? <h1>{data.title}</h1> : null}
      {data.mainImage?.asset?._ref ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(data.mainImage?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={data.title || ''}
        />
      ) : null}
      {data.body ? <PortableText value={data.body} /> : null}
      <hr />
      <Link href="/">&larr; Return home</Link>
    </div>
  )
}
