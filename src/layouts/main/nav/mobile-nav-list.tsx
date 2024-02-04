import { paths } from '@/routes/paths'
import { useRouter } from 'next/navigation'
import { NAV } from '@/layouts/config-layout'
import NavItem from '@/layouts/main/nav/nav-item'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

type MobileNavListProps = {
  navItems: { title: string; path: string }[]
  mobileOpen: boolean
  handleDrawerToggle: () => void
}

export default function MobileNavList({ navItems, mobileOpen, handleDrawerToggle }: MobileNavListProps) {
  const router = useRouter()

  return (
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
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Button onClick={() => router.push(paths.home)} sx={{ fontSize: 20 }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              MAHMUT ÖZ
            </Typography>
          </Button>
          <Divider />
          <List>
            {navItems.map((item) => (
              <NavItem title={item.title} path={item.path} key={item.title} isMobile />
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}
