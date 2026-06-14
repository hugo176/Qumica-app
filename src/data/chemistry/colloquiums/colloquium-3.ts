import type { Colloquium } from "../../../types";

export const colloquium3: Colloquium = {
  id: 3,
  name: "Coloquio N° 3",
  exercises: [
    {
      id: 1,
      category: "Masa Molar y Mol",
      title: "Ácido Láctico",
      statement: "El ácido láctico (C₃H₆O₃) es el responsable de la acidez de la leche agria. Calcule su masa molar y determine cuántas moléculas hay en exactamente 0.500 moles de este ácido.",
      steps: [
        {
          t: "Cálculo de la Masa Molar",
          d: "Sumamos las masas atómicas de los elementos: <br/>C: 3 × 12.01 g/mol = 36.03 g/mol<br/>H: 6 × 1.008 g/mol = 6.048 g/mol<br/>O: 3 × 16.00 g/mol = 48.00 g/mol<br/><b>Masa Molar = 90.078 g/mol</b>"
        },
        {
          t: "Cálculo del número de moléculas",
          d: "Usamos el número de Avogadro (6.022 × 10²³ moléculas/mol):<br/>Moléculas = 0.500 mol × 6.022 × 10²³ moléculas/mol = <b>3.011 × 10²³ moléculas</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es la masa molar aproximada del ácido láctico?",
        options: [
          { text: "90 g/mol", correct: true },
          { text: "180 g/mol", correct: false },
          { text: "45 g/mol", correct: false },
          { text: "60 g/mol", correct: false }
        ]
      }
    },
    {
      id: 2,
      category: "Masa Molar y Mol",
      title: "Cafeína",
      statement: "La cafeína (C₈H₁₀N₄O₂) se obtiene del té y del café. Determine cuántos gramos de cafeína hay en 0.850 moles y cuántos moles de carbono están presentes en una muestra de 28.0 g de la misma.",
      steps: [
        {
          t: "Masa Molar de la Cafeína",
          d: "C: 8×12.01=96.08; H: 10×1.008=10.08; N: 4×14.01=56.04; O: 2×16.00=32.00.<br/><b>Masa Molar = 194.2 g/mol</b>"
        },
        {
          t: "Gramos en 0.850 moles",
          d: "Masa = moles × masa molar = 0.850 mol × 194.2 g/mol = <b>165.07 g</b>"
        },
        {
          t: "Moles de Carbono en 28.0 g",
          d: "1. Moles de cafeína = 28.0 g / 194.2 g/mol = 0.144 mol cafeína.<br/>2. En 1 mol de cafeína hay 8 moles de C.<br/>3. Moles de C = 0.144 mol × 8 = <b>1.152 mol de C</b>"
        }
      ],
      quiz: {
        question: "¿Cuántos moles de nitrógeno hay en 1 mol de cafeína?",
        options: [
          { text: "4", correct: true },
          { text: "8", correct: false },
          { text: "10", correct: false },
          { text: "2", correct: false }
        ]
      }
    },
    {
      id: 3,
      category: "Masa Molar y Mol",
      title: "Ácido Sulfúrico",
      statement: "Utilizando la masa molar correspondiente, calcule el número de moles de átomos de hidrógeno que están presentes en exactamente 6.25 mg de ácido sulfúrico (H₂SO₄).",
      steps: [
        {
          t: "Masa Molar del H₂SO₄",
          d: "H: 2×1.008=2.016; S: 32.06; O: 4×16.00=64.00.<br/><b>Masa Molar = 98.076 g/mol</b>"
        },
        {
          t: "Conversión a gramos y cálculo de moles",
          d: "6.25 mg = 0.00625 g<br/>Moles H₂SO₄ = 0.00625 g / 98.076 g/mol = 6.37 × 10⁻⁵ mol"
        },
        {
          t: "Moles de átomos de Hidrógeno",
          d: "En 1 mol de H₂SO₄ hay 2 moles de H.<br/>Moles H = 6.37 × 10⁻⁵ mol × 2 = <b>1.27 × 10⁻⁴ mol de H</b>"
        }
      ],
      quiz: {
        question: "¿Cuántos moles de hidrógeno hay por cada mol de ácido sulfúrico?",
        options: [
          { text: "2", correct: true },
          { text: "1", correct: false },
          { text: "4", correct: false },
          { text: "3", correct: false }
        ]
      }
    },
    {
      id: 4,
      category: "Composición Porcentual",
      title: "Benzocaína",
      statement: "La benzocaína se utiliza en un 2% en peso como ingrediente activo en ungüentos. Su composición porcentual es 65.4% de C, 19.4% de O, 6.7% de H y 8.5% de N. Si su masa molecular es 165 g/mol, determine su fórmula empírica y su fórmula molecular.",
      steps: [
        {
          t: "Cálculo de moles de cada elemento (base 100g)",
          d: "nC = 65.4 / 12.01 = 5.45 mol<br/>nH = 6.7 / 1.008 = 6.65 mol<br/>nO = 19.4 / 16.00 = 1.21 mol<br/>nN = 8.5 / 14.01 = 0.61 mol"
        },
        {
          t: "Determinación de la Fórmula Empírica",
          d: "Dividimos por el menor (0.61):<br/>C: 5.45 / 0.61 ≈ 9<br/>H: 6.65 / 0.61 ≈ 11<br/>O: 1.21 / 0.61 ≈ 2<br/>N: 0.61 / 0.61 = 1<br/><b>Fórmula Empírica: C₉H₁₁O₂N</b>"
        },
        {
          t: "Determinación de la Fórmula Molecular",
          d: "Masa molar FE = (9×12.01)+(11×1.008)+(2×16.00)+(1×14.01) = 165.2 g/mol.<br/>Como la masa molecular dada es 165 g/mol, la relación es 1.<br/><b>Fórmula Molecular: C₉H₁₁O₂N</b>"
        }
      ],
      quiz: {
        question: "Si la masa molar de la FE es igual a la masa molecular, ¿qué significa?",
        options: [
          { text: "La FE y la FM son iguales", correct: true },
          { text: "Hubo un error en el cálculo", correct: false },
          { text: "La FM es el doble de la FE", correct: false },
          { text: "No se puede determinar", correct: false }
        ]
      }
    },
    {
      id: 5,
      category: "Ecuaciones Químicas",
      title: "Balanceo de Ecuación: Al + Cl₂",
      statement: "Escriba y balancee correctamente la ecuación química para la reacción entre el aluminio sólido y el gas cloro para producir cloruro de aluminio sólido.",
      steps: [
        {
          t: "Identificación de reactivos y productos",
          d: "Reactivos: Al(s) + Cl₂(g)<br/>Producto: AlCl₃(s)"
        },
        {
          t: "Balanceo de átomos",
          d: "1. Al + Cl₂ → AlCl₃<br/>2. Para balancear el Cl (2 y 3), usamos el mínimo común múltiplo (6):<br/>Al + 3Cl₂ → 2AlCl₃<br/>3. Balanceamos el Al:<br/><b>2Al(s) + 3Cl₂(g) → 2AlCl₃(s)</b>"
        }
      ],
      quiz: {
        question: "¿Qué tipo de reacción es esta?",
        options: [
          { text: "Síntesis o Combinación", correct: true },
          { text: "Descomposición", correct: false },
          { text: "Sustitución simple", correct: false },
          { text: "Combustión", correct: false }
        ]
      }
    },
    {
      id: 6,
      category: "Estequiometría",
      title: "Reactivo Limitante: H₂S + O₂",
      statement: "El sulfuro de hidrógeno (H₂S) arde con oxígeno (O₂) para producir dióxido de azufre (SO₂) y agua. Escriba la ecuación, balancee y determine cuántos gramos de SO₂ pueden producirse si se hacen reaccionar 8.52 g de H₂S con 10.6 g de O₂.",
      steps: [
        {
          t: "Ecuación Balanceada",
          d: "2H₂S + 3O₂ → 2SO₂ + 2H₂O"
        },
        {
          t: "Moles de Reactivos",
          d: "Moles H₂S = 8.52 g / 34.08 g/mol = 0.25 mol<br/>Moles O₂ = 10.6 g / 32.00 g/mol = 0.33 mol"
        },
        {
          t: "Identificación del Reactivo Limitante",
          d: "Relación estequiométrica: 2 mol H₂S / 3 mol O₂ = 0.667<br/>Relación real: 0.25 / 0.33 = 0.757<br/>Como 0.757 > 0.667, el O₂ se consume primero. <b>Reactivo Limitante: O₂</b>"
        },
        {
          t: "Cálculo de Masa de SO₂",
          d: "A partir de 0.33 mol O₂:<br/>Moles SO₂ = 0.33 mol O₂ × (2 mol SO₂ / 3 mol O₂) = 0.22 mol SO₂<br/>Masa SO₂ = 0.22 mol × 64.06 g/mol = <b>14.1 g SO₂</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el reactivo limitante en este caso?",
        options: [
          { text: "Oxígeno (O₂)", correct: true },
          { text: "Sulfuro de hidrógeno (H₂S)", correct: false },
          { text: "Dióxido de azufre (SO₂)", correct: false },
          { text: "Agua (H₂O)", correct: false }
        ]
      }
    },
    {
      id: 7,
      category: "Estequiometría",
      title: "Reactivo Limitante: CaC₂ + H₂O",
      statement: "El carburo de calcio (CaC₂) reacciona con agua para formar hidróxido de calcio y el gas inflamable etino (C₂H₂). Si 1.00 × 10² g de agua reaccionan con 1.00 × 10² g de carburo de calcio, determine cuál es el reactivo limitante y qué masa de etino puede producirse.",
      steps: [
        {
          t: "Ecuación Balanceada",
          d: "CaC₂(s) + 2H₂O(l) → Ca(OH)₂(ac) + C₂H₂(g)"
        },
        {
          t: "Moles de Reactivos",
          d: "Masa Molar CaC₂ = 64.1 g/mol; Masa Molar H₂O = 18.02 g/mol<br/>Moles CaC₂ = 100 g / 64.1 g/mol = 1.56 mol<br/>Moles H₂O = 100 g / 18.02 g/mol = 5.55 mol"
        },
        {
          t: "Reactivo Limitante",
          d: "Se necesitan 2 mol de H₂O por cada 1 de CaC₂.<br/>Necesitamos: 1.56 × 2 = 3.12 mol H₂O.<br/>Tenemos 5.55 mol. El agua sobra.<br/><b>Reactivo Limitante: CaC₂</b>"
        },
        {
          t: "Masa de Etino (C₂H₂)",
          d: "Moles C₂H₂ = Moles CaC₂ = 1.56 mol<br/>Masa C₂H₂ = 1.56 mol × 26.04 g/mol = <b>40.6 g C₂H₂</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el reactivo en exceso?",
        options: [
          { text: "Agua (H₂O)", correct: true },
          { text: "Carburo de calcio (CaC₂)", correct: false },
          { text: "Hidróxido de calcio", correct: false },
          { text: "Etino", correct: false }
        ]
      }
    },
    {
      id: 8,
      category: "Estequiometría",
      title: "Cálculo de Exceso",
      statement: "Utilizando los datos del problema anterior, calcule la masa del reactivo en exceso que permanece en el recipiente una vez que la reacción se ha completado.",
      steps: [
        {
          t: "Moles de exceso consumidos",
          d: "Como el CaC₂ es el limitante (1.56 mol), consume el doble de H₂O:<br/>Moles H₂O consumidos = 1.56 × 2 = 3.12 mol"
        },
        {
          t: "Moles de exceso sobrantes",
          d: "Moles H₂O iniciales = 5.55 mol<br/>Sobrante = 5.55 - 3.12 = 2.43 mol H₂O"
        },
        {
          t: "Masa de exceso sobrante",
          d: "Masa = 2.43 mol × 18.02 g/mol = <b>43.8 g de H₂O</b>"
        }
      ],
      quiz: {
        question: "¿Cómo se calcula el sobrante?",
        options: [
          { text: "Inicial - Consumido", correct: true },
          { text: "Final - Inicial", correct: false },
          { text: "Consumido - Inicial", correct: false },
          { text: "Solo lo que se pesó", correct: false }
        ]
      }
    },
    {
      id: 9,
      category: "Rendimiento",
      title: "Porcentaje de Rendimiento",
      statement: "En una prueba de combustión, 702 g de octano (C₈H₁₈) produjeron experimentalmente 1.84 kg de CO₂. Sabiendo que la masa teórica era de 2.16 kg, calcule el porcentaje de rendimiento de esta reacción.",
      steps: [
        {
          t: "Identificación de masas",
          d: "Rendimiento Real = 1.84 kg<br/>Rendimiento Teórico = 2.16 kg"
        },
        {
          t: "Cálculo del Porcentaje",
          d: "% Rendimiento = (Real / Teórico) × 100<br/>% Rendimiento = (1.84 / 2.16) × 100 = <b>85.18 %</b>"
        }
      ],
      quiz: {
        question: "¿Puede el rendimiento real ser mayor al teórico?",
        options: [
          { text: "No, el teórico es el máximo posible", correct: true },
          { text: "Sí, siempre", correct: false },
          { text: "Solo en reacciones exotérmicas", correct: false },
          { text: "Depende de la presión", correct: false }
        ]
      }
    },
    {
      id: 10,
      category: "Estequiometría de Gases",
      title: "Volumen de Hidrógeno (TPN)",
      statement: "Calcule el número de litros de gas hidrógeno, medidos en condiciones normales (TPN), que pueden producirse a partir de la reacción de 0.275 mol de aluminio con ácido clorhídrico (HCl).",
      steps: [
        {
          t: "Ecuación Balanceada",
          d: "2Al(s) + 6HCl(ac) → 2AlCl₃(ac) + 3H₂(g)"
        },
        {
          t: "Moles de H₂ producidos",
          d: "Moles H₂ = 0.275 mol Al × (3 mol H₂ / 2 mol Al) = 0.4125 mol H₂"
        },
        {
          t: "Volumen en TPN",
          d: "En TPN, 1 mol de gas ideal ocupa 22.4 L.<br/>Volumen = 0.4125 mol × 22.4 L/mol = <b>9.24 L de H₂</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el volumen molar de un gas en TPN?",
        options: [
          { text: "22.4 L", correct: true },
          { text: "24.5 L", correct: false },
          { text: "1.0 L", correct: false },
          { text: "11.2 L", correct: false }
        ]
      }
    },
    {
      id: 11,
      category: "Soluciones",
      title: "Concentración %m/m y %m/v",
      statement: "Se disuelven 5 g de soluto NaCl de manera de obtener 250 cm³ de solución. Si se sabe que la densidad de la misma es d = 1.0123 g/cm³, exprese su concentración en % m/m y % m/v.",
      steps: [
        {
          t: "Cálculo de % m/v",
          d: "% m/v = (masa soluto / volumen solución) × 100<br/>% m/v = (5 g / 250 cm³) × 100 = <b>2.00 % m/v</b>"
        },
        {
          t: "Cálculo de masa de solución",
          d: "Masa solución = densidad × volumen = 1.0123 g/cm³ × 250 cm³ = 253.075 g"
        },
        {
          t: "Cálculo de % m/m",
          d: "% m/m = (masa soluto / masa solución) × 100<br/>% m/m = (5 g / 253.075 g) × 100 = <b>1.976 % m/m</b>"
        }
      ],
      quiz: {
        question: "Si la densidad es mayor a 1 g/cm³, ¿cómo es el %m/m respecto al %m/v?",
        options: [
          { text: "El %m/m es menor que el %m/v", correct: true },
          { text: "El %m/m es mayor que el %m/v", correct: false },
          { text: "Son iguales", correct: false },
          { text: "No tienen relación", correct: false }
        ]
      }
    },
    {
      id: 12,
      category: "Soluciones",
      title: "Molaridad y Normalidad",
      statement: "Una solución de H₂SO₄ al 5% m/v se ha preparado en el laboratorio. Determine su Molaridad y su Normalidad, recordando que el peso equivalente depende de los dos hidrógenos sustituibles del ácido.",
      steps: [
        {
          t: "Análisis del % m/v",
          d: "5% m/v significa que hay 5 g de H₂SO₄ en 100 mL de solución.<br/>En 1000 mL (1 L) hay 50 g de H₂SO₄."
        },
        {
          t: "Cálculo de Molaridad (M)",
          d: "Masa Molar H₂SO₄ = 98.08 g/mol<br/>Moles en 1 L = 50 g / 98.08 g/mol = 0.51 mol<br/><b>Molaridad = 0.51 M</b>"
        },
        {
          t: "Cálculo de Normalidad (N)",
          d: "N = M × valencia (n° de H⁺)<br/>Para el H₂SO₄, valencia = 2.<br/>N = 0.51 M × 2 eq/mol = <b>1.02 N</b>"
        }
      ],
      quiz: {
        question: "¿Qué indica la Normalidad en un ácido?",
        options: [
          { text: "Equivalentes de soluto por litro de solución", correct: true },
          { text: "Moles de soluto por litro", correct: false },
          { text: "Gramos por litro", correct: false },
          { text: "Moles por kilogramo", correct: false }
        ]
      }
    },
    {
      id: 13,
      category: "Soluciones",
      title: "Molalidad y Fracción Molar",
      statement: "Se prepara una disolución de sulfato de potasio (K₂SO₄) cuya densidad es de 1.0817 g/mL a 20°C. Si por cada 45 mL de agua (d = 1 g/mL) se agregan 5 g de la sal, calcule la molalidad de la disolución y la fracción molar del disolvente.",
      steps: [
        {
          t: "Cálculo de Molalidad (m)",
          d: "m = moles soluto / kg solvente<br/>Masa Molar K₂SO₄ = 174.26 g/mol<br/>Moles soluto = 5 g / 174.26 g/mol = 0.0287 mol<br/>Masa solvente = 45 mL × 1 g/mL = 45 g = 0.045 kg<br/>m = 0.0287 / 0.045 = <b>0.638 m</b>"
        },
        {
          t: "Cálculo de Fracción Molar del disolvente (X_sv)",
          d: "Moles solvente (agua) = 45 g / 18.02 g/mol = 2.497 mol<br/>X_sv = n_sv / (n_st + n_sv) = 2.497 / (0.0287 + 2.497) = <b>0.988</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es la unidad de la Fracción Molar?",
        options: [
          { text: "Es adimensional (no tiene unidad)", correct: true },
          { text: "mol/kg", correct: false },
          { text: "mol/L", correct: false },
          { text: "g/mol", correct: false }
        ]
      }
    },
    {
      id: 14,
      category: "Soluciones",
      title: "Conversión de Unidades: HNO₃",
      statement: "Usted tiene una solución concentrada de ácido nítrico (HNO₃) con densidad = 1.4200 g/cm³ y concentración = 40% m/m. Convierta y exprese la concentración en g/L, Molaridad (M) y Normalidad (N).",
      steps: [
        {
          t: "Cálculo de g/L",
          d: "Tomamos 1 L (1000 cm³):<br/>Masa solución = 1000 cm³ × 1.42 g/cm³ = 1420 g<br/>Masa soluto = 1420 g × 0.40 = <b>568 g/L</b>"
        },
        {
          t: "Cálculo de Molaridad (M)",
          d: "Masa Molar HNO₃ = 63.01 g/mol<br/>M = (568 g/L) / 63.01 g/mol = <b>9.01 M</b>"
        },
        {
          t: "Cálculo de Normalidad (N)",
          d: "Para HNO₃, n° de H⁺ = 1.<br/>N = M × 1 = <b>9.01 N</b>"
        }
      ],
      quiz: {
        question: "¿En qué caso la Molaridad es igual a la Normalidad?",
        options: [
          { text: "Cuando el soluto aporta 1 equivalente por mol", correct: true },
          { text: "Siempre son iguales", correct: false },
          { text: "Nunca son iguales", correct: false },
          { text: "Solo en soluciones diluidas", correct: false }
        ]
      }
    },
    {
      id: 15,
      category: "Soluciones",
      title: "Partes por Millón (ppm)",
      statement: "Si el agua de mar contiene 0.0079 g de iones Sr²⁺ por cada kilogramo de agua, ¿cuál es la concentración del estroncio en ppm?",
      steps: [
        {
          t: "Definición de ppm",
          d: "ppm = (masa soluto en mg) / (masa solución en kg)"
        },
        {
          t: "Conversión y Cálculo",
          d: "Masa soluto = 0.0079 g = 7.9 mg<br/>Masa solución ≈ 1 kg (agua de mar)<br/>Concentración = 7.9 mg / 1 kg = <b>7.9 ppm</b>"
        }
      ],
      quiz: {
        question: "1 ppm es equivalente a:",
        options: [
          { text: "1 mg/kg o 1 mg/L (en agua)", correct: true },
          { text: "1 g/kg", correct: false },
          { text: "1 µg/kg", correct: false },
          { text: "10 mg/kg", correct: false }
        ]
      }
    },
    {
      id: 16,
      category: "Preparación de Soluciones",
      title: "Pureza: NaOH",
      statement: "Calcule cuántos gramos de NaOH se necesitan para preparar 2 dm³ de solución 0.5 N, si la droga comercial tiene 75% de pureza. Indique la cantidad teórica vs. la real.",
      steps: [
        {
          t: "Cálculo de masa teórica (100% pura)",
          d: "Masa Molar NaOH = 40.00 g/mol; eq = 1<br/>Eq necesarios = N × V = 0.5 eq/L × 2 L = 1.0 eq<br/>Masa teórica = 1.0 eq × 40.00 g/eq = <b>40.00 g</b>"
        },
        {
          t: "Cálculo de masa real (droga al 75%)",
          d: "Masa real = Masa teórica / Pureza<br/>Masa real = 40.00 g / 0.75 = <b>53.33 g</b>"
        }
      ],
      quiz: {
        question: "Si la pureza es menor al 100%, ¿cómo es la masa real respecto a la teórica?",
        options: [
          { text: "Se debe pesar más masa real", correct: true },
          { text: "Se debe pesar menos", correct: false },
          { text: "Es la misma masa", correct: false },
          { text: "No influye", correct: false }
        ]
      }
    },
    {
      id: 17,
      category: "Dilución",
      title: "Dilución de H₂SO₄",
      statement: "Calcule cuántos cm³ de ácido concentrado (96% m/m, d = 1.84 g/mL) se necesitan para preparar 1000 cm³ de H₂SO₄ 0.1 N.",
      steps: [
        {
          t: "Molaridad de la solución concentrada",
          d: "Masa Molar = 98.08 g/mol; d = 1.84 g/mL = 1840 g/L<br/>Masa soluto en 1 L = 1840 × 0.96 = 1766.4 g<br/>M_conc = 1766.4 / 98.08 = 18.01 M<br/>N_conc = 18.01 × 2 = 36.02 N"
        },
        {
          t: "Cálculo de dilución (N1×V1 = N2×V2)",
          d: "36.02 N × V1 = 0.1 N × 1000 cm³<br/>V1 = (0.1 × 1000) / 36.02 = <b>2.78 cm³</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es la regla de oro para diluir ácidos concentrados?",
        options: [
          { text: "Verter el ácido sobre el agua", correct: true },
          { text: "Verter el agua sobre el ácido", correct: false },
          { text: "Mezclar rápido", correct: false },
          { text: "No importa el orden", correct: false }
        ]
      }
    },
    {
      id: 18,
      category: "Dilución",
      title: "Dilución de HCl",
      statement: "Calcule cuánto ácido clorhídrico concentrado de 12.1 M se necesitaría para preparar 100 mL de HCl 1.25 M. Describa el procedimiento.",
      steps: [
        {
          t: "Cálculo de volumen (M1×V1 = M2×V2)",
          d: "12.1 M × V1 = 1.25 M × 100 mL<br/>V1 = (1.25 × 100) / 12.1 = <b>10.33 mL</b>"
        },
        {
          t: "Procedimiento",
          d: "1. Colocar agua destilada en un matraz aforado de 100 mL.<br/>2. Medir 10.33 mL de HCl concentrado con pipeta.<br/>3. Verter el ácido al matraz.<br/>4. Completar con agua hasta el aforo y homogeneizar."
        }
      ],
      quiz: {
        question: "¿Qué material se usa para medir el volumen final con precisión?",
        options: [
          { text: "Matraz aforado", correct: true },
          { text: "Vaso de precipitados", correct: false },
          { text: "Erlenmeyer", correct: false },
          { text: "Probeta común", correct: false }
        ]
      }
    },
    {
      id: 19,
      category: "Dilución",
      title: "Cálculo de Volumen Final",
      statement: "Se dispone de 37.5 cm³ de solución concentrada de HCl (d = 1.1980 g/cm³, 42% m/m). ¿Qué volumen final de solución diluida al 6% m/v podría prepararse?",
      steps: [
        {
          t: "Masa de soluto disponible",
          d: "Masa solución = 37.5 cm³ × 1.198 g/cm³ = 44.925 g<br/>Masa soluto = 44.925 g × 0.42 = 18.87 g HCl"
        },
        {
          t: "Cálculo de volumen final para 6% m/v",
          d: "6 g soluto → 100 mL solución<br/>18.87 g soluto → X<br/>X = (18.87 × 100) / 6 = <b>314.5 mL</b>"
        }
      ],
      quiz: {
        question: "Si quiero una solución más diluida, el volumen final debe:",
        options: [
          { text: "Aumentar", correct: true },
          { text: "Disminuir", correct: false },
          { text: "Mantenerse igual", correct: false },
          { text: "Ser cero", correct: false }
        ]
      }
    },
    {
      id: 20,
      category: "Soluciones",
      title: "Mezcla de Soluciones",
      statement: "Se mezclan: I) 100 cm³ NaOH 30% m/v; II) 200 cm³ NaOH 120 g/dm³; III) 200 cm³ agua. Indique la concentración de la solución resultante en % m/v y en Molaridad.",
      steps: [
        {
          t: "Masa total de soluto",
          d: "Solución I: 100 mL × 0.30 = 30 g NaOH<br/>Solución II: 200 mL × 0.12 g/mL = 24 g NaOH<br/>Masa Total = 30 + 24 = 54 g NaOH"
        },
        {
          t: "Volumen total (aditivo)",
          d: "V_total = 100 + 200 + 200 = 500 mL = 0.5 L"
        },
        {
          t: "Cálculo final",
          d: "% m/v = (54 g / 500 mL) × 100 = <b>10.8 % m/v</b><br/>Molaridad = (54 g / 40 g/mol) / 0.5 L = <b>2.7 M</b>"
        }
      ],
      quiz: {
        question: "¿Cómo afecta el agregado de agua pura a la concentración?",
        options: [
          { text: "La disminuye (dilución)", correct: true },
          { text: "La aumenta", correct: false },
          { text: "No cambia", correct: false },
          { text: "Solo cambia el volumen", correct: false }
        ]
      }
    }
  ]
};
