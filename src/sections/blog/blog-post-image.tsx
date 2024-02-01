'use client'

import Image from '@/components/image'
import type { Blog } from 'contentlayer/generated'

const MAX_WIDTH = 96
const MAX_HEIGHT = 72
const getHeroProps = (heroMeta: Blog['heroMeta']) => {
  const { width = MAX_WIDTH, height = MAX_HEIGHT, ...rest } = heroMeta || {}
  return {
    width: Math.min(width, MAX_WIDTH),
    height: Math.min(height, MAX_HEIGHT),
    ...rest,
  }
}

// ---------------------------------------------------------------------------

type BlogPostImageProps = {
  post: Blog
}

export default function BlogPostImage({ post: { title, hero, heroMeta } }: BlogPostImageProps) {
  return (
    <Image
      src={hero || ''}
      ratio="1/1"
      alt={`Hero image for blog post "${title}"`}
      size="small"
      variant="square"
      objectFit="cover"
      sx={{
        mr: 1,
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        borderRadius: 1,
      }}
      {...getHeroProps(heroMeta)}
    />
  )
}
