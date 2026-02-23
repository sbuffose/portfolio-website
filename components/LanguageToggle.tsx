'use client'

import type { Language } from '@/lib/translations'

interface LanguageToggleProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white/80 backdrop-blur-lg rounded-full p-1 flex gap-1 border border-gray-200 shadow-lg">
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'es'
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          🇪🇸 ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          🇬🇧 EN
        </button>
      </div>
    </div>
  )
}
