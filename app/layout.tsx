
import './globals.css'
export const metadata = {
  title: 'Frontend developer | Pawel Kaczmarek',
  description: 'Frontend developer | Pawel Kaczmarek',
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
