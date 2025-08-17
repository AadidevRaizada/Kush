import './globals.css'

export const metadata = {
  title: 'Space Event Registration',
  description: 'Interactive space-themed event registration experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}