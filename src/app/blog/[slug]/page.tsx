import Mdx from '@/components/mdx'
import type { Metadata } from 'next'
import { allReadableBlogs } from '@/utils/blog'
import { createMetadata } from '@/utils/metadata'
import { notFound, redirect } from 'next/navigation'

type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  const { slug } = params
  const post = allReadableBlogs.find((b: { slug: string }) => b.slug === slug)
  if (!slug || !post) return notFound()
  if (post.link) return redirect(post.link)

  return <Mdx code={post.body.code} />
}

export const generateStaticParams = () =>
  allReadableBlogs.filter((post) => !post.link).map((post) => ({ slug: post.slug }))

export const dynamicParams = false

export function generateMetadata(context: Params): Metadata | undefined {
  const { slug } = context.params
  if (!slug) return undefined
  const post = allReadableBlogs.find((b: { slug: string }) => b.slug === slug)
  if (!post) return undefined

  const { title, date, summary } = post

  const metadata = createMetadata({
    title: `${title} | Mahmut ÖZ`,
    description: summary || 'Blog post by Mahmut ÖZ',
    keywords: post.keywords,
  })
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  }
}
