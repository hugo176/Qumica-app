import type { Colloquium } from '../../types';

export const colloquium2: Colloquium = {
  id: 2,
  name: 'Coloquio N° 2',
  exercises: [
    {
      id: 1,
      category: 'Atoms',
      title: 'Ejercicio 1',
      statement: `Un átomo de hierro presenta número másico <span class="math">A = 56</span> y número atómico <span class="math">Z = 26</span>.
                    <ul>
                        <li>Calcule la cantidad de protones (p<sup>+</sup>), neutrones (n<sup>0</sup>) y electrones (e<sup>-</sup>).</li>
                        <li>Identifique el elemento en la tabla periódica y escriba su símbolo completo <span class="math"><sup>A</sup><sub>Z</sub>X</span>.</li>
                    </ul>`,
      steps: [
        {
          t: 'Identificar Datos',
          d: 'Z (Número Atómico) = 26. A (Número Másico) = 56.',
        },
        {
          t: 'Calcular Protones',
          d: 'El número atómico Z es igual al número de protones. Por lo tanto, p<sup>+</sup> = 26.',
        },
        {
          t: 'Calcular Electrones',
          d: 'En un átomo neutro, el número de electrones es igual al número de protones. Por lo tanto, e<sup>-</sup> = 26.',
        },
        {
          t: 'Calcular Neutrones',
          d: 'A = Z + n<sup>0</sup>. Despejando: n<sup>0</sup> = A - Z = 56 - 26 = 30.',
        },
        {
          t: 'Símbolo Completo',
          d: 'El elemento con Z = 26 es el Hierro (Fe). El símbolo completo es <sup>56</sup><sub>26</sub>Fe.',
        },
      ],
      quiz: {
        question: '¿Qué representa el número másico (A) en un átomo?',
        options: [
          { text: 'Solo el número de electrones.', correct: false },
          { text: 'La suma de protones y neutrones.', correct: true },
          { text: 'El número de niveles de energía.', correct: false },
        ],
      },
    },
    {
      id: 2,
      category: 'Atoms',
      title: 'Ejercicio 2',
      statement: `Un ion posee 20 protones, 18 electrones y 20 neutrones.
                    <ul>
                        <li>Escriba el símbolo completo del ion.</li>
                        <li>Determine su carga e indique si es catión o anión.</li>
                        <li>¿A qué elemento pertenece?</li>
                    </ul>`,
      steps: [
        {
          t: 'Identificar Elemento',
          d: 'Z = número de protones = 20. El elemento con Z = 20 es el Calcio (Ca).',
        },
        { t: 'Calcular Carga', d: 'Carga = p<sup>+</sup> - e<sup>-</sup> = 20 - 18 = +2.' },
        { t: 'Clasificar Ion', d: 'Al tener carga positiva (+2), es un catión (ion dipositivo).' },
        { t: 'Calcular Número Másico', d: 'A = p<sup>+</sup> + n<sup>0</sup> = 20 + 20 = 40.' },
        { t: 'Símbolo del Ion', d: 'El símbolo es <sup>40</sup><sub>20</sub>Ca<sup>2+</sup>.' },
      ],
      quiz: {
        question: 'Si un átomo pierde electrones, se convierte en:',
        options: [
          { text: 'Un anión con carga negativa.', correct: false },
          { text: 'Un catión con carga positiva.', correct: true },
          { text: 'Un isótopo neutro.', correct: false },
        ],
      },
    },
    {
      id: 3,
      category: 'Mass',
      title: 'Ejercicio 3',
      statement: `Usando la constante de Avogadro (<span class="math">N<sub>A</sub> = 6,02 × 10<sup>23</sup></span> átomos/mol) y la masa molar del carbono (<span class="math">M = 12 g/mol</span>), calcule la masa de un único átomo de carbono en gramos. Exprese el resultado en notación científica.`,
      steps: [
        {
          t: 'Relación Fundamental',
          d: '1 mol de átomos de C tiene una masa de 12 g y contiene 6,02 × 10<sup>23</sup> átomos.',
        },
        { t: 'Planteo Matemático', d: 'Masa de 1 átomo = Masa Molar / N<sub>A</sub>' },
        {
          t: 'Cálculo',
          d: 'Masa = 12 g/mol / (6,02 × 10<sup>23</sup> átomos/mol) ≈ 1,99 × 10<sup>-23</sup> g.',
        },
      ],
      quiz: {
        question: '¿Qué cantidad de sustancia contiene exactamente el número de Avogadro de partículas?',
        options: [
          { text: '1 kilogramo.', correct: false },
          { text: '1 mol.', correct: true },
          { text: '1 gramo.', correct: false },
        ],
      },
    },
    {
      id: 4,
      category: 'Atoms',
      title: 'Ejercicio 4',
      statement: `Para el isótopo <span class="math"><sup>40</sup><sub>19</sub>K</span>: ¿cuántos neutrones posee? ¿Qué representa cada número en la notación isotópica?`,
      steps: [
        { t: 'Identificar Números', d: 'Número superior (A) = 40. Número inferior (Z) = 19.' },
        {
          t: 'Significado',
          d: '40 es el número másico (protones + neutrones). 19 es el número atómico (protones).',
        },
        { t: 'Calcular Neutrones', d: 'n<sup>0</sup> = A - Z = 40 - 19 = 21 neutrones.' },
      ],
      quiz: {
        question: '¿Qué tienen en común dos isótopos del mismo elemento?',
        options: [
          { text: 'El mismo número de neutrones.', correct: false },
          { text: 'El mismo número de masa.', correct: false },
          { text: 'El mismo número atómico (Z).', correct: true },
        ],
      },
    },
    {
      id: 5,
      category: 'Atoms',
      title: 'Ejercicio 5',
      statement: `Un átomo neutro contiene 15 electrones.
                    <ul>
                        <li>¿Cuál es su número atómico Z?</li>
                        <li>¿Cuántos protones posee?</li>
                        <li>Identifique el elemento en la tabla periódica.</li>
                    </ul>`,
      steps: [
        { t: 'Átomo Neutro', d: 'En un átomo neutro, e<sup>-</sup> = p<sup>+</sup>.' },
        {
          t: 'Calcular Z',
          d: 'Si tiene 15 electrones, tiene 15 protones. Por lo tanto, Z = 15.',
        },
        { t: 'Identificar', d: 'El elemento con Z = 15 es el Fósforo (P).' },
      ],
      quiz: {
        question: 'Si el fósforo ganara 3 electrones, ¿cuál sería su carga?',
        options: [
          { text: '+3', correct: false },
          { text: '-3', correct: true },
          { text: '0', correct: false },
        ],
      },
    },
    {
      id: 6,
      category: 'Mass',
      title: 'Ejercicio 6',
      statement: `El cloro existe en la naturaleza como mezcla de dos isótopos: <sup>35</sup>Cl (75%) y <sup>37</sup>Cl (25%). Calcule la masa atómica promedio del cloro. ¿Coincide con el valor de la tabla periódica? ¿Por qué se usa un promedio ponderado?`,
      steps: [
        {
          t: 'Fórmula de Masa Promedio',
          d: 'Masa = (Masa<sub>1</sub> × %<sub>1</sub> + Masa<sub>2</sub> × %<sub>2</sub>) / 100',
        },
        {
          t: 'Cálculo',
          d: 'Masa = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 35,5 u.',
        },
        {
          t: 'Comparación',
          d: 'Sí, coincide aproximadamente con el valor 35,45 u de la tabla periódica.',
        },
        {
          t: 'Justificación',
          d: 'Se usa un promedio ponderado porque los isótopos no abundan en la misma proporción; el resultado debe reflejar la importancia relativa de cada uno.',
        },
      ],
      quiz: {
        question: '¿Por qué la masa atómica del Cl en la tabla no es un número entero?',
        options: [
          { text: 'Por errores de medición antiguos.', correct: false },
          {
            text: 'Porque es un promedio de las masas de sus isótopos naturales.',
            correct: true,
          },
          { text: 'Porque los electrones tienen masa considerable.', correct: false },
        ],
      },
    },
    {
      id: 7,
      category: 'Mass',
      title: 'Ejercicio 7',
      statement: `Un elemento desconocido tiene dos isótopos: A = 10 (abundancia 20%) y A = 11 (abundancia 80%). Calcule su masa atómica promedio e identifique el elemento.`,
      steps: [
        { t: 'Cálculo de Masa', d: 'Masa = (10 × 0,20) + (11 × 0,80) = 2 + 8,8 = 10,8 u.' },
        {
          t: 'Identificación',
          d: 'El elemento con masa atómica aproximada de 10,8 u es el Boro (B), con Z = 5.',
        },
      ],
      quiz: {
        question: 'Si un elemento tiene abundancia del 100% para un solo isótopo, su masa atómica será:',
        options: [
          { text: 'Cero.', correct: false },
          { text: 'Igual al número másico de ese isótopo.', correct: true },
          { text: 'La mitad del número atómico.', correct: false },
        ],
      },
    },
    {
      id: 8,
      category: 'Mass',
      title: 'Ejercicio 8',
      statement: `Calcule cuántos átomos hay en 5,0 g de oxígeno molecular (O<sub>2</sub>). Tenga en cuenta que el oxígeno es diatómico. <br>Datos: O = 16 g/mol · N<sub>A</sub> = 6,02 × 10<sup>23</sup> átomos/mol`,
      steps: [
        { t: 'Masa Molar de O<sub>2</sub>', d: 'M(O<sub>2</sub>) = 2 × 16 g/mol = 32 g/mol.' },
        { t: 'Calcular Moles', d: 'n = masa / M = 5,0 g / 32 g/mol = 0,15625 moles de O<sub>2</sub>.' },
        {
          t: 'Calcular Moléculas',
          d: 'Moléculas = n × N<sub>A</sub> = 0,15625 × 6,02 × 10<sup>23</sup> ≈ 9,41 × 10<sup>22</sup> moléculas.',
        },
        {
          t: 'Calcular Átomos',
          d: 'Cada molécula de O<sub>2</sub> tiene 2 átomos. Átomos totales = 2 × 9,41 × 10<sup>22</sup> ≈ 1,88 × 10<sup>23</sup> átomos.',
        },
      ],
      quiz: {
        question: '¿Cuántos átomos hay en una molécula de Ozono (O<sub>3</sub>)?',
        options: [
          { text: '2', correct: false },
          { text: '3', correct: true },
          { text: '6,02 × 10<sup>23</sup>', correct: false },
        ],
      },
    },
    {
      id: 9,
      category: 'Mass',
      title: 'Ejercicio 9',
      statement: `La masa molar del sodio es 23 g/mol. Calcule la masa de un único átomo de sodio en gramos y exprese el resultado en notación científica.`,
      steps: [
        { t: 'Fórmula', d: 'Masa de 1 átomo = M / N<sub>A</sub>' },
        {
          t: 'Cálculo',
          d: 'Masa = 23 g/mol / (6,02 × 10<sup>23</sup> átomos/mol) ≈ 3,82 × 10<sup>-23</sup> g.',
        },
      ],
      quiz: {
        question: '¿Qué representa la masa molar?',
        options: [
          { text: 'La masa de un solo átomo.', correct: false },
          { text: 'La masa de 6,02 × 10<sup>23</sup> partículas.', correct: true },
          { text: 'El volumen de un gas.', correct: false },
        ],
      },
    },
    {
      id: 10,
      category: 'Atoms',
      title: 'Ejercicio 10',
      statement: `Para el isótopo <span class="math"><sup>63</sup><sub>29</sub>Cu</span>: determine el número de neutrones y explique qué son los isótopos de un elemento.`,
      steps: [
        { t: 'Calcular Neutrones', d: 'n<sup>0</sup> = A - Z = 63 - 29 = 34 neutrones.' },
        {
          t: 'Definición de Isótopos',
          d: 'Son átomos del mismo elemento (mismo Z, mismos protones) que difieren en su número de neutrones (distinto A).',
        },
      ],
      quiz: {
        question: '¿Cuál de estos pares son isótopos?',
        options: [
          { text: '<sup>12</sup>C y <sup>14</sup>N', correct: false },
          { text: '<sup>35</sup>Cl y <sup>37</sup>Cl', correct: true },
          { text: 'Na<sup>+</sup> y Mg<sup>2+</sup>', correct: false },
        ],
      },
    },
    {
      id: 11,
      category: 'Config',
      title: 'Ejercicio 11',
      statement: `Escriba la configuración electrónica completa usando la notación de orbitales (1s² 2s² ...) para:
                    <ul>
                        <li>O (Z = 8)</li>
                        <li>Na (Z = 11)</li>
                        <li>Ca (Z = 20)</li>
                    </ul>`,
      steps: [
        { t: 'Oxígeno (Z=8)', d: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>' },
        { t: 'Sodio (Z=11)', d: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>' },
        {
          t: 'Calcio (Z=20)',
          d: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup>',
        },
      ],
      quiz: {
        question: '¿Cuál es la capacidad máxima de electrones en un subnivel \'p\'?',
        options: [
          { text: '2', correct: false },
          { text: '6', correct: true },
          { text: '10', correct: false },
        ],
      },
    },
    {
      id: 12,
      category: 'Config',
      title: 'Ejercicio 12',
      statement: `Escriba la configuración electrónica del nitrógeno (Z = 7). Aplicando la regla de Hund, determine cuántos electrones desapareados posee y en qué subnivel se encuentran.`,
      steps: [
        { t: 'Configuración', d: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup>' },
        {
          t: 'Regla de Hund',
          d: 'En el subnivel 2p hay 3 orbitales. Los 3 electrones entran de a uno en cada orbital con el mismo espín.',
        },
        { t: 'Resultado', d: 'Posee 3 electrones desapareados en el subnivel 2p.' },
      ],
      quiz: {
        question: '¿Qué establece la regla de Hund?',
        options: [
          { text: 'Que los electrones deben estar siempre apareados.', correct: false },
          {
            text: 'Que los orbitales de igual energía se ocupan con un electrón antes de aparearse.',
            correct: true,
          },
          {
            text: 'Que no puede haber dos electrones con los mismos números cuánticos.',
            correct: false,
          },
        ],
      },
    },
    {
      id: 13,
      category: 'Config',
      title: 'Ejercicio 13',
      statement: `Escriba la configuración electrónica de los siguientes iones y compárela con el átomo neutro correspondiente:
                    <ul>
                        <li>Na<sup>+</sup> (pierde 1 electrón)</li>
                        <li>Cl<sup>-</sup> (gana 1 electrón)</li>
                    </ul>`,
      steps: [
        {
          t: 'Na (Z=11) vs Na<sup>+</sup>',
          d: 'Na: [Ne] 3s<sup>1</sup>. Na<sup>+</sup>: [Ne] o 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>. (Isoelectrónico con Neón).',
        },
        {
          t: 'Cl (Z=17) vs Cl<sup>-</sup>',
          d: 'Cl: [Ne] 3s<sup>2</sup> 3p<sup>5</sup>. Cl<sup>-</sup>: [Ne] 3s<sup>2</sup> 3p<sup>6</sup> o [Ar]. (Isoelectrónico con Argón).',
        },
      ],
      quiz: {
        question: '¿A qué gas noble es isoelectrónico el ion Al<sup>3+</sup> (Z=13)?',
        options: [
          { text: 'Helio', correct: false },
          { text: 'Neón', correct: true },
          { text: 'Argón', correct: false },
        ],
      },
    },
    {
      id: 14,
      category: 'Trends',
      title: 'Ejercicio 14',
      statement: `Un elemento presenta la configuración 1s² 2s² 2p⁶ 3s². Indique: grupo, período y tipo de elemento (metal, no metal o metaloide) según la tabla periódica.`,
      steps: [
        { t: 'Período', d: 'El nivel de energía más alto es n = 3. Período 3.' },
        { t: 'Grupo', d: 'Termina en s<sup>2</sup>. Grupo 2A (o Grupo 2).' },
        { t: 'Identificación', d: 'El elemento es el Magnesio (Mg).' },
        { t: 'Tipo', d: 'Es un metal (alcalinotérreo).' },
      ],
      quiz: {
        question: 'Los elementos del grupo 2A se conocen como:',
        options: [
          { text: 'Metales Alcalinos.', correct: false },
          { text: 'Metales Alcalinotérreos.', correct: true },
          { text: 'Halógenos.', correct: false },
        ],
      },
    },
    {
      id: 15,
      category: 'Config',
      title: 'Ejercicio 15',
      statement: `Escriba la configuración electrónica del Cl (Z = 17). ¿Cuántos electrones hay en el subnivel 3p? ¿Cuántos electrones de valencia tiene?`,
      steps: [
        { t: 'Configuración', d: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>' },
        { t: 'Subnivel 3p', d: 'Hay 5 electrones.' },
        {
          t: 'Electrones de Valencia',
          d: 'Son los del nivel más alto (n=3): 3s<sup>2</sup> + 3p<sup>5</sup> = 7 electrones de valencia.',
        },
      ],
      quiz: {
        question: '¿En qué grupo se encuentra un elemento con 7 electrones de valencia?',
        options: [
          { text: 'Grupo 1A', correct: false },
          { text: 'Grupo 7A (Halógenos)', correct: true },
          { text: 'Gases Nobles', correct: false },
        ],
      },
    },
    {
      id: 16,
      category: 'Trends',
      title: 'Ejercicio 16',
      statement: `Ordene de menor a mayor radio atómico: Li, Na, K. Justifique usando las tendencias periódicas (variación en grupo y en período).`,
      steps: [
        {
          t: 'Tendencia en Grupo',
          d: 'Al bajar en un grupo, el radio atómico aumenta debido al agregado de nuevos niveles de energía (capas).',
        },
        { t: 'Posición', d: 'Li (p2), Na (p3), K (p4). Todos están en el grupo 1A.' },
        { t: 'Orden', d: 'Li < Na < K.' },
      ],
      quiz: {
        question: '¿Cómo varía el radio atómico de izquierda a derecha en un período?',
        options: [
          { text: 'Aumenta.', correct: false },
          { text: 'Disminuye.', correct: true },
          { text: 'Permanece igual.', correct: false },
        ],
      },
    },
    {
      id: 17,
      category: 'Trends',
      title: 'Ejercicio 17',
      statement: `Compare la electronegatividad de O y F. ¿Cuál es mayor y por qué? ¿Qué escala se utiliza habitualmente para medir esta propiedad?`,
      steps: [
        {
          t: 'Tendencia',
          d: 'La electronegatividad aumenta de izquierda a derecha en un período y de abajo hacia arriba en un grupo.',
        },
        {
          t: 'Comparación',
          d: 'El Flúor (F) está a la derecha del Oxígeno (O). Por lo tanto, la electronegatividad del F es mayor.',
        },
        { t: 'Dato', d: 'El F es el elemento más electronegativo de la tabla (valor 4,0).' },
        { t: 'Escala', d: 'Se utiliza habitualmente la escala de Pauling.' },
      ],
      quiz: {
        question: '¿Qué elemento tiene la electronegatividad más baja?',
        options: [
          { text: 'Flúor', correct: false },
          { text: 'Francio', correct: true },
          { text: 'Oxígeno', correct: false },
        ],
      },
    },
    {
      id: 18,
      category: 'Trends',
      title: 'Ejercicio 18',
      statement: `Indique cuál tiene mayor primera energía de ionización: Mg o Cl. Explique la tendencia periódica y los factores que influyen en esta propiedad.`,
      steps: [
        { t: 'Tendencia', d: 'Aumenta hacia la derecha en un período.' },
        {
          t: 'Comparación',
          d: 'Mg y Cl están en el mismo período (3). El Cl está mucho más a la derecha.',
        },
        { t: 'Resultado', d: 'El Cl tiene mayor energía de ionización.' },
        {
          t: 'Factores',
          d: 'Influye la carga nuclear efectiva (mayor en Cl, atrae más fuerte a los electrones) y el radio (Cl es más pequeño).',
        },
      ],
      quiz: {
        question: '¿Qué es la energía de ionización?',
        options: [
          { text: 'Energía para atraer electrones.', correct: false },
          { text: 'Energía mínima para quitar un electrón de un átomo gaseoso.', correct: true },
          { text: 'Energía liberada al formar un enlace.', correct: false },
        ],
      },
    },
    {
      id: 19,
      category: 'Trends',
      title: 'Ejercicio 19',
      statement: `Ordene de mayor a menor carácter metálico: Na, Al, Si. Justifique con base en la posición en la tabla periódica.`,
      steps: [
        { t: 'Tendencia', d: 'El carácter metálico aumenta hacia la izquierda y hacia abajo.' },
        { t: 'Posición', d: 'En el período 3: Na (G1), Al (G13), Si (G14).' },
        { t: 'Orden', d: 'Na > Al > Si.' },
      ],
      quiz: {
        question: '¿Dónde se encuentran los elementos con mayor carácter metálico?',
        options: [
          { text: 'Arriba a la derecha.', correct: false },
          { text: 'Abajo a la izquierda.', correct: true },
          { text: 'En el centro.', correct: false },
        ],
      },
    },
    {
      id: 20,
      category: 'Trends',
      title: 'Ejercicio 20',
      statement: `Compare el radio atómico del Cl con el del ion Cl<sup>-</sup>. ¿Cuál es mayor? Explique por qué la ganancia de electrones modifica el tamaño atómico.`,
      steps: [
        { t: 'Comparación', d: 'El ion Cl<sup>-</sup> es mayor que el átomo de Cl.' },
        {
          t: 'Explicación',
          d: 'Al ganar un electrón, aumenta la repulsión entre electrones en la nube, haciendo que esta se expanda mientras la carga nuclear (protones) se mantiene igual.',
        },
      ],
      quiz: {
        question: 'En general, un anión es ________ que su átomo neutro.',
        options: [
          { text: 'Más pequeño.', correct: false },
          { text: 'Más grande.', correct: true },
          { text: 'Del mismo tamaño.', correct: false },
        ],
      },
    },
    {
      id: 21,
      category: 'Bonds',
      title: 'Ejercicio 21',
      statement: `Clasifique el tipo de enlace presente en cada compuesto e indique el criterio de clasificación utilizado:
                    <ul>
                        <li>KBr</li>
                        <li>H<sub>2</sub>O</li>
                        <li>Cu metálico</li>
                    </ul>`,
      steps: [
        {
          t: 'KBr',
          d: 'Enlace Iónico. (Metal K + No Metal Br, gran diferencia de electronegatividad).',
        },
        {
          t: 'H<sub>2</sub>O',
          d: 'Enlace Covalente Polar. (Dos No Metales, diferencia de electronegatividad moderada).',
        },
        {
          t: 'Cu metálico',
          d: 'Enlace Metálico. (Átomos del mismo metal compartiendo \'mar de electrones\').',
        },
      ],
      quiz: {
        question: 'Un enlace entre dos no metales suele ser:',
        options: [
          { text: 'Iónico.', correct: false },
          { text: 'Covalente.', correct: true },
          { text: 'Metálico.', correct: false },
        ],
      },
    },
    {
      id: 22,
      category: 'Bonds',
      title: 'Ejercicio 22',
      statement: `Dibuje la estructura de Lewis del CO<sub>2</sub>. Indique los pares enlazantes y no enlazantes, y el tipo de enlaces (simple, doble o triple). ¿Cuántos electrones totales de valencia deben representarse?`,
      steps: [
        { t: 'Contar Electrones', d: 'C (4) + 2 × O (6) = 16 electrones de valencia totales.' },
        { t: 'Estructura', d: 'O = C = O (con dos pares libres en cada Oxígeno).' },
        { t: 'Tipos de Enlace', d: 'Dos enlaces dobles.' },
        { t: 'Pares', d: '4 pares enlazantes (8e-) y 4 pares no enlazantes (8e-).' },
      ],
      quiz: {
        question: '¿Cuántos electrones se comparten en un enlace doble?',
        options: [
          { text: '2', correct: false },
          { text: '4', correct: true },
          { text: '6', correct: false },
        ],
      },
    },
    {
      id: 23,
      category: 'Geometry',
      title: 'Ejercicio 23',
      statement: `Dibuje la estructura de Lewis del NH<sub>3</sub>. Indique los pares enlazantes y no enlazantes, y la geometría molecular resultante. ¿Cuántos electrones totales de valencia intervienen?`,
      steps: [
        { t: 'Contar Electrones', d: 'N (5) + 3 × H (1) = 8 electrones.' },
        {
          t: 'Estructura',
          d: 'N en el centro, unido a 3 H mediante enlaces simples, y un par libre sobre el N.',
        },
        { t: 'Geometría', d: 'Piramidal Trigonal (debido al par libre que empuja los enlaces).' },
      ],
      quiz: {
        question: '¿Cuál es la geometría de una molécula con 4 pares de electrones alrededor del átomo central (todos enlazantes)?',
        options: [
          { text: 'Lineal', correct: false },
          { text: 'Tetraédrica', correct: true },
          { text: 'Plana trigonal', correct: false },
        ],
      },
    },
    {
      id: 24,
      category: 'Geometry',
      title: 'Ejercicio 24',
      statement: `Indique si las siguientes moléculas son polares o no polares. Justifique considerando tanto la polaridad de cada enlace como la geometría molecular:
                    <ul>
                        <li>CO<sub>2</sub> (geometría lineal)</li>
                        <li>NH<sub>3</sub> (geometría piramidal)</li>
                        <li>CH<sub>4</sub> (geometría tetraédrica)</li>
                    </ul>`,
      steps: [
        {
          t: 'CO<sub>2</sub>',
          d: 'No Polar. Los enlaces C-O son polares, pero al ser lineal y simétrica, los momentos dipolares se cancelan.',
        },
        {
          t: 'NH<sub>3</sub>',
          d: 'Polar. Geometría asimétrica (piramidal) debido al par libre; los dipolos no se cancelan.',
        },
        {
          t: 'CH<sub>4</sub>',
          d: 'No Polar. Aunque los enlaces C-H tienen pequeña polaridad, la geometría tetraédrica es perfectamente simétrica y se cancelan.',
        },
      ],
      quiz: {
        question: '¿Puede una molécula con enlaces polares ser no polar?',
        options: [
          { text: 'No, nunca.', correct: false },
          { text: 'Sí, si su geometría es simétrica.', correct: true },
          { text: 'Solo si es un gas noble.', correct: false },
        ],
      },
    },
    {
      id: 25,
      category: 'Bonds',
      title: 'Ejercicio 25',
      statement: `La electronegatividad del H es 2,1 y la del Cl es 3,0. Calcule la diferencia de electronegatividad del enlace H–Cl y clasifíquelo según los criterios: ΔEN < 0,5 → covalente no polar; 0,5–1,7 → covalente polar; > 1,7 → iónico.`,
      steps: [
        { t: 'Cálculo', d: 'ΔEN = 3,0 - 2,1 = 0,9.' },
        { t: 'Clasificación', d: 'Como 0,9 está entre 0,5 y 1,7, el enlace es Covalente Polar.' },
      ],
      quiz: {
        question: 'Si la ΔEN es 0, el enlace es:',
        options: [
          { text: 'Iónico.', correct: false },
          { text: 'Covalente no polar (puro).', correct: true },
          { text: 'Metálico.', correct: false },
        ],
      },
    },
  ],
};
