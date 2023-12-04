import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Portfolio template | Developed by gracexnn',
  description: 'Personal portfolio template | Developed by gracexnn',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
