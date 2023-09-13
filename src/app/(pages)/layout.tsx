import type { Metadata } from 'next'
import Nav from '@/components/Nav'


import { Header, Footer } from '@/components'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <div className="content_container">
        {children}

      </div>
      {/* <Footer /> */}

    </>



  )
}
