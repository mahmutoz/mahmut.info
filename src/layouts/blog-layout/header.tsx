import type { Blog } from 'contentlayer/generated'
import BlogPostInfo from '@/components/blog-post-info'
import BackToPosts from '@/layouts/blog-layout/back-to-posts'
import FeaturedImage from '@/layouts/blog-layout/featured-image'

import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import { formatDate } from 'src/utils/format-time'

interface HeaderProps {
  post: Blog
}

export const Header = ({ post }: HeaderProps) => {
  const { readingTime } = post
  const readableDate = formatDate(post.date)

  return (
    <Stack width={1} spacing={3}>
      <BackToPosts />
      <FeaturedImage src={post.hero ?? ''} alt={post.title} />
      <Typography variant="h1" color="primary">
        {post.title}
      </Typography>
      <Typography variant="body1" color="primary.light" mb={2}>
        {post.summary}
      </Typography>
      <BlogPostInfo readingTime={readingTime} readableDate={readableDate} />
      <Divider sx={{ borderColor: 'primary.light', borderStyle: 'dashed' }} />
    </Stack>
  )
}
