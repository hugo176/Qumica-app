import type { Colloquium } from "../../types";

export const colloquium4: Colloquium = {
  id: 4,
  name: "Coloquio N° 4",
  exercises: [
    {
      id: 1,
      category: "Fuerzas Intermoleculares",
      title: "Comparación de Puntos de Ebullición",
      statement: "Explique, en función de las fuerzas intermoleculares, por qué el amoniaco (NH₃) tiene un punto de ebullición más alto que el metano (CH₄).",
      steps: [
        {
          t: "Análisis del Metano (CH₄)",
          d: "El metano es una molécula no polar con geometría tetraédrica simétrica. La única fuerza intermolecular presente son las <b>fuerzas de dispersión de London</b>, que son relativamente débiles."
        },
        {
          t: "Análisis del Amoniaco (NH₃)",
          d: "El amoniaco es una molécula polar con un par de electrones libres en el nitrógeno. Debido a la gran diferencia de electronegatividad entre el N y el H, forma <b>enlaces de hidrógeno</b>."
        },
        {
          t: "Comparación de Energías",
          d: "Los enlaces de hidrógeno son mucho más fuertes que las fuerzas de dispersión. Por lo tanto, se requiere más energía térmica para separar las moléculas de NH₃, resultando en un punto de ebullición más alto."
        }
      ],
      quiz: {
        question: "¿Cuál es la principal fuerza en el NH₃?",
        options: [
          { text: "Enlace de hidrógeno", correct: true },
          { text: "Fuerzas de London", correct: false },
          { text: "Enlace iónico", correct: false },
          { text: "Fuerzas ion-dipolo", correct: false }
        ]
      }
    },
    {
      id: 2,
      category: "Fuerzas Intermoleculares",
      title: "Identificación de Fuerzas",
      statement: "Identifique el principal tipo de fuerza intermolecular (dispersión, dipolo-dipolo o puente de hidrógeno) que opera en las siguientes especies: a) LiF, b) CH₄, c) SO₂, d) NH₃.",
      steps: [
        {
          t: "Especie a) LiF",
          d: "El fluoruro de litio está formado por un metal y un no metal con gran diferencia de electronegatividad. Es un compuesto iónico, por lo que predominan las <b>fuerzas electrostáticas (enlace iónico)</b> en el sólido."
        },
        {
          t: "Especie b) CH₄",
          d: "Como se analizó previamente, el metano es no polar. Su fuerza principal es la <b>dispersión de London</b>."
        },
        {
          t: "Especie c) SO₂",
          d: "El dióxido de azufre tiene una geometría angular y es polar. Su fuerza principal es <b>dipolo-dipolo</b>."
        },
        {
          t: "Especie d) NH₃",
          d: "Presenta hidrógeno unido directamente a nitrógeno, lo que permite la formación de <b>puentes de hidrógeno</b>."
        }
      ],
      quiz: {
        question: "¿Qué fuerza predomina en el SO₂?",
        options: [
          { text: "Dipolo-dipolo", correct: true },
          { text: "Dispersión", correct: false },
          { text: "Puente de hidrógeno", correct: false },
          { text: "Iónica", correct: false }
        ]
      }
    },
    {
      id: 3,
      category: "Fuerzas Intermoleculares",
      title: "Fuerzas Ion-Dipolo",
      statement: "¿En cuál de las siguientes mezclas esperaría encontrar fuerzas ion-dipolo: una disolución de alcohol metílico (CH₃OH) en agua o una disolución de nitrato de calcio Ca(NO₃)₂ en agua? Justifique.",
      steps: [
        {
          t: "Análisis de CH₃OH en agua",
          d: "Ambas son moléculas polares neutras. Interactúan principalmente mediante puentes de hidrógeno y dipolo-dipolo. No hay iones presentes."
        },
        {
          t: "Análisis de Ca(NO₃)₂ en agua",
          d: "El nitrato de calcio es un electrolito fuerte que se disocia en iones Ca²⁺ y NO₃⁻. El agua es un dipolo. La interacción entre los iones y los polos opuestos del agua genera <b>fuerzas ion-dipolo</b>."
        },
        {
          t: "Conclusión",
          d: "Se esperan fuerzas ion-dipolo en la disolución de <b>nitrato de calcio</b> debido a la presencia de especies cargadas (iones)."
        }
      ],
      quiz: {
        question: "¿Qué se requiere para una fuerza ion-dipolo?",
        options: [
          { text: "Un ion y una molécula polar", correct: true },
          { text: "Dos iones", correct: false },
          { text: "Dos moléculas no polares", correct: false },
          { text: "Un metal y un no metal", correct: false }
        ]
      }
    },
    {
      id: 4,
      category: "Fuerzas Intermoleculares",
      title: "Polarizabilidad",
      statement: "Defina el concepto de polarizabilidad y explique su relación con las fuerzas de dispersión de London.",
      steps: [
        {
          t: "Definición",
          d: "La <b>polarizabilidad</b> es la facilidad con la que la nube electrónica de un átomo o molécula puede ser deformada por un campo eléctrico externo o por una carga cercana."
        },
        {
          t: "Relación con las Fuerzas de London",
          d: "A mayor polarizabilidad, más fácil es inducir un dipolo instantáneo. Las fuerzas de London dependen de estos dipolos inducidos."
        },
        {
          t: "Factores Influyentes",
          d: "Moléculas más grandes con más electrones (y más alejados del núcleo) son más polarizables y, por lo tanto, tienen fuerzas de London más intensas."
        }
      ],
      quiz: {
        question: "¿Qué aumenta la polarizabilidad?",
        options: [
          { text: "Mayor número de electrones", correct: true },
          { text: "Menor tamaño atómico", correct: false },
          { text: "Mayor electronegatividad", correct: false },
          { text: "Cargas positivas fuertes", correct: false }
        ]
      }
    },
    {
      id: 5,
      category: "Fuerzas Intermoleculares",
      title: "Anomalía del Agua",
      statement: "Explique por qué el agua sería un gas a temperatura ambiente si no tuviera la capacidad de formar enlaces de hidrógeno.",
      steps: [
        {
          t: "Comparación con Hidruros del Grupo 16",
          d: "Siguiendo la tendencia de H₂S, H₂Se y H₂Te, el punto de ebullición debería disminuir con el tamaño molecular. El agua (H₂O) es la más pequeña."
        },
        {
          t: "Efecto del Enlace de Hidrógeno",
          d: "El enlace de hidrógeno en el agua es excepcionalmente fuerte, lo que eleva su punto de ebullición a 100°C. Sin él, basándose solo en fuerzas de dispersión, herviría a temperaturas muy por debajo de 0°C."
        },
        {
          t: "Estado Físico",
          d: "A temperatura ambiente (aprox. 25°C), sin estos enlaces, la energía térmica superaría fácilmente las fuerzas atractivas, manteniendo las moléculas en <b>estado gaseoso</b>."
        }
      ],
      quiz: {
        question: "¿A qué temperatura hierve el agua debido a sus enlaces H?",
        options: [
          { text: "100 °C", correct: true },
          { text: "0 °C", correct: false },
          { text: "25 °C", correct: false },
          { text: "-80 °C", correct: false }
        ]
      }
    },
    {
      id: 6,
      category: "Fuerzas Intermoleculares",
      title: "Puente de Hidrógeno en Halógenos",
      statement: "Identifique cuál de las siguientes moléculas forma puentes de hidrógeno consigo misma: HF, Br₂ o PCl₃.",
      steps: [
        {
          t: "Requisito del Puente de Hidrógeno",
          d: "Se requiere un átomo de hidrógeno unido directamente a un átomo muy electronegativo y pequeño (F, O o N)."
        },
        {
          t: "Análisis de las opciones",
          d: "Br₂: No polar, solo fuerzas de London.<br/>PCl₃: Polar (dipolo-dipolo), pero el H no está presente.<br/><b>HF</b>: El flúor es el elemento más electronegativo y está unido al H."
        },
        {
          t: "Conclusión",
          d: "Solo el <b>HF</b> cumple con las condiciones para formar puentes de hidrógeno."
        }
      ],
      quiz: {
        question: "¿Con qué elementos forma el H puentes de hidrógeno?",
        options: [
          { text: "F, O, N", correct: true },
          { text: "C, S, P", correct: false },
          { text: "Cl, Br, I", correct: false },
          { text: "Todos los no metales", correct: false }
        ]
      }
    },
    {
      id: 7,
      category: "Sólidos y Fuerzas",
      title: "Puntos de Ebullición: KCl vs I₂",
      statement: "Explique por qué el cloruro de potasio (KCl) tiene un punto de ebullición significativamente mayor que el yodo (I₂) considerando sus fuerzas de atracción.",
      steps: [
        {
          t: "Naturaleza del KCl",
          d: "El KCl es un <b>sólido iónico</b>. Sus unidades están unidas por fuertes fuerzas electrostáticas en una red cristalina tridimensional."
        },
        {
          t: "Naturaleza del I₂",
          d: "El I₂ es un <b>sólido molecular no polar</b>. Las moléculas de I₂ se mantienen unidas solo por fuerzas de dispersión de London."
        },
        {
          t: "Comparación de Fuerzas",
          d: "Romper una red iónica requiere muchísima más energía que vencer fuerzas de dispersión, por lo que el KCl tiene un punto de ebullición (y fusión) mucho más elevado."
        }
      ],
      quiz: {
        question: "¿Qué tipo de sólido es el KCl?",
        options: [
          { text: "Iónico", correct: true },
          { text: "Molecular", correct: false },
          { text: "Covalente", correct: false },
          { text: "Metálico", correct: false }
        ]
      }
    },
    {
      id: 8,
      category: "Bioquímica",
      title: "Interacciones en Proteínas",
      statement: "Identifique y describa los tipos de interacciones que se llevan a cabo entre las cadenas de proteínas en el cabello.",
      steps: [
        {
          t: "Puentes de Hidrógeno",
          d: "Mantienen la estructura secundaria (alfa-hélice) y se rompen fácilmente con el agua o el calor."
        },
        {
          t: "Enlaces Disulfuro (-S-S-)",
          d: "Son enlaces <b>covalentes</b> fuertes entre residuos de cisteína. Determinan la forma permanente del cabello (lacio o rizado)."
        },
        {
          t: "Interacciones Iónicas (Puentes salinos)",
          d: "Atracciones entre grupos laterales con carga positiva y negativa."
        }
      ],
      quiz: {
        question: "¿Qué interacción es covalente en el cabello?",
        options: [
          { text: "Puentes disulfuro", correct: true },
          { text: "Puentes de hidrógeno", correct: false },
          { text: "Fuerzas de London", correct: false },
          { text: "Interacción ion-dipolo", correct: false }
        ]
      }
    },
    {
      id: 9,
      category: "Fuerzas Intermoleculares",
      title: "Energía y Distancia",
      statement: "¿Cuál es la diferencia fundamental entre un enlace químico (intramolecular) y una fuerza intermolecular en términos de energía y distancia?",
      steps: [
        {
          t: "Energía",
          d: "Los enlaces químicos (covalentes, iónicos) tienen energías mucho mayores (cientos de kJ/mol) que las fuerzas intermoleculares (típicamente < 50 kJ/mol)."
        },
        {
          t: "Distancia",
          d: "Los átomos unidos químicamente están a distancias mucho más cortas que las moléculas atraídas intermolecularmente."
        },
        {
          t: "Impacto",
          d: "Las fuerzas intermoleculares determinan propiedades físicas (ebullición, densidad), mientras que los enlaces químicos determinan la identidad química."
        }
      ],
      quiz: {
        question: "¿Cuál es generalmente más fuerte?",
        options: [
          { text: "Enlace químico", correct: true },
          { text: "Fuerza intermolecular", correct: false },
          { text: "Son iguales", correct: false },
          { text: "Depende de la temperatura", correct: false }
        ]
      }
    },
    {
      id: 10,
      category: "Propiedades del Agua",
      title: "Estructura del Hielo",
      statement: "Explique la importancia del enlace de hidrógeno en la estructura del hielo y por qué esta sustancia flota en el agua líquida.",
      steps: [
        {
          t: "Estructura Cristalina",
          d: "En el hielo, cada molécula de agua forma 4 enlaces de hidrógeno, creando una estructura hexagonal abierta con mucho espacio vacío."
        },
        {
          t: "Densidad",
          d: "Debido a esta estructura 'hueca', el volumen aumenta y la densidad disminuye al congelarse."
        },
        {
          t: "Flotabilidad",
          d: "Al ser el hielo menos denso que el agua líquida (donde las moléculas están más desordenadas y juntas), este flota, permitiendo la vida acuática bajo las capas de hielo."
        }
      ],
      quiz: {
        question: "¿Por qué flota el hielo?",
        options: [
          { text: "Es menos denso que el agua líquida", correct: true },
          { text: "Es más denso", correct: false },
          { text: "Tiene burbujas de aire", correct: false },
          { text: "Por la tensión superficial", correct: false }
        ]
      }
    },
    {
      id: 11,
      category: "Sistemas Coloidales",
      title: "Membranas y Filtración",
      statement: "Identifique si la siguiente característica pertenece a una disolución, un coloide o una suspensión: 'Las partículas de esta mezcla permanecen dentro de una membrana semipermeable, pero pasan a través de filtros'.",
      steps: [
        {
          t: "Comportamiento en Filtros",
          d: "Las soluciones y los coloides pasan por filtros de papel comunes debido al pequeño tamaño de sus partículas."
        },
        {
          t: "Comportamiento en Membranas",
          d: "Solo las soluciones (partículas < 1 nm) pueden atravesar membranas semipermeables. Los <b>coloides</b> (1-1000 nm) son retenidos."
        },
        {
          t: "Conclusión",
          d: "La descripción corresponde a un <b>coloide</b>."
        }
      ],
      quiz: {
        question: "¿Qué tamaño de partícula tiene un coloide?",
        options: [
          { text: "Entre 1 nm y 1000 nm", correct: true },
          { text: "Menor a 1 nm", correct: false },
          { text: "Mayor a 1000 nm", correct: false },
          { text: "Exactamente 1 mm", correct: false }
        ]
      }
    },
    {
      id: 12,
      category: "Sistemas Coloidales",
      title: "Enzimas y Clasificación",
      statement: "Las enzimas son proteínas que catalizan reacciones en las células. Si una mezcla acuosa de enzimas no puede atravesar la pared celular, ¿se clasifica como disolución o coloide?",
      steps: [
        {
          t: "Tamaño de las Enzimas",
          d: "Las proteínas son macromoléculas de gran tamaño, situándose en el rango coloidal."
        },
        {
          t: "Interacción con Membranas",
          d: "Como no pueden atravesar la pared celular (que actúa como membrana semipermeable), se comportan como partículas coloidales."
        },
        {
          t: "Conclusión",
          d: "Se clasifica como un <b>coloide</b> (específicamente un coloide molecular)."
        }
      ],
      quiz: {
        question: "¿Pueden los coloides atravesar paredes celulares?",
        options: [
          { text: "Generalmente no", correct: true },
          { text: "Sí, siempre", correct: false },
          { text: "Solo si hay presión", correct: false },
          { text: "Depende de la luz", correct: false }
        ]
      }
    },
    {
      id: 13,
      category: "Sistemas Coloidales",
      title: "Tipos de Coloides",
      statement: "Clasifique los siguientes sistemas según su tipo (aerosol, espuma, emulsión, etc.): a) Niebla, b) Nubes, c) Crema de afeitar, d) Mayonesa.",
      steps: [
        {
          t: "a) Niebla y b) Nubes",
          d: "Son <b>aerosoles líquidos</b> (líquido disperso en un gas)."
        },
        {
          t: "c) Crema de afeitar",
          d: "Es una <b>espuma</b> (gas disperso en un líquido)."
        },
        {
          t: "d) Mayonesa",
          d: "Es una <b>emulsión</b> (líquido disperso en otro líquido, como aceite en agua)."
        }
      ],
      quiz: {
        question: "¿Qué es una emulsión?",
        options: [
          { text: "Líquido en líquido", correct: true },
          { text: "Gas en líquido", correct: false },
          { text: "Sólido en gas", correct: false },
          { text: "Líquido en gas", correct: false }
        ]
      }
    },
    {
      id: 14,
      category: "Sistemas Coloidales",
      title: "Estabilización con Jabón",
      statement: "Explique cómo un jabón (como el estearato de sodio) estabiliza una dispersión coloidal de gotas de aceite en agua.",
      steps: [
        {
          t: "Estructura del Jabón",
          d: "Tiene una cabeza polar (hidrofílica) y una cola no polar (hidrofóbica)."
        },
        {
          t: "Formación de Micelas",
          d: "Las colas se disuelven en la gota de aceite, mientras las cabezas quedan hacia afuera, en contacto con el agua."
        },
        {
          t: "Repulsión Electrostática",
          d: "Las cabezas cargadas negativamente hacen que las gotas de aceite se repelan entre sí, evitando que coalezcan (se junten) y se separen del agua."
        }
      ],
      quiz: {
        question: "¿Cómo se llama la estructura que forma el jabón?",
        options: [
          { text: "Micela", correct: true },
          { text: "Cristal", correct: false },
          { text: "Polímero", correct: false },
          { text: "Isótopo", correct: false }
        ]
      }
    },
    {
      id: 15,
      category: "Sistemas Coloidales",
      title: "Efecto Tyndall",
      statement: "Describa cómo se puede distinguir una disolución verdadera de un sistema coloidal utilizando un haz de luz.",
      steps: [
        {
          t: "Fenómeno",
          d: "El <b>Efecto Tyndall</b> consiste en la dispersión de la luz por las partículas coloidales."
        },
        {
          t: "En Soluciones",
          d: "La luz pasa a través de una solución verdadera sin ser dispersada (el haz no es visible desde el costado)."
        },
        {
          t: "En Coloides",
          d: "Debido al tamaño de las partículas, estas reflejan la luz en múltiples direcciones, haciendo que el camino del haz sea visible."
        }
      ],
      quiz: {
        question: "¿Qué efecto permite ver el haz de luz en un coloide?",
        options: [
          { text: "Efecto Tyndall", correct: true },
          { text: "Efecto Doppler", correct: false },
          { text: "Efecto Fotoeléctrico", correct: false },
          { text: "Efecto Invernadero", correct: false }
        ]
      }
    },
    {
      id: 16,
      category: "Sistemas Coloidales",
      title: "Hidrofílicos vs Hidrofóbicos",
      statement: "Indique si la hemoglobina en la sangre y las partículas de oro coloidal en agua son coloides hidrofílicos o hidrofóbicos.",
      steps: [
        {
          t: "Hemoglobina",
          d: "Es una proteína que interactúa fuertemente con el agua mediante grupos polares en su superficie. Es un <b>coloide hidrofílico</b>."
        },
        {
          t: "Oro Coloidal",
          d: "Los metales no tienen afinidad natural por el agua. Necesitan ser estabilizados por cargas superficiales. Es un <b>coloide hidrofóbico</b>."
        }
      ],
      quiz: {
        question: "¿Qué caracteriza a un coloide hidrofílico?",
        options: [
          { text: "Afinidad por el agua", correct: true },
          { text: "Repulsión al agua", correct: false },
          { text: "Solo existe en vacío", correct: false },
          { text: "Es siempre metálico", correct: false }
        ]
      }
    },
    {
      id: 17,
      category: "Sistemas Coloidales",
      title: "Sedimentación",
      statement: "¿Qué tipo de mezcla (solución, coloide o suspensión) tiene partículas tan grandes que se asientan al quedarse la mezcla quieta?",
      steps: [
        {
          t: "Análisis de Tamaños",
          d: "Solución (< 1 nm): Nunca asienta.<br/>Coloide (1-1000 nm): El movimiento browniano evita la sedimentación."
        },
        {
          t: "Suspensión",
          d: "Tiene partículas > 1000 nm visibles al microscopio o a simple vista. La gravedad vence a las fuerzas de dispersión."
        },
        {
          t: "Conclusión",
          d: "La mezcla es una <b>suspensión</b>."
        }
      ],
      quiz: {
        question: "¿Qué evita que los coloides sedimenten?",
        options: [
          { text: "Movimiento Browniano", correct: true },
          { text: "La luz solar", correct: false },
          { text: "La presión atmosférica", correct: false },
          { text: "La evaporación", correct: false }
        ]
      }
    },
    {
      id: 18,
      category: "Aplicación Clínica",
      title: "Proceso de Diálisis",
      statement: "Explique el proceso de diálisis y cómo se utiliza para separar partículas coloidales de solutos en disolución.",
      steps: [
        {
          t: "Mecanismo",
          d: "Se utiliza una membrana con poros que permiten el paso de iones y moléculas pequeñas (solutos), pero bloquean partículas grandes (coloides)."
        },
        {
          t: "Aplicación",
          d: "En medicina, la hemodiálisis limpia la sangre de toxinas (solutos pequeños) mientras retiene las proteínas y células (coloides/suspensiones) necesarias."
        }
      ],
      quiz: {
        question: "¿Qué separa la diálisis?",
        options: [
          { text: "Coloides de cristaloides (solutos)", correct: true },
          { text: "Líquidos de gases", correct: false },
          { text: "Isótopos", correct: false },
          { text: "Ácidos de bases", correct: false }
        ]
      }
    },
    {
      id: 19,
      category: "Sistemas Coloidales",
      title: "Transición Sol-Gel",
      statement: "Defina microscópicamente qué ocurre cuando un sistema coloidal pasa de un estado 'Sol' (fluido) a un estado 'Gel' (semisólido).",
      steps: [
        {
          t: "Estado Sol",
          d: "Las partículas coloidales están dispersas y se mueven libremente en el medio líquido."
        },
        {
          t: "Transición",
          d: "Se forman interconexiones o una red tridimensional de partículas que atrapa el medio líquido en su interior."
        },
        {
          t: "Estado Gel",
          d: "La mezcla adquiere rigidez y elasticidad comportándose como un sólido elástico, aunque contiene mayoritariamente líquido."
        }
      ],
      quiz: {
        question: "¿Qué es un Gel?",
        options: [
          { text: "Líquido atrapado en una red sólida", correct: true },
          { text: "Sólido disuelto en gas", correct: false },
          { text: "Gas atrapado en líquido", correct: false },
          { text: "Pura agua sólida", correct: false }
        ]
      }
    },
    {
      id: 20,
      category: "Sistemas Coloidales",
      title: "Comportamiento Térmico: Geles",
      statement: "¿Qué tipo de enlaces o fuerzas intermoleculares se rompen al calentar un gel termorreversible para que vuelva a comportarse como un sol? Compare esto con el caso de un depilador químico donde se rompen enlaces disulfuro.",
      steps: [
        {
          t: "Geles Termorreversibles",
          d: "La red se mantiene por fuerzas débiles como <b>puentes de hidrógeno</b> o fuerzas de Van der Waals. El calor aporta energía suficiente para romper estas atracciones sin alterar la estructura química."
        },
        {
          t: "Depilación Química",
          d: "Es un proceso <b>químico irreversible</b>. Se rompen enlaces covalentes disulfuro mediante agentes reductores, destruyendo la estructura de la queratina."
        },
        {
          t: "Comparación",
          d: "El primero es un cambio físico (intermolecular), el segundo es una reacción química (intramolecular)."
        }
      ],
      quiz: {
        question: "¿Qué tipo de proceso es la ruptura de enlaces disulfuro?",
        options: [
          { text: "Químico irreversible", correct: true },
          { text: "Físico reversible", correct: false },
          { text: "Sólo térmico", correct: false },
          { text: "Sublimación", correct: false }
        ]
      }
    }
  ]
};
