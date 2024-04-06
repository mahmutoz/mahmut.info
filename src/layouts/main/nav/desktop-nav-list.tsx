import NavItem from '@/layouts/main/nav/nav-item'
import { useResponsive } from '@/hooks/use-responsive'
import ThemeButton from '@/layouts/_common/theme-button'
import { useNavData } from '@/layouts/main/config-navigation'

import Stack from '@mui/material/Stack'

type NavListProps = {
  navItems: ReturnType<typeof useNavData>
}

export default function DesktopNavList({ navItems }: NavListProps) {
  const smUp = useResponsive('up', 'sm')

  return (
    <Stack direction="row" spacing={1.5} position="relative">
      {smUp && navItems.map((item) => <NavItem title={item?.title} path={item?.path} key={item?.title} />)}
      <ThemeButton />
    </Stack>
  )
}
