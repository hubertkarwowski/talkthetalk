import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export default async function Page() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  })

  return (
    <div>
      <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        {posts.data.map((post) => (
          <li key={post._id}>
            <a
              className="block p-4 hover:bg-blue-50"
              href={`${post?.slug?.current}`}
            >
              {post?.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
