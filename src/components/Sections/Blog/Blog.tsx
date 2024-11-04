import { BlogCard } from '@/components/ui/BlogCard'
import { Section } from '@/components/ui/Section'

export const Blog = () => {
  return (
    <Section title="Blog" subtitle="Read new blog!">
      <article className="flex items-center justify-center flex-col md:flex-row gap-4 md:flex-wrap">
        <BlogCard
          title="some title"
          date="2020-10-10"
          description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
        />
        <BlogCard
          title="some title"
          date="2020-10-10"
          description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
        />
        <BlogCard
          title="some title"
          date="2020-10-10"
          description="lorksf sdlkfs dkljd sflkj sdflkms dfl ksm"
        />
      </article>
    </Section>
  )
}
