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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Neural network background */}
      <div className="absolute inset-0 neural-bg" />

      {/* Tech lines animation */}
      <div className="absolute inset-0 tech-lines opacity-30" />

      {/* Floating orbs with mouse parallax */}
      <div
        className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse-glow"
        style={{
          top: `${20 + mousePosition.y * 0.1}%`,
          left: `${10 + mousePosition.x * 0.1}%`,
          transition: 'all 0.3s ease-out',
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-glow delay-300"
        style={{
          top: `${60 + mousePosition.y * 0.15}%`,
          right: `${10 + mousePosition.x * 0.1}%`,
          transition: 'all 0.3s ease-out',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow delay-500"
        style={{
          bottom: `${20 + mousePosition.y * 0.08}%`,
          left: `${50 + mousePosition.x * 0.05}%`,
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Rotating geometric shapes */}
      <div className="absolute top-20 right-20 opacity-10">
        <div className="w-32 h-32 border-2 border-blue-500 animate-rotate-slow" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <div className="w-24 h-24 border-2 border-purple-500 animate-rotate-slow" style={{ animationDuration: '30s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-blue-500/40 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-blue-400">AI-Driven Development</span>
        </div>

        {/* Greeting */}
        <div className="mb-4 animate-fade-in delay-100">
          <span className="text-xl md:text-2xl text-cyan-400 font-light tracking-wide">
            {t.greeting}
          </span>
        </div>

        {/* Name with animated gradient */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 animate-fade-in-up delay-200">
          <span className="gradient-text leading-tight block">
            {t.name}
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in-up delay-300">
          <span className="text-slate-300">{t.title.split(' ').slice(0, -2).join(' ')}</span>
          <span className="gradient-ai"> {t.title.split(' ').slice(-2).join(' ')}</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in delay-400">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl glow-blue shimmer"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.cta}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 glass-card rounded-xl font-semibold text-slate-200 hover:text-white transition-all hover:scale-105 hover:border-blue-500/60"
          >
            <span className="flex items-center gap-2">
              {t.contact}
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in delay-600">
          {[
            { value: '5+', label: 'Años' },
            { value: '20+', label: 'Proyectos' },
            { value: '100%', label: 'AI-Driven' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-blue-500/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
    </section>
  )
}
