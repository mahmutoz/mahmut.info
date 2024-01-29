import Box from '@mui/material/Box'
import { Container } from '@mui/material'

import Footer from './footer'
import Header from './header'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          my: 2,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Container>
  )
}
