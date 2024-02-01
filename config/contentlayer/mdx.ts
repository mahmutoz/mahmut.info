import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import type { MDXOptions } from 'contentlayer/core'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

import { toc } from './rehype/toc'

const mdx: MDXOptions = {
  remarkPlugins: [remarkGfm, remarkSqueezeParagraphs, remarkUnwrapImages],
  rehypePlugins: [
    rehypeSlug,
    rehypeAccessibleEmojis,
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    toc,
  ],
}

export default mdx
