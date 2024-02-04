import { getUrlDomain } from '@/utils/domain'
import { formatDate } from '@/utils/format-time'
import type { Blog } from 'contentlayer/generated'
import BlogPostImage from '@/sections/blog/blog-post-image'

import Box from '@mui/material/Box'
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
            Published on <span>{getUrlDomain(post.link)}</span>
          </Typography>
        ) : null}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="caption"
            component="span"
            title={`Bu yazı ${a11yDate} tarihinde yayınlandı.`}
            aria-label={`Bu yazı ${a11yDate} tarihinde yayınlandı.`}
          >
            {readableDate}
          </Typography>
          {post.readingTime ? (
            <>
              <Box
                component="span"
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  bgcolor: 'text.disabled',
                }}
              />
              <Typography
                variant="caption"
                component="span"
                title={`Bu blog yazısını okumak ${post.readingTime} dakika sürer.`}
                aria-label={`Bu blog yazısını okumak ${post.readingTime} dakika sürer.`}
              >
                {Math.ceil(post.readingTime)} min read
              </Typography>
            </>
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  )
}
