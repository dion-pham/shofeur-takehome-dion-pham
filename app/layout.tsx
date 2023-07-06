import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'


export const metadata = {
  title: 'Shofeur',
  description: 'Chauferred anything near me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
