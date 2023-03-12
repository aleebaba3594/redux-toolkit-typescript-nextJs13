import './globals.css'
import { Providers } from './Redux/provider'

export const metadata = {
  title: 'redux-toolkit',
  description: 'see info.txt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
