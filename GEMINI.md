# Estudio Interactivo - Química General

Este proyecto es una aplicación web moderna diseñada para el estudio de Química General, migrada de una guía HTML legada a una arquitectura profesional con React.

## Arquitectura y Tecnologías

- **Framework:** React 19 (con React Compiler).
- **Build Tool:** Vite 8 + Rolldown.
- **Lenguaje:** TypeScript (Configurado con `verbatimModuleSyntax`).
- **Estilos:** Tailwind CSS 3.
- **Componentes UI:** Shadcn/ui (manual) + Lucide React + Framer Motion.
- **Alias de Rutas:** `@/*` apunta a `./src/*`.
- **Generación de PDF:** jsPDF + jspdf-autotable (con sistema de limpieza de HTML).

## Estructura del Proyecto

- `src/components/`:
  - `ui/`: Componentes base y utilidades visuales (`GalleryView`).
  - `layout/`: Componentes de estructura (`Sidebar`).
  - `exercise/`: Lógica y vista de ejercicios.
  - `periodic-table/`: Tabla periódica interactiva con datos de electronegatividad.
  - `theory/`: Secciones de contenido teórico detallado.
- `src/data/`:
  - `colloquiums/`: Datos de ejercicios (Coloquios 2, 3, 4 y 5).
  - `theory.ts`: Contenido de las categorías teóricas (Unidades y Categorías).
  - `elements.ts`: Datos de la tabla periódica (Z, Masa, EN, Config, etc.).
- `src/types/`: Definiciones de interfaces TypeScript.

## Convenciones y Reglas

- **Tipado:** Usar siempre `import type` para importaciones de tipos.
- **Datos:** Los nuevos coloquios deben seguir la interfaz `Exercise` y situarse en `src/data/colloquiums/`.
- **Limpieza PDF:** Cualquier texto enviado al PDF debe pasar por la utilidad `cleanHTML` en `Sidebar.tsx`.

## Estado Actual
- **Coloquios:** Migración completa de los Coloquios N° 2, 3, 4 y 5 (con resoluciones, teoría y trivias).
- **Teoría:** 
  - **Unidades:** Resúmenes Teóricos por Unidad (2 a 5) con diagramas SVG.
  - **Ejercicios:** Soporte teórico enriquecido para cada categoría (Atoms, Mass, Config, Trends, Bonds, Geometry).
- **Funcionalidad:**
  - **Galería Visual:** Sistema de imágenes de apoyo integrado.
  - **PDF Dinámico:** Generación de resoluciones con soporte para fórmulas químicas simplificadas.
  - **Tabla Periódica:** Incluye electronegatividad y estados de oxidación.
- **Navegación:** Sidebar interactivo y navegación secuencial en el footer.
- **Tipado:** Validación estricta con TypeScript superada.
