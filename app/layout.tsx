import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Velon LLC - Professional Web Development Services',
  description: 'Velon LLC offers professional web development services using React, Next.js, and modern technologies. Transform your ideas into powerful web applications.',
  keywords: 'web development, React, Next.js, software development, custom web applications, UI/UX design',
  authors: [{ name: 'Velon LLC' }],
  openGraph: {
    title: 'Velon LLC - Professional Web Development Services',
    description: 'Professional web development services using React, Next.js, and modern technologies.',
    url: 'https://velonllc.com',
    siteName: 'Velon LLC',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
