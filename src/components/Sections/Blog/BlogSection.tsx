import { sanityFetch } from '@/sanity/lib/live'
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
      {posts.data.map(
        (post) =>
          post.slug?.current &&
          post.title && (
            <BlogCard
              key={post._id}
              title={post.title!}
              date="2020-10-10"
              description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
              link={post.slug.current}
            />
          )
      )}
      <article className="flex items-center justify-center flex-col md:flex-row gap-4 md:flex-wrap"></article>
    </Section>
  )
}
