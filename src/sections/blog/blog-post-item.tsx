import { getUrlDomain } from '@/utils/domain'
import { formatDate } from '@/utils/format-time'
import type { Blog } from 'contentlayer/generated'
import BlogPostInfo from '@/components/blog-post-info'
import BlogPostImage from '@/sections/blog/blog-post-image'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type BlogPostItemProps = {
  post: Blog
  fullDate?: boolean
}

export const BlogPostItem = ({ post, fullDate }: BlogPostItemProps) => {
  const a11yDate = formatDate(post.date)
  const readableDate = fullDate
    ? a11yDate
    : formatDate(post.date, false, {
        year: undefined,
      })

  return (
    <Stack direction="row" spacing={2} title={post.title}>
      <Stack mr={1.5}>
        <BlogPostImage post={post} />
      </Stack>
      <Stack spacing={1}>
        <Typography variant="subtitle1">{post.title}</Typography>
        <Typography variant="body2">{post.summary}</Typography>
        {post.link ? (
          <Typography variant="caption">
            <span>{getUrlDomain(post.link)}</span> üzerinde yayınlandı
          </Typography>
        ) : null}
        <BlogPostInfo readingTime={post.readingTime} readableDate={readableDate} />
      </Stack>
    </Stack>
  )
}
