'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { translations, type Language } from '@/lib/translations'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import LanguageToggle from '@/components/LanguageToggle'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [language, setLanguage] = useState<Language>('es')
  const t = translations[language]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Language Toggle */}
      <LanguageToggle language={language} setLanguage={setLanguage} />

      {/* Navigation */}
      <Navigation t={t} />

      {/* Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero t={t.hero} />
        <About t={t.about} />
        <Projects t={t.projects} />
        <Skills t={t.skills} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Sebastian Buffo Sempe. {t.footer.rights}.
          </p>
          <p className="text-xs mt-2">
            {t.footer.madeWith} ❤️ {t.footer.and} Next.js + Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
