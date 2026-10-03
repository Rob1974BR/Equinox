import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://v0-equinox-flowers.vercel.app'),
  title: 'Equinox Horticulture | Premium Equatorial Roses',
  description: 'Discover the Equinox Horticulture Premium Equatorial Roses Collection 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'Equinox Horticulture | Premium Equatorial Roses',
    description: 'Discover the Equinox Horticulture Premium Equatorial Roses Collection 2026.',
    type: 'website',
    url: 'https://v0-equinox-flowers.vercel.app',
    siteName: 'Equinox Horticulture',
    images: [
      {
        url: 'https://v0-equinox-flowers.vercel.app/equinox-social-preview-2026.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Equinox Horticulture Premium Equatorial Roses brochure cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equinox Horticulture | Premium Equatorial Roses',
    description: 'Discover the Equinox Horticulture Premium Equatorial Roses Collection 2026.',
    images: ['https://v0-equinox-flowers.vercel.app/equinox-social-preview-2026.jpg'],
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
