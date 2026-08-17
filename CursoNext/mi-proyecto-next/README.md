This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


# 🧠 Comparativa de métodos de renderizado en Next.js

Este documento resume las diferencias entre los métodos de renderizado disponibles en **Next.js**: SSG, ISR, SSR y CSR.

---

## 📊 Tabla comparativa

| Método | Renderizado | ¿Cuándo se genera? | Actualización | Velocidad de carga | SEO | Ejemplo de uso |
|--------|-------------|--------------------|----------------|---------------------|-----|----------------|
| **SSG** | Estático     | En build (`npm run build`) | Nunca (a menos que se reconstruya) | 🟢 Muy rápida | 🟢 Excelente | Blog, landing page, documentación |
| **ISR** | Estático + Regeneración | En build + cada `x` segundos (revalidate) | Automática en background | 🟢 Muy rápida | 🟢 Excelente | Ecommerce, noticias, catálogos |
| **SSR** | En servidor | En cada request | Siempre (dinámico) | 🔴 Lenta | 🟢 Excelente | Dashboards, contenido personalizado, sesiones |
| **CSR** | En cliente  | Al entrar a la página | Siempre (JS en navegador) | 🟡 Medio lenta | 🔴 Mala | SPAs, apps muy interactivas, admin panels |

---

## 🛠️ ¿Dónde usar cada uno?

### 🔹 Static Site Generation (SSG)
- **Cuándo usarlo:**  
  Cuando el contenido no cambia con frecuencia y es el mismo para todos los usuarios.
- **Ejemplos:**
  - Blogs
  - Portfolios
  - Documentación estática

---

### 🔹 Incremental Static Regeneration (ISR)
- **Cuándo usarlo:**  
  Cuando necesitas rendimiento de sitios estáticos, pero con datos que pueden cambiar con el tiempo.
- **Ejemplos:**
  - Ecommerce (productos, precios, stock)
  - Noticias que se actualizan cada pocos minutos
  - Catálogos grandes

---

### 🔹 Server-Side Rendering (SSR)
- **Cuándo usarlo:**  
  Cuando el contenido depende del request, sesión o permisos del usuario.
- **Ejemplos:**
  - Dashboards personalizados
  - Apps con autenticación por sesión
  - Contenido sensible o frecuentemente actualizado

---

### 🔹 Client-Side Rendering (CSR)
- **Cuándo usarlo:**  
  Cuando la interacción del usuario es muy dinámica y no necesitas SEO.
- **Ejemplos:**
  - Paneles de administración
  - Aplicaciones internas
  - Apps que funcionan como SPA (Single Page Applications)

---

## 📁 Estructura de archivos sugerida en Next.js

    /pages
    │
    ├── csr.js ← Client-Side Rendering
    ├── isr.js ← Incremental Static Regeneration
    ├── ssr.js ← Server-Side Rendering
    └── ssg.js ← Static Site Generation

Cada archivo implementa una variante distinta de renderizado para fines de prueba, comparación o aprendizaje.

---

## 🚀 Recomendación general

- Usa **SSG o ISR** siempre que sea posible (mayor rendimiento).
- Reserva **SSR** para contenido dinámico o sensible.
- Usa **CSR** solo si el contenido no necesita estar listo al momento de la carga (ej: apps internas).

---