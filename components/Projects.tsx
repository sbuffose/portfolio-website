'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProjectsProps {
  t: {
    title: string
    viewProject: string
    viewCode: string
    proptech: {
      title: string
      description: string
      tech: string[]
    }
    cooking4u: {
      title: string
      description: string
      tech: string[]
    }
    afipsdk: {
      title: string
      description: string
      tech: string[]
    }
    dotfiles: {
      title: string
      description: string
      tech: string[]
    }
  }
}

export default function Projects({ t }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      ...t.cookingService,
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://www.cookingservice.com.ar/',
    },
    {
      ...t.techPocket,
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://tech-pocket.com/',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          {t.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all group"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="glass px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
              >
                {t.viewCode}
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
