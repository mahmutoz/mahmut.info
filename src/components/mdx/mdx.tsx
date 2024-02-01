import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { getMDXComponent } from 'next-contentlayer/hooks'

import Link from '@mui/material/Link'

const components = {
  a: Link,
  Link,
  img: (props: any) => <Image {...props} suppressHydrationWarning />,
  Image,
} as MDXComponents

// ----------------------------------------------------------------------

type MdxProps = {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const MdxComponent = getMDXComponent(code)
  return (
    <article className="mdx">
      <MdxComponent components={components as MDXComponents} />
    </article>
  )
}
