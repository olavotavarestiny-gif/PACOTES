'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappUrl = 'https://wa.me/244942277576?text=Olá Mazanga! Gostaria de saber mais sobre os vossos serviços.'

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 10 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-green-500/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Main Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[rgba(37,211,102,0.3)] hover:shadow-[rgba(37,211,102,0.5)] transition-shadow"
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 40px rgba(37, 211, 102, 0.5)',
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <MessageCircle size={28} className="text-white" />
      </motion.a>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ type: 'spring', damping: 12 }}
            className="absolute bottom-20 right-0 bg-white text-gray-900 px-4 py-2 rounded-lg font-outfit text-sm whitespace-nowrap shadow-lg"
          >
            Falar Connosco
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
