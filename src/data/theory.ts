import type { TheoryEntry } from '../types';

export const theoryData: Record<string, TheoryEntry> = {
  Atoms: {
    title: 'Estructura Atómica y Partículas Subatómicas',
    content: `
            <h3>El Átomo</h3>
            <p>Unidad básica de un elemento que puede intervenir en una combinación química. Está formado por partículas subatómicas:</p>
            <ul>
                <li><b>Protones (p<sup>+</sup>):</b> Partículas con carga positiva localizadas en el núcleo. El número de protones es el <b>Número Atómico (Z)</b>.</li>
                <li><b>Electrones (e<sup>-</sup>):</b> Partículas con carga negativa que rodean al núcleo. En un átomo neutro, p<sup>+</sup> = e<sup>-</sup>.</li>
                <li><b>Neutrones (n<sup>0</sup>):</b> Partículas sin carga en el núcleo. Contribuyen a la estabilidad nuclear.</li>
            </ul>
            <h3>Número Másico (A)</h3>
            <p>Es la suma total de protones y neutrones en el núcleo. <span class="math">A = Z + n<sup>0</sup></span>.</p>
            <h3>Iones</h3>
            <p>Cuando un átomo neutro gana o pierde electrones, adquiere una carga neta y se llama <b>ion</b>.</p>
            <ul>
                <li><b>Catión:</b> Ion con carga positiva (+). Se forma por la <b>pérdida</b> de uno o más electrones.</li>
                <li><b>Anión:</b> Ion con carga negativa (-). Se forma por la <b>ganancia</b> de uno o más electrones.</li>
            </ul>
            <h3>Isótopos</h3>
            <p>Átomos que tienen el mismo número atómico (Z) pero diferente número de masa (A). Esto significa que tienen el mismo número de protones pero <b>diferente número de neutrones</b>.</p>
            `,
    svg: `<svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="rgba(52, 152, 219, 0.1)" stroke="#3498db" stroke-dasharray="5,5" />
                <circle cx="100" cy="100" r="20" fill="#e74c3c" />
                <text x="100" y="105" font-size="10" text-anchor="middle" fill="white">Núcleo</text>
                <circle cx="60" cy="60" r="6" fill="#2c3e50" />
                <text x="60" y="55" font-size="10" text-anchor="middle">e-</text>
                <text x="100" y="195" font-size="12" text-anchor="middle">Átomo de Bohr</text>
            </svg>`,
  },
  Mass: {
    title: 'Concepto de Mol y Masa Atómica',
    content: `
            <h3>El Mol</h3>
            <p>Unidad del SI para la cantidad de sustancia. Contiene tantas unidades elementales (átomos, moléculas) como átomos hay en 12 g de C-12.</p>
            <h3>Constante de Avogadro (N<sub>A</sub>)</h3>
            <p>Es el número de partículas en un mol: <span class="math">6,022 × 10<sup>23</sup></span> partículas/mol.</p>
            <h3>Masa Molar (M)</h3>
            <p>Es la masa (en gramos) de un mol de unidades de una sustancia. Se expresa en <b>g/mol</b>. Es numéricamente igual a la masa atómica en uma.</p>
            <h3>Masa Atómica Promedio</h3>
            <p>Es el promedio de las masas de los isótopos naturales de un elemento, ponderado según su abundancia relativa en la naturaleza.</p>
            <h3>Moléculas Diatómicas</h3>
            <p>Elementos que en la naturaleza se encuentran unidos de a dos átomos (ej. O<sub>2</sub>, H<sub>2</sub>, Cl<sub>2</sub>). Al calcular masas moleculares, debe multiplicarse la masa atómica por dos.</p>
            `,
    svg: `<svg width="200" height="120" viewBox="0 0 200 120">
                <rect x="20" y="20" width="160" height="80" rx="10" fill="#ecf0f1" stroke="#2c3e50" />
                <text x="100" y="50" font-size="14" text-anchor="middle" font-weight="bold">1 mol</text>
                <text x="100" y="75" font-size="12" text-anchor="middle">= 6.022 × 10²³ part.</text>
                <text x="100" y="95" font-size="12" text-anchor="middle">= Masa Molar (g)</text>
            </svg>`,
  },
  Config: {
    title: 'Configuración Electrónica',
    content: `
            <h3>Niveles y Subniveles</h3>
            <p>Los electrones se distribuyen en niveles de energía (n=1, 2, 3...) y subniveles (s, p, d, f).</p>
            <ul>
                <li><b>Capacidades:</b> s: 2e<sup>-</sup>, p: 6e<sup>-</sup>, d: 10e<sup>-</sup>, f: 14e<sup>-</sup>.</li>
            </ul>
            <h3>Principios de Ordenamiento</h3>
            <ul>
                <li><b>Principio de Aufbau:</b> Los electrones llenan primero los orbitales de menor energía.</li>
                <li><b>Principio de Exclusión de Pauli:</b> No puede haber dos electrones con los mismos números cuánticos (espines opuestos).</li>
                <li><b>Regla de Hund:</b> En subniveles con múltiples orbitales (como p), los electrones se distribuyen con espines paralelos antes de aparearse.</li>
            </ul>
            <h3>Electrones de Valencia</h3>
            <p>Son los electrones que se encuentran en el nivel de energía más alto. Determinan el comportamiento químico del elemento.</p>
            <h3>Especies Isoelectrónicas</h3>
            <p>Átomos o iones que tienen el mismo número de electrones y, por tanto, la misma configuración electrónica (ej. Na<sup>+</sup> y Ne).</p>
            `,
    svg: `<svg width="220" height="160" viewBox="0 0 220 160">
                <line x1="20" y1="140" x2="20" y2="20" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
                <text x="5" y="80" font-size="10" transform="rotate(-90 5,80)">Energía aumenta</text>
                <text x="40" y="140">1s</text><rect x="60" y="130" width="20" height="20" fill="none" stroke="#333" />
                <text x="40" y="110">2s</text><rect x="60" y="100" width="20" height="20" fill="none" stroke="#333" />
                <text x="40" y="80">2p</text>
                <rect x="60" y="70" width="20" height="20" fill="none" stroke="#333" />
                <rect x="82" y="70" width="20" height="20" fill="none" stroke="#333" />
                <rect x="104" y="70" width="20" height="20" fill="none" stroke="#333" />
            </svg>`,
  },
  Trends: {
    title: 'Propiedades Periódicas',
    content: `
            <h3>Radio Atómico</h3>
            <p>Distancia entre el núcleo y el electrón más externo. <b>Aumenta hacia abajo</b> (más niveles) y <b>hacia la izquierda</b> (menor carga nuclear efectiva).</p>
            <h3>Radio Iónico</h3>
            <p>Tamaño de un ion. Los cationes son más pequeños que sus átomos neutros. Los aniones son más grandes debido a la repulsión electrónica.</p>
            <h3>Energía de Ionización</h3>
            <p>Energía mínima necesaria para remover un electrón de un átomo gaseoso. <b>Aumenta hacia arriba y hacia la derecha</b>.</p>
            <h3>Electronegatividad</h3>
            <p>Capacidad de un átomo para atraer electrones en un enlace químico. Escala de Pauling (máximo F=4,0, mínimo Fr=0,7).</p>
            <h3>Carácter Metálico</h3>
            <p>Tendencia a perder electrones. Aumenta hacia la izquierda y hacia abajo en la tabla.</p>
            `,
    svg: `<svg width="250" height="150" viewBox="0 0 250 150">
                <rect x="50" y="30" width="150" height="80" fill="#f9f9f9" stroke="#333" />
                <line x1="30" y1="120" x2="220" y2="120" stroke="blue" stroke-width="2" marker-end="url(#arrow)" />
                <text x="125" y="135" font-size="10" text-anchor="middle" fill="blue">Radio Atómico aumenta</text>
                <line x1="220" y1="110" x2="220" y2="20" stroke="red" stroke-width="2" marker-end="url(#arrow)" />
                <text x="235" y="65" font-size="10" transform="rotate(-90 235,65)" fill="red">Electronegatividad aumenta</text>
            </svg>`,
  },
  Bonds: {
    title: 'Enlaces Químicos y Estructura de Lewis',
    content: `
            <h3>Tipos de Enlace</h3>
            <ul>
                <li><b>Iónico:</b> Transferencia de electrones. Generalmente entre un metal (baja EN) y un no metal (alta EN). ΔEN > 1,7.</li>
                <li><b>Covalente:</b> Compartición de electrones entre no metales.
                    <ul>
                        <li><b>Polar:</b> Compartición desigual (0,5 < ΔEN < 1,7).</li>
                        <li><b>No Polar:</b> Compartición igual (ΔEN < 0,5).</li>
                    </ul>
                </li>
                <li><b>Metálico:</b> Átomos metálicos rodeados por un "mar" de electrones libres.</li>
            </ul>
            <h3>Estructura de Lewis</h3>
            <p>Representación de los electrones de valencia como puntos. Los átomos tienden a rodearse de 8 electrones para alcanzar estabilidad (<b>Regla del Octeto</b>), excepto el Hidrógeno que busca 2 (Dueto).</p>
            <h3>Pares de Electrones</h3>
            <ul>
                <li><b>Enlazantes:</b> Los que forman el enlace químico.</li>
                <li><b>No enlazantes (libres):</b> Pares de electrones externos que no participan en el enlace.</li>
            </ul>
            `,
    svg: `<svg width="200" height="100" viewBox="0 0 200 100">
                <circle cx="70" cy="50" r="25" fill="none" stroke="#3498db" />
                <circle cx="130" cy="50" r="25" fill="none" stroke="#3498db" />
                <circle cx="95" cy="50" r="4" fill="#f39c12" />
                <circle cx="105" cy="50" r="4" fill="#f39c12" />
                <text x="100" y="90" font-size="12" text-anchor="middle">Enlace Covalente (H:H)</text>
            </svg>`,
  },
  Geometry: {
    title: 'Geometría Molecular y Polaridad',
    content: `
            <h3>Teoría RPECV (VSEPR)</h3>
            <p>Establece que los pares de electrones alrededor de un átomo central se repelen entre sí, adoptando una forma que minimice esa repulsión.</p>
            <ul>
                <li><b>Lineal:</b> 2 nubes de electrones (180°).</li>
                <li><b>Plana Trigonal:</b> 3 nubes (120°).</li>
                <li><b>Tetraédrica:</b> 4 nubes (109.5°).</li>
                <li><b>Piramidal:</b> 4 nubes (3 enlaces + 1 par libre).</li>
            </ul>
            <h3>Polaridad Molecular</h3>
            <p>Depende de la polaridad de los enlaces <b>y de la geometría</b>. Una molécula es <b>no polar</b> si es simétrica y los momentos dipolares se anulan (ej. CO<sub>2</sub>, CH<sub>4</sub>), y <b>polar</b> si es asimétrica (ej. NH<sub>3</sub>, H<sub>2</sub>O).</p>
            `,
    svg: `<svg width="200" height="150" viewBox="0 0 200 150">
                <circle cx="100" cy="75" r="10" fill="#2c3e50" />
                <line x1="100" y1="75" x2="60" y2="40" stroke="#333" />
                <line x1="100" y1="75" x2="140" y2="40" stroke="#333" />
                <line x1="100" y1="75" x2="100" y2="120" stroke="#333" />
                <circle cx="60" cy="40" r="8" fill="#3498db" />
                <circle cx="140" cy="40" r="8" fill="#3498db" />
                <circle cx="100" cy="120" r="8" fill="#3498db" />
                <text x="100" y="145" font-size="12" text-anchor="middle">Forma Trigonal</text>
            </svg>`,
  },
};
