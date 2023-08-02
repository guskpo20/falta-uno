import './globals.scss'
import type { Metadata } from 'next'

import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Falta Uno',
  description: 'Falta uno es la aplicación que te ayudará a encontrar equipos para jugar al futbol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
