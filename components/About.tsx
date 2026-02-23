'use client'

interface AboutProps {
  t: {
    title: string
    description: string
  }
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">{t.title}</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Key points with AI twist */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  text: 'Full Stack Development'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  text: 'AI Integration & Automation'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  text: 'Scalable Cloud Architecture'
                },
              ].map((point, index) => (
                <div
                  key={point.text}
                  className="flex items-center gap-4 group glass-card rounded-xl p-4 hover:border-blue-500/40 transition-all animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 text-blue-400">
                    {point.icon}
                  </div>
                  <span className="text-lg font-medium text-slate-200">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Floating stats */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative aspect-square rounded-3xl glass-card p-12 overflow-hidden scan-line">
              {/* Grid pattern */}
              <div className="absolute inset-0 grid-pattern opacity-20" />

              {/* Floating stats */}
              <div className="relative h-full flex flex-col justify-between">
                <div className="glass-card rounded-2xl p-6 border-blue-500/30 transform hover:scale-105 transition-all glow-blue animate-float" style={{ animationDelay: '0s' }}>
                  <div className="text-5xl font-black gradient-text mb-2">5+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Años de Experiencia</div>
                </div>

                <div className="glass-card rounded-2xl p-6 border-purple-500/30 ml-auto transform hover:scale-105 transition-all glow-purple animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-5xl font-black gradient-ai mb-2">20+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Proyectos AI</div>
                </div>

                <div className="glass-card rounded-2xl p-6 border-cyan-500/30 transform hover:scale-105 transition-all glow-cyan animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-5xl font-black gradient-text mb-2">100%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Innovación</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
