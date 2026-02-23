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
    <section id="projects" className="py-24 md:py-32 bg-[#0A0E27] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 radial-overlay" />

      {/* Section header */}
      <div className="container mx-auto px-6 max-w-6xl mb-16 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-lg text-slate-400">
            Soluciones que impulsan el crecimiento y la innovación
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group project-card p-8 spotlight animate-fade-in-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="text-5xl">{project.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-xs font-medium border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link indicator */}
              <div className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                <span>View Project</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Subtle gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl pointer-events-none`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
