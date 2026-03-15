'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { COMPARISON_TABLE } from '@/lib/constants'

export default function Comparison() {
  return (
    <section id="comparacao" className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0A]">
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
            Comparar Pacotes
          </h2>
          <p className="text-lg sm:text-xl text-[#E5E5E5] font-outfit max-w-3xl mx-auto">
            Veja as diferenças e escolha o que melhor se adequa ao seu negócio.
          </p>
        </motion.div>

        {/* Table - Desktop */}
        <motion.div
          className="hidden md:block overflow-x-auto rounded-xl border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-left text-[#E5E5E5] font-syne">
                  Componente
                </th>
                <th className="px-6 py-4 text-center text-[#E5E5E5] font-syne">
                  Fundação
                </th>
                <th className="px-6 py-4 text-center text-white font-syne bg-white/5 border-x border-white/10">
                  Essential
                </th>
                <th className="px-6 py-4 text-center text-[#E5E5E5] font-syne">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-white/5 transition-colors ${
                    idx % 2 === 0 ? 'bg-white/2' : 'bg-transparent'
                  } hover:bg-white/5`}
                >
                  <td className="px-6 py-4 text-[#E5E5E5] font-outfit">
                    {row.category}
                  </td>
                  <td className="px-6 py-4 text-center font-outfit">
                    {row.fundacao === '✓' ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : row.fundacao === '-' ? (
                      <X className="w-5 h-5 text-[#A0A0A0] mx-auto opacity-50" />
                    ) : (
                      <span className="text-[#E5E5E5] text-sm font-outfit">{row.fundacao}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center font-outfit bg-white/5 border-x border-white/10">
                    {row.essential === '✓' ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : row.essential === '-' ? (
                      <X className="w-5 h-5 text-[#A0A0A0] mx-auto opacity-50" />
                    ) : (
                      <span className="text-white text-sm font-outfit">{row.essential}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center font-outfit">
                    {row.growth === '✓' ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : row.growth === '-' ? (
                      <X className="w-5 h-5 text-[#A0A0A0] mx-auto opacity-50" />
                    ) : (
                      <span className="text-[#E5E5E5] text-sm font-outfit">{row.growth}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Table - Mobile (Card View) */}
        <motion.div
          className="md:hidden space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {COMPARISON_TABLE.map((row, idx) => (
            <div key={idx} className="card-glass rounded-lg p-4 space-y-2">
              <h4 className="font-syne font-semibold text-[#E5E5E5] text-sm">{row.category}</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-[#A0A0A0] font-outfit text-xs mb-1">Fundação</p>
                  {row.fundacao === '✓' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : row.fundacao === '-' ? (
                    <X className="w-4 h-4 text-[#A0A0A0] opacity-50" />
                  ) : (
                    <span className="text-[#E5E5E5] font-outfit text-xs">{row.fundacao}</span>
                  )}
                </div>
                <div>
                  <p className="text-[#FF5D00] font-outfit text-xs mb-1">Essential</p>
                  {row.essential === '✓' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : row.essential === '-' ? (
                    <X className="w-4 h-4 text-[#A0A0A0] opacity-50" />
                  ) : (
                    <span className="text-white font-outfit text-xs">{row.essential}</span>
                  )}
                </div>
                <div>
                  <p className="text-[#A0A0A0] font-outfit text-xs mb-1">Growth</p>
                  {row.growth === '✓' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : row.growth === '-' ? (
                    <X className="w-4 h-4 text-[#A0A0A0] opacity-50" />
                  ) : (
                    <span className="text-[#E5E5E5] font-outfit text-xs">{row.growth}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
