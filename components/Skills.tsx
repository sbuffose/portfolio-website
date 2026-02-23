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
      skills: ['Ruby on Rails', 'Python', 'Node.js', 'SQL', 'REST APIs'],
      color: 'from-red-500 to-pink-500',
    },
    {
      title: t.frontend,
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.databases,
      skills: ['PostgreSQL', 'Redis', 'SQLite', 'MongoDB'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: t.tools,
      skills: ['Git', 'Docker', 'Linux', 'Heroku', 'AWS'],
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${category.color} mb-4`} />

              <h3 className="text-xl font-bold mb-4 text-white">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
