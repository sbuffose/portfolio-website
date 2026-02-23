'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  t: {
    greeting: string
    name: string
    title: string
    description: string
    cta: string
    contact: string
  }
}

export default function Hero({ t }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E27]">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 radial-overlay" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Ambient orbs with subtle parallax */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
          top: `${15 + mousePosition.y * 0.05}%`,
          left: `${10 + mousePosition.x * 0.05}%`,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          bottom: `${15 + mousePosition.y * 0.03}%`,
          right: `${15 + mousePosition.x * 0.04}%`,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </div>
          <span className="text-sm font-medium text-blue-300">AI-Powered Development</span>
        </div>

        {/* Greeting */}
        <div className="mb-3 animate-fade-in delay-100">
          <span className="text-lg md:text-xl text-slate-400 font-light">
            {t.greeting}
          </span>
        </div>

        {/* Name - more refined */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-200 leading-[1.1]">
          <span className="gradient-text">
            {t.name}
          </span>
        </h1>

        {/* Title - cleaner */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 animate-fade-in-up delay-300 text-slate-200 leading-relaxed">
          {t.title}
        </h2>

        {/* Description - more readable */}
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-400">
          {t.description}
        </p>

        {/* CTA Buttons - refined */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500 mb-16">
          <a href="#projects" className="btn-primary group">
            <span className="flex items-center gap-2">
              {t.cta}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a href="#contact" className="btn-secondary group">
            <span className="flex items-center gap-2">
              {t.contact}
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Stats - cleaner layout */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 animate-fade-in delay-600">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '20+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
