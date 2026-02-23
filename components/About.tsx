'use client'

interface AboutProps {
  t: {
    title: string
    description: string
  }
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-50/50 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-violet-100 to-purple-100 p-12 border border-violet-200/50 overflow-hidden">
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Floating stats */}
              <div className="relative h-full flex flex-col justify-between">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-200/50 transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-200/50 ml-auto transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-200/50 transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-sm text-gray-600">Compromiso</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                {t.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-4">
              {[
                'Full Stack Development',
                'Product Design & Strategy',
                'Scalable Architecture',
              ].map((point, index) => (
                <div key={point} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <span className="text-lg font-medium text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
