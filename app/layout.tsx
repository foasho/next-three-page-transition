import { SceneLayout } from '@/components/SceneLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'next-three-page-transitions',
  description: 'Next.js + ReactThreeFiber + PageTransitions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="ja"

    >
      <body className={inter.className}>
          <Nav />
          {children}
      </body>
    </html>
  )
}
