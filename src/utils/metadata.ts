import type { Metadata } from 'next'
import { APP_URL } from '@/config-global'

export const createMetadata = (data: {
  title: string
  description: string
  keywords?: string | Array<string> | null
  exactUrl?: string
  image?: string
}): Metadata => {
  const { title, description, keywords, exactUrl, image: imageURL } = data
  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: 'Mahmut ÖZ', url: APP_URL }],
    openGraph: {
      title,
      description,
      url: exactUrl || APP_URL,
      siteName: title,
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@mahmutoz',
      site: '@mahmutoz',
    },
    metadataBase: new URL(APP_URL ?? ''),
  }
  if (imageURL && Boolean(imageURL)) {
    const image = {
      url: imageURL,
    }
    if (metadata.openGraph) metadata.openGraph.images = image
    if (metadata.twitter) metadata.twitter.images = image
  }
  return metadata
}

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
]
