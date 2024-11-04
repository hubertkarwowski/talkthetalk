'use client'

import type { Metadata } from 'next'

import { BlogCard } from '@/components/ui/BlogCard'

// interface Props {
//   data: SimpleBlogCard[]
//   heading: string
//   tags?: string[]
//   searchParams?: {
//     page?: string
//     tag?: string
//   }
// }

export const metadata: Metadata = {
  description: 'Blog o lokalnych produktach i slow life w słodkim wydaniu',
  title: {
    default: 'Koszyk Ślimaka | Blog o lokalnych produktach i slow life',
    template: `%s | Koszyk Ślimaka`,
  },
  openGraph: {
    title: 'Koszyk Ślimaka | Blog o lokalnych produktach i slow life',
    description: 'Blog o lokalnych produktach i slow life w słodkim wydaniu',
    images: [
      {
        url: 'https://koszykslimaka.pl/images/logo.png',
        width: 1188,
        height: 1188,
      },
    ],
    url: 'https://koszykslimaka.pl',
    siteName: 'Koszyk Ślimaka',
    type: 'website',
    locale: 'pl_PL',
  },
}

export default function BlogSection() {
  //   {
  // data,
  // heading,
  // tags,
  // searchParams,
  // }: Props
  // const pathname = usePathname()
  // const { replace } = useRouter()
  // const { setPageNum, pageNum } = usePagination()
  //
  // const selectBadge = (tag: string) => {
  //   const params = new URLSearchParams(searchParams)
  //   if (tag === 'reset') {
  //     params.delete('tag')
  //     params.delete('page')
  //     replace(`${pathname}?${params}`)
  //     return
  //   }
  //   params.delete('page')
  //   if (pageNum !== 0) setPageNum((prev: any) => 0)
  //   params.set('tag', tag)
  //   replace(`${pathname}?${params}`)
  // }

  return (
    <section className="mx-auto mt-12">
      {/*<h2 className="mb-10 text-center text-5xl font-semibold text-primary md:text-left">*/}
      {/*  {heading}*/}
      {/*</h2>*/}
      {/*{tags && (*/}
      {/*  <div className="mb-8 flex flex-row flex-wrap items-center justify-center gap-2">*/}
      {/*    {tags.map((tag, index) => (*/}
      {/*      <Badge*/}
      {/*        className="mr-2 px-6 py-2 hover:cursor-pointer"*/}
      {/*        key={index}*/}
      {/*        onClick={() => selectBadge(tag)}*/}
      {/*      >*/}
      {/*        {tag}*/}
      {/*      </Badge>*/}
      {/*    ))}*/}
      {/*    <Badge*/}
      {/*      className="mr-2 px-6 py-2 hover:cursor-pointer"*/}
      {/*      onClick={() => selectBadge('reset')}*/}
      {/*    >*/}
      {/*      Wyczyść filtry*/}
      {/*    </Badge>*/}
      {/*  </div>*/}
      {/*)}*/}

      <article className="w-100 mx-auto flex flex-col gap-10 md:flex-row md:flex-wrap justify-center ">
        <BlogCard
          title="some title"
          date="2020-10-10"
          description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
        />{' '}
        <BlogCard
          title="some title"
          date="2020-10-10"
          description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
        />{' '}
        <BlogCard
          title="some title"
          date="2020-10-10"
          description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
        />
      </article>
    </section>
  )
}
