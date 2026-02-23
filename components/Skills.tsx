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
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.frontend,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t.databases,
      skills: ['PostgreSQL', 'Redis', 'Supabase', 'MongoDB'],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: t.tools,
      skills: ['Git', 'Docker', 'AWS', 'AI/ML'],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
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
              {/* Icon */}
              <div className="text-blue-400 mb-6">
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
