export const translations = {
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Sebastian Buffo Sempe",
      title: "Desarrollador Full Stack & Emprendedor",
      description: "Creando soluciones tecnológicas innovadoras que transforman ideas en realidad. Especializado en Rails, React, Python y tecnologías modernas.",
      cta: "Ver Proyectos",
      contact: "Contactar"
    },
    about: {
      title: "Sobre Mí",
      description: "Desarrollador apasionado con experiencia en la construcción de aplicaciones web escalables y soluciones proptech. Me especializo en crear productos que resuelven problemas reales con código limpio y arquitectura sólida."
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      proptech: {
        title: "PropTech Platform",
        description: "Plataforma completa de gestión inmobiliaria con scraping automático, análisis de datos y panel de administración. Rails + Python + React.",
        tech: ["Rails", "Python", "React", "PostgreSQL", "Redis"]
      },
      cooking4u: {
        title: "Cooking4U",
        description: "Marketplace de servicios culinarios conectando chefs con clientes. Sistema de reservas, pagos y gestión de servicios.",
        tech: ["Rails", "JavaScript", "Stripe", "PostgreSQL"]
      },
      afipsdk: {
        title: "AFIP SDK",
        description: "SDK para integración con AFIP (Argentina). Simplifica la facturación electrónica y gestión tributaria.",
        tech: ["Ruby", "SOAP", "XML"]
      },
      dotfiles: {
        title: "Dotfiles",
        description: "Configuración personal de desarrollo optimizada para productividad máxima con herramientas modernas.",
        tech: ["Bash", "Vim", "Git", "Tmux"]
      }
    },
    skills: {
      title: "Stack Tecnológico",
      backend: "Backend",
      frontend: "Frontend",
      tools: "Herramientas & DevOps",
      databases: "Bases de Datos"
    },
    experience: {
      title: "Trayectoria",
      current: "Actual",
      items: [
        {
          role: "Fundador & Desarrollador Full Stack",
          company: "PropTech Platform",
          period: "2024 - Presente",
          description: "Desarrollo de plataforma proptech completa con scraping, análisis de datos y gestión inmobiliaria."
        },
        {
          role: "Fundador & CTO",
          company: "Cooking4U",
          period: "2023 - 2024",
          description: "Marketplace de servicios culinarios. Lideré el desarrollo técnico y arquitectura de la plataforma."
        },
        {
          role: "Desarrollador Full Stack",
          company: "Proyectos Independientes",
          period: "2020 - Presente",
          description: "Desarrollo de soluciones personalizadas para clientes en diversos sectores."
        }
      ]
    },
    contact: {
      title: "Conectemos",
      description: "¿Tienes un proyecto en mente? Me encantaría escucharlo.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con",
      and: "y"
    },
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Skills",
      contact: "Contacto"
    }
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Sebastian Buffo Sempe",
      title: "Full Stack Developer & Entrepreneur",
      description: "Building innovative tech solutions that transform ideas into reality. Specialized in Rails, React, Python, and modern technologies.",
      cta: "View Projects",
      contact: "Get in Touch"
    },
    about: {
      title: "About Me",
      description: "Passionate developer with experience building scalable web applications and proptech solutions. I specialize in creating products that solve real problems with clean code and solid architecture."
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      proptech: {
        title: "PropTech Platform",
        description: "Complete real estate management platform with automated scraping, data analysis, and admin panel. Rails + Python + React.",
        tech: ["Rails", "Python", "React", "PostgreSQL", "Redis"]
      },
      cooking4u: {
        title: "Cooking4U",
        description: "Culinary services marketplace connecting chefs with clients. Booking system, payments, and service management.",
        tech: ["Rails", "JavaScript", "Stripe", "PostgreSQL"]
      },
      afipsdk: {
        title: "AFIP SDK",
        description: "SDK for AFIP (Argentina) integration. Simplifies electronic invoicing and tax management.",
        tech: ["Ruby", "SOAP", "XML"]
      },
      dotfiles: {
        title: "Dotfiles",
        description: "Personal development configuration optimized for maximum productivity with modern tools.",
        tech: ["Bash", "Vim", "Git", "Tmux"]
      }
    },
    skills: {
      title: "Tech Stack",
      backend: "Backend",
      frontend: "Frontend",
      tools: "Tools & DevOps",
      databases: "Databases"
    },
    experience: {
      title: "Experience",
      current: "Current",
      items: [
        {
          role: "Founder & Full Stack Developer",
          company: "PropTech Platform",
          period: "2024 - Present",
          description: "Development of complete proptech platform with scraping, data analysis, and real estate management."
        },
        {
          role: "Founder & CTO",
          company: "Cooking4U",
          period: "2023 - 2024",
          description: "Culinary services marketplace. Led technical development and platform architecture."
        },
        {
          role: "Full Stack Developer",
          company: "Independent Projects",
          period: "2020 - Present",
          description: "Development of custom solutions for clients across various sectors."
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      description: "Have a project in mind? I'd love to hear about it.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
      and: "and"
    },
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact"
    }
  }
}

export type Language = keyof typeof translations
export type Translations = typeof translations.es
