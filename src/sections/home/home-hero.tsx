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
          Frontend Developer
        </Typography>
        <Stack spacing={2} mt={3}>
          <Typography variant="body2">
            Teknolojiye ve kullanıcı deneyimine duyduğum yoğun ilgiyle, işlevsel ve estetik açıdan hoş web arayüzleri
            oluşturma konusunda deneyime sahibim.
          </Typography>
          <Typography variant="body2">
            Kendi kendine öğrenen bir geliştirici olarak, React ve Vue.js ile çalışmaktan keyif alıyorum, aynı zamanda
            TypeScript ve Next.js&apos;e karşı yoğun bir ilgi duyuyorum. Tutkum, web geliştirmede pratik çözümleri
            öğrenmek ve uygulamaktır.
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <HeroImage />
        <StyledTextGradient text="Kodla, Paylaş, Tekrarla." />
      </Stack>
    </Card>
  )
}
