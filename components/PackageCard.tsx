'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, Gift } from 'lucide-react'

interface PackageCardProps {
  title: string
  price: string
  period: string
  badge?: string | null
  featured?: boolean
  items: Array<{ category: string; benefits: string[] }>
  bonuses?: string[] | null
  breakdown?: Record<string, string> | null
  ctaText: string
  whatsappUrl: string
}

export default function PackageCard({
  title,
  price,
  period,
  badge,
  featured = false,
  items,
  bonuses,
  breakdown,
  ctaText,
  whatsappUrl,
}: PackageCardProps) {
  const [expandedBreakdown, setExpandedBreakdown] = useState(false)

  const getBorderGradient = () => {
    if (badge === 'MAIS POPULAR') return 'border-gradient-orange-purple'
    if (badge === 'PREMIUM') return 'border-gradient-purple-blue'
    return ''
  }

  const getCardBgClasses = () => {
    if (badge === 'MAIS POPULAR') return 'bg-white/8 shadow-2xl shadow-[rgba(255,93,0,0.2)]'
    if (badge === 'PREMIUM') return 'bg-white/8 shadow-2xl shadow-[rgba(140,13,194,0.2)]'
    return 'bg-white/5'
  }

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${getBorderGradient()}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: featured ? 1.02 : 1.01 }}
    >
      {/* Background */}
      <div className={`absolute inset-0 backdrop-blur-xl ${getCardBgClasses()} border border-white/10`} />

      {/* Content */}
      <div className="relative p-8 sm:p-10 h-full flex flex-col">
        {/* Badge */}
        {badge && (
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-gradient-orange-purple text-white text-xs font-outfit rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Title & Price */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-syne text-white mb-3">
            {title}
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl sm:text-5xl font-syne gradient-text-clip">
              {price}
            </span>
            <span className="text-[#A0A0A0] font-outfit text-sm font-outfit">Kz</span>
          </div>
          <p className="text-[#E5E5E5] font-outfit text-sm">{period}</p>
        </div>

        {/* Benefits by Category */}
        <div className="space-y-6 mb-8 flex-grow">
          {items.map((item, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-syne text-[#FF5D00] uppercase tracking-wide mb-3">
                {item.category}
              </h4>
              <ul className="space-y-2">
                {item.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-start gap-3 font-outfit">
                    <Check className="w-5 h-5 text-[#FF5D00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E5E5E5] font-outfit text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        {bonuses && bonuses.length > 0 && (
          <div className="mb-8 p-4 bg-[rgba(34,197,94,0.05)] border border-green-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-green-400" />
              <h4 className="text-sm font-syne text-green-400">Bónus Incluídos</h4>
            </div>
            <ul className="space-y-2">
              {bonuses.map((bonus, idx) => (
                <li key={idx} className="text-sm text-green-300 font-outfit flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Breakdown */}
        {breakdown && Object.keys(breakdown).length > 0 && (
          <div className="mb-8 border-t border-white/10 pt-6">
            <button
              onClick={() => setExpandedBreakdown(!expandedBreakdown)}
              className="flex items-center justify-between w-full text-left group"
            >
              <span className="text-sm font-syne text-[#E5E5E5] group-hover:text-[#FF5D00] transition-colors">
                Breakdown Financeiro
              </span>
              <ChevronDown className={`w-5 h-5 text-[#FF5D00] transition-transform ${expandedBreakdown ? 'rotate-180' : ''}`} />
            </button>

            {expandedBreakdown && (
              <div className="mt-4 space-y-3">
                {Object.entries(breakdown).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start gap-4 py-2 border-t border-white/5">
                    <span className="text-sm text-[#E5E5E5] font-outfit">{key}</span>
                    <span className="text-sm font-syne text-[#FF5D00] text-right">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-orange-purple text-white rounded-lg font-syne font-bold text-base shadow-lg shadow-[rgba(255,93,0,0.3)] transition-all hover:shadow-lg hover:shadow-[rgba(255,93,0,0.5)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.a>
      </div>
    </motion.div>
  )
}
