'use client'

import { useState } from 'react'
import Logo from '@/components/logo'
import { paths } from '@/routes/paths'
import Iconify from '@/components/iconify'
import { useRouter } from 'next/navigation'
import { NAV } from '@/layouts/config-layout'
import { useResponsive } from '@/hooks/use-responsive'
import ThemeButton from '@/layouts/_common/theme-button'
import { useNavData } from '@/layouts/main/config-navigation'

import Box from '@mui/material/Box'
import { Card } from '@mui/material'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

export default function Header() {
  const navItems = useNavData()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const router = useRouter()

  const smUp = useResponsive('up', 'sm')

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Button onClick={() => router.push(paths.home)} sx={{ fontSize: 20 }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MAHMUT ÖZ
        </Typography>
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} onClick={() => router.push(item.path)} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

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
            {!smUp && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <Iconify icon="solar:hamburger-menu-line-duotone" color="primary.main" width={28} />
              </IconButton>
            )}
            <Button onClick={() => router.push(paths.home)} sx={{ fontSize: 20 }}>
              <Logo />
            </Button>
          </Stack>

          <Stack direction="row" spacing={1.5}>
            {smUp &&
              navItems.map((item) => (
                <Button key={item.title} onClick={() => router.push(item.path)}>
                  {item.title}
                </Button>
              ))}
            <ThemeButton />
          </Stack>
        </Toolbar>
      </AppBar>
      {!smUp && (
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAV.W_DRAWER },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      )}
    </Box>
  )
}
