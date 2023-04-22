import './globals.css'

export const metadata = {
  title: 'DCMERN',
  description: 'Docker Compose MERN tutorial',
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
