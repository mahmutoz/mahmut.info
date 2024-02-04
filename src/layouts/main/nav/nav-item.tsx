import { useRouter } from 'next/navigation'
import { useActiveLink } from '@/hooks/use-active-link'

import Button from '@mui/material/Button'
import { alpha, styled, useTheme } from '@mui/material/styles'

type NavItemProps = {
  title: string
  path: string
  isMobile?: boolean
}

export default function NavItem({ title, path, isMobile = false }: NavItemProps) {
  const active = useActiveLink(path, false)

  const theme = useTheme()

  const router = useRouter()

  return (
    <StyledNavItem active={active} isMobile={isMobile} theme={theme} onClick={() => router.push(path)}>
      {title}
    </StyledNavItem>
  )
}

// ------------------------------------------------------------

type StyledNavItemProps = {
  active: boolean
  isMobile: boolean
  theme: any
}

const StyledNavItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'isMobile',
})<StyledNavItemProps>(
  ({ active, theme, isMobile }) =>
    ({
      '&::after': {
        content: '""',
        position: 'absolute',
        margin: 'auto',
        bottom: '5px',
        left: '0px',
        right: 0,
        height: 3,
        width: 3,
        borderRadius: 1.5,
        background: theme.palette.primary.main,
        opacity: active ? 1 : 0,
        transition: 'opacity var(--transitions-duration) ease-in-out',
      },
      ...(isMobile && {
        display: 'flex',
        width: '90%',
        justifyContent: 'flex-start',
        textTransform: 'none',
        margin: '5px auto',
        textAlign: 'left',
        '&::after': {
          display: 'none',
        },
      }),
      ...(active && {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightSemiBold,
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
      }),
    }) as any
)
