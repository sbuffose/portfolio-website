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
      icon: '🍽️',
      color: 'emerald',
    },
    {
      ...t.techPocket,
      gradient: 'from-blue-500 to-purple-600',
      link: 'https://tech-pocket.com/',
      icon: '💼',
      color: 'blue',
    },
  ]

  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-0 neural-bg" />

      {/* Section header */}
      <div className="container mx-auto px-4 max-w-7xl mb-20 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 animate-fade-in">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones impulsadas por IA que transforman negocios
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-blue-500/40 shimmer">
                {/* Background gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="text-6xl animate-float-slow" style={{ animationDelay: `${index * 300}ms` }}>
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-3xl font-bold mb-4 text-white group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="relative text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/60 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all"
                >
                  <span>Ver Proyecto</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
              </div>

              {/* External glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
