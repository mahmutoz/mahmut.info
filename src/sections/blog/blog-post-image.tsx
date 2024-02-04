'use client'

import Image from '@/components/image'
import type { Blog } from 'contentlayer/generated'

import Box from '@mui/material/Box'

const MAX_WIDTH = 132
const MAX_HEIGHT = 88
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
    <Box width={MAX_WIDTH} height={MAX_HEIGHT} overflow="hidden">
      <Image
        src={hero || ''}
        ratio="1/1"
        alt={`"${title}" yazısının öne çıkan görseli`}
        size="small"
        variant="square"
        objectFit="cover"
        sx={{
          mr: 1,
          borderRadius: 1,
        }}
        {...getHeroProps(heroMeta)}
      />
    </Box>
  )
}
