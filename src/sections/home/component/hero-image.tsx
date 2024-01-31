'use client'

import Image from '@/components/image'

export default function HeroImage() {
  return (
    <Image
      src="/assets/images/mahmut_oz.jpeg"
      alt="Mahmut Öz"
      sx={{ width: { xs: '100%', md: 256 }, height: { xs: 1, md: 256 }, flex: 1, filter: 'grayscale(0.5)' }}
      borderRadius={1}
      ratio="1/1"
    />
  )
}
