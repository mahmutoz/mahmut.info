import type { Metadata } from 'next'
import Providers from '@/app/providers'
import MainLayout from '@/layouts/main'

import { primaryFont } from 'src/theme/typography'

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Mahmut ÖZ',
  description: "Mahmut ÖZ'ün kişisel web sitesi.",
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: 'assets/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: 'assets/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: 'assets/favicon/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: 'assets/favicon/apple-touch-icon.png' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={primaryFont.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
