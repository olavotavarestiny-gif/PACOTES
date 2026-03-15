'use client'

import { motion } from 'framer-motion'
import { Calendar, FileText, Rocket } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

const STEPS = [
  { title: 'Agende Reunião', description: '45-60 min entendendo objetivos e mercado.', icon: Calendar, color: '#FF5D00' },
  { title: 'Receba Proposta', description: 'Documento detalhado com estratégia e breakdown.', icon: FileText, color: '#8C0DC2' },
  { title: 'Lançamento', description: 'Setup, campanhas ativas em dias.', icon: Rocket, color: '#008FCD' },
]

export default function Steps() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne text-white mb-4">
            Como Começamos
          </h2>
          <p className="text-lg sm:text-xl text-[#E5E5E5] font-outfit">
            Um processo simples e transparente para o seu sucesso.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connecting Line - Desktop */}
          <svg
            className="hidden md:block absolute top-1/4 left-0 right-0 w-full h-8 pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="50"
              y1="50"
              x2="950"
              y2="50"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5D00" />
                <stop offset="50%" stopColor="#8C0DC2" />
                <stop offset="100%" stopColor="#008FCD" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div key={idx} variants={staggerItem} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <motion.div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}33)` }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                    <Icon className="w-10 h-10" style={{ color: step.color }} />
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-sm font-syne text-[#FF5D00]">{idx + 1}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-syne text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#E5E5E5] font-outfit text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#pacotes"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-orange-purple text-white rounded-lg font-syne font-bold shadow-lg shadow-[rgba(255,93,0,0.3)] hover:shadow-lg hover:shadow-[rgba(255,93,0,0.5)] transition-all hover:scale-105"
          >
            Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
