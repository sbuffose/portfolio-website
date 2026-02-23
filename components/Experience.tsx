'use client'

interface ExperienceProps {
  t: {
    title: string
    current: string
    items: Array<{
      role: string
      company: string
      period: string
      description: string
    }>
  }
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <section id="experience" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500/5 to-transparent" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-20 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical animated line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full glow-blue" />

          {/* Experience items */}
          <div className="space-y-12">
            {t.items.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-24 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot with pulse */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ring-4 ring-slate-900 group-hover:scale-125 transition-transform glow-blue" />
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                  </div>
                </div>

                {/* Content card */}
                <div className="glass-card rounded-2xl p-8 hover:border-blue-500/40 transition-all scan-line shimmer">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:gradient-text transition-all">
                        {item.role}
                      </h3>
                      <div className="text-lg font-medium text-cyan-400">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.period === t.items[0].period && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30 animate-pulse">
                          {t.current}
                        </span>
                      )}
                      <span className="text-slate-400 font-medium">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
