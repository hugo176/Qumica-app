import type { TheoryEntry } from '../types';

// --- DEFINICIONES DE UNIDADES ---

const unidad2: TheoryEntry = {
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
};

const unidad3: TheoryEntry = {
  title: 'Unidad 3: Estequiometría y Composición de Sustancias',
  content: `
      <h3><b>1. El Mol y el Número de Avogadro</b></h3><br>
      <p>El <b>mol</b> es la unidad del Sistema Internacional para medir la cantidad de una sustancia. Un mol de cualquier sustancia contiene exactamente <b>6,02214076 × 10²³</b> entidades elementales (átomos, moléculas, iones, etc.). Este valor es la <b>Constante de Avogadro (Nₐ)</b>.</p>
      
      <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 my-4">
        <p class="text-sm"><b>Relación fundamental:</b> 1 mol = 6,022 × 10²³ partículas</p>
      </div>

      <h3><b>2. Masa Molar (M)</b></h3>
      <br>
      <p>Es la masa (en gramos) de <b>un mol</b> de unidades de una sustancia. Se expresa en <b>g/mol</b>. Es numéricamente igual a la masa atómica o masa molecular expresada en unidades de masa atómica (uma).</p>
      <ul>
        <li>Para un elemento: 1 mol de Fe = 55,85 g.</li>
        <li>Para un compuesto: La masa molar es la suma de las masas atómicas de los elementos multiplicadas por sus subíndices.</li>
      </ul>

      <h3><b>3. Composición Centesimal (Porcentual)</b></h3><br>
      <p>Es el porcentaje en masa de cada elemento presente en un compuesto. Se calcula dividiendo la masa total del elemento por la masa molar del compuesto y multiplicando por 100.</p>
      
      <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4 italic">
        <p class="text-sm"><b>Fórmula:</b> % Elemento = [(átomos del elemento × masa atómica) / masa molar del compuesto] × 100</p>
      </div>

      <h3><b>4. Fórmulas Mínima y Molecular</b></h3><br>
      <ul>
        <li><b>Fórmula Mínima (Empírica):</b> Indica la relación de números enteros más sencilla entre los átomos de un compuesto.</li>
        <li><b>Fórmula Molecular:</b> Indica el número real de átomos de cada elemento en una molécula. Es un múltiplo entero de la fórmula mínima.</li>
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
};

const unidad4: TheoryEntry = {
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
};

const unidad5: TheoryEntry = {
  title: 'Unidad 5: Redox y Equilibrio Ácido-Base',
  content: `
      <h3>1. Identificación de Enlaces (Iónico vs. Covalente)</h3>
      <p>Para determinar el tipo de interacción predominante en una sustancia, seguimos estos criterios fundamentales:</p>
      
      <div class="space-y-4 my-4">
        <div class="p-3 bg-slate-50 border-l-4 border-blue-500 rounded">
          <p class="text-sm"><b>Criterio 1: Naturaleza de los elementos</b></p>
          <ul class="text-xs mt-1">
            <li>• <b>Metal + No Metal:</b> Tiende a ser <b>Iónico</b> (ej. NaCl).</li>
            <li>• <b>No Metal + No Metal:</b> Tiende a ser <b>Covalente</b> (ej. CO₂).</li>
          </ul>
        </div>

        <div class="p-3 bg-slate-50 border-l-4 border-emerald-500 rounded">
          <p class="text-sm"><b>Criterio 2: Diferencia de Electronegatividad (ΔEN)</b></p>
          <ul class="text-xs mt-1">
            <li>• <b>ΔEN > 1.7:</b> Enlace <b>Iónico</b> (Transferencia de electrones).</li>
            <li>• <b>ΔEN < 1.7:</b> Enlace <b>Covalente</b> (Compartición de electrones).</li>
          </ul>
        </div>
      </div>

      <p class="text-sm"><b>Procedimiento práctico:</b><br>
      1. Busca los valores de EN en la Tabla Periódica.<br>
      2. Resta el valor menor del mayor (ΔEN = EN₁ - EN₂).<br>
      3. Si el resultado es mayor a 1.7, trátalo como un compuesto iónico (formado por cationes y aniones).</p>

      <h3>2. Reacciones Redox</h3>
      <ul>
        <li><b>Oxidación:</b> Pérdida de electrones (aumento del número de oxidación).</li>
        <li><b>Reducción:</b> Ganancia de electrones (disminución del número de oxidación).</li>
        <li><b>Agente Oxidante:</b> Se reduce (provoca la oxidación).</li>
        <li><b>Agente Reductor:</b> Se oxida (provoca la reducción).</li>
      </ul>
      <p><b>Balanceo Ion-Electrón:</b> Se dividen en hemirreacciones y se balancean átomos y cargas.</p>

      <h3>3. Ácidos y Bases</h3>
      <ul>
        <li><b>Teoría Brönsted-Lowry:</b> Ácido dona H<sup>+</sup>, Base acepta H<sup>+</sup>.</li>
        <li><b>Autoionización del Agua:</b> <span class="math">K<sub>w</sub> = [H<sup>+</sup>][OH<sup>-</sup>] = 10<sup>-14</sup></span></li>
        <li><b>pH:</b> <span class="math">-log[H<sup>+</sup>]</span>. Escala de 0 (ácido) a 14 (básico).</li>
      </ul>

      <h3>4. Sistemas Buffer (Tampón)</h3>
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
};

const repasoParcial1: TheoryEntry = {
  title: 'Repaso Parcial N° 1',
  content: `
      <h3>1. Propiedades de la Materia</h3>
      <p><b>Densidad (δ):</b> Es la relación entre la masa y el volumen de una sustancia (<span class="math">δ = m/V</span>).</p>
      <ul>
        <li><b>Propiedades Intensivas:</b> No dependen de la cantidad de materia (ej. Densidad, Punto de fusión). Son características de cada sustancia.</li>
        <li><b>Propiedades Extensivas:</b> Dependen de la cantidad de materia (ej. Masa, Volumen).</li>
      </ul>

      <h3>2. Estructura Atómica e Isótopos</h3>
      <ul>
        <li><b>Z (Número Atómico):</b> Cantidad de protones. Identifica al elemento.</li>
        <li><b>A (Número Másico):</b> Protones + Neutrones.</li>
        <li><b>Isótopos:</b> Átomos con igual Z pero diferente A (varían en neutrones).</li>
        <li><b>Masa Atómica Promedio:</b> Se calcula como el promedio ponderado de las masas de los isótopos: 
            <br/><span class="math">Masa = (A₁ × %₁) + (A₂ × %₂) + ... / 100</span></li>
        <li><b>Iones:</b> 
            <br/>• <b>Catión (+):</b> Pierde electrones (e⁻ = Z - carga).
            <br/>• <b>Anión (-):</b> Gana electrones (e⁻ = Z + carga).
        </li>
      </ul>

      <h3>3. Estequiometría</h3>
      <ul>
        <li><b>Fórmula Mínima:</b> Relación más simple de átomos en un compuesto.</li>
        <li><b>Fórmula Molecular:</b> Cantidad real de átomos. Es un múltiplo de la mínima.</li>
        <li><b>Reactivo Limitante:</b> El reactivo que se consume totalmente en una reacción y determina la cantidad máxima de producto que se puede formar.</li>
        <li><b>Combustión Completa:</b> <span class="math">Compuesto Orgánico + O₂ → CO₂ + H₂O</span></li>
      </ul>

      <h3>4. Reacciones Redox</h3>
      <ul>
        <li><b>Estado de Oxidación (EO):</b> Carga aparente de un átomo.
            <br/>• Elementos libres = 0.
            <br/>• Oxígeno = -2 (excepto peróxidos).
            <br/>• Hidrógeno = +1 (excepto hidruros metálicos).
        </li>
        <li><b>Agente Oxidante:</b> Se reduce (gana e⁻), su EO disminuye.</li>
        <li><b>Agente Reductor:</b> Se oxida (pierde e⁻), su EO aumenta.</li>
        <li><b>Peso Equivalente (Oxidante/Reductor):</b> Masa Molar / electrones transferidos por mol de sustancia.</li>
      </ul>
    `,
  svg: `
      <svg width="300" height="180" viewBox="0 0 300 180">
        <!-- Balanza para Densidad -->
        <rect x="20" y="140" width="60" height="10" fill="#94a3b8" />
        <rect x="35" y="110" width="30" height="30" fill="#3b82f6" opacity="0.7" />
        <text x="50" y="100" text-anchor="middle" font-size="8" font-weight="bold">Densidad</text>

        <!-- Átomo para Estructura -->
        <circle cx="150" cy="80" r="15" fill="#ef4444" />
        <circle cx="150" cy="80" r="40" fill="none" stroke="#3b82f6" stroke-dasharray="4" />
        <circle cx="120" cy="55" r="4" fill="#1e293b" />
        <text x="150" y="135" text-anchor="middle" font-size="8" font-weight="bold">Átomo (Z, A)</text>

        <!-- Reacción para Estequiometría/Redox -->
        <path d="M220,100 L280,100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" />
        <text x="250" y="90" text-anchor="middle" font-size="8" font-weight="bold">Reacción</text>
        <text x="250" y="120" text-anchor="middle" font-size="8" fill="#10b981">RL y Redox</text>

        <defs>
          <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orientation="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
        </defs>
      </svg>
    `
};

// --- EXPORTACIÓN DE DATOS ---

export const theoryData: Record<string, TheoryEntry> = {
  // --- Repaso Parcial ---
  'Repaso parcial N° 1': repasoParcial1,
  Atoms: {
    title: 'Estructura Atómica y Partículas Subatómicas',
    content: `
            <h3>El Átomo</h3>
            <p>Unidad básica de un elemento que puede intervenir en una combinación química. Está formado por partículas subatómicas:</p>
            <ul>
                <li><b>Protones (p⁺):</b> Partículas con carga positiva localizadas en el núcleo. El número de protones es el <b>Número Atómico (Z)</b>.</li>
                <li><b>Electrones (e⁻):</b> Partículas con carga negativa que rodean al núcleo. En un átomo neutro, <b>p⁺ = e⁻</b>.</li>
                <li><b>Neutrones (n⁰):</b> Partículas sin carga en el núcleo. Contribuyen a la estabilidad nuclear.</li>
            </ul>
            <h3>Número Másico (A)</h3>
            <p>Es la suma total de protones y neutrones en el núcleo. Se expresa con la fórmula <b>A = Z + n⁰</b>.</p>
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
            <p>Unidad del SI para la cantidad de sustancia. Un <b>Mol</b> contiene tantas unidades elementales (átomos, moléculas) como átomos hay en exactamente 12 g de Carbono-12.</p>
            <h3>Constante de Avogadro (Nₐ)</h3>
            <p>Es el número de partículas en un mol: <b>6,022 × 10²³ partículas/mol</b>.</p>
            <h3>Masa Molar (M)</h3>
            <p>Es la masa (en gramos) de un mol de unidades de una sustancia. Se expresa en <b>g/mol</b>. Es numéricamente igual a la masa atómica o molecular expresada en unidades de masa atómica (uma).</p>
            <h3>Masa Atómica Promedio</h3>
            <p>La mayoría de los elementos existen en la naturaleza como una mezcla de varios isótopos. La masa atómica que figura en la tabla es un <b>promedio ponderado</b> de las masas de sus isótopos naturales, considerando su abundancia relativa.</p>
            <h3>Masa Molecular</h3>
            <p>Suma de las masas atómicas de los elementos que forman una molécula. Para compuestos diatómicos como el O₂, la masa molar es el doble de la atómica.</p>
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
            <p>Los electrones se distribuyen en <b>Niveles de Energía</b> (n=1, 2, 3...) y <b>Subniveles</b> (s, p, d, f).</p>
            <ul>
                <li><b>Capacidades Máximas:</b> s: 2e⁻, p: 6e⁻, d: 10e⁻, f: 14e⁻.</li>
            </ul>
            <h3>Principios de Ordenamiento</h3>
            <ul>
                <li><b>Principio de Aufbau:</b> Establece que los electrones llenan primero los orbitales de menor energía.</li>
                <li><b>Principio de Exclusión de Pauli:</b> Establece que no puede haber dos electrones con los mismos cuatro números cuánticos (deben tener espines opuestos).</li>
                <li><b>Regla de Hund:</b> Establece que en subniveles con múltiples orbitales, los electrones se distribuyen con espines paralelos en orbitales separados antes de aparearse.</li>
            </ul>
            <h3>Ubicación en la Tabla Periódica</h3>
            <p>La configuración electrónica permite determinar la posición de un elemento:</p>
            <ul>
                <li><b>Período:</b> Corresponde al nivel de energía más alto (n) ocupado.</li>
                <li><b>Grupo:</b> Depende de los electrones en la última capa. Si termina en s¹ es Grupo 1A, en s² es Grupo 2A, etc.</li>
            </ul>
            <h3>Isoelectrónico</h3>
            <p>Se refiere a átomos o iones que tienen el mismo número de electrones y, por lo tanto, la misma configuración electrónica. Por ejemplo, el ion <b>Na⁺</b> (11 - 1 = 10e⁻) es isoelectrónico con el gas noble <b>Neón</b> (10e⁻).</p>
            <h3>Electrones de Valencia</h3>
            <p>Son los electrones que se encuentran en el <b>nivel de energía más alto</b>. Son los responsables del comportamiento químico y la formación de enlaces.</p>
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
            <p>Representa la distancia entre el núcleo y el electrón más externo. <b>Aumenta hacia abajo</b> en un grupo y <b>hacia la izquierda</b> en un período.</p>
            <h3>Radio Iónico</h3>
            <p>Es el radio de un catión o anión. Los <b>cationes</b> son más pequeños que sus átomos neutros, mientras que los <b>aniones</b> son significativamente más grandes debido a la repulsión electrónica.</p>
            <h3>Energía de Ionización</h3>
            <p>Es la energía mínima necesaria para remover un electrón de un átomo en estado gaseoso. <b>Aumenta hacia arriba y hacia la derecha</b>.</p>
            <h3>Electronegatividad</h3>
            <p>Es la capacidad de un átomo para atraer electrones hacia sí en un enlace químico. Se mide generalmente en la <b>Escala de Pauling</b>, donde el Flúor es el máximo (4,0) y el Francio el mínimo.</p>
            <h3>Carga Nuclear Efectiva (Zeff)</h3>
            <p>Es la carga neta positiva que "siente" un electrón de valencia. Aumenta hacia la derecha en un período, atrayendo más fuerte a los electrones y reduciendo el tamaño atómico.</p>
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
                <li><b>Enlace Iónico:</b> Transferencia de electrones de un metal a un no metal. Resulta en una fuerte atracción electrostática entre iones. Generalmente ΔEN > 1,7.</li>
                <li><b>Enlace Covalente:</b> Compartición de uno o más pares de electrones entre dos no metales.
                    <ul>
                        <li><b>Covalente Polar:</b> Compartición desigual de electrones (0,5 < ΔEN < 1,7).</li>
                        <li><b>Covalente No Polar:</b> Compartición igual (ΔEN < 0,5).</li>
                    </ul>
                </li>
                <li><b>Enlace Metálico:</b> Los electrones de valencia están deslocalizados en una "nube" o "mar de electrones" que rodea a los núcleos de los metales, permitiendo la conducción eléctrica y térmica.</li>
            </ul>
            <h3>Estructura de Lewis</h3>
            <p>Representación de los electrones de valencia mediante puntos o cruces. Los átomos tienden a alcanzar la configuración de gas noble (generalmente 8 electrones), lo que se conoce como <b>Regla del Octeto</b>.</p>
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

  // --- Mapeos para Coloquio 3 ---
  'Masa Molar y Mol': unidad3,
  'Composición Porcentual': unidad3,
  'Ecuaciones Químicas': unidad3,
  'Estequiometría': unidad3,
  'Rendimiento': unidad3,
  'Estequiometría de Gases': unidad3,
  'Propiedades de la Materia': unidad2,
  'Estructura Atómica': unidad2,
  'Redox': unidad5,
  'Oxidación de Hierro (II)': unidad5,
  'Soluciones': unidad4,
  'Preparación de Soluciones': unidad4,
  'Dilución': unidad4,

  // --- Mapeos para Coloquio 4 ---
  'Fuerzas Intermoleculares': unidad4,
  'Sólidos y Fuerzas': unidad4,
  'Bioquímica': unidad4,
  'Propiedades del Agua': unidad4,
  'Sistemas Coloidales': unidad4,
  'Aplicación Clínica': unidad4,

  // --- Mapeos para Coloquio 5 ---
  'Números de Oxidación': unidad5,
  'Método Ion-Electrón': unidad5,
  'Estequiometría Redox': unidad5,
  'General': unidad5,

  // --- UNIDADES ---
  'Unidad 2': unidad2,
  'Unidad 3': unidad3,
  'Unidad 4': unidad4,
  'Unidad 5': unidad5
};
