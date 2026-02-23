'use client'

interface ProjectsProps {
  t: {
    title: string
    viewProject: string
    viewCode: string
    cookingService: {
      title: string
      description: string
      tech: string[]
    }
    techPocket: {
      title: string
      description: string
      tech: string[]
    }
  }
}

export default function Projects({ t }: ProjectsProps) {
  const projects = [
    {
      ...t.cookingService,
      gradient: 'from-emerald-500 to-teal-600',
      link: 'https://www.cookingservice.com.ar/',
      pattern: 'dots',
    },
    {
      ...t.techPocket,
      gradient: 'from-blue-500 to-violet-600',
      link: 'https://tech-pocket.com/',
      pattern: 'grid',
    },
  ]

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-4 max-w-7xl mb-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones tecnológicas que impactan en el mundo real
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project visual */}
              <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br bg-gray-50 border border-gray-200 shadow-2xl shadow-gray-900/10 group-hover:shadow-3xl transition-all duration-500">
                  {/* Pattern background */}
                  <div className={`absolute inset-0 opacity-10 ${
                    project.pattern === 'dots'
                      ? 'bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]'
                      : 'bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]'
                  }`} />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Floating elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                  </div>

                  {/* Project icon/letter */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-bold text-gray-900/5 group-hover:scale-110 transition-transform duration-500">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10`} />
              </div>

              {/* Project details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-gray-900 font-semibold text-lg hover:gap-4 transition-all"
                  >
                    <span>{t.viewCode}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
