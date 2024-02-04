'use client'

import { m } from 'framer-motion'
import { textGradient } from '@/theme/css'

import { styled } from '@mui/material/styles'

const StyledText = styled(m.h2)(({ theme }) => ({
  ...textGradient(
    `200deg, ${theme.palette.primary.main} 0%, ${theme.palette.success.main} 35%, ${theme.palette.primary.main} 60%, ${theme.palette.success.main} 85%, ${theme.palette.primary.main} 100%`
  ),
  lineHeight: 1,
  letterSpacing: 4,
  textAlign: 'left',
  backgroundSize: '400%',
  marginRight: 0,
  fontFamily: theme.typography.fontSecondaryFamily,
  writingMode: 'vertical-rl',
  fontSize: `${15 / 16}rem`,
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: `${32 / 16}rem`,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: `${20 / 16}rem`,
  },
}))

// ----------------------------------------------------------------------

type Props = {
  text: string
}

export default function StyledTextGradient({ text }: Props) {
  return (
    <StyledText
      animate={{ backgroundPosition: '200% center' }}
      transition={{
        repeatType: 'reverse',
        ease: 'linear',
        duration: 40,
        repeat: Infinity,
      }}
    >
      {text}
    </StyledText>
  )
}
