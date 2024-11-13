import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { QueryParams } from 'next-sanity'

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }))
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
    <main className="container mx-auto prose prose-lg p-4">
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
    </main>
  )
}
