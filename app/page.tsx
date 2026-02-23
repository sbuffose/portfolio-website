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
    <main className="min-h-screen bg-white">
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
      <footer className="relative py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">
            © {new Date().getFullYear()} Sebastian Buffo Sempe. {t.footer.rights}.
          </p>
          <p className="text-sm text-gray-500">
            {t.footer.madeWith} ❤️ {t.footer.and} Next.js + Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
