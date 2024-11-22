import { sanityFetch } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

import { BlogCard } from '@/components/customUi/BlogCard'
import { Section } from '@/components/customUi/Section'

export const BlogSection = async () => {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  })
  return (
    <Section
      title="Blog"
      subtitle="Selection of blogs!"
      wrapperClassName="max-w-full"
    >
      {posts.map(
        (post) =>
          post.slug?.current &&
          post.title && <BlogCard key={post._id} data={post} />
      )}
      <article className="flex items-center justify-center flex-col md:flex-row gap-4 md:flex-wrap"></article>
    </Section>
  )
}
