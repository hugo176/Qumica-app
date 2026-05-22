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
- **Coloquios:** Migración completa de los Coloquios N° 2, 3, 4 y 5 (con resoluciones, teoría y trivias).
- **Teoría:** Nueva sección de **Resúmenes Teóricos por Unidad** (Unidades 2 a 5) con:
  - Explicaciones detalladas de conceptos clave (Estructura Atómica, Estequiometría, Fuerzas Intermoleculares, Redox/pH).
  - Esquemas y diagramas visuales (SVG) integrados para apoyo al estudio.
  - Sistema de navegación secuencial y tips de estudio.
- **Funcionalidad:**
  - Sistema de **Galería Visual** implementado para imágenes de apoyo teórica por coloquio.
  - Generación de **PDF** de resoluciones activa para todos los coloquios.
  - Tabla periódica funcional e integrada.
  - Soporte de renderizado HTML (subíndices/fórmulas) en ejercicios, cuestionarios y teoría.
- **Navegación:** Sidebar unificado (Coloquios + Teoría) y sistema de navegación secuencial (footer) adaptativo según el modo de vista.
- **Tipado:** Validación estricta con TypeScript superada y build optimizado.
