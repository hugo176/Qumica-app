import type { Colloquium } from '../../types';

export const exam1: Colloquium = {
  id: 101,
  name: 'Modelo de Parcial N° 1',
  exercises: [
    {
      id: 1,
      category: 'Propiedades de la Materia',
      title: 'Determinación de Densidad',
      statement: `Para determinar experimentalmente la densidad de un compuesto líquido de interés biológico, un estudiante limpia y seca rigurosamente un matraz aforado. Al colocar el recipiente vacío sobre la balanza digital de laboratorio, registra una masa de <b>38,40 g</b>. Posteriormente, utilizando una pipeta volumétrica de transferencia, introduce con exactitud un volumen de <b>50,0 mL</b> del líquido problema en el matraz. Al volver a pesar el sistema completo (recipiente con líquido), la balanza indica una masa total de <b>84,90 g</b>.<br/><br/>
      <b>a)</b> Calcule razonadamente la masa neta del líquido problema que fue transferido.<br/>
      <b>b)</b> Determine la densidad experimental de la muestra líquida analizada.<br/>
      <b>c)</b> Clasifique cada parámetro (masa, volumen, densidad) según corresponda a propiedades intensivas o extensivas.`,
      steps: [
        {
          t: 'Cálculo de la masa neta',
          d: 'Restamos la masa del matraz vacío de la masa del matraz con líquido:<br/>Masa líquido = Masa total - Masa matraz<br/>Masa líquido = 84,90 g - 38,40 g = <b>46,50 g</b>'
        },
        {
          t: 'Determinación de la densidad',
          d: 'Aplicamos la fórmula de densidad (δ = m/V):<br/>δ = 46,50 g / 50,0 mL = <b>0,93 g/mL</b>'
        },
        {
          t: 'Clasificación de propiedades',
          d: '<b>Extensivas:</b> Masa y Volumen (dependen de la cantidad de materia).<br/><b>Intensivas:</b> Densidad (es una relación constante que define a la sustancia, independiente de la cantidad).'
        }
      ],
      quiz: {
        question: '¿Cuál es la masa neta del líquido?',
        options: [
          { text: '46,5 g', correct: true },
          { text: '84,9 g', correct: false },
          { text: '123,3 g', correct: false }
        ]
      }
    },
    {
      id: 2,
      category: 'Estructura Atómica',
      title: 'Isótopos y Masa Atómica',
      statement: `Un elemento químico posee dos isótopos estables:<br/>
      • Isótopo 1: A = 6 (Abundancia: 7,5%)<br/>
      • Isótopo 2: A = 7 (Abundancia: 92,5%)<br/><br/>
      <b>a)</b> Determine la masa atómica promedio ponderada.<br/>
      <b>b)</b> Identifique el elemento (Nombre, Símbolo y Z).<br/>
      <b>c)</b> Para el catión monovalente (+1) del isótopo más abundante (A=7), indique p+, e- y n⁰.<br/>
      <b>d)</b> Escriba la configuración electrónica del elemento en su estado fundamental.<br/>
      <b>e)</b> Represente la estructura de Lewis del hidruro de dicho elemento (H=1).`,
      steps: [
        {
          t: 'Cálculo de masa atómica promedio',
          d: 'Masa = (6 * 0,075) + (7 * 0,925) = 0,45 + 6,475 = <b>6,925 uma</b>'
        },
        {
          t: 'Identificación del elemento',
          d: 'Buscamos en la tabla el elemento con masa cercana a 6,9 y Z=3:<br/>Elemento: <b>Litio</b>, Símbolo: <b>Li</b>, Número atómico: <b>Z = 3</b>'
        },
        {
          t: 'Estructura del ion Li⁺ (A=7)',
          d: 'Como es un catión +1, ha perdido 1 electrón:<br/><b>Protones (Z):</b> 3<br/><b>Electrones:</b> 3 - 1 = 2<br/><b>Neutrones (A-Z):</b> 7 - 3 = 4'
        },
        {
          t: 'Configuración Electrónica',
          d: 'Para Z=3:<br/><b>1s² 2s¹</b>'
        },
        {
          t: 'Estructura de Lewis (LiH)',
          d: 'El Hidruro de Litio (LiH) es un compuesto iónico (Metal + No Metal):<br/><b>[Li]⁺ [ :H ]⁻</b><br/>El Litio cede su electrón al Hidrógeno, que completa su dueto.'
        }
      ],
      quiz: {
        question: '¿Cuántos neutrones tiene el Li-7?',
        options: [
          { text: '3', correct: false },
          { text: '4', correct: true },
          { text: '7', correct: false }
        ]
      }
    },
    {
      id: 3,
      category: 'Estequiometría',
      title: 'Composición y Combustión',
      statement: `Un compuesto orgánico tiene <b>40,0% C</b>, <b>6,7% H</b> y <b>53,3% O</b>. Masa molar = <b>60,0 g/mol</b>.<br/><br/>
      <b>a)</b> Determine la fórmula mínima y molecular.<br/>
      <b>b)</b> Calcule la masa de CO₂ y moles de H₂O generados al quemar 1 mol.<br/>
      <b>c)</b> Determine el reactivo limitante si reaccionan 120 g de compuesto con 180 g de O₂.`,
      steps: [
        {
          t: 'Determinación de Fórmula Mínima',
          d: 'Moles C: 40,0/12 = 3,33 | Moles H: 6,7/1 = 6,7 | Moles O: 53,3/16 = 3,33<br/>Dividiendo por el menor (3,33): C=1, H=2, O=1. <b>Fórmula Mínima: CH₂O</b> (MM=30)'
        },
        {
          t: 'Fórmula Molecular',
          d: 'Factor = Masa Molar / Masa Mínima = 60,0 / 30 = 2<br/><b>Fórmula Molecular: C₂H₄O₂</b>'
        },
        {
          t: 'Ecuación de Combustión',
          d: '<b>C₂H₄O₂ + 2 O₂ → 2 CO₂ + 2 H₂O</b><br/>1 mol de C₂H₄O₂ produce 2 mol CO₂ (88,0 g) y 2 mol H₂O.'
        },
        {
          t: 'Reactivo Limitante',
          d: 'Moles Orgánico: 120 / 60 = 2 mol<br/>Moles O₂: 180 / 32 = 5,6 mol<br/>Relación: 2 mol Org necesitan 4 mol O₂. Tenemos 5,6 mol O₂ (sobra).<br/><b>RL: Compuesto Orgánico</b>'
        }
      ],
      quiz: {
        question: '¿Cuál es la fórmula molecular?',
        options: [
          { text: 'CH2O', correct: false },
          { text: 'C2H4O2', correct: true },
          { text: 'C6H12O6', correct: false }
        ]
      }
    },
    {
      id: 4,
      category: 'Redox',
      title: 'Método Ion-Electrón',
      statement: `Balancee la siguiente ecuación en medio ácido:<br/><b>K₂Cr₂O₇ + HCl → CrCl₃ + Cl₂ + KCl + H₂O</b><br/><br/>
      Identifique agente oxidante, reductor y calcule el peso equivalente del oxidante.`,
      steps: [
        {
          t: 'Semirreacciones',
          d: 'Reducción: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O<br/>Oxidación: 2Cl⁻ → Cl₂ + 2e⁻ (x3)'
        },
        {
          t: 'Ecuación Balanceada',
          d: '<b>K₂Cr₂O₇ + 14 HCl → 2 CrCl₃ + 3 Cl₂ + 2 KCl + 7 H₂O</b>'
        },
        {
          t: 'Agentes y Peso Equivalente',
          d: '<b>Agente Oxidante:</b> K₂Cr₂O₇ (se reduce).<br/><b>Agente Reductor:</b> HCl (se oxida).<br/><b>Peso Eq. Oxidante:</b> Masa Molar / 6 electrones.'
        }
      ],
      quiz: {
        question: '¿Cuántos electrones se transfieren en la reducción del Cr?',
        options: [
          { text: '2', correct: false },
          { text: '3', correct: false },
          { text: '6', correct: true }
        ]
      }
    }
  ]
};
