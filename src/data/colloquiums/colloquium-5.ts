import type { Colloquium } from "../../types";

export const colloquium5: Colloquium = {
  id: 5,
  name: "Coloquio N° 5",
  exercises: [
    {
      id: 1,
      category: "Números de Oxidación",
      title: "Compuestos Binarios y Terciarios",
      statement: "Determine el número de oxidación de los elementos centrales en: a) H₂SO₄, b) KMnO₄, c) K₂Cr₂O₇.",
      steps: [
        {
          t: "Reglas Generales",
          d: "H suele ser +1 (excepto hidruros metálicos), O suele ser -2 (excepto peróxidos). La suma de cargas en una molécula neutra es 0."
        },
        {
          t: "a) H₂SO₄ (Ácido Sulfúrico)",
          d: "2(+1) + S + 4(-2) = 0 <br/> 2 + S - 8 = 0 <br/> <b>S = +6</b>"
        },
        {
          t: "b) KMnO₄ (Permanganato de Potasio)",
          d: "+1 + Mn + 4(-2) = 0 <br/> 1 + Mn - 8 = 0 <br/> <b>Mn = +7</b>"
        },
        {
          t: "c) K₂Cr₂O₇ (Dicromato de Potasio)",
          d: "2(+1) + 2Cr + 7(-2) = 0 <br/> 2 + 2Cr - 14 = 0 <br/> 2Cr = 12 <br/> <b>Cr = +6</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el número de oxidación del Mn en el KMnO₄?",
        options: [
          { text: "+7", correct: true },
          { text: "+6", correct: false },
          { text: "+4", correct: false },
          { text: "+2", correct: false }
        ]
      }
    },
    {
      id: 2,
      category: "Números de Oxidación",
      title: "Aniones Poliatómicos",
      statement: "Determine el número de oxidación del fósforo en el anión pirofosfato (P₂O₇)⁴⁻.",
      steps: [
        {
          t: "Planteo de la Ecuación",
          d: "La suma de los números de oxidación de los átomos debe ser igual a la carga del ion (-4)."
        },
        {
          t: "Cálculo",
          d: "2(P) + 7(O) = -4 <br/> 2P + 7(-2) = -4 <br/> 2P - 14 = -4 <br/> 2P = 10 <br/> <b>P = +5</b>"
        }
      ],
      quiz: {
        question: "¿A qué debe ser igual la suma de los números de oxidación en un ion?",
        options: [
          { text: "A la carga del ion", correct: true },
          { text: "A cero", correct: false },
          { text: "Al número de electrones", correct: false },
          { text: "A la masa atómica", correct: false }
        ]
      }
    },
    {
      id: 3,
      category: "Números de Oxidación",
      title: "Casos Especiales: Peróxidos y Superóxidos",
      statement: "Determine el número de oxidación del oxígeno en: a) H₂O₂ (Peróxido de hidrógeno) y b) KO₂ (Superóxido de potasio).",
      steps: [
        {
          t: "a) Peróxidos (H₂O₂)",
          d: "En los peróxidos, el oxígeno actúa con número de oxidación <b>-1</b>.<br/>2(+1) + 2(O) = 0 → 2 + 2(-1) = 0."
        },
        {
          t: "b) Superóxidos (KO₂)",
          d: "En los superóxidos, el oxígeno actúa con número de oxidación <b>-1/2</b>.<br/>+1 + 2(O) = 0 → 2(O) = -1 → O = -1/2."
        }
      ],
      quiz: {
        question: "¿Cuál es el número de oxidación del O en un peróxido?",
        options: [
          { text: "-1", correct: true },
          { text: "-2", correct: false },
          { text: "-1/2", correct: false },
          { text: "0", correct: false }
        ]
      }
    },
    {
      id: 4,
      category: "Números de Oxidación",
      title: "Complejos de Coordinación",
      statement: "Determine el número de oxidación del átomo central en: a) [Fe(CN)₆]⁴⁻, b) [Co(NH₃)₆]³⁺.",
      steps: [
        {
          t: "Análisis de Ligandos",
          d: "CN (cianuro) tiene carga -1. NH₃ (amoniaco) es una molécula neutra (carga 0)."
        },
        {
          t: "a) [Fe(CN)₆]⁴⁻",
          d: "Fe + 6(-1) = -4 <br/> Fe - 6 = -4 <br/> <b>Fe = +2</b>"
        },
        {
          t: "b) [Co(NH₃)₆]³⁺",
          d: "Co + 6(0) = +3 <br/> <b>Co = +3</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es la carga del ligando cianuro (CN)?",
        options: [
          { text: "-1", correct: true },
          { text: "0", correct: false },
          { text: "+1", correct: false },
          { text: "-2", correct: false }
        ]
      }
    },
    {
      id: 5,
      category: "Números de Oxidación",
      title: "Tiosulfato y Peroxodisulfato",
      statement: "Determine el número de oxidación del azufre en: a) Na₂S₂O₃ y b) Na₂S₂O₈.",
      steps: [
        {
          t: "a) Na₂S₂O₃ (Tiosulfato de sodio)",
          d: "2(+1) + 2S + 3(-2) = 0 <br/> 2 + 2S - 6 = 0 <br/> 2S = 4 <br/> <b>S = +2</b> (Promedio)"
        },
        {
          t: "b) Na₂S₂O₈ (Peroxodisulfato de sodio)",
          d: "Este compuesto contiene un puente peróxido (-O-O-).<br/>2(+1) + 2S + 6(-2) + 2(-1) = 0 <br/> 2 + 2S - 12 - 2 = 0 <br/> 2S = 12 <br/> <b>S = +6</b>"
        }
      ],
      quiz: {
        question: "¿Qué tipo de enlace especial tiene el S₂O₈²⁻?",
        options: [
          { text: "Puente peróxido", correct: true },
          { text: "Enlace triple S-S", correct: false },
          { text: "Enlace iónico central", correct: false },
          { text: "Puente de hidrógeno", correct: false }
        ]
      }
    },
    {
      id: 6,
      category: "Método Ion-Electrón",
      title: "Medio Ácido: Fe + H₂SO₄",
      statement: "Balancee la siguiente ecuación en medio ácido: Fe(s) + H₂SO₄ → Fe₂(SO₄)₃ + SO₂ + H₂O",
      steps: [
        {
          t: "Identificación de Cambios",
          d: "Fe(0) → Fe(+3) (Oxidación)<br/>S(+6) en SO₄²⁻ → S(+4) en SO₂ (Reducción)"
        },
        {
          t: "Hemirreacciones Iónicas",
          d: "Ox: 2Fe → Fe₂³⁺ + 6e⁻<br/>Red: SO₄²⁻ + 4H⁺ + 2e⁻ → SO₂ + 2H₂O"
        },
        {
          t: "Igualación de Electrones",
          d: "Multiplicamos la reducción por 3:<br/>3SO₄²⁻ + 12H⁺ + 6e⁻ → 3SO₂ + 6H₂O"
        },
        {
          t: "Suma y Especie Completa",
          d: "2Fe + 3SO₄²⁻ + 12H⁺ → Fe₂³⁺ + 3SO₂ + 6H₂O<br/>Acomodando sulfatos:<br/><b>2Fe + 6H₂SO₄ → Fe₂(SO₄)₃ + 3SO₂ + 6H₂O</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el agente reductor en esta reacción?",
        options: [
          { text: "Fe", correct: true },
          { text: "H₂SO₄", correct: false },
          { text: "SO₂", correct: false },
          { text: "H₂O", correct: false }
        ]
      }
    },
    {
      id: 7,
      category: "Método Ion-Electrón",
      title: "Medio Ácido: Cu + HNO₃",
      statement: "Balancee: Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O",
      steps: [
        {
          t: "Hemirreacciones",
          d: "Ox: Cu → Cu²⁺ + 2e⁻<br/>Red: NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O"
        },
        {
          t: "Balance de Electrones",
          d: "MCM(2,3) = 6. Multiplicamos Ox por 3 y Red por 2:<br/>3Cu → 3Cu²⁺ + 6e⁻<br/>2NO₃⁻ + 8H⁺ + 6e⁻ → 2NO + 4H₂O"
        },
        {
          t: "Ecuación Global",
          d: "3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O"
        }
      ],
      quiz: {
        question: "¿Cuántos moles de HNO₃ se necesitan para oxidar 3 moles de Cu?",
        options: [
          { text: "8", correct: true },
          { text: "2", correct: false },
          { text: "4", correct: false },
          { text: "3", correct: false }
        ]
      }
    },
    {
      id: 8,
      category: "Método Ion-Electrón",
      title: "Medio Ácido: MnO₂ + HCl",
      statement: "Balancee: MnO₂ + HCl → Cl₂ + MnCl₂ + H₂O",
      steps: [
        {
          t: "Hemirreacciones",
          d: "Ox: 2Cl⁻ → Cl₂ + 2e⁻<br/>Red: MnO₂ + 4H⁺ + 2e⁻ → Mn²⁺ + 2H₂O"
        },
        {
          t: "Suma Iónica",
          d: "MnO₂ + 2Cl⁻ + 4H⁺ → Cl₂ + Mn²⁺ + 2H₂O"
        },
        {
          t: "Ecuación Molecular",
          d: "<b>MnO₂ + 4HCl → Cl₂ + MnCl₂ + 2H₂O</b>"
        }
      ],
      quiz: {
        question: "¿Qué elemento se reduce?",
        options: [
          { text: "Manganeso (Mn)", correct: true },
          { text: "Cloro (Cl)", correct: false },
          { text: "Oxígeno (O)", correct: false },
          { text: "Hidrógeno (H)", correct: false }
        ]
      }
    },
    {
      id: 9,
      category: "Método Ion-Electrón",
      title: "Medio Ácido: K₂Cr₂O₇ + FeSO₄",
      statement: "Balancee: K₂Cr₂O₇ + FeSO₄ + H₂SO₄ → Fe₂(SO₄)₃ + Cr₂(SO₄)₃ + K₂SO₄ + H₂O",
      steps: [
        {
          t: "Hemirreacciones Iónicas",
          d: "Ox: 2Fe²⁺ → Fe₂³⁺ + 2e⁻<br/>Red: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O"
        },
        {
          t: "Igualación",
          d: "Multiplicamos Ox por 3:<br/>6Fe²⁺ → 3Fe₂³⁺ + 6e⁻"
        },
        {
          t: "Ecuación Final",
          d: "<b>K₂Cr₂O₇ + 6FeSO₄ + 7H₂SO₄ → 3Fe₂(SO₄)₃ + Cr₂(SO₄)₃ + K₂SO₄ + 7H₂O</b>"
        }
      ],
      quiz: {
        question: "¿Cuántos electrones se transfieren en total por cada mol de dicromato?",
        options: [
          { text: "6", correct: true },
          { text: "2", correct: false },
          { text: "14", correct: false },
          { text: "3", correct: false }
        ]
      }
    },
    {
      id: 10,
      category: "Método Ion-Electrón",
      title: "Medio Alcalino: KMnO₄ + Fe(OH)₂",
      statement: "Balancee: KMnO₄ + Fe(OH)₂ + H₂O → Fe(OH)₃ + MnO₂ + KOH",
      steps: [
        {
          t: "Hemirreacciones en Medio Básico",
          d: "Ox: Fe(OH)₂ + OH⁻ → Fe(OH)₃ + e⁻<br/>Red: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻"
        },
        {
          t: "Igualación de e⁻",
          d: "Multiplicamos Ox por 3:<br/>3Fe(OH)₂ + 3OH⁻ → 3Fe(OH)₃ + 3e⁻"
        },
        {
          t: "Suma Iónica",
          d: "3Fe(OH)₂ + MnO₄⁻ + 2H₂O → 3Fe(OH)₃ + MnO₂ + OH⁻"
        },
        {
          t: "Ecuación Molecular",
          d: "<b>KMnO₄ + 3Fe(OH)₂ + 2H₂O → 3Fe(OH)₃ + MnO₂ + KOH</b>"
        }
      ],
      quiz: {
        question: "¿Qué medio se utiliza en esta reacción?",
        options: [
          { text: "Alcalino o Básico", correct: true },
          { text: "Ácido", correct: false },
          { text: "Neutro", correct: false },
          { text: "Gaseoso", correct: false }
        ]
      }
    },
    {
      id: 11,
      category: "Método Ion-Electrón",
      title: "Medio Alcalino: Cl₂ + NaOH",
      statement: "Balancee: Cl₂ + NaOH → NaCl + NaClO₃ + H₂O",
      steps: [
        {
          t: "Dismutación (Auto-redox)",
          d: "El cloro se oxida y se reduce simultáneamente.<br/>Ox: Cl₂ + 12OH⁻ → 2ClO₃⁻ + 6H₂O + 10e⁻<br/>Red: Cl₂ + 2e⁻ → 2Cl⁻"
        },
        {
          t: "Igualación",
          d: "Multiplicamos Red por 5:<br/>5Cl₂ + 10e⁻ → 10Cl⁻"
        },
        {
          t: "Suma",
          d: "6Cl₂ + 12OH⁻ → 10Cl⁻ + 2ClO₃⁻ + 6H₂O"
        },
        {
          t: "Simplificación y Molecular",
          d: "3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O<br/><b>3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O</b>"
        }
      ],
      quiz: {
        question: "¿Cómo se llama cuando un elemento se oxida y reduce a la vez?",
        options: [
          { text: "Disproporción o Dismutación", correct: true },
          { text: "Sustitución", correct: false },
          { text: "Combustión", correct: false },
          { text: "Neutralización", correct: false }
        ]
      }
    },
    {
      id: 12,
      category: "Método Ion-Electrón",
      title: "Medio Alcalino: Cr(OH)₃ + H₂O₂",
      statement: "Balancee: Cr(OH)₃ + NaOH + H₂O₂ → Na₂CrO₄ + H₂O",
      steps: [
        {
          t: "Hemirreacciones",
          d: "Ox: Cr(OH)₃ + 5OH⁻ → CrO₄²⁻ + 4H₂O + 3e⁻<br/>Red: H₂O₂ + 2e⁻ → 2OH⁻"
        },
        {
          t: "Balance de Electrones",
          d: "Multiplicamos Ox por 2 y Red por 3:<br/>2Cr(OH)₃ + 10OH⁻ → 2CrO₄²⁻ + 8H₂O + 6e⁻<br/>3H₂O₂ + 6e⁻ → 6OH⁻"
        },
        {
          t: "Global",
          d: "2Cr(OH)₃ + 4OH⁻ + 3H₂O₂ → 2CrO₄²⁻ + 8H₂O<br/><b>2Cr(OH)₃ + 4NaOH + 3H₂O₂ → 2Na₂CrO₄ + 8H₂O</b>"
        }
      ],
      quiz: {
        question: "¿En qué se transforma el peróxido en medio básico?",
        options: [
          { text: "Hidroxilos (OH⁻)", correct: true },
          { text: "Agua (H₂O)", correct: false },
          { text: "Oxígeno gaseoso (O₂)", correct: false },
          { text: "Hidrógeno (H₂)", correct: false }
        ]
      }
    },
    {
      id: 13,
      category: "Estequiometría Redox",
      title: "Problema 1: C₃H₈ + HNO₃",
      statement: "a) Balancee: C₃H₈ + HNO₃ → CO₂ + NO₂ + H₂O <br/> b) Determine cuántos equivalentes de C₃H₈ reaccionan con 35.0 g de HNO₃.",
      steps: [
        {
          t: "Balanceo Redox",
          d: "Ox: C₃H₈ + 6H₂O → 3CO₂ + 20H⁺ + 20e⁻<br/>Red: NO₃⁻ + 2H⁺ + e⁻ → NO₂ + H₂O (× 20)<br/>Final: <b>C₃H₈ + 20HNO₃ → 3CO₂ + 20NO₂ + 14H₂O</b>"
        },
        {
          t: "Factor de Equivalencia (f_eq)",
          d: "Para el HNO₃ (agente oxidante), f_eq = 1 e⁻/mol.<br/>Peso equivalente (PE) = 63.01 g/mol / 1 = 63.01 g/eq."
        },
        {
          t: "Cálculo de Equivalentes",
          d: "Eq HNO₃ = 35.0 g / 63.01 g/eq = 0.555 eq.<br/>Por la ley de equivalentes: Eq reductor = Eq oxidante.<br/><b>Eq C₃H₈ = 0.555 eq.</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el peso equivalente del HNO₃ en esta reacción?",
        options: [
          { text: "63.01 g/eq", correct: true },
          { text: "31.5 g/eq", correct: false },
          { text: "21.0 g/eq", correct: false },
          { text: "126.0 g/eq", correct: false }
        ]
      }
    },
    {
      id: 14,
      category: "Estequiometría Redox",
      title: "Problema 2: N₂H₄ + KIO₃",
      statement: "Balancee en medio alcalino: N₂H₄ + KIO₃ + KOH → N₂ + KI + H₂O. <br/> Calcule cuántos equivalentes del reductor reaccionan con 12.4 g del oxidante.",
      steps: [
        {
          t: "Balanceo",
          d: "Ox: N₂H₄ + 4OH⁻ → N₂ + 4H₂O + 4e⁻ (× 3)<br/>Red: IO₃⁻ + 3H₂O + 6e⁻ → I⁻ + 6OH⁻ (× 2)<br/>Final: <b>3N₂H₄ + 2KIO₃ → 3N₂ + 2KI + 6H₂O</b>"
        },
        {
          t: "Peso Equivalente del Oxidante (KIO₃)",
          d: "f_eq = 6 e⁻/mol.<br/>PE = 214.0 g/mol / 6 = 35.67 g/eq."
        },
        {
          t: "Resultado",
          d: "Eq KIO₃ = 12.4 g / 35.67 g/eq = 0.348 eq.<br/><b>Eq Reductor (N₂H₄) = 0.348 eq.</b>"
        }
      ],
      quiz: {
        question: "¿Cuántos electrones gana el yodo (del IO₃⁻ al I⁻)?",
        options: [
          { text: "6", correct: true },
          { text: "5", correct: false },
          { text: "1", correct: false },
          { text: "4", correct: false }
        ]
      }
    },
    {
      id: 15,
      category: "Estequiometría Redox",
      title: "Problema 3: K₂Cr₂O₇ + SnCl₂",
      statement: "Balancee en medio ácido: K₂Cr₂O₇ + SnCl₂ + HCl → CrCl₃ + SnCl₄ + KCl + H₂O. <br/> Calcule cuántos gramos del oxidante reaccionan con 0.04 equivalentes del reductor.",
      steps: [
        {
          t: "Balanceo",
          d: "Ox: Sn²⁺ → Sn⁴⁺ + 2e⁻ (× 3)<br/>Red: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O<br/>Final: <b>K₂Cr₂O₇ + 3SnCl₂ + 14HCl → 2CrCl₃ + 3SnCl₄ + 2KCl + 7H₂O</b>"
        },
        {
          t: "Peso Equivalente del Oxidante (K₂Cr₂O₇)",
          d: "f_eq = 6 e⁻/mol.<br/>PE = 294.18 g/mol / 6 = 49.03 g/eq."
        },
        {
          t: "Cálculo de Masa",
          d: "Eq Oxidante = Eq Reductor = 0.04 eq.<br/>Masa = 0.04 eq × 49.03 g/eq = <b>1.96 g de K₂Cr₂O₇</b>"
        }
      ],
      quiz: {
        question: "¿Cuál es el factor de equivalencia (f_eq) del SnCl₂?",
        options: [
          { text: "2", correct: true },
          { text: "6", correct: false },
          { text: "1", correct: false },
          { text: "4", correct: false }
        ]
      }
    },
    {
      id: 16,
      category: "Estequiometría Redox",
      title: "Problema 4: Ácido Oxálico + KMnO₄",
      statement: "Balancee: H₂C₂O₄ + KMnO₄ + H₂SO₄ → CO₂ + MnSO₄ + K₂SO₄ + H₂O. <br/> Determine cuántos equivalentes de H₂C₂O₄ se necesitan para reducir 18.5 g de la sal de manganeso (KMnO₄).",
      steps: [
        {
          t: "Balanceo",
          d: "Ox: C₂O₄²⁻ → 2CO₂ + 2e⁻ (× 5)<br/>Red: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (× 2)<br/>Final: <b>5H₂C₂O₄ + 2KMnO₄ + 3H₂SO₄ → 10CO₂ + 2MnSO₄ + K₂SO₄ + 8H₂O</b>"
        },
        {
          t: "Equivalentes de KMnO₄",
          d: "f_eq = 5 e⁻/mol.<br/>PE = 158.03 g/mol / 5 = 31.61 g/eq.<br/>Eq = 18.5 g / 31.61 g/eq = 0.585 eq."
        },
        {
          t: "Conclusión",
          d: "Se necesitan <b>0.585 equivalentes de ácido oxálico</b>."
        }
      ],
      quiz: {
        question: "¿Cuántos electrones pierde cada átomo de carbono en el ácido oxálico?",
        options: [
          { text: "1 (pasa de +3 a +4)", correct: true },
          { text: "2", correct: false },
          { text: "4", correct: false },
          { text: "5", correct: false }
        ]
      }
    },
    {
      id: 17,
      category: "Números de Oxidación",
      title: "Tiosulfato y Peroxodisulfato",
      statement: "Determine el número de oxidación del azufre en Na₂S₂O₃ y Na₂S₂O₈.",
      steps: [
        {
          t: "Na₂S₂O₃ (Tiosulfato de sodio)",
          d: "2(+1) + 2(S) + 3(-2) = 0 → 2 + 2S - 6 = 0 → 2S = 4 → <b>S = +2</b>."
        },
        {
          t: "Na₂S₂O₈ (Peroxodisulfato de sodio)",
          d: "2(+1) + 2(S) + 8(-2) = -2 (carga del peróxido)<br/>Estructuralmente: 2S(+6) y dos O con -1.<br/><b>S = +6</b>."
        }
      ],
      quiz: {
        question: "¿Cuál es el n° de oxidación del S en el ion sulfato común?",
        options: [
          { text: "+6", correct: true },
          { text: "+4", correct: false },
          { text: "-2", correct: false },
          { text: "+2", correct: false }
        ]
      }
    },
    {
      id: 18,
      category: "Método Ion-Electrón",
      title: "Ecuaciones Iónicas: Zn + H₂SO₄",
      statement: "Balancee la reacción iónica: Zn(s) + H⁺(ac) → Zn²⁺(ac) + H₂(g)",
      steps: [
        {
          t: "Hemirreacciones",
          d: "Ox: Zn → Zn²⁺ + 2e⁻<br/>Red: 2H⁺ + 2e⁻ → H₂"
        },
        {
          t: "Suma",
          d: "<b>Zn + 2H⁺ → Zn²⁺ + H₂</b>"
        }
      ],
      quiz: {
        question: "¿Qué gas se desprende al reaccionar un metal con ácido?",
        options: [
          { text: "Hidrógeno", correct: true },
          { text: "Oxígeno", correct: false },
          { text: "Cloro", correct: false },
          { text: "Nitrógeno", correct: false }
        ]
      }
    },
    {
      id: 19,
      category: "Método Ion-Electrón",
      title: "Medio Alcalino: Na + H₂O",
      statement: "Balancee: Na(s) + H₂O(l) → NaOH(ac) + H₂(g)",
      steps: [
        {
          t: "Hemirreacciones",
          d: "Ox: Na → Na⁺ + e⁻ (× 2)<br/>Red: 2H₂O + 2e⁻ → H₂ + 2OH⁻"
        },
        {
          t: "Suma",
          d: "2Na + 2H₂O → 2Na⁺ + 2OH⁻ + H₂"
        },
        {
          t: "Molecular",
          d: "<b>2Na + 2H₂O → 2NaOH + H₂</b>"
        }
      ],
      quiz: {
        question: "¿Cómo es el pH de la solución resultante?",
        options: [
          { text: "Básico (mayor a 7)", correct: true },
          { text: "Ácido (menor a 7)", correct: false },
          { text: "Neutro (7)", correct: false },
          { text: "Cero", correct: false }
        ]
      }
    },
    {
      id: 20,
      category: "General",
      title: "Agente Oxidante y Reductor",
      statement: "En la reacción: MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O, identifique las especies.",
      steps: [
        {
          t: "Análisis",
          d: "El Mn baja de +4 a +2 (se reduce). El Cl sube de -1 a 0 (se oxida)."
        },
        {
          t: "Definición",
          d: "Agente Oxidante: La especie que se reduce (<b>MnO₂</b>).<br/>Agente Reductor: La especie que se oxida (<b>HCl</b>)."
        }
      ],
      quiz: {
        question: "El agente oxidante...",
        options: [
          { text: "Gana electrones", correct: true },
          { text: "Pierde electrones", correct: false },
          { text: "No cambia", correct: false },
          { text: "Aumenta su n° de oxidación", correct: false }
        ]
      }
    }
  ]
};
