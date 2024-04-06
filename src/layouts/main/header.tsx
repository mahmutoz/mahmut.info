'use client'

import { useState } from 'react'
import Logo from '@/components/logo'
import { paths } from '@/routes/paths'
import { useRouter } from 'next/navigation'
import { useResponsive } from '@/hooks/use-responsive'
import { useNavData } from '@/layouts/main/config-navigation'
import MobileNavList from '@/layouts/main/nav/mobile-nav-list'
import DesktopNavList from '@/layouts/main/nav/desktop-nav-list'

import Box from '@mui/material/Box'
import { Card } from '@mui/material'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'

export default function Header() {
  const navItems = useNavData()

  const [mobileOpen, setMobileOpen] = useState(false)

  const router = useRouter()

  const smUp = useResponsive('up', 'sm')

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box component={Card} sx={{ display: 'flex', alignItems: 'center', width: 1, mt: 2 }}>
      <AppBar
        sx={{
          position: 'relative',
          maxWidth: 'md',
          backgroundColor: 'background.neutral',
          flexShrink: 1,
        }}
        component="nav"
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { sm: 1, md: 3 },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 2 }}>
            {/* {!smUp && ( */}
            {/*  <IconButton */}
            {/*    color="inherit" */}
            {/*    aria-label="open drawer" */}
            {/*    edge="start" */}
            {/*    onClick={handleDrawerToggle} */}
            {/*    sx={{ mr: 2 }} */}
            {/*  > */}
            {/*    <Iconify icon="solar:hamburger-menu-line-duotone" color="primary.main" width={28} /> */}
            {/*  </IconButton> */}
            {/* )} */}
            <Button onClick={() => router.push(paths.home)} sx={{ fontSize: 20 }}>
              <Logo />
            </Button>
          </Stack>

          <DesktopNavList navItems={navItems} />
        </Toolbar>
      </AppBar>
      {!smUp && <MobileNavList navItems={navItems} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />}
    </Box>
  )
}
