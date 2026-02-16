import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cowork - AI for your brand, that actually does things',
  description: 'Connects to your store. Learns your voice. Does real work. A swarm of AI agents working 24/7 to improve your store performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
