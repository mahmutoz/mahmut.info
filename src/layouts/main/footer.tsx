import { social } from '@/assets/data'
import type { Social } from '@/assets/data'

import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

export default function Footer() {
  const renderLinks = (link: Social) => (
    <Link
      key={link.title}
      href={link.url}
      underline="hover"
      target="_blank"
      color="inherit"
      variant="body2"
      rel="noopener noreferrer"
    >
      {link.title}
    </Link>
  )

  return (
    <Stack component="footer" direction="row" justifyContent="center" my={2} spacing={3}>
      {social.map(renderLinks)}
    </Stack>
  )
}
