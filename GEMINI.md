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
  - `colloquiums/`: Datos de ejercicios (Coloquios 2, 3, 4 y 5).
  - `exams/`: Modelos de parcial con resoluciones detalladas.
  - `theory.ts`: Contenido de las categorías teóricas (Unidades y Categorías).
  - `elements.ts`: Datos de la tabla periódica (Z, Masa, EN, Config, etc.).
- `src/types/`: Definiciones de interfaces TypeScript.

## Convenciones y Reglas

- **Tipado:** Usar siempre `import type` para importaciones de tipos.
- **Datos:** Los nuevos coloquios deben seguir la interfaz `Exercise` y situarse en `src/data/colloquiums/`.
- **Limpieza PDF:** Cualquier texto enviado al PDF debe pasar por la utilidad `cleanHTML` en `Sidebar.tsx` o `cleanText` en `PeriodicTable.tsx`.

## Estado Actual
- **Coloquios:** Migración completa de los Coloquios N° 2, 3, 4 y 5 (con resoluciones, teoría y trivias).
- **Modelos de Parcial:** Integración de una sección de "Simulacro de Examen" con dos modelos resueltos (Densidad, Isótopos, Estequiometría y Redox).
- **Teoría:** 
  - **Unidades:** Resúmenes Teóricos por Unidad (2 a 5). Se añadió acceso directo a la **Unidad 3** y criterios de identificación de enlaces en la **Unidad 5**.
  - **Ejercicios:** Soporte teórico enriquecido, incluyendo conceptos como **Isoelectrónico**.
- **Tabla Periódica:** 
  - **Educativa:** Se añadieron secciones detalladas de **Tendencias Periódicas** y **Enlaces Químicos** (Lewis, Polaridad Molecular, ΔEN).
  - **Descargas:** Sistema de PDF dual (Datos Elementos y Guía Teórica).
- **Funcionalidad:**
  - **Responsividad:** Aplicación 100% adaptable a móviles mediante un sistema de menú hamburguesa y layouts fluidos.
  - **PDF Dinámico:** Generación de resoluciones con limpieza automática de caracteres Unicode.
- **Validación:** El proyecto cumple con estándares estrictos de TypeScript y compila exitosamente (`npm run build`).
