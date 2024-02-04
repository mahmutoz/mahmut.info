'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import type { MDXComponents } from 'mdx/types'
import { RouterLink } from '@/components/router-link'
import { scrollToTop } from '@/utils/scroll-to-targer'
import { getMDXComponent } from 'next-contentlayer/hooks'

import { alpha, styled, useTheme } from '@mui/material/styles'

const components = {
  a: RouterLink,
  RouterLink,
  img: (props: any) => <Image {...props} suppressHydrationWarning />,
  Image,
} as MDXComponents

// ----------------------------------------------------------------------

type MdxProps = {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const MdxComponent = getMDXComponent(code)

  const theme = useTheme()

  // TODO: Remove this after fixing the issue
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <StyledMdx className="mdx" theme={theme}>
      <MdxComponent components={components as MDXComponents} />
    </StyledMdx>
  )
}

//---------------------------------------------------------------------

const StyledMdx = styled('article')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  marginTop: theme.spacing(3),
  details: {
    boxShadow: theme.customShadows.z8,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    '&[data-type=toc]': {
      summary: {
        color: theme.palette.text.primary,
        cursor: 'pointer',
        ...theme.typography.subtitle1,
      },
      ol: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,

        li: {
          ol: {
            paddingInlineStart: theme.spacing(2),
            li: {
              listStyleType: 'disc',
            },
          },
        },
      },
    },
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    position: 'relative',
    alignSelf: 'flex-start',
    color: theme.palette.text.primary,
    margin: 0,
    '&:hover > a[class*="anchor"], &:focus > a[class*="anchor"]': {
      visibility: 'visible',
      opacity: 1,
    },
  },
  '& strong, & b': {
    color: theme.palette.text.primary,
  },
  '& h1': {
    ...theme.typography.h1,
  },
  '& h2': {
    ...theme.typography.h2,
  },
  '& h3': {
    ...theme.typography.h3,
  },
  '& h4': {
    ...theme.typography.h4,
  },
  '& h5': {
    ...theme.typography.h5,
  },
  '& h6': {
    ...theme.typography.h6,
  },
  '& > p': {
    width: '100%',
    ...theme.typography.body1,
  },
  ul: {
    li: {
      '.anchor': {
        marginLeft: 'calc(1.5em * -1)',
      },
    },
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
    '&[class*=anchor]': {
      cursor: 'pointer',
      display: 'block',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      textDecorationLine: 'none',
      transitionDuration: '.15s',
      transitionProperty: 'color,background-color,border-color,text-decoration-color,fill,stroke',
      transitionTimingFunction: 'ease-in-out',
      visibility: 'hidden',
      marginLeft: 'calc(0.75em * -1)',
      paddingRight: '.5em',
      width: 'calc(100% + 0.75em)',

      ':after': {
        color: theme.palette.text.secondary,
        content: "'#'",
        textAlign: 'end',
        textDecorationLine: 'none',
      },
    },
  },
  '& p code': {
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    padding: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(12),
    color: 'inherit',
    backgroundColor: alpha(theme.palette.text.primary, 0.08),
    borderRadius: theme.shape.borderRadius,
  },
  '& pre': {
    opacity: 1,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: alpha(theme.palette.text.primary, 0.05),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2.5),
    overflowX: 'auto',
  },
}))
