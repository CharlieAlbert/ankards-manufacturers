import prisma from '@/src/lib/db'

type Slug = {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: Slug) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug
    }
  })
  return (
    <main className='flex flex-col items-center justify-center gap-y-5 pt-24 text-center'>
      <h1 className='text-3xl font-semibold capitalize'>{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  )
}
