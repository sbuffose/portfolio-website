export const translations = {
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Sebastian Buffo Sempe",
      title: "Desarrollador Full Stack & Emprendedor",
      description: "Construyendo soluciones tecnológicas que transforman ideas en realidad. Especializado en Rails, React y plataformas web escalables.",
      cta: "Ver Proyectos",
      contact: "Contactar"
    },
    about: {
      title: "Sobre Mí",
      description: "Desarrollador apasionado con experiencia en la construcción de aplicaciones web escalables. Me especializo en crear productos que resuelven problemas reales con código limpio y arquitectura sólida."
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      cookingService: {
        title: "Cooking Service",
        description: "ERP de Cooking Service. Plataforma de gestión, incluyendo los consultorios de nutrición: turnos, planes alimentarios y delivery de comida saludable a domicilio, facturación electrónica (AFIP) y comunicación con pacientes vía WhatsApp.",
        tech: ["Rails", "PostgreSQL", "JavaScript", "AFIP API", "WhatsApp"]
      },
      techPocket: {
        title: "Tech Pocket",
        description: "Plataforma HR todo-en-uno que permite a empresas gestionar empleados, vacaciones (PTO), contratos, documentos, equipamiento, entidades legales y facturación. Incluye flujos de aprobación, RBAC, notificaciones vía Slack y email, organigrama interactivo y soporte multilenguaje.",
        tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"]
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
          company: "Tech Pocket",
          period: "2024 - Presente",
          description: "Plataforma HR todo-en-uno con gestión de empleados, PTO, contratos, equipamiento y facturación. Arquitectura completa con React, TypeScript y Supabase."
        },
        {
          role: "Fundador & Desarrollador Full Stack",
          company: "Cooking Service",
          period: "2022 - Presente",
          description: "ERP de gestión para consultorios de nutrición y delivery de comida saludable. Sistema completo con Rails, integración AFIP y comunicación vía WhatsApp."
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
      description: "Building tech solutions that transform ideas into reality. Specialized in Rails, React, and scalable web platforms.",
      cta: "View Projects",
      contact: "Get in Touch"
    },
    about: {
      title: "About Me",
      description: "Passionate developer with experience building scalable web applications. I specialize in creating products that solve real problems with clean code and solid architecture."
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      cookingService: {
        title: "Cooking Service",
        description: "Cooking Service ERP. Management platform including nutrition clinics: appointments, meal plans, and healthy meal delivery to homes, electronic invoicing (AFIP), and patient communication via WhatsApp.",
        tech: ["Rails", "PostgreSQL", "JavaScript", "AFIP API", "WhatsApp"]
      },
      techPocket: {
        title: "Tech Pocket",
        description: "All-in-one HR platform that allows companies to manage employees, PTO, contracts, documents, equipment, legal entities, and billing. Includes approval workflows, RBAC, Slack and email notifications, interactive org chart, and multi-language support.",
        tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"]
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
          company: "Tech Pocket",
          period: "2024 - Present",
          description: "All-in-one HR platform with employee management, PTO, contracts, equipment, and billing. Full architecture with React, TypeScript, and Supabase."
        },
        {
          role: "Founder & Full Stack Developer",
          company: "Cooking Service",
          period: "2022 - Present",
          description: "Management ERP for nutrition clinics and healthy meal delivery. Complete system with Rails, AFIP integration, and WhatsApp communication."
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
