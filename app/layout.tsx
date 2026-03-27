import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AuthProvider } from '@/contexts/auth-context'
import { CartProvider } from '@/contexts/cart-context'
import { WelcomeModal } from '@/components/welcome-modal'
import { ProficiencyBag } from '@/components/proficiency-bag'

export const metadata: Metadata = {
  title: 'NexusGamer | Loja Premium de Gaming Mobile',
  description: 'A maior loja de smartphones gamers e acessórios premium do Brasil. ROG Phone, RedMagic, controles, fones e muito mais.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            <WelcomeModal />
            <ProficiencyBag />
            {children}
            <Analytics />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
