import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProviders from './ThemeProviders'
import NextProvider from './nextuiProviders'
import EditModalContextProvider from '@/context/ModalContext'
import { CartProvider } from 'react-use-cart'
import TansTackQueryProvider from './TansTackQueryProvider'
import { SessionProvider } from 'next-auth/react'
import NextAuthProvider from './NextAuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oasis',
  description: 'oasis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <NextProvider>
            <EditModalContextProvider>
              <TansTackQueryProvider>
              <NextAuthProvider>

                {children}
                </NextAuthProvider>
              </TansTackQueryProvider>

            </EditModalContextProvider>
          </NextProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
