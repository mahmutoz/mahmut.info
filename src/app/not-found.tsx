'use server'

import Link from 'next/link'
import { paths } from '@/routes/paths'

import { Container } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default async function NotFound() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Oops! ~ Sayfa Bulunamadı
      </Typography>
      <Typography variant="body2">
        Aradığınız sayfa ya silinmiş ya da hiç var olmamış olabilir. Lütfen URL&apos;yi tekrar kontrol edin.
      </Typography>
      <Typography variant="body2">Please double check the URL for typos.</Typography>
      <Button component={Link} href={paths.home} variant="contained" sx={{ mt: 2 }}>
        Anasayfa&apos;ya Dön
      </Button>
    </Container>
  )
}
