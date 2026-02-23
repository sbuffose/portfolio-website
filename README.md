# 🌟 Sebastian Buffo Sempe - Portfolio Landing Page

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwind-css)

**Bilingual Portfolio | Mobile-First | SEO Optimized | LLM Ready**

[🇪🇸 Español](#español-) • [🇬🇧 English](#english-)

</div>

---

## Español 🇪🇸

### ✨ Características

- 🌍 **Bilingüe**: Español (por defecto) e Inglés
- 📱 **Mobile-First**: Diseño optimizado para dispositivos móviles
- 🎨 **Glassmorphism**: Diseño moderno con efectos de vidrio esmerilado
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- 🔍 **SEO Optimizado**: Metadata completa, Open Graph, Twitter Cards
- 🤖 **LLM Ready**: Schema.org structured data para búsquedas con IA
- ⚡ **Performance**: Next.js 15 con SSR y optimizaciones
- 🎯 **Secciones**: Hero, About, Projects, Skills, Experience, Contact

### 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

### 📦 Build & Deploy

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Deploy a Vercel (recomendado)
npx vercel
```

### 🎨 Personalización

#### 1. Actualizar Contenido

Edita `/lib/translations.ts` para modificar todo el contenido en español e inglés:

```typescript
export const translations = {
  es: {
    hero: {
      name: "Tu Nombre",
      title: "Tu Título",
      // ... más contenido
    }
  }
}
```

#### 2. Actualizar Proyectos

En `/components/Projects.tsx`, actualiza los links de tus proyectos:

```typescript
const projects = [
  {
    ...t.proptech,
    link: 'https://github.com/tuusuario/tuproyecto',
  },
  // ... más proyectos
]
```

#### 3. Actualizar Contacto

En `/components/Contact.tsx`, actualiza tu email y links:

```typescript
const contacts = [
  {
    label: t.email,
    value: 'tu@email.com',
    href: 'mailto:tu@email.com',
    // ...
  }
]
```

#### 4. Metadata & SEO

Edita `/app/layout.tsx` para actualizar SEO metadata:

```typescript
export const metadata: Metadata = {
  title: 'Tu Nombre | Tu Título',
  description: 'Tu descripción',
  // ... más metadata
}
```

### 🎯 Estructura de Archivos

```
portfolio-landing/
├── app/
│   ├── layout.tsx         # Layout principal + SEO
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales + glassmorphism
├── components/
│   ├── Hero.tsx           # Sección hero
│   ├── About.tsx          # Sobre mí
│   ├── Projects.tsx       # Proyectos
│   ├── Skills.tsx         # Habilidades
│   ├── Experience.tsx     # Experiencia
│   ├── Contact.tsx        # Contacto
│   ├── Navigation.tsx     # Navegación
│   └── LanguageToggle.tsx # Selector de idioma
├── lib/
│   └── translations.ts    # Contenido bilingüe
└── public/
    └── (imágenes)
```

### 🚀 Deploy a Vercel

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Deploy automático! ✨

### 🎨 Colores y Temas

Los colores principales están en `app/globals.css`:

- **Gradientes principales**: Purple (#667eea) → Pink (#764ba2)
- **Gradientes alternativos**: Pink (#f093fb) → Red (#f5576c)
- **Background**: Dark gradient (slate-900 → purple-900)

### 📊 Performance

- ✅ Next.js 15 con App Router
- ✅ Server-Side Rendering (SSR)
- ✅ Optimización de imágenes
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Minimización de CSS/JS

### 🔍 SEO Features

- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Schema.org structured data
- ✅ Robots.txt optimizado
- ✅ Sitemap (auto-generado por Next.js)

### 🤖 LLM Optimization

- ✅ Schema.org Person markup
- ✅ Semantic HTML5
- ✅ Clear content hierarchy
- ✅ Structured data for projects
- ✅ Knowledge graph optimization

---

## English 🇬🇧

### ✨ Features

- 🌍 **Bilingual**: Spanish (default) and English
- 📱 **Mobile-First**: Optimized for mobile devices
- 🎨 **Glassmorphism**: Modern design with frosted glass effects
- 🎭 **Animations**: Smooth transitions with Framer Motion
- 🔍 **SEO Optimized**: Complete metadata, Open Graph, Twitter Cards
- 🤖 **LLM Ready**: Schema.org structured data for AI search
- ⚡ **Performance**: Next.js 15 with SSR and optimizations
- 🎯 **Sections**: Hero, About, Projects, Skills, Experience, Contact

### 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Open in browser
# http://localhost:3000
```

### 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
npx vercel
```

### 🎨 Customization

#### 1. Update Content

Edit `/lib/translations.ts` to modify all content in Spanish and English:

```typescript
export const translations = {
  es: {
    hero: {
      name: "Your Name",
      title: "Your Title",
      // ... more content
    }
  }
}
```

#### 2. Update Projects

In `/components/Projects.tsx`, update your project links:

```typescript
const projects = [
  {
    ...t.proptech,
    link: 'https://github.com/yourusername/yourproject',
  },
  // ... more projects
]
```

#### 3. Update Contact

In `/components/Contact.tsx`, update your email and links:

```typescript
const contacts = [
  {
    label: t.email,
    value: 'your@email.com',
    href: 'mailto:your@email.com',
    // ...
  }
]
```

#### 4. Metadata & SEO

Edit `/app/layout.tsx` to update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  // ... more metadata
}
```

### 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Auto deploy! ✨

---

## 📝 License

MIT © Sebastian Buffo Sempe

---

<div align="center">

**Made with ❤️ using Next.js 15, React 19, and Tailwind CSS**

</div>
