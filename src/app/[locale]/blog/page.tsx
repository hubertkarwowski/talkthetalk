import { sanityFetch } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

import { BlogCard } from '@/components/customUi/BlogCard'
import { Contact } from '@/components/customUi/Contact'
import { Section } from '@/components/customUi/Section'

export default async function Blog() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  })
  return (
    <div>
      <Section title="Blog" subtitle="some subtitle text" secondaryColor>
        {posts.map(
          (post) =>
            post.slug?.current &&
            post.title && <BlogCard data={post} key={post._id} />
        )}
      </Section>
      <Contact />
    </div>
  )
}
