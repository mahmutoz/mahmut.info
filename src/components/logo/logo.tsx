import { forwardRef } from 'react'
import { paths } from '@/routes/paths'
import RouterLink from '@/components/router-link/router-link'

import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme()

  const PRIMARY_MAIN = theme.palette.primary.main

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_148_3950)">
          <path
            d="M0 65.5493C0 62.9819 3.01524 61.6007 4.9594 63.2775L63.886 114.102C64.5468 114.672 64.9267 115.502 64.9267 116.374V236C64.9267 237.657 63.5835 239 61.9267 239H3C1.34315 239 0 237.657 0 236V65.5493Z"
            fill={PRIMARY_MAIN}
          />
          <path
            d="M254.806 63.6997C256.451 61.729 255.024 58.7347 252.459 58.7737L174.685 59.9549C173.812 59.9681 172.989 60.3612 172.429 61.0314L95.8207 152.833C94.7591 154.105 94.9288 155.998 96.1997 157.061L141.423 194.886C142.694 195.949 144.585 195.779 145.647 194.507L254.806 63.6997Z"
            fill={PRIMARY_MAIN}
          />
          <circle cx="223.286" cy="206.5" r="32.5" fill={PRIMARY_MAIN} />
        </g>
        <defs>
          <clipPath id="clip0_148_3950">
            <rect width="256" height="256" fill={PRIMARY_MAIN} />
          </clipPath>
        </defs>
      </svg>
    </Box>
  )

  if (disabledLink) {
    return logo
  }

  return (
    <Link component={RouterLink} href={paths.home} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  )
})

export default Logo
