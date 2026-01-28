# AGENTS.md - Protocolo de Orquestación

## 🧠 Identidad del Proyecto

- **Proyecto**: Nexus Admin / Kailoop
- **Stack**: Astro 5, React 19, Tailwind CSS 4, Prisma (PostgreSQL).
- **Filosofía**: Clean Architecture, Código Limpio, Estabilidad (LTS).

## 🛠️ Comandos Maestros (NPM)

- **Desarrollo**: `npm run dev` (Inicia servidor local Astro)
- **Construcción**: `npm run build` (Genera Prisma client y construye sitio Astro [Adapter: Vercel])
- **Base de Datos**: `npm run prisma:generate`
- **Despliegue**: Configurado para Vercel (`@astrojs/vercel`).
- **Testing**: `npm run check` (Validación de tipos de Astro y TypeScript)
- **Linting**: `npm run lint` (ESLint)

## 📂 Arquitectura (Análisis en progreso)

- El proyecto utiliza `src` como directorio fuente.
- Se debe validar la separación entre Dominio, Infraestructura y Aplicación.

## 🚨 Reglas de Oro

1. **Estabilidad**: Priorizar versiones LTS. (Detectado uso de versiones bleeding edge: Astro 5, React 19, TW 4).
2. **Clean Code**: Archivos < 250 líneas. Principio de Responsabilidad Única.
3. **Documentación**: Mantener este archivo y los `SKILL.md` actualizados.
