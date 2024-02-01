import readingTime from 'reading-time'
import { defineDocumentType, type LocalDocument, type ComputedFields } from 'contentlayer/source-files'

const getActualHeroUrl = (hero?: string) =>
  // eslint-disable-next-line no-nested-ternary
  hero ? (hero.startsWith('http') ? hero : `/assets/media/blog/${hero}`) : ''

const getSlug = (doc: LocalDocument): string => doc._raw.sourceFileName.replace(/\.mdx$/, '')

const computedFields: ComputedFields = {
  readingTime: {
    type: 'number',
    resolve: (doc) => readingTime(doc.body.raw).minutes,
  },
  slug: {
    type: 'string',
    resolve: getSlug,
  },
  hero: {
    type: 'string',
    resolve: (doc) => getActualHeroUrl(doc.hero || `${getSlug(doc)}/hero.jpg`),
  },
  seoKeywords: {
    type: 'list',
    resolve: (doc) => {
      const docKeywords: string = (doc.keywords ?? '') || ''
      let filteredKeywords: Array<string> = []
      try {
        filteredKeywords = docKeywords.split(',').map((it: string) => it.trim())
      } catch (e) {
        console.error(e)
      }
      return Array.from(new Set([...filteredKeywords]))
    },
  },
  heroMeta: {
    type: 'json',
    resolve: (doc) => {
      const hero = getActualHeroUrl(doc.hero)
      if (!hero) return undefined
      return {
        src: hero,
        width: 1200,
        height: 630,
      }
    },
  },
}

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'string', required: true },
    color: { type: 'string' },
    keywords: { type: 'string' },
    hero: { type: 'string' },
    heroSource: { type: 'string' },
    link: { type: 'string' },
    inProgress: { type: 'boolean' },
  },
  computedFields,
}))

export default Blog
