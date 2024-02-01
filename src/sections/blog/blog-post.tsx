import { getDate } from '@/utils/format-time'
import type { Blog } from 'contentlayer/generated'
import { allReadableBlogs, sortBlogPostsByDate } from '@/utils/blog'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'

import { BlogPostItem } from './blog-post-item'

const blogPostsByYear = allReadableBlogs.reduce<Record<number, Array<any>>>((acc, post: Blog) => {
  const year = (getDate(post.date) || new Date()).getFullYear()
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return { ...acc, [year]: [...(acc[year] || []), post] }
}, {})

export const GroupedPosts = () => (
  <List>
    {Object.entries(blogPostsByYear)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, posts]) => (
        <ListItem key={year}>
          <Box id={`posts-from-${year}`} title={`Posts from ${year}`} aria-label={`Posts from ${year}`}>
            <div>
              <h2>{year}</h2>
              <Divider />
            </div>
            <ol>
              {posts.sort(sortBlogPostsByDate).map((post: any) => (
                <li key={post.slug}>
                  <BlogPostItem post={post} />
                </li>
              ))}
            </ol>
          </Box>
        </ListItem>
      ))}
  </List>
)
