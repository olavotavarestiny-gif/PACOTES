'use client'

import { motion } from 'framer-motion'
import { Layout, TrendingUp, Zap } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function Intro() {
  const approaches = [
    { title: 'Estruturados', description: 'Sistemas integrados. Ads, conteúdo, análise funcionam juntos.', icon: Layout },
    { title: 'Mensuráveis', description: 'ROI comprovado. Cada Kz rastreado. Relatórios reais.', icon: TrendingUp },
    { title: 'Escaláveis', description: 'Do setup ao domínio. Crescimento sustentável.', icon: Zap },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne text-white mb-4 sm:mb-6">
            A Nossa Abordagem
          </h2>
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8 mb-16 sm:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            'Na Mazanga Marketing, crescimento digital não é sobre posts bonitos. É sobre sistemas integrados que geram resultados mensuráveis.',
            'Cada pacote para empresas B2B em Angola e Suíça. Não fragmentamos — gestão, criação, análise, tudo integrado.',
            'Quando você cresce, crescemos. ROI real, dados reais, decisões baseadas em números.',
          ].map((text) => (
            <motion.p
              key={text}
              variants={staggerItem}
              className="text-lg sm:text-xl text-[#E5E5E5] leading-relaxed font-outfit text-center"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Approach Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {approaches.map((approach) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={approach.title}
                variants={staggerItem}
                className="card-glass rounded-xl p-8"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#FF5D00]" />
                </div>
                <h3 className="text-xl font-syne text-white mb-3">
                  {approach.title}
                </h3>
                <p className="text-[#E5E5E5] font-outfit leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
