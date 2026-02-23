'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          {t.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
