import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pacotes 2025 - Mazanga Marketing | Crescimento Digital Angola',
  description: 'Escolha entre Fundação Express, Essential ou Growth Premium. Sistemas completos de marketing com ROI mensurável para empresas B2B em Angola.',
  keywords: ['marketing digital', 'crescimento B2B', 'Angola', 'pacotes comerciais', 'estratégia digital'],
  openGraph: {
    title: 'Pacotes de Crescimento Digital 2025 - Mazanga Marketing',
    description: 'Crescimento digital comprovado. Escolha seu pacote ideal.',
    type: 'website',
    locale: 'pt_AO',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-AO">
      <body className={`${syne.variable} ${outfit.variable} font-outfit antialiased bg-[#0A0A0A] text-[#E5E5E5]`}>
        {children}
      </body>
    </html>
  )
}
