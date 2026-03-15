'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp, Globe } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contactos" className="bg-[#0F0F0F] text-[#E5E5E5] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem}>
            <div className="mb-6">
              <img
                src="/logo-branco.png"
                alt="Mazanga Marketing"
                className="h-12"
              />
            </div>
            <p className="text-[#A0A0A0] text-sm sm:text-base mb-6 font-outfit">
              Crescimento digital comprovado para B2B em Angola. Estratégia, execução, resultados.
            </p>
            <div className="flex items-center gap-2 text-sm sm:text-base text-[#FF5D00] font-syne">
              <span>20+ clientes na Europa & África</span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="font-syne text-lg text-white mb-6">Contactos</h4>
            <div className="space-y-4">
              <a
                href="tel:+244942277576"
                className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#FF5D00] transition-colors text-sm sm:text-base font-outfit"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+244 942 277 576</span>
              </a>
              <a
                href="mailto:vendas@mazanga.digital"
                className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#FF5D00] transition-colors text-sm sm:text-base font-outfit"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>vendas@mazanga.digital</span>
              </a>
              <a
                href="https://www.mazanga.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#FF5D00] transition-colors text-sm sm:text-base font-outfit"
              >
                <Globe className="w-5 h-5 flex-shrink-0" />
                <span>www.mazanga.digital</span>
              </a>
              <div className="flex items-start gap-3 text-[#A0A0A0] text-sm sm:text-base font-outfit">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Luanda, Angola</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 sm:pt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Copyright */}
          <motion.p variants={staggerItem} className="text-[#A0A0A0] text-sm sm:text-base font-outfit">
            © {currentYear} Mazanga Marketing. NIF: 5002824086. Todos os direitos reservados.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            variants={staggerItem}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-gradient-orange-purple hover:border-transparent rounded-lg transition-all text-sm sm:text-base font-syne text-[#E5E5E5] hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
