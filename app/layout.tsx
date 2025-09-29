import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Rob Besant Photography',
  description: 'Food and hospitality photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Header />
        <main style={{ marginTop: '60px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}