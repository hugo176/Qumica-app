import type { TheoryEntry } from '../../types';

export const mathTheoryData: Record<string, TheoryEntry> = {
  'Funciones': {
    title: 'Unidad 4: Funciones',
    content: `
      <h3>1. Definición de Función</h3>
      <p>Una función es una relación entre dos conjuntos, donde a cada elemento del primer conjunto (dominio) le corresponde exactamente un elemento del segundo conjunto (codominio).</p>
      
      <h3>2. Dominio e Imagen</h3>
      <ul>
        <li><b>Dominio:</b> Conjunto de valores para los cuales la función está definida.</li>
        <li><b>Imagen:</b> Conjunto de valores que efectivamente toma la función.</li>
      </ul>
    `,
    svg: `
      <svg width="200" height="150" viewBox="0 0 200 150">
        <rect x="20" y="20" width="160" height="110" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
        <path d="M40,110 L160,110 M50,120 L50,30" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
        <path d="M50,100 Q100,20 150,80" fill="none" stroke="#3b82f6" stroke-width="3" />
        <text x="170" y="115" font-size="10">x</text>
        <text x="45" y="25" font-size="10">y</text>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    `
  },
  'Conceptos Básicos': {
    title: 'Estadística: Conceptos Básicos',
    content: `
      <h3>1. Población y Muestra</h3>
      <p><b>Población:</b> Conjunto completo de elementos a estudiar.</p>
      <p><b>Muestra:</b> Subconjunto de la población que se analiza para obtener conclusiones generales.</p>
      
      <h3>2. Variables Estadísticas</h3>
      <ul>
        <li><b>Cualitativas:</b> Expresan cualidades o categorías (Ej: Color, Tipo de Superficie).</li>
        <li><b>Cuantitativas:</b> Expresan cantidades numéricas.
          <ul>
            <li><b>Discretas:</b> Valores aislados (Ej: Nº de hijos, UFC).</li>
            <li><b>Continuas:</b> Pueden tomar cualquier valor en un rango (Ej: Peso, Altura).</li>
          </ul>
        </li>
      </ul>
    `,
    svg: `
      <svg width="200" height="120" viewBox="0 0 200 120">
        <circle cx="100" cy="60" r="50" fill="#f1f5f9" stroke="#94a3b8" />
        <circle cx="110" cy="70" r="20" fill="#dbeafe" stroke="#3b82f6" />
        <text x="100" y="30" text-anchor="middle" font-size="10" font-weight="bold">Población</text>
        <text x="110" y="75" text-anchor="middle" font-size="8" fill="#1e40af">Muestra</text>
      </svg>
    `
  },
  'Estadística Descriptiva': {
    title: 'Medidas de Resumen',
    content: `
      <h3>1. Medidas de Tendencia Central</h3>
      <ul>
        <li><b>Media (x̄):</b> Promedio aritmético de los datos.</li>
        <li><b>Mediana (Me):</b> Valor que divide al conjunto de datos ordenados en dos partes iguales (50% superior y 50% inferior).</li>
      </ul>

      <h3>2. Medidas de Dispersión</h3>
      <ul>
        <li><b>Desvío Estándar (s):</b> Promedio de las desviaciones respecto a la media.</li>
        <li><b>Coeficiente de Variación (CV):</b> (s / x̄) * 100. Indica la variabilidad relativa.</li>
      </ul>
    `,
    svg: `
      <svg width="200" height="120" viewBox="0 0 200 120">
        <path d="M20,100 Q100,10 180,100" fill="none" stroke="#3b82f6" stroke-width="2" />
        <line x1="100" y1="20" x2="100" y2="100" stroke="#ef4444" stroke-dasharray="4" />
        <text x="105" y="35" font-size="10" fill="#ef4444">Media</text>
      </svg>
    `
  }
};
