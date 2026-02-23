import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sebastian Buffo Sempe | Full Stack Developer & Entrepreneur',
  description: 'Desarrollador Full Stack especializado en Rails, React, Python y tecnologías modernas. Creando soluciones innovadoras que transforman ideas en realidad.',
  keywords: ['Sebastian Buffo Sempe', 'Full Stack Developer', 'Rails', 'React', 'Python', 'PropTech', 'Web Development', 'Argentina Developer'],
  authors: [{ name: 'Sebastian Buffo Sempe' }],
  creator: 'Sebastian Buffo Sempe',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: 'https://sbuffose.dev',
    title: 'Sebastian Buffo Sempe | Full Stack Developer',
    description: 'Creando soluciones tecnológicas innovadoras con Rails, React y Python',
    siteName: 'Sebastian Buffo Sempe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Buffo Sempe | Full Stack Developer',
    description: 'Creando soluciones tecnológicas innovadoras',
    creator: '@sbuffose',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://sbuffose.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sebastian Buffo Sempe',
              url: 'https://sbuffose.dev',
              jobTitle: 'Full Stack Developer',
              description: 'Full Stack Developer specializing in Rails, React, Python, and modern web technologies',
              sameAs: [
                'https://github.com/sbuffose',
                'https://linkedin.com/in/sbuffose',
              ],
              knowsAbout: [
                'Ruby on Rails',
                'React',
                'Python',
                'JavaScript',
                'TypeScript',
                'PostgreSQL',
                'Redis',
                'Web Development',
                'PropTech',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
