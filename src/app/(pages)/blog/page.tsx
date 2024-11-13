import { sanityFetch } from '@/sanity/lib/live'
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
      </Section>
      <Contact />
    </div>
  )
}
