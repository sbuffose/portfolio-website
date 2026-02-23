'use client'

interface AboutProps {
  t: {
    title: string
    description: string
  }
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-strong rounded-3xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  )
}
