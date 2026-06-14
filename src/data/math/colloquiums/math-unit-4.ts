import type { Colloquium } from '../../types';

export const mathUnit4: Colloquium = {
  id: 104,
  name: 'Matemática - Unidad 4 (Estadística)',
  exercises: [
    {
      id: 1,
      category: 'Conceptos Básicos',
      title: 'Interpretación del estudio',
      statement: `En un laboratorio de microbiología se evalúa la contaminación bacteriana en superficies de trabajo. Se toma como variable principal el <b>Recuento de UFC</b>.
                    <br/><br/>Identifique:
                    <ul>
                        <li>Población estudiada.</li>
                        <li>Individuos u observaciones.</li>
                        <li>Variables registradas y su clasificación.</li>
                    </ul>`,
      steps: [
        {
          t: 'Población e Individuos',
          d: '<b>Población:</b> Todas las posibles superficies de trabajo del laboratorio de microbiología. <br/><b>Individuos:</b> Cada zona o superficie hisopada (mesadas, manijas, pisos).',
        },
        {
          t: 'Variables y Clasificación',
          d: '<ul><li><b>Recuento bacteriano (UFC):</b> Cuantitativa discreta (se cuenta).</li><li><b>Tipo de Superficie:</b> Cualitativa nominal (mesada, manija, piso).</li><li><b>Desinfección previa:</b> Cualitativa nominal (sí/no).</li></ul>',
        },
      ],
      quiz: {
        question: '¿Qué tipo de variable es el "Tipo de Superficie"?',
        options: [
          { text: 'Cuantitativa discreta.', correct: false },
          { text: 'Cualitativa nominal.', correct: true },
          { text: 'Cuantitativa continua.', correct: false },
        ],
      },
    },
    {
      id: 2,
      category: 'Organización de Datos',
      title: 'Tablas de Frecuencia',
      statement: `Construya la tabla de frecuencias para la variable <b>Tipo de Superficie</b> y <b>Desinfección previa</b> basándose en las 24 muestras obtenidas.`,
      steps: [
        {
          t: 'Frecuencias: Tipo de Superficie',
          d: 'Muestras totales: 24.<br/>- <b>Mesada:</b> 10 muestras (41.67%)<br/>- <b>Manija:</b> 10 muestras (41.67%)<br/>- <b>Piso:</b> 4 muestras (16.67%)',
        },
        {
          t: 'Frecuencias: Desinfección',
          d: 'Muestras totales: 24.<br/>- <b>Sí (Desinfectada):</b> 12 muestras (50%)<br/>- <b>No (Sin desinfectar):</b> 12 muestras (50%)',
        },
      ],
      quiz: {
        question: '¿Cuál es la frecuencia relativa de las muestras desinfectadas?',
        options: [
          { text: '0,50 (o 50%)', correct: true },
          { text: '12', correct: false },
          { text: '0,41', correct: false },
        ],
      },
    },
    {
      id: 3,
      category: 'Estadística Descriptiva',
      title: 'Análisis Global de Recuento',
      statement: `Usando todos los datos de recuento bacteriano (UFC), calcule las medidas de tendencia central y de dispersión:
                    <br/>Datos: 12, 15, 14, 18, 16, 42, 38, 45, 49, 40, 28, 33, 31, 29, 35, 78, 84, 81, 120, 88, 55, 63, 95, 102.`,
      steps: [
        {
          t: 'Tendencia Central',
          d: '<b>Media (x̄):</b> Σx / n = 1106 / 24 ≈ <b>46,08 UFC</b>.<br/><b>Mediana (Me):</b> Ordenando los datos, el promedio de los valores 12 y 13 es (40 + 42) / 2 = <b>41 UFC</b>.',
        },
        {
          t: 'Dispersión',
          d: '<b>Mínimo:</b> 12 UFC. <b>Máximo:</b> 120 UFC. <br/><b>Rango:</b> 120 - 12 = 108 UFC.<br/><b>Desvío Estándar (s):</b> ≈ 31,65 UFC.<br/><b>CV:</b> (s / x̄) * 100 ≈ 68,6%.',
        },
      ],
      quiz: {
        question: '¿Qué indica un Coeficiente de Variación (CV) del 68%?',
        options: [
          { text: 'Los datos son muy homogéneos.', correct: false },
          { text: 'Existe una alta variabilidad o dispersión en los datos.', correct: true },
          { text: 'La media es igual a la mediana.', correct: false },
        ],
      },
    },
    {
      id: 4,
      category: 'Comparación de Grupos',
      title: 'Análisis por Desinfección',
      statement: `Compare los grupos <b>Con Desinfección (Sí)</b> y <b>Sin Desinfección (No)</b>. ¿Qué grupo presenta mayor contaminación típica?`,
      steps: [
        {
          t: 'Cálculos: Grupo Sí (n=12)',
          d: 'Media: ≈ 29,08 UFC.<br/>Mediana: (28 + 29) / 2 = 28,5 UFC.<br/>Rango: 63 - 12 = 51 UFC.',
        },
        {
          t: 'Cálculos: Grupo No (n=12)',
          d: 'Media: ≈ 63,08 UFC.<br/>Mediana: (49 + 78) / 2 = 63,5 UFC.<br/>Rango: 120 - 38 = 82 UFC.',
        },
        {
          t: 'Conclusión',
          d: 'El grupo <b>Sin Desinfección (No)</b> presenta una contaminación típica (media y mediana) notablemente superior (63 vs 29 UFC) y mayor variabilidad.',
        },
      ],
      quiz: {
        question: '¿La desinfección parece ser efectiva según los datos?',
        options: [
          { text: 'Sí, los recuentos son significativamente menores.', correct: true },
          { text: 'No, no hay diferencia entre los grupos.', correct: false },
          { text: 'Los datos son insuficientes.', correct: false },
        ],
      },
    },
    {
      id: 5,
      category: 'Estadística Descriptiva',
      title: 'Análisis por tipo de superficie',
      statement: `Compare los recuentos bacterianos según el tipo de superficie (Mesada, Manija, Piso). ¿Cuál presenta mayores recuentos típicos?`,
      steps: [
        {
          t: 'Promedios por Superficie',
          d: '<b>Mesada:</b> x̄ ≈ 28,9 UFC.<br/><b>Manija:</b> x̄ ≈ 60,7 UFC.<br/><b>Piso:</b> x̄ = 78,75 UFC.',
        },
        {
          t: 'Interpretación',
          d: 'El <b>Piso</b> presenta los mayores recuentos promedio, seguido por las <b>Manijas</b>. Las <b>Mesadas</b> son las zonas con menor carga bacteriana típica en este estudio.',
        },
      ],
      quiz: {
        question: '¿Qué superficie resultó tener el promedio más bajo de UFC?',
        options: [
          { text: 'Piso', correct: false },
          { text: 'Manija', correct: false },
          { text: 'Mesada', correct: true },
        ],
      },
    },
    {
      id: 6,
      category: 'Detección de Atípicos',
      title: 'Valores Atípicos (Outliers)',
      statement: `Analice si existen valores atípicos en el conjunto completo usando el criterio de <b>x̄ ± 3s</b> o el <b>Rango Intercuartílico</b>.`,
      steps: [
        {
          t: 'Criterio x̄ ± 3s',
          d: 'Límite Superior = 46,08 + (3 * 31,65) = 141,03 UFC.<br/>Límite Inferior = 46,08 - (3 * 31,65) = -48,87 UFC.<br/>Ningún valor supera 141, por lo que no habría atípicos extremos por este método.',
        },
        {
          t: 'Criterio IQR',
          d: 'Q1 (25%): ≈ 19,5. Q3 (75%): ≈ 76,5. <br/>IQR = 76,5 - 19,5 = 57. <br/>Límite Superior = 76,5 + (1,5 * 57) = 162. <br/>Incluso por IQR, el valor máximo (120) está dentro del rango esperado.',
        },
      ],
      quiz: {
        question: '¿Cuál es el valor máximo registrado?',
        options: [
          { text: '102 UFC', correct: false },
          { text: '120 UFC', correct: true },
          { text: '84 UFC', correct: false },
        ],
      },
    },
  ],
};
