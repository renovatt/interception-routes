import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import ReactQueryProvider from './components/ReactQueryProvider'

const chakra_Petch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Rotas Paralelas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={chakra_Petch.className}>
        <ReactQueryProvider>
          {children}
          {modal}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
