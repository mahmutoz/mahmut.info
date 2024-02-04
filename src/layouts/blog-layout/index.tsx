import { Header } from '@/layouts/blog-layout/header'

import Stack from '@mui/material/Stack'

type BlogLayoutProps = {
  post: any
  children: React.ReactNode
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <Stack direction="column" spacing={3} p={{ sx: 1, md: 1.5, lg: 2 }}>
      <Header post={post} />
      {children}
    </Stack>
  )
}
