'use client'

import { motion } from 'framer-motion'
import { CLIENT_LOGOS } from '@/lib/constants'

export default function ClientsCarousel() {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-center text-sm uppercase tracking-widest text-[#A0A0A0] font-syne font-semibold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Empresas que confiam em nós
        </motion.h3>

        {/* Top Row - Left to Right */}
        <motion.div className="flex overflow-hidden mb-8 sm:mb-12">
          <motion.div
            className="flex gap-12 sm:gap-16 min-w-max"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <motion.div
                key={`top-${idx}`}
                className="flex-shrink-0 h-16 sm:h-20 flex items-center justify-center"
                whileHover={{ scale: 1.05, filter: 'grayscale(0)' }}
              >
                <img
                  src={`/clients/${logo}`}
                  alt="Client logo"
                  className="max-h-full max-w-xs filter grayscale transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Row - Right to Left */}
        <motion.div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 sm:gap-16 min-w-max"
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...CLIENT_LOGOS.slice().reverse(), ...CLIENT_LOGOS.slice().reverse()].map((logo, idx) => (
              <motion.div
                key={`bottom-${idx}`}
                className="flex-shrink-0 h-16 sm:h-20 flex items-center justify-center"
                whileHover={{ scale: 1.05, filter: 'grayscale(0)' }}
              >
                <img
                  src={`/clients/${logo}`}
                  alt="Client logo"
                  className="max-h-full max-w-xs filter grayscale transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
