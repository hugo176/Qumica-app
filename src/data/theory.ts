import type { TheoryEntry } from '../types';

export const theoryData: Record<string, TheoryEntry> = {
  // --- Categorías para ExerciseView (Retrocompatibilidad) ---
  Atoms: {
    title: 'Estructura Atómica y Partículas Subatómicas',
    content: `
            <h3>El Átomo</h3>
            <p>Unidad básica de un elemento que puede intervenir en una combinación química. Está formado por partículas subatómicas:</p>
            <ul>
                <li><b>Protones (p⁺):</b> Partículas con carga positiva localizadas en el núcleo. El número de protones es el <b>Número Atómico (Z)</b>.</li>
                <li><b>Electrones (e⁻):</b> Partículas con carga negativa que rodean al núcleo. En un átomo neutro, p⁺ = e⁻.</li>
                <li><b>Neutrones (n⁰):</b> Partículas sin carga en el núcleo. Contribuyen a la estabilidad nuclear.</li>
            </ul>
            <h3>Número Másico (A)</h3>
            <p>Es la suma total de protones y neutrones en el núcleo. <span class="math">A = Z + n⁰</span>.</p>
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
            </svg>`
  },
  Mass: {
    title: 'Concepto de Mol y Masa Atómica',
    content: `
            <h3>El Mol</h3>
            <p>Unidad del SI para la cantidad de sustancia. Contiene tantas unidades elementales (átomos, moléculas) como átomos hay en 12 g de C-12.</p>
            <h3>Constante de Avogadro (Nₐ)</h3>
            <p>Es el número de partículas en un mol: <span class="math">6,022 × 10²³</span> partículas/mol.</p>
            <h3>Masa Molar (M)</h3>
            <p>Es la masa (en gramos) de un mol de unidades de una sustancia. Se expresa en <b>g/mol</b>. Es numéricamente igual a la masa atómica en uma.</p>
            <h3>Masa Atómica Promedio</h3>
            <p>Es el promedio de las masas de los isótopos naturales de un elemento, ponderado según su abundancia relativa en la naturaleza.</p>
            `,
    svg: `<svg width="200" height="120" viewBox="0 0 200 120">
                <rect x="20" y="20" width="160" height="80" rx="10" fill="#ecf0f1" stroke="#2c3e50" />
                <text x="100" y="50" font-size="14" text-anchor="middle" font-weight="bold">1 mol</text>
                <text x="100" y="75" font-size="12" text-anchor="middle">= 6.022 × 10²³ part.</text>
                <text x="100" y="95" font-size="12" text-anchor="middle">= Masa Molar (g)</text>
            </svg>`
  },
  Config: {
    title: 'Configuración Electrónica',
    content: `
            <h3>Niveles y Subniveles</h3>
            <p>Los electrones se distribuyen en niveles de energía (n=1, 2, 3...) y subniveles (s, p, d, f).</p>
            <ul>
                <li><b>Capacidades:</b> s: 2e⁻, p: 6e⁻, d: 10e⁻, f: 14e⁻.</li>
            </ul>
            <h3>Principios de Ordenamiento</h3>
            <ul>
                <li><b>Principio de Aufbau:</b> Los electrones llenan primero los orbitales de menor energía.</li>
                <li><b>Principio de Exclusión de Pauli:</b> No puede haber dos electrones con los mismos números cuánticos (espines opuestos).</li>
                <li><b>Regla de Hund:</b> En subniveles con múltiples orbitales (como p), los electrones se distribuyen con espines paralelos antes de aparearse.</li>
            </ul>
            <h3>Electrones de Valencia</h3>
            <p>Son los electrones que se encuentran en el nivel de energía más alto. Determinan el comportamiento químico del elemento.</p>
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
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto"><path d="M0,0 L0,6 L9,3 z" fill="#333" /></marker>
                </defs>
            </svg>`
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
            <p>Capacidad de un átomo para atraer electrones en un enlace químico. Escala de Pauling (máximo F=3,98, mínimo Fr=0,7).</p>
            `,
    svg: `<svg width="250" height="150" viewBox="0 0 250 150">
                <rect x="50" y="30" width="150" height="80" fill="#f9f9f9" stroke="#333" />
                <line x1="30" y1="120" x2="220" y2="120" stroke="blue" stroke-width="2" marker-end="url(#arrow-blue)" />
                <text x="125" y="135" font-size="10" text-anchor="middle" fill="blue">Radio Atómico aumenta ←</text>
                <line x1="220" y1="110" x2="220" y2="20" stroke="red" stroke-width="2" marker-end="url(#arrow-red)" />
                <text x="235" y="65" font-size="10" transform="rotate(-90 235,65)" fill="red">Electronegatividad aumenta ↑</text>
                <defs>
                  <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto"><path d="M0,0 L0,6 L9,3 z" fill="blue" /></marker>
                  <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto"><path d="M0,0 L0,6 L9,3 z" fill="red" /></marker>
                </defs>
            </svg>`
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
            </ul>
            <h3>Estructura de Lewis</h3>
            <p>Representación de los electrones de valencia como puntos. Los átomos tienden a rodearse de 8 electrones para alcanzar estabilidad (<b>Regla del Octeto</b>).</p>
            `,
    svg: `<svg width="200" height="100" viewBox="0 0 200 100">
                <circle cx="70" cy="50" r="25" fill="none" stroke="#3498db" />
                <circle cx="130" cy="50" r="25" fill="none" stroke="#3498db" />
                <circle cx="95" cy="50" r="4" fill="#f39c12" />
                <circle cx="105" cy="50" r="4" fill="#f39c12" />
                <text x="100" y="90" font-size="12" text-anchor="middle">Enlace Covalente</text>
            </svg>`
  },
  Geometry: {
    title: 'Geometría Molecular (RPECV)',
    content: `
            <h3>Teoría RPECV</h3>
            <p>Establece que los pares de electrones alrededor de un átomo central se repelen entre sí, adoptando una forma que minimice esa repulsión.</p>
            <ul>
                <li><b>Lineal:</b> 2 nubes de electrones (180°). Ej: CO₂.</li>
                <li><b>Plana Trigonal:</b> 3 nubes (120°). Ej: BF₃.</li>
                <li><b>Tetraédrica:</b> 4 nubes (109.5°). Ej: CH₄.</li>
                <li><b>Piramidal:</b> 3 enlaces + 1 par libre. Ej: NH₃.</li>
                <li><b>Angular:</b> 2 enlaces + 1 o 2 pares libres. Ej: H₂O.</li>
            </ul>
            `,
    svg: `<svg width="200" height="150" viewBox="0 0 200 150">
                <circle cx="100" cy="75" r="10" fill="#2c3e50" />
                <line x1="100" y1="75" x2="60" y2="40" stroke="#333" />
                <line x1="100" y1="75" x2="140" y2="40" stroke="#333" />
                <line x1="100" y1="75" x2="100" y2="120" stroke="#333" />
                <circle cx="60" cy="40" r="8" fill="#3498db" />
                <circle cx="140" cy="40" r="8" fill="#3498db" />
                <circle cx="100" cy="120" r="8" fill="#3498db" />
                <text x="100" y="145" font-size="12" text-anchor="middle">Forma Tetraédrica (3D)</text>
            </svg>`
  },
  // --- UNIDADES PRINCIPALES (Nueva Sección de Teoría) ---

  'Unidad 2': {
    title: 'Unidad 2: Estructura Atómica y Propiedades Periódicas',
    content: `
      <h3>1. El Átomo y Partículas Subatómicas</h3>
      <p>El átomo está compuesto por un núcleo denso (protones y neutrones) y una nube electrónica (electrones).</p>
      <ul>
        <li><b>Número Atómico (Z):</b> Cantidad de protones. Define al elemento.</li>
        <li><b>Número Másico (A):</b> Protones + Neutrones. <span class="math">A = Z + n</span></li>
        <li><b>Isótopos:</b> Átomos del mismo elemento con diferente número de neutrones.</li>
      </ul>

      <h3>2. Configuración Electrónica</h3>
      <p>Distribución de electrones en niveles y subniveles de energía siguiendo el <b>Principio de Aufbau</b>, <b>Exclusión de Pauli</b> y <b>Regla de Hund</b>.</p>
      <p>Los <b>electrones de valencia</b> son los más externos y determinan la reactividad química.</p>

      <h3>3. Propiedades Periódicas</h3>
      <p>Tendencias en la tabla periódica:</p>
      <ul>
        <li><b>Radio Atómico:</b> Aumenta hacia abajo y hacia la izquierda.</li>
        <li><b>Energía de Ionización:</b> Energía para quitar un electrón. Aumenta hacia arriba y la derecha.</li>
        <li><b>Electronegatividad:</b> Tendencia a atraer electrones en un enlace.</li>
      </ul>

      <h3>4. Enlace Químico y Geometría</h3>
      <ul>
        <li><b>Iónico:</b> Transferencia de electrones entre metal y no metal.</li>
        <li><b>Covalente:</b> Compartición de electrones entre no metales.</li>
        <li><b>Geometría (RPECV):</b> La forma de la molécula depende de la repulsión de los pares de electrones (Lineal, Angular, Tetraédrica, etc.).</li>
      </ul>
    `,
    svg: `
      <svg width="300" height="200" viewBox="0 0 300 200">
        <!-- Átomo central -->
        <circle cx="150" cy="100" r="15" fill="#ef4444" />
        <text x="150" y="105" text-anchor="middle" fill="white" font-size="8">Núcleo</text>
        <!-- Orbitales -->
        <ellipse cx="150" cy="100" rx="60" ry="25" fill="none" stroke="#3b82f6" stroke-width="1" />
        <ellipse cx="150" cy="100" rx="25" ry="60" fill="none" stroke="#3b82f6" stroke-width="1" />
        <circle cx="100" cy="85" r="4" fill="#1e293b" />
        <circle cx="170" cy="145" r="4" fill="#1e293b" />
        <!-- Flechas de propiedades -->
        <line x1="20" y1="180" x2="280" y2="180" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" />
        <text x="150" y="195" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">Radio Atómico aumenta ←</text>
        <line x1="280" y1="160" x2="280" y2="20" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-orange)" />
        <text x="270" y="90" transform="rotate(-90, 270, 90)" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Electronegatividad ↑</text>
        <defs>
          <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
          <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>
    `
  },

  'Unidad 3': {
    title: 'Unidad 3: Estequiometría y Relaciones de Masa',
    content: `
      <h3>1. Mol y Masa Molar</h3>
      <p>Un <b>Mol</b> es la unidad que representa <span class="math">6,022 × 10<sup>23</sup></span> partículas (Número de Avogadro).</p>
      <p>La <b>Masa Molar (M)</b> es la masa en gramos de un mol de sustancia (g/mol).</p>

      <h3>2. Composición y Fórmulas</h3>
      <ul>
        <li><b>Composición Porcentual:</b> Porcentaje en masa de cada elemento en un compuesto.</li>
        <li><b>Fórmula Empírica:</b> Relación más simple de números enteros de los átomos en un compuesto.</li>
        <li><b>Fórmula Molecular:</b> Indica el número real de átomos de cada elemento en una molécula.</li>
      </ul>

      <h3>3. Reacciones Químicas y Estequiometría</h3>
      <p>Para realizar cálculos, la ecuación química debe estar <b>balanceada</b> (Ley de Conservación de la Masa).</p>
      <ul>
        <li><b>Reactivo Limitante:</b> El reactivo que se consume primero y limita la cantidad de producto formado.</li>
        <li><b>Rendimiento Teórico:</b> Cantidad máxima de producto que se puede obtener.</li>
        <li><b>Rendimiento Porcentual:</b> <span class="math">(Real / Teórico) × 100</span></li>
      </ul>
    `,
    svg: `
      <svg width="300" height="150" viewBox="0 0 300 150">
        <rect x="20" y="20" width="80" height="40" rx="5" fill="#dbeafe" stroke="#2563eb" />
        <text x="60" y="45" text-anchor="middle" font-weight="bold" fill="#1e40af">Gramos</text>
        
        <line x1="100" y1="40" x2="140" y2="40" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
        <text x="120" y="35" text-anchor="middle" font-size="8" fill="#64748b">÷ Masa Molar</text>

        <rect x="140" y="20" width="80" height="40" rx="5" fill="#dcfce7" stroke="#16a34a" />
        <text x="180" y="45" text-anchor="middle" font-weight="bold" fill="#166534">Moles</text>

        <line x1="220" y1="40" x2="260" y2="40" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
        <text x="240" y="35" text-anchor="middle" font-size="8" fill="#64748b">× N. Avogadro</text>

        <rect x="180" y="90" width="100" height="40" rx="5" fill="#fef3c7" stroke="#d97706" />
        <text x="230" y="115" text-anchor="middle" font-weight="bold" fill="#92400e">Partículas</text>
        
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
          </marker>
        </defs>
      </svg>
    `
  },

  'Unidad 4': {
    title: 'Unidad 4: Fuerzas Intermoleculares y Soluciones',
    content: `
      <h3>1. Fuerzas Intermoleculares</h3>
      <p>Fuerzas de atracción entre moléculas. Determinan propiedades como el punto de ebullición.</p>
      <ul>
        <li><b>Dispersión (London):</b> En todas las moléculas. Única en no polares.</li>
        <li><b>Dipolo-Dipolo:</b> Entre moléculas polares.</li>
        <li><b>Puente de Hidrógeno:</b> Caso especial fuerte (H unido a N, O o F).</li>
        <li><b>Ion-Dipolo:</b> Entre un ion y una molécula polar (clave en disoluciones).</li>
      </ul>

      <h3>2. Soluciones y Concentración</h3>
      <p>Mezcla homogénea de <b>Soluto</b> (menor cantidad) y <b>Solvente</b> (mayor cantidad).</p>
      <ul>
        <li><b>% m/m:</b> (g soluto / g solución) × 100</li>
        <li><b>Molaridad (M):</b> Moles de soluto / Litros de solución.</li>
        <li><b>Molalidad (m):</b> Moles de soluto / kg de solvente.</li>
      </ul>

      <h3>3. Diluciones</h3>
      <p>Proceso de reducir la concentración agregando más solvente. La cantidad de soluto permanece constante:</p>
      <p><span class="math">M<sub>1</sub> × V<sub>1</sub> = M<sub>2</sub> × V<sub>2</sub></span></p>
    `,
    svg: `
      <svg width="300" height="180" viewBox="0 0 300 180">
        <!-- Vaso de precipitados -->
        <path d="M50,40 L50,140 Q50,150 60,150 L120,150 Q130,150 130,140 L130,40" fill="none" stroke="#64748b" stroke-width="2" />
        <rect x="50" y="80" width="80" height="70" fill="#bfdbfe" opacity="0.5" />
        <text x="90" y="115" text-anchor="middle" font-size="10" fill="#1e40af">Solución</text>
        
        <!-- Puntos de soluto -->
        <circle cx="70" cy="100" r="3" fill="#ef4444" />
        <circle cx="110" cy="130" r="3" fill="#ef4444" />
        <circle cx="85" cy="140" r="3" fill="#ef4444" />
        
        <!-- Cuadro de fuerzas -->
        <rect x="160" y="40" width="120" height="110" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="220" y="60" text-anchor="middle" font-size="12" font-weight="bold">Fuerzas</text>
        <text x="170" y="85" font-size="10">1. London</text>
        <text x="170" y="105" font-size="10">2. Dipolo-Dipolo</text>
        <text x="170" y="125" font-size="10">3. Puente H</text>
        <line x1="170" y1="130" x2="270" y2="130" stroke="#3b82f6" stroke-dasharray="2" />
      </svg>
    `
  },

  'Unidad 5': {
    title: 'Unidad 5: Redox y Equilibrio Ácido-Base',
    content: `
      <h3>1. Reacciones Redox</h3>
      <ul>
        <li><b>Oxidación:</b> Pérdida de electrones (aumento del número de oxidación).</li>
        <li><b>Reducción:</b> Ganancia de electrones (disminución del número de oxidación).</li>
        <li><b>Agente Oxidante:</b> Se reduce (provoca la oxidación).</li>
        <li><b>Agente Reductor:</b> Se oxida (provoca la reducción).</li>
      </ul>
      <p><b>Balanceo Ion-Electrón:</b> Se dividen en hemirreacciones y se balancean átomos y cargas.</p>

      <h3>2. Ácidos y Bases</h3>
      <ul>
        <li><b>Teoría Brönsted-Lowry:</b> Ácido dona H<sup>+</sup>, Base acepta H<sup>+</sup>.</li>
        <li><b>Autoionización del Agua:</b> <span class="math">K<sub>w</sub> = [H<sup>+</sup>][OH<sup>-</sup>] = 10<sup>-14</sup></span></li>
        <li><b>pH:</b> <span class="math">-log[H<sup>+</sup>]</span>. Escala de 0 (ácido) a 14 (básico).</li>
      </ul>

      <h3>3. Sistemas Buffer (Tampón)</h3>
      <p>Soluciones que resisten cambios bruscos de pH. Compuestas por un ácido/base débil y su sal conjugada.</p>
    `,
    svg: `
      <svg width="300" height="150" viewBox="0 0 300 150">
        <!-- Escala de pH -->
        <linearGradient id="phGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444" />
          <stop offset="50%" stop-color="#fde047" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <rect x="20" y="60" width="260" height="20" rx="10" fill="url(#phGradient)" />
        <text x="25" y="55" font-size="10" font-weight="bold">0 (Ácido)</text>
        <text x="150" y="55" text-anchor="middle" font-size="10" font-weight="bold">7 (Neutro)</text>
        <text x="275" y="55" text-anchor="end" font-size="10" font-weight="bold">14 (Básico)</text>
        
        <!-- Redox box -->
        <rect x="50" y="100" width="200" height="40" rx="5" fill="#f1f5f9" stroke="#94a3b8" />
        <text x="150" y="118" text-anchor="middle" font-size="10" font-weight="bold">REDOX</text>
        <text x="60" y="135" font-size="8">Ox: Pierde e- ↑</text>
        <text x="240" y="135" text-anchor="end" font-size="8">Red: Gana e- ↓</text>
      </svg>
    `
  }
};
