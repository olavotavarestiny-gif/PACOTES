'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Fundação', href: '#fundacao' },
    { label: 'Essential', href: '#essential' },
    { label: 'Growth', href: '#growth' },
    { label: 'Comparação', href: '#comparacao' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xs shadow-lg shadow-black/50'
          : 'bg-[#0A0A0A]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo-branco.png"
              alt="Mazanga Marketing"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#E5E5E5] hover:text-[#FF5D00] font-outfit text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              className="bg-gradient-orange-purple hover:shadow-lg shadow-glow-orange text-white px-8 py-2.5 rounded-full font-syne font-bold transition-all hover:scale-105"
            >
              Falar Connosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#E5E5E5]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-[#E5E5E5] hover:text-[#FF5D00] font-outfit transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
                className="block text-center bg-gradient-orange-purple text-white px-6 py-2.5 rounded-full font-syne font-bold hover:shadow-lg shadow-glow-orange transition-all"
                onClick={() => setIsOpen(false)}
              >
                Falar Connosco
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-tricolor"
        style={{
          width: `${typeof window !== 'undefined' ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0}%`,
        }}
      />
    </header>
  )
}
