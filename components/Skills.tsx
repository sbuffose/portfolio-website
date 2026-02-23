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
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.frontend,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t.databases,
      skills: ['PostgreSQL', 'Redis', 'Supabase', 'MongoDB'],
      icon: '💾',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: t.tools,
      skills: ['Git', 'Docker', 'AWS', 'AI/ML'],
      icon: '🤖',
      gradient: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <section id="skills" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 tech-lines opacity-20" />
      <div className="absolute inset-0 neural-bg" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stack tecnológico potenciado con IA
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative glass-card rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 shimmer animate-scale-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Floating icon */}
              <div className="text-6xl mb-6 animate-float-slow" style={{ animationDelay: `${index * 200}ms` }}>
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:gradient-text transition-all">
                {category.title}
              </h3>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors"
                    style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
