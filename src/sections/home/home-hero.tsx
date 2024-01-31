import HeroImage from '@/sections/home/component/hero-image'
import StyledTextGradient from '@/sections/home/component/styled-text-gradient'

import { Card } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function HomeHero() {
  return (
    <Card component={Stack} direction={{ xs: 'column', md: 'row' }} spacing={3} p={3}>
      <Stack>
        <Typography variant="h1" color="primary" fontSize={22}>
          MAHMUT ÖZ
        </Typography>
        <Typography variant="subtitle2" color="primary.light">
          Innovative Frontend Engineer
        </Typography>
        <Stack spacing={2} mt={3}>
          <Typography variant="body2">
            With a keen interest in technology and user experience, I have experience in creating functional and
            aesthetically pleasing web interfaces.
          </Typography>
          <Typography variant="body2">
            As a self-taught developer, I enjoy working with React and Vue.js, while also harboring a keen interest in
            TypeScript and Next.js. My passion lies in learning and applying practical solutions in web development.
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <HeroImage />
        <StyledTextGradient text="Dream, then code." />
      </Stack>
    </Card>
  )
}
