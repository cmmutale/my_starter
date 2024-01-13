import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/favicon.ico',
      href: 'favicon.ico'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
