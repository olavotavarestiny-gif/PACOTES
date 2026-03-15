'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants'
import { fadeInUp, slideInRight, staggerContainer } from '@/lib/animations'

export default function Hero() {
  useEffect(() => {
    const element = document.getElementById('hero')
    if (element) {
      // Component uses whileInView for animations
    }
    return () => {}
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-12 sm:pt-0 bg-[#0A0A0A]">
      {/* Animated Background Orbs - Orange */}
      <motion.div
        className="hidden md:block absolute top-32 -right-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-[120px] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(255,93,0,0.4) 0%, transparent 70%)' }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      {/* Animated Background Orbs - Purple */}
      <motion.div
        className="hidden md:block absolute top-1/2 -left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-[150px] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(140,13,194,0.4) 0%, transparent 70%)' }}
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      {/* Animated Background Orbs - Blue */}
      <motion.div
        className="hidden md:block absolute -bottom-32 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-[130px] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(0,143,205,0.4) 0%, transparent 70%)' }}
        animate={{ x: [0, 50, 0], y: [0, -100, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
            >
              <motion.div
                className="w-2 h-2 bg-[#FF5D00] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-outfit text-[#FF5D00]">CONSULTORIA ACTIVA • LUANDA, ANGOLA</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-syne text-white leading-tight">
                Crescimento Digital Comprovado para B2B em{' '}
                <span className="gradient-text font-outfit">2026</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p variants={fadeInUp} className="text-base sm:text-lg lg:text-xl text-[#E5E5E5] leading-relaxed font-outfit">
              <span className="sm:hidden">Consultoria especializada em Angola com ROI comprovado.</span>
              <span className="hidden sm:inline">Consultoria especializada em Angola com ROI mensurável. Crescimento que se prova nos seus números.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-gradient-orange-purple text-white rounded-lg font-syne font-bold text-base sm:text-lg shadow-lg shadow-[rgba(255,93,0,0.3)] hover-lift"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 93, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Agende Reunião Gratuita
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#pacotes"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-[#FF5D00] text-[#FF5D00] rounded-lg font-syne font-bold text-base sm:text-lg hover:bg-gradient-orange-purple hover:text-white hover:border-transparent transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Pacotes
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              {['20+ Clientes', 'ROI Comprovado', 'Suporte 24/7'].map((badge) => (
                <motion.div
                  key={badge}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 text-[#E5E5E5] rounded-full text-xs sm:text-sm font-outfit border border-white/10"
                >
                  <span className="text-[#FF5D00] font-bold">✓</span>
                  <span>{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Mockup */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              className="relative w-full max-w-md"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Dashboard Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[rgba(255,93,0,0.2)] border border-white/10">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#A0A0A0] text-sm font-outfit">ROI Mensal</p>
                      <motion.p
                        className="text-3xl sm:text-4xl font-syne font-bold gradient-text-clip mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        +285%
                      </motion.p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-[#FF5D00] opacity-30" />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Clientes', value: '20+' },
                      { label: 'Crescimento Médio', value: '240%' },
                      { label: 'Leads Gerados', value: '1200+' },
                      { label: 'Taxa Conversão', value: '34%' },
                    ].map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        className="bg-white/5 border border-white/5 rounded-lg p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 * (idx + 1) }}
                      >
                        <p className="text-[#A0A0A0] text-xs sm:text-sm font-outfit">{stat.label}</p>
                        <p className="text-lg sm:text-xl font-syne text-white mt-1">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white/5 border border-white/5 rounded-lg h-24 sm:h-32 flex items-end justify-around px-3 py-4">
                    {[20, 45, 35, 60, 55, 70, 65].map((height, idx) => (
                      <motion.div
                        key={idx}
                        className="w-2 sm:w-3 bg-gradient-orange-purple rounded-t"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: 0.05 * idx, duration: 0.5 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
