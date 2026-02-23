'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ContactProps {
  t: {
    title: string
    description: string
    email: string
    github: string
    linkedin: string
  }
}

export default function Contact({ t }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contacts = [
    {
      label: t.email,
      value: 'sebastian@example.com',
      href: 'mailto:sebastian@example.com',
      icon: '📧',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      label: t.github,
      value: 'github.com/sbuffose',
      href: 'https://github.com/sbuffose',
      icon: '💻',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      label: t.linkedin,
      value: 'linkedin.com/in/sbuffose',
      href: 'https://linkedin.com/in/sbuffose',
      icon: '💼',
      gradient: 'from-pink-500 to-orange-500',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all group text-center"
            >
              <div className={`text-4xl mb-3`}>{contact.icon}</div>
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${contact.gradient} mb-4`} />

              <h3 className="text-lg font-bold mb-2 text-white">
                {contact.label}
              </h3>

              <p className="text-gray-400 text-sm group-hover:text-white transition-colors break-all">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
