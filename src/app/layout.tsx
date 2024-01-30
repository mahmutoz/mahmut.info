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
  title: 'Mahmut OZ',
  description: "Mahmut's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
