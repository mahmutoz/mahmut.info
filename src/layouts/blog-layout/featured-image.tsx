'use client'

import Box from '@mui/material/Box'

import Image from 'src/components/image'

type FeaturedImageProps = {
  src: string
  alt: string
}

export default function FeaturedImage({ src, alt }: FeaturedImageProps) {
  return (
    <Box
      component="figure"
      sx={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px',
        margin: 0,
      }}
    >
      <Image src={src} alt={alt} ratio="16/9" objectFit="contain" />
    </Box>
  )
}
