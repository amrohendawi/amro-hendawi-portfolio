import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amro Hendawi - Senior ML/AI Engineer & Team Lead',
  description: 'Senior ML/AI Engineer with 5+ years experience in GenAI, multi-agent systems, and enterprise AI solutions. Based in Berlin, Germany.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
