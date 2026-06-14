# Estudio Interactivo - Química General

Este proyecto es una aplicación web moderna diseñada para el estudio de Química General, migrada de una guía HTML legada a una arquitectura profesional con React.

## Arquitectura y Tecnologías

- **Framework:** React 19 (con React Compiler).
- **Build Tool:** Vite 8 + Rolldown.
- **Lenguaje:** TypeScript (Configurado con `verbatimModuleSyntax`).
- **Estilos:** Tailwind CSS 3.
- **Componentes UI:** Shadcn/ui (manual) + Lucide React (incluyendo navegación móvil) + Framer Motion.
- **Alias de Rutas:** `@/*` apunta a `./src/*`.
- **Generación de PDF:** jsPDF + jspdf-autotable (con sistema de limpieza de HTML).

## Estructura del Proyecto

- `src/components/`:
  - `ui/`: Componentes base, utilidades visuales (`GalleryView`) y diálogos responsivos.
  - `layout/`: Componentes de estructura (`Sidebar` con soporte móvil).
  - `exercise/`: Lógica y vista de ejercicios (Adaptado para móviles).
  - `periodic-table/`: Tabla periódica interactiva y secciones educativas.
  - `theory/`: Secciones de contenido teórico detallado (Diseño fluido).
- `src/data/`:
  - `chemistry/`: Datos de Química (Coloquios, Exámenes, Tabla Periódica).
  - `math/`: Datos de Matemática (Coloquios, Teoría).
  - `shared/`: Tipos o utilidades comunes.
- `src/types/`: Definiciones de interfaces TypeScript.

## Convenciones y Reglas

- **Tipado:** Usar siempre `import type` para importaciones de tipos.
- **Datos:** Los nuevos coloquios deben seguir la interfaz `Exercise` y situarse en la carpeta correspondiente de la materia en `src/data/`.
- **Materias:** Para añadir una nueva materia, se debe actualizar el tipo `Subject` en `App.tsx` y añadir el toggle correspondiente en el `Sidebar`.

## Estado Actual
- **Arquitectura Multi-materia:** La aplicación ahora soporta tanto **Química** como **Matemática** mediante un selector en el Sidebar.
- **Química:** Migración completa de los Coloquios N° 2, 3, 4 y 5.
- **Matemática:** Inicio de la integración con la **Unidad 4 (Funciones)**. Estructura base creada y lista para recibir contenido de los PDFs.
- **Tabla Periódica:** Exclusiva para el modo Química.
- **PDF Dinámico:** Generación de resoluciones adaptada a la materia activa.
- **Validación:** El proyecto cumple con estándares estrictos de TypeScript y compila exitosamente.
