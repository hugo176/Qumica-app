# Estudio Interactivo - Química General

Este proyecto es una aplicación web moderna diseñada para el estudio de Química General, migrada de una guía HTML legada a una arquitectura profesional con React.

## Arquitectura y Tecnologías

- **Framework:** React 19 (con React Compiler).
- **Build Tool:** Vite 8 + Rolldown.
- **Lenguaje:** TypeScript (Configurado con `verbatimModuleSyntax`).
- **Estilos:** Tailwind CSS 3.
- **Componentes UI:** Shadcn/ui (manual) + Lucide React + Framer Motion.
- **Alias de Rutas:** `@/*` apunta a `./src/*`.

## Estructura del Proyecto

- `src/components/`:
  - `ui/`: Componentes base (Button, Card, Accordion, etc.).
  - `layout/`: Componentes de estructura (Sidebar, Navbar).
  - `exercise/`: Lógica y vista de ejercicios.
  - `periodic-table/`: Componente interactivo de la tabla periódica.
  - `theory/`: Secciones de contenido teórico.
- `src/data/`:
  - `colloquiums/`: Datos de ejercicios organizados por coloquio.
  - `theory.ts`: Contenido de las categorías teóricas.
  - `elements.ts`: Datos de la tabla periódica.
- `src/types/`: Definiciones de interfaces TypeScript para todo el proyecto.

## Convenciones y Reglas

- **Tipado:** Usar siempre `import type` para importaciones de tipos (requerido por `verbatimModuleSyntax`).
- **Componentes:** Seguir el patrón de Shadcn/ui para componentes de UI. Usar `cn` (en `src/lib/utils.ts`) para la concatenación de clases Tailwind.
- **Datos:** Los nuevos coloquios deben añadirse en `src/data/colloquiums/` siguiendo la interfaz `Exercise`.
- **Estilos:** Priorizar clases de Tailwind y evitar CSS personalizado en `App.css` a menos que sea estrictamente necesario.

## Estado Actual
- Migración completa del Coloquio N° 2.
- Tabla periódica funcional e integrada.
- Sistema de navegación lateral (Sidebar) implementado.
- Soporte para visualización de teoría y ejercicios.
