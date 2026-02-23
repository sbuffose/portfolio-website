'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutProps {
  t: {
    title: string
    description: string
  }
}

export default function About({ t }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {t.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
