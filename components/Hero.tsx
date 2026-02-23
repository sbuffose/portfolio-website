'use client'

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
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-400 mb-4 animate-fade-in">
            {t.greeting}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <span className="gradient-text">{t.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a
              href="#projects"
              className="group glass-strong px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-all flex items-center gap-2"
            >
              {t.cta}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full text-white font-medium border-2 border-white/20 hover:bg-white/10 transition-all"
            >
              {t.contact}
            </a>
          </div>

          <div className="mt-20 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex items-start justify-center p-2 animate-bounce">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
