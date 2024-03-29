import Link from 'next/link'
import { getDate } from '@/utils/format-time'
import type { Blog } from 'contentlayer/generated'
import { allReadableBlogs, sortBlogPostsByDate } from '@/utils/blog'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

import { BlogPostItem } from './blog-post-item'

const blogPostsByYear = allReadableBlogs.reduce<Record<number, Array<any>>>((acc, post: Blog) => {
  const year = (getDate(post.date) || new Date()).getFullYear()
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return { ...acc, [year]: [...(acc[year] || []), post] }
}, {})

export const BlogPost = () => (
  <List sx={{ width: 1 }}>
    {Object.entries(blogPostsByYear)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, posts]) => (
        <ListItem key={year} sx={{ width: 1 }}>
          <Box
            id={`posts-from-${year}`}
            title={`${year} yılındaki yazılar`}
            aria-label={`${year} yılındaki yazılar`}
            sx={{ width: 1 }}
          >
            <Stack>
              <Typography variant="h3">{year}</Typography>
              <Divider sx={{ borderStyle: 'dashed', my: 2 }} />
            </Stack>
            <Stack spacing={2}>
              {posts.sort(sortBlogPostsByDate).map((post: any) => (
                <Card
                  key={post.slug}
                  component={Link}
                  color="inherit"
                  href={post.link || `/blog/${post.slug}`}
                  sx={{
                    p: 2,
                    backgroundColor: 'transparent',
                    transform: 'scale(1)',
                    transition: 'background-color 0.2s ease',
                    textDecoration: 'none',
                    img: {
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'background.neutral',
                      img: {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <BlogPostItem post={post} />
                </Card>
              ))}
            </Stack>
          </Box>
        </ListItem>
      ))}
  </List>
)
