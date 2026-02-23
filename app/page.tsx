'use client'

import { useState } from 'react'
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
    <main className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow delay-300" />
      </div>

      {/* Language Toggle */}
      <LanguageToggle language={language} setLanguage={setLanguage} />

      {/* Navigation */}
      <Navigation t={t} />

      {/* Sections */}
      <div className="relative">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Projects t={t.projects} />
        <Skills t={t.skills} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </div>

      {/* Footer */}
      <footer className="relative py-16 bg-slate-900 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-2">
            © {new Date().getFullYear()} Sebastian Buffo Sempe. {t.footer.rights}.
          </p>
          <p className="text-sm text-slate-500">
            {t.footer.madeWith} <span className="text-red-500">❤️</span> {t.footer.and} <span className="gradient-text">Next.js + AI</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
