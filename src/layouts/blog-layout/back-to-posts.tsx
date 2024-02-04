'use client'

import Link from 'next/link'
import { paths } from '@/routes/paths'
import Iconify from '@/components/iconify'

import Button from '@mui/material/Button'

export default function BackToPosts() {
  return (
    <Button
      component={Link}
      variant="text"
      sx={{ display: 'inline-flex', width: 'max-content' }}
      title="Bloğa geri dön"
      href={paths.blog}
      startIcon={<Iconify icon="solar:arrow-left-broken" color="primary" />}
    >
      Bloğa geri dön
    </Button>
  )
}
