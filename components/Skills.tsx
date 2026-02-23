'use client'

interface SkillsProps {
  t: {
    title: string
    backend: string
    frontend: string
    tools: string
    databases: string
  }
}

export default function Skills({ t }: SkillsProps) {
  const skillCategories = [
    {
      title: t.backend,
      skills: ['Ruby on Rails', 'Python', 'Node.js', 'REST APIs'],
      icon: '⚙️',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: t.frontend,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.databases,
      skills: ['PostgreSQL', 'Redis', 'Supabase', 'MongoDB'],
      icon: '💾',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: t.tools,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
      icon: '🛠️',
      gradient: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que construyo soluciones
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {category.title}
              </h3>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
