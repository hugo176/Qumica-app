import type { Colloquium } from "../../types";

export const colloquium6: Colloquium = {
  id: 6,
  name: "Coloquio N° 6",
  exercises: [
    {
      id: 1,
      category: "Leyes de los Gases",
      title: "Ley de Boyle (P y V)",
      statement: "Una determinada masa de gas ocupa un volumen de 850 cm³ cuando la presión es de 640 mm Hg y la temperatura permanece constante. ¿Qué volumen ocupará si la presión aumenta hasta 1,8 atm?",
      steps: [
        {
          t: "Identificación de la Ley",
          d: "Como la temperatura es constante, aplicamos la <b>Ley de Boyle</b>: <span class='math'>P₁ × V₁ = P₂ × V₂</span>."
        },
        {
          t: "Conversión de Unidades",
          d: "Para que las unidades sean consistentes, convertimos la presión P₁ a atm:<br/>P₁ = 640 mm Hg / 760 mm Hg/atm = <b>0,842 atm</b>.<br/>P₂ = <b>1,8 atm</b>.<br/>V₁ = <b>850 cm³</b>."
        },
        {
          t: "Cálculo del Volumen Final (V₂)",
          d: "Despejamos V₂: <span class='math'>V₂ = (P₁ × V₁) / P₂</span><br/>V₂ = (0,842 atm × 850 cm³) / 1,8 atm<br/><b>V₂ = 397,6 cm³</b>."
        }
      ],
      quiz: {
        question: "Según la Ley de Boyle, si la presión de un gas aumenta (a T constante), ¿qué sucede con su volumen?",
        options: [
          { text: "Disminuye", correct: true },
          { text: "Aumenta", correct: false },
          { text: "Permanece igual", correct: false },
          { text: "Se duplica siempre", correct: false }
        ]
      }
    },
    {
      id: 2,
      category: "Leyes de los Gases",
      title: "Ley de Charles (V y T)",
      statement: "Una muestra de gas ocupa un volumen de 450 cm³ a una temperatura de 25 °C. Si la presión permanece constante, ¿a qué temperatura deberá calentarse para que ocupe un volumen de 720 cm³?",
      steps: [
        {
          t: "Identificación de la Ley",
          d: "A presión constante, aplicamos la <b>Ley de Charles</b>: <span class='math'>V₁ / T₁ = V₂ / T₂</span>."
        },
        {
          t: "Conversión a Kelvin",
          d: "La temperatura debe estar siempre en escala absoluta (Kelvin).<br/>T₁ = 25 + 273,15 = <b>298,15 K</b>."
        },
        {
          t: "Cálculo de la Temperatura Final (T₂)",
          d: "Despejamos T₂: <span class='math'>T₂ = (V₂ × T₁) / V₁</span><br/>T₂ = (720 cm³ × 298,15 K) / 450 cm³ = <b>477,04 K</b>.<br/>En °C: 477,04 - 273,15 = <b>203,89 °C</b>."
        }
      ],
      quiz: {
        question: "¿Qué escala de temperatura es obligatoria para los cálculos de leyes de gases?",
        options: [
          { text: "Kelvin", correct: true },
          { text: "Celsius", correct: false },
          { text: "Fahrenheit", correct: false },
          { text: "Cualquiera", correct: false }
        ]
      }
    },
    {
      id: 3,
      category: "Leyes de los Gases",
      title: "Ecuación Combinada (P, V y T)",
      statement: "Una masa de gas ocupa un volumen de 150 L a 40 °C y una presión de 720 mm Hg. ¿Cuál será su volumen si la temperatura aumenta a 90 °C y la presión cambia a 1,2 atm?",
      steps: [
        {
          t: "Datos Iniciales y Finales",
          d: "P₁ = 720/760 = 0,947 atm; V₁ = 150 L; T₁ = 40 + 273 = 313 K.<br/>P₂ = 1,2 atm; T₂ = 90 + 273 = 363 K."
        },
        {
          t: "Ecuación General de los Gases",
          d: "<span class='math'>(P₁ × V₁) / T₁ = (P₂ × V₂) / T₂</span>"
        },
        {
          t: "Cálculo de V₂",
          d: "V₂ = (P₁ × V₁ × T₂) / (P₂ × T₁)<br/>V₂ = (0,947 atm × 150 L × 363 K) / (1,2 atm × 313 K)<br/><b>V₂ = 137,3 L</b>."
        }
      ],
      quiz: {
        question: "¿Qué sucede con el volumen si aumentamos la T y aumentamos la P simultáneamente?",
        options: [
          { text: "Depende de cuál efecto sea mayor", correct: true },
          { text: "Siempre aumenta", correct: false },
          { text: "Siempre disminuye", correct: false },
          { text: "No cambia", correct: false }
        ]
      }
    },
    {
      id: 4,
      category: "Leyes de los Gases",
      title: "Cambio de Condiciones",
      statement: "Una muestra gaseosa ocupa 980 cm³ a 15 °C y una presión de 1,4 atm. ¿Qué volumen ocupará a 45 °C si la presión disminuye a 760 mm Hg?",
      steps: [
        {
          t: "Variables",
          d: "P₁ = 1,4 atm; V₁ = 980 cm³; T₁ = 15 + 273 = 288 K.<br/>P₂ = 760/760 = 1,0 atm; T₂ = 45 + 273 = 318 K."
        },
        {
          t: "Cálculo",
          d: "V₂ = (P₁ × V₁ × T₂) / (P₂ × T₁)<br/>V₂ = (1,4 atm × 980 cm³ × 318 K) / (1,0 atm × 288 K)<br/><b>V₂ = 1515,5 cm³</b>."
        }
      ],
      quiz: {
        question: "¿A cuántas atmósferas equivalen 760 mm Hg?",
        options: [
          { text: "1 atm", correct: true },
          { text: "0,5 atm", correct: false },
          { text: "7,6 atm", correct: false },
          { text: "10 atm", correct: false }
        ]
      }
    },
    {
      id: 5,
      category: "Leyes de los Gases",
      title: "Búsqueda de Presión Final",
      statement: "Una determinada cantidad de gas ocupa 300 L a una presión de 2,5 atm y una temperatura de 120 °C. ¿Cuál será la presión final si el volumen se reduce a 180 L y la temperatura desciende a 60 °C?",
      steps: [
        {
          t: "Variables",
          d: "P₁ = 2,5 atm; V₁ = 300 L; T₁ = 120 + 273 = 393 K.<br/>V₂ = 180 L; T₂ = 60 + 273 = 333 K."
        },
        {
          t: "Cálculo de P₂",
          d: "P₂ = (P₁ × V₁ × T₂) / (V₂ × T₁)<br/>P₂ = (2,5 atm × 300 L × 333 K) / (180 L × 393 K)<br/><b>P₂ = 3,53 atm</b>."
        }
      ],
      quiz: {
        question: "Si reducimos el volumen (compresión) y bajamos la temperatura, la presión...",
        options: [
          { text: "Puede aumentar o disminuir según los valores", correct: true },
          { text: "Siempre aumenta", correct: false },
          { text: "Siempre disminuye", correct: false },
          { text: "Se anula", correct: false }
        ]
      }
    },
    {
      id: 6,
      category: "Gases",
      title: "Ecuación de Estado (PV=nRT)",
      statement: "¿Qué volumen ocuparán 3,2 g de nitrógeno (N₂) a 25 °C y 760 mm Hg, considerando al gas como ideal?",
      steps: [
        {
          t: "Cálculo de Moles (n)",
          d: "Masa molar N₂ = 28 g/mol.<br/>n = 3,2 g / 28 g/mol = <b>0,114 mol</b>."
        },
        {
          t: "Condiciones",
          d: "P = 760 mm Hg = 1 atm.<br/>T = 25 + 273 = 298 K.<br/>R = 0,082 L·atm/(K·mol)."
        },
        {
          t: "Cálculo de V",
          d: "V = (n × R × T) / P<br/>V = (0,114 mol × 0,082 L·atm/K·mol × 298 K) / 1 atm<br/><b>V = 2,79 L</b>."
        }
      ],
      quiz: {
        question: "¿Por qué el nitrógeno se escribe como N₂?",
        options: [
          { text: "Porque es una molécula diatómica", correct: true },
          { text: "Porque tiene 2 protones", correct: false },
          { text: "Por el número atómico", correct: false },
          { text: "Es una convención sin sentido químico", correct: false }
        ]
      }
    },
    {
      id: 7,
      category: "Gases",
      title: "Masa Molar desde Densidad",
      statement: "Un gas tiene una densidad de 1,60 g/L a 60 °C y 0,85 atm de presión. Calcular la masa molar del gas.",
      steps: [
        {
          t: "Fórmula de Densidad",
          d: "Sabemos que <span class='math'>d = (P × M) / (R × T)</span>, donde M es la masa molar."
        },
        {
          t: "Despeje de M",
          d: "M = (d × R × T) / P"
        },
        {
          t: "Cálculo",
          d: "T = 60 + 273 = 333 K.<br/>M = (1,60 g/L × 0,082 L·atm/K·mol × 333 K) / 0,85 atm<br/><b>M = 51,40 g/mol</b>."
        }
      ],
      quiz: {
        question: "¿Qué sucede con la densidad de un gas si aumentamos su temperatura (a P constante)?",
        options: [
          { text: "Disminuye", correct: true },
          { text: "Aumenta", correct: false },
          { text: "No cambia", correct: false },
          { text: "Se vuelve cero", correct: false }
        ]
      }
    },
    {
      id: 8,
      category: "Gases",
      title: "Densidad en Condiciones Estándar",
      statement: "La densidad de un gas a 30 °C y 1,50 atm es 2,100 g/L. ¿Cuál será su densidad en condiciones estándar de presión y temperatura (0 °C y 1 atm)?",
      steps: [
        {
          t: "Relación de Densidades",
          d: "De <span class='math'>M = dRT/P</span>, como el gas es el mismo, M es constante:<br/><span class='math'>(d₁ × T₁) / P₁ = (d₂ × T₂) / P₂</span>"
        },
        {
          t: "Cálculo de d₂",
          d: "d₂ = (d₁ × T₁ × P₂) / (P₁ × T₂)<br/>T₁ = 303 K, P₁ = 1,5 atm, d₁ = 2,1 g/L.<br/>T₂ = 273 K, P₂ = 1,0 atm.<br/>d₂ = (2,1 × 303 × 1,0) / (1,5 × 273) = <b>1,55 g/L</b>."
        }
      ],
      quiz: {
        question: "¿Qué significan las siglas CNPT (o STP)?",
        options: [
          { text: "0 °C y 1 atm", correct: true },
          { text: "25 °C y 1 atm", correct: false },
          { text: "0 °C y 0 atm", correct: false },
          { text: "100 °C y 1 atm", correct: false }
        ]
      }
    },
    {
      id: 9,
      category: "Gases",
      title: "Masa de un Gas",
      statement: "Un recipiente de 2,850 L contiene dióxido de carbono (CO₂) a una temperatura de 18 °C y una presión de 735 mm Hg. Calcular la masa de CO₂ contenida en el recipiente.",
      steps: [
        {
          t: "Moles de CO₂",
          d: "P = 735/760 = 0,967 atm; V = 2,85 L; T = 18+273 = 291 K.<br/>n = PV / RT = (0,967 × 2,85) / (0,082 × 291) = <b>0,1156 mol</b>."
        },
        {
          t: "Masa (m)",
          d: "Masa molar CO₂ = 44 g/mol.<br/>m = n × M = 0,1156 mol × 44 g/mol = <b>5,09 g</b>."
        }
      ],
      quiz: {
        question: "¿Cuál es el peso molecular aproximado del CO₂?",
        options: [
          { text: "44 g/mol", correct: true },
          { text: "28 g/mol", correct: false },
          { text: "32 g/mol", correct: false },
          { text: "18 g/mol", correct: false }
        ]
      }
    },
    {
      id: 10,
      category: "Gases",
      title: "Cálculo de Presión",
      statement: "Se tienen 5,0 g de helio (He) dentro de un recipiente de 4,00 L a 27 °C. ¿Cuál es la presión ejercida por el gas en el recipiente?",
      steps: [
        {
          t: "Moles de He",
          d: "Masa molar He = 4 g/mol.<br/>n = 5,0 g / 4 g/mol = <b>1,25 mol</b>."
        },
        {
          t: "Presión (P)",
          d: "P = nRT / V<br/>P = (1,25 mol × 0,082 × 300 K) / 4 L = <b>7,69 atm</b>."
        }
      ],
      quiz: {
        question: "El Helio es un gas noble, por lo tanto es...",
        options: [
          { text: "Monoatómico", correct: true },
          { text: "Diatómico", correct: false },
          { text: "Líquido a T ambiente", correct: false },
          { text: "Altamente reactivo", correct: false }
        ]
      }
    },
    {
      id: 11,
      category: "Mezcla de Gases",
      title: "Densidad de una Mezcla",
      statement: "Determinar la densidad de una mezcla gaseosa formada por 2,0 moles de CO₂ y 4,0 moles de O₂, si se encuentra a 127 °C y una presión de 0,75 atm.",
      steps: [
        {
          t: "Masa Molar Media (M_m)",
          d: "M_m = (n₁M₁ + n₂M₂) / (n₁ + n₂)<br/>M_m = (2×44 + 4×32) / (2 + 4) = (88 + 128) / 6 = <b>36 g/mol</b>."
        },
        {
          t: "Densidad (d)",
          d: "d = (P × M_m) / (R × T)<br/>T = 127 + 273 = 400 K.<br/>d = (0,75 atm × 36 g/mol) / (0,082 × 400 K) = <b>0,823 g/L</b>."
        }
      ],
      quiz: {
        question: "¿Qué es la masa molar media?",
        options: [
          { text: "El promedio ponderado de las masas moleculares según los moles", correct: true },
          { text: "La suma de las masas moleculares", correct: false },
          { text: "La masa del gas que está en mayor cantidad", correct: false },
          { text: "Un valor fijo de 22,4 L", correct: false }
        ]
      }
    },
    {
      id: 12,
      category: "Mezcla de Gases",
      title: "Ley de Dalton (Presiones Parciales)",
      statement: "Se introducen en un recipiente de 12,0 L a 25 °C, 16 g de CH₄, 44 g de CO₂ y 28 g de N₂. Calcular la presión total del sistema y las presiones parciales de cada componente.",
      steps: [
        {
          t: "Moles de cada gas",
          d: "n(CH₄) = 16/16 = 1 mol.<br/>n(CO₂) = 44/44 = 1 mol.<br/>n(N₂) = 28/28 = 1 mol.<br/>n_total = <b>3 mol</b>."
        },
        {
          t: "Presión Total (P_t)",
          d: "P_t = n_total × R × T / V<br/>P_t = (3 × 0,082 × 298) / 12 = <b>6,11 atm</b>."
        },
        {
          t: "Presiones Parciales",
          d: "Como todos tienen 1 mol, χ = 1/3 para todos.<br/>P(i) = χ_i × P_t = (1/3) × 6,11 = <b>2,036 atm</b> para cada gas."
        }
      ],
      quiz: {
        question: "Según la Ley de Dalton, la suma de las presiones parciales es igual a...",
        options: [
          { text: "La presión total", correct: true },
          { text: "La presión atmosférica", correct: false },
          { text: "Cero", correct: false },
          { text: "La presión del gas más abundante", correct: false }
        ]
      }
    },
    {
      id: 13,
      category: "Mezcla de Gases",
      title: "Fracción Molar desde Densidad",
      statement: "Una mezcla de He y Ar presenta una temperatura de 400 K, una presión de 2,00 atm y una densidad de 1,10 g/L. Calcular la fracción molar de cada gas y la masa molar media de la mezcla.",
      steps: [
        {
          t: "Masa Molar Media (M_m)",
          d: "M_m = dRT / P = (1,10 × 0,082 × 400) / 2,00 = <b>18,04 g/mol</b>."
        },
        {
          t: "Fracciones Molares (χ)",
          d: "M_m = χ(He)×M(He) + χ(Ar)×M(Ar)<br/>18,04 = χ(He)×4 + (1 - χ(He))×40<br/>18,04 = 4χ + 40 - 40χ<br/>36χ = 21,96 → <b>χ(He) = 0,61</b><br/><b>χ(Ar) = 0,39</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el valor máximo que puede tener una fracción molar?",
        options: [
          { text: "1", correct: true },
          { text: "100", correct: false },
          { text: "Depende de la presión", correct: false },
          { text: "0,5", correct: false }
        ]
      }
    },
    {
      id: 14,
      category: "Mezcla de Gases",
      title: "Densidad de Mezcla N₂/O₂",
      statement: "Determinar la densidad de una mezcla gaseosa que contiene 1,5 moles de N₂ y 2,5 moles de O₂, si se encuentra a 200 °C y una presión de 1,20 atm.",
      steps: [
        {
          t: "Masa Molar Media",
          d: "M_m = (1,5×28 + 2,5×32) / 4 = (42 + 80) / 4 = <b>30,5 g/mol</b>."
        },
        {
          t: "Densidad",
          d: "T = 200 + 273 = 473 K.<br/>d = PM / RT = (1,20 × 30,5) / (0,082 × 473) = <b>0,944 g/L</b>."
        }
      ],
      quiz: {
        question: "¿Cuál es el componente mayoritario en el aire?",
        options: [
          { text: "Nitrógeno (N₂)", correct: true },
          { text: "Oxígeno (O₂)", correct: false },
          { text: "Argón", correct: false },
          { text: "Dióxido de carbono", correct: false }
        ]
      }
    },
    {
      id: 15,
      category: "Mezcla de Gases",
      title: "Presión Total y Parcial (H₂, O₂, CO₂)",
      statement: "Se mezclan en un recipiente de 15,0 L a 35 °C, 8,0 g de H₂, 32,0 g de O₂ y 44,0 g de CO₂. Calcular la presión total ejercida por la mezcla y las presiones parciales de cada gas.",
      steps: [
        {
          t: "Moles",
          d: "n(H₂) = 8/2 = 4 mol.<br/>n(O₂) = 32/32 = 1 mol.<br/>n(CO₂) = 44/44 = 1 mol.<br/>n_total = <b>6 mol</b>."
        },
        {
          t: "Presión Total",
          d: "T = 35 + 273 = 308 K.<br/>P_t = (6 × 0,082 × 308) / 15 = <b>10,10 atm</b>."
        },
        {
          t: "Presiones Parciales",
          d: "χ(H₂) = 4/6 = 0,667 → P(H₂) = 0,667 × 10,10 = <b>6,74 atm</b>.<br/>χ(O₂) = 1/6 = 0,167 → P(O₂) = 1,69 atm.<br/>χ(CO₂) = 1/6 = 0,167 → P(CO₂) = 1,69 atm."
        }
      ],
      quiz: {
        question: "Si sumamos las fracciones molares de todos los gases, el resultado es...",
        options: [
          { text: "Exactamente 1", correct: true },
          { text: "La presión total", correct: false },
          { text: "Cero", correct: false },
          { text: "100 atm", correct: false }
        ]
      }
    }
  ]
};
