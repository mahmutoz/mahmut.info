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
        Woops! ~ Page not found
      </Typography>
      <Typography variant="body2">
        Unfortunately, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Typography variant="body2">Please double check the URL for typos.</Typography>
      <Button component={Link} href={paths.home} variant="contained" sx={{ mt: 2 }}>
        Go back home
      </Button>
    </Container>
  )
}
