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
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {t.title}
        </h2>

        <div className="space-y-6">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all relative animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-purple-400 font-medium">{item.company}</p>
                </div>
                <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0 flex items-center gap-2">
                  {item.period === t.items[0].period && (
                    <span className="glass px-2 py-1 rounded-full text-xs text-green-400">
                      {t.current}
                    </span>
                  )}
                  {item.period}
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
