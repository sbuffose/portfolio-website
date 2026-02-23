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
    <section id="experience" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-transparent" />

          {/* Experience items */}
          <div className="space-y-12">
            {t.items.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-24 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 ring-4 ring-white group-hover:scale-125 transition-transform" />
                </div>

                {/* Content card */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {item.role}
                      </h3>
                      <div className="text-lg font-medium text-violet-600">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.period === t.items[0].period && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {t.current}
                        </span>
                      )}
                      <span className="text-gray-500 font-medium">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
