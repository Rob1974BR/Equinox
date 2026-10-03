import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Equinox Horticulture | Premium Equatorial Roses',
  description: 'Discover the Equinox Horticulture Premium Equatorial Roses Collection 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'Equinox Horticulture | Premium Equatorial Roses',
    description: 'Discover the Equinox Horticulture Premium Equatorial Roses Collection 2026.',
    type: 'website',
    images: [
      {
        url: '/apple-icon.png',
        width: 180,
        height: 180,
        alt: 'Equinox Horticulture Premium Equatorial Roses',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Equinox Horticulture | Premium Equatorial Roses',
    description: 'Discover the Equinox Horticulture Premium Equatorial Roses Collection 2026.',
    images: ['/apple-icon.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#242838',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
