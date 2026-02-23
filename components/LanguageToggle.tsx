'use client'

import type { Language } from '@/lib/translations'

interface LanguageToggleProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50 animate-fade-in">
      <div className="glass-card rounded-full p-1 flex gap-1 border-blue-500/30 shadow-2xl shadow-blue-500/20">
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'es'
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg glow-blue'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          🇪🇸 ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg glow-blue'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          🇬🇧 EN
        </button>
      </div>
    </div>
  )
}
