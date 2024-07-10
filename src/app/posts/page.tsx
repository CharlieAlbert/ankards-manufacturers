import { createPost } from '@/src/actions/actions'
import prisma from '@/src/lib/db'
import Link from 'next/link'

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    where: {
      title: {
        endsWith: 'post'
      }
    },
    orderBy: {
      createAt: 'asc'
    },
    select: {
      id: true,
      title: true,
      slug: true
    }
  })
  const postCount = await prisma.post.count()
  return (
    <main className='flex flex-col items-center justify-center gap-y-5 pt-24 text-center'>
      <h1 className='text-3xl font-semibold'>
        All Posts <span>{postCount}</span>
      </h1>
      <ul className='border-b border-t border-black/10 py-5 text-center'>
        {posts.map(post => (
          <li
            key={post?.id}
            className='flex items-center px-5 pb-2 font-semibold capitalize'
          >
            <Link href={`/posts/${post?.slug}`}>{post?.title}</Link>
          </li>
        ))}
      </ul>

      <form
        action={createPost}
        className='flex w-[300px] flex-col gap-y-4 rounded-md border border-black/10 px-4 py-4'
      >
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='rounded-sm px-2 py-1'
        />
        <textarea
          name='content'
          placeholder='Content'
          rows={5}
          className='rounded-sm px-2 py-1'
        ></textarea>
        <button className='rounded-sm bg-blue-500 py-2 text-white'>
          Create post
        </button>
      </form>
    </main>
  )
}
