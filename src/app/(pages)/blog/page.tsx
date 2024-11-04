;
// export const revalidate = 30
//
// async function getTags() {
//   const query = "array::unique(*[_type == 'blog'].tags[])"
//
//   const data = await client.fetch(query)
//   return data
// }
//
// async function getData(lastPageNum: number = 0, tag?: string) {
//   let query = ''
//   if (!tag) {
//     query = `*[_type=='blog'] | order(_createdAt desc)[${lastPageNum > 0 ? lastPageNum + 9 : lastPageNum}..${
//       lastPageNum > 0 ? lastPageNum + 19 : lastPageNum + 9
//     }]{
//     title, smallDescription, 'currentSlug': slug.current, titleImage, tags, releaseDate
//   }`
//   }
//
//   if (tag) {
//     query = `*[_type=='blog' && "${tag}" in tags] | order(_createdAt desc)[${lastPageNum > 0 ? lastPageNum + 9 : lastPageNum}..${
//       lastPageNum > 0 ? lastPageNum + 19 : lastPageNum + 9
//     }]{
//       title, smallDescription, 'currentSlug': slug.current, titleImage, tags, releaseDate
//     }`
//   }
//
//   const data = await client.fetch(query, { lastId: lastPageNum })
//   return data
// }
//
// const getTotalPosts = async (tag?: string) => {
//   let query = ''
//   if (!tag) query = groq`count(*[_type == 'blog'])`
//   if (tag) query = groq`count(*[_type == 'blog' && ${tag} in tags])`
//
//   return client.fetch(query)
// }

import BlogSection from '@/components/ui/BlogSection';
import { Contact } from '@/components/ui/Contact';
import PaginationSection from '@/components/ui/PaginationSection';
import { Section } from '@/components/ui/Section';





export default async function Blog() {
  //     {
  //   searchParams,
  // }: {
  //   searchParams?: {
  //     page?: string
  //     tag?: string
  //   }
  // }
  // const pageNum = Number(searchParams?.page ?? 0)
  // const postsNum = await getTotalPosts(searchParams?.tag)
  // const data: SimpleBlogCard[] = await getData(pageNum, searchParams?.tag)
  // const tags: string[] = await getTags()

  return (
    <div className="pt-12">
      <Section title="Blog" subtitle="some subtitle text">
        <BlogSection />

        <PaginationSection />
      </Section>
      <Contact isSecondary />
    </div>
  )
}
