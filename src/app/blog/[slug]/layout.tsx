import { PropsWithChildren } from 'react'
import BlogLayout from '@/layouts/blog-layout'
import { allReadableBlogs } from '@/utils/blog'

type LayoutProps = {
  params: {
    slug: string
  }
}

export default function Layout({ params, children }: PropsWithChildren & LayoutProps) {
  const { slug } = params
  const post = allReadableBlogs.find((b) => b.slug === slug)
  if (!post) return null

  return <BlogLayout post={post}>{children}</BlogLayout>
}
