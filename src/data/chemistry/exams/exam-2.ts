import type { Colloquium } from '../../types';

export const exam2: Colloquium = {
  id: 102,
  name: 'Modelo de Parcial N° 2',
  exercises: [
    {
      id: 1,
      category: 'Propiedades de la Materia',
      title: 'Densidad de Extracto Biológico',
      statement: `Para determinar la densidad de una sustancia líquida desconocida obtenida de un extracto biológico, se pesa un matraz Erlenmeyer limpio y seco, registrando una masa de <b>52,10 g</b>. Seguidamente, se transfiere con exactitud un volumen de <b>20,0 mL</b> del líquido problema. Al volver a pesar el sistema, la masa total es de <b>75,30 g</b>.<br/><br/>
      <b>a)</b> Determine de forma analítica la masa neta del líquido problema transferido.<br/>
      <b>b)</b> Calcule el valor experimental de la densidad para la muestra líquida analizada.`,
      steps: [
        {
          t: 'Cálculo de la masa neta',
          d: 'Masa líquido = Masa total - Masa matraz<br/>Masa líquido = 75,30 g - 52,10 g = <b>23,20 g</b>'
        },
        {
          t: 'Cálculo de la densidad',
          d: 'δ = m / V<br/>δ = 23,20 g / 20,0 mL = <b>1,16 g/mL</b>'
        }
      ],
      quiz: {
        question: '¿Cuál es la densidad del extracto?',
        options: [
          { text: '1,16 g/mL', correct: true },
          { text: '0,86 g/mL', correct: false },
          { text: '2,32 g/mL', correct: false }
        ]
      }
    },
    {
      id: 2,
      category: 'Estructura Atómica',
      title: 'Isótopos de Cobre',
      statement: `Un elemento químico posee únicamente dos isótopos estables:<br/>
      • Isótopo 1: A = 63 (Abundancia: 69,2%)<br/>
      • Isótopo 2: A = 65 (Abundancia: 30,8%)<br/><br/>
      <b>a)</b> Calcule la masa atómica promedio ponderada.<br/>
      <b>b)</b> Identifique el elemento (Nombre, Símbolo y Z).<br/>
      <b>c)</b> Para el catión divalente (+2) del isótopo más liviano (A=63), determine p+, e- y n⁰.<br/>
      <b>d)</b> Escriba la configuración electrónica del elemento en su estado fundamental (considerar excepción).<br/>
      <b>e)</b> Represente la estructura de Lewis del Cloruro Cúprico (CuCl₂) asumiendo carácter iónico.`,
      steps: [
        {
          t: 'Masa Atómica Promedio',
          d: 'Masa = (63 * 0,692) + (65 * 0,308) = 43,596 + 20,02 = <b>63,616 uma</b>'
        },
        {
          t: 'Identificación',
          d: 'Buscamos en la tabla el elemento con masa ≈ 63,6 y Z=29:<br/>Elemento: <b>Cobre</b>, Símbolo: <b>Cu</b>, Número atómico: <b>Z = 29</b>'
        },
        {
          t: 'Estructura del ion Cu²⁺ (A=63)',
          d: 'Al ser un catión +2, ha perdido 2 electrones:<br/><b>Protones (Z):</b> 29<br/><b>Electrones:</b> 29 - 2 = 27<br/><b>Neutrones (A-Z):</b> 63 - 29 = 34'
        },
        {
          t: 'Configuración Electrónica (Excepción)',
          d: 'El Cobre es una excepción a la regla de Aufbau para ganar estabilidad con el orbital "d" lleno:<br/><b>[Ar] 3d¹⁰ 4s¹</b> (en lugar de [Ar] 3d⁹ 4s²)'
        },
        {
          t: 'Estructura de Lewis (CuCl₂)',
          d: 'Representamos la unión iónica:<br/><b>[Cl]⁻ [Cu]²⁺ [Cl]⁻</b><br/>El átomo de cobre cede un electrón a cada átomo de cloro.'
        }
      ],
      quiz: {
        question: '¿Cuál es el número atómico del Cobre?',
        options: [
          { text: '29', correct: true },
          { text: '63', correct: false },
          { text: '27', correct: false }
        ]
      }
    },
    {
      id: 3,
      category: 'Estequiometría',
      title: 'Hidrocarburo Gaseoso',
      statement: `Un gas hidrocarburo posee <b>81,8% Carbono</b> y <b>18,2% Hidrógeno</b>. Su masa molar molecular es de <b>44,0 g/mol</b>.<br/><br/>
      <b>a)</b> Determine la fórmula empírica y molecular.<br/>
      <b>b)</b> Escriba la ecuación de combustión balanceada.<br/>
      <b>c)</b> Si reaccionan 88,0 g del gas con 350,0 g de O₂, determine el reactivo limitante.`,
      steps: [
        {
          t: 'Fórmula Empírica',
          d: 'Moles C: 81,8 / 12 = 6,82 | Moles H: 18,2 / 1 = 18,2<br/>Dividiendo por 6,82: C=1, H=2,67. Multiplicando por 3 para obtener enteros: C=3, H=8.<br/><b>Fórmula Empírica: C₃H₈</b> (MM=44)'
        },
        {
          t: 'Fórmula Molecular',
          d: 'Como la masa molar (44) coincide con la de la fórmula empírica:<br/><b>Fórmula Molecular: C₃H₈</b> (Propano)'
        },
        {
          t: 'Ecuación de Combustión',
          d: '<b>C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</b>'
        },
        {
          t: 'Reactivo Limitante',
          d: 'Moles Propano: 88 / 44 = 2 mol<br/>Moles O₂: 350 / 32 = 10,9 mol<br/>Relación: 2 mol Propano necesitan 10 mol O₂ (5 por cada 1). Tenemos 10,9 mol O₂.<br/><b>RL: Propano (se agota primero)</b>'
        }
      ],
      quiz: {
        question: '¿Qué gas es el hidrocarburo?',
        options: [
          { text: 'Metano', correct: false },
          { text: 'Propano', correct: true },
          { text: 'Butano', correct: false }
        ]
      }
    },
    {
      id: 4,
      category: 'Redox',
      title: 'Oxidación de Hierro (II)',
      statement: `Balancee la siguiente ecuación en medio ácido:<br/><b>K₂Cr₂O₇ + FeSO₄ + H₂SO₄ → Cr₂(SO₄)₃ + Fe₂(SO₄)₃ + K₂SO₄ + H₂O</b><br/><br/>
      Identifique agente oxidante, reductor y calcule el peso equivalente del reductor.`,
      steps: [
        {
          t: 'Semirreacciones',
          d: 'Reducción: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O<br/>Oxidación: Fe²⁺ → Fe³⁺ + 1e⁻ (x6)'
        },
        {
          t: 'Ecuación Balanceada',
          d: '<b>K₂Cr₂O₇ + 6 FeSO₄ + 7 H₂SO₄ → Cr₂(SO₄)₃ + 3 Fe₂(SO₄)₃ + K₂SO₄ + 7 H₂O</b>'
        },
        {
          t: 'Agentes y Peso Equivalente',
          d: '<b>Agente Oxidante:</b> K₂Cr₂O₇.<br/><b>Agente Reductor:</b> FeSO₄.<br/><b>Peso Eq. Reductor:</b> Masa Molar / 1 electrón.'
        }
      ],
      quiz: {
        question: '¿Quién es el agente reductor?',
        options: [
          { text: 'K2Cr2O7', correct: false },
          { text: 'FeSO4', correct: true },
          { text: 'H2SO4', correct: false }
        ]
      }
    }
  ]
};
