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
    <main className="min-h-screen bg-[#0A0E27] overflow-x-hidden">

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
      <footer className="relative py-12 bg-[#0A0E27] border-t border-slate-800/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sebastian Buffo Sempe. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
