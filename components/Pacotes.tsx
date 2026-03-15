'use client'

import { motion } from 'framer-motion'
import PackageCard from './PackageCard'
import { PACKAGES, getWhatsAppUrl } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function Pacotes() {
  return (
    <section id="pacotes" className="py-16 sm:py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne text-white mb-4 sm:mb-6">
            Escolha o Seu Pacote de Crescimento
          </h2>
          <p className="text-lg sm:text-xl text-[#E5E5E5] max-w-3xl mx-auto font-outfit">
            Três soluções completas. Uma escolha por cada estágio do seu negócio. Todas com ROI comprovado.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PACKAGES.map((pkg) => (
            <motion.div key={pkg.id} variants={staggerItem}>
              <PackageCard
                title={pkg.title}
                price={pkg.price}
                period={pkg.period}
                badge={pkg.badge}
                featured={pkg.featured}
                items={pkg.items}
                bonuses={pkg.bonuses}
                breakdown={pkg.breakdown}
                ctaText={pkg.ctaText}
                whatsappUrl={getWhatsAppUrl(pkg.whatsappMessage)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-center mt-12 sm:mt-16 text-[#A0A0A0] text-sm sm:text-base font-outfit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Todos os pacotes incluem consultoria inicial gratuita e suporte dedicado ao longo do período.
        </motion.p>
      </div>
    </section>
  )
}
