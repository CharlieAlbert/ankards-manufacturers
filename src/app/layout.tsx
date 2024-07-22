import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { FooterComponent } from '../components/footer'
import './globals.css'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankards Company Limited',
  description: 'Makers of Paint and adhesives'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} page-container bg-[whitesmoke]`}>
        <main className='content'>
          <AntdRegistry>{children}</AntdRegistry>
        </main>
        <FooterComponent />
      </body>
    </html>
  )
}
