'use client'

import { motion } from 'framer-motion'
import type { Language } from '@/lib/translations'

interface LanguageToggleProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="glass-strong rounded-full p-1 flex gap-1">
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'es'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          🇪🇸 ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          🇬🇧 EN
        </button>
      </div>
    </motion.div>
  )
}
