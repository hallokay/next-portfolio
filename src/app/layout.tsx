import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '전진희 포트폴리오',
  description: '프론트엔드 개발자 전진희 포트폴리오 사이트입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>

        {children}

      </body>
    </html>
  )
}
