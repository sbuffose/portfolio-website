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
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Floating orbs with parallax */}
      <div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 container mx-auto px-4 py-32 max-w-7xl">
        <div className="text-center space-y-8">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-violet-200/50 text-sm text-violet-700 font-medium shadow-lg shadow-violet-500/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            {t.greeting}
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-fade-in-up delay-100">
            <span className="block text-gray-900">{t.name.split(' ')[0]}</span>
            <span className="block gradient-text">{t.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-4xl text-gray-600 font-light max-w-4xl mx-auto animate-fade-in-up delay-200">
            {t.title}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-400">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
            >
              <span className="relative z-10">{t.cta}</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-medium hover:border-gray-900 hover:shadow-lg transition-all"
            >
              {t.contact}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-fade-in delay-500">
            <div className="inline-flex flex-col items-center gap-2 text-gray-400">
              <span className="text-sm font-medium">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
