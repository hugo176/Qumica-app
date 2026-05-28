import { useState } from "react";
import type { PeriodicElement, ElementType } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface PeriodicTableProps {
  elements: PeriodicElement[];
}

const typeColors: Record<ElementType, string> = {
  'alkali-metal': 'bg-red-200 border-red-300 text-red-900',
  'alkaline-earth': 'bg-orange-200 border-orange-300 text-orange-900',
  'transition-metal': 'bg-yellow-200 border-yellow-300 text-yellow-900',
  'post-transition': 'bg-green-200 border-green-300 text-green-900',
  'metalloid': 'bg-teal-200 border-teal-300 text-teal-900',
  'reactive-nonmetal': 'bg-blue-200 border-blue-300 text-blue-900',
  'noble-gas': 'bg-purple-200 border-purple-300 text-purple-900',
  'lanthanide': 'bg-pink-200 border-pink-300 text-pink-900',
  'actinide': 'bg-fuchsia-200 border-fuchsia-300 text-fuchsia-900',
  'unknown': 'bg-slate-200 border-slate-300 text-slate-900',
};

const typeLabels: Record<ElementType, string> = {
  'alkali-metal': 'Metales Alcalinos',
  'alkaline-earth': 'Alcalinotérreos',
  'transition-metal': 'Metales de Transición',
  'post-transition': 'Otros Metales',
  'metalloid': 'Metaloides',
  'reactive-nonmetal': 'No Metales',
  'noble-gas': 'Gases Nobles',
  'lanthanide': 'Lantánidos',
  'actinide': 'Actínidos',
  'unknown': 'Desconocido',
};

export function PeriodicTable({ elements }: PeriodicTableProps) {
  const [selectedElement, setSelectedElement] = useState<PeriodicElement | null>(elements[0]);
  const groups = Array.from({ length: 18 }, (_, i) => i + 1);
  const periods = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Helper to clean unicode characters for PDF compatibility
    const cleanText = (text: string) => {
      if (!text) return "";
      const mapping: Record<string, string> = {
        '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
        '⁺': '+', '⁻': '-', '±': '+/-', '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
      };
      return text.split('').map(char => mapping[char] || char).join('').trim();
    };

    // Header
    doc.setFontSize(22);
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text("Tabla Periódica de los Elementos", pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Estudio Interactivo de Química - Material de Consulta", pageWidth / 2, 30, { align: "center" });

    // Summary of Trends
    doc.setFontSize(14);
    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "bold");
    doc.text("Resumen de Tendencias Periódicas", 14, 45);

    autoTable(doc, {
      startY: 50,
      head: [["Propiedad", "En un Grupo (↓)", "En un Periodo (→)"]],
      body: [
        ["Radio Atómico", "Aumenta (más capas)", "Disminuye (mayor Zeff)"],
        ["Energía Ionización", "Disminuye", "Aumenta"],
        ["Electronegatividad", "Disminuye", "Aumenta"],
        ["Carácter Metálico", "Aumenta", "Disminuye"],
      ],
      theme: "grid",
      headStyles: { fillColor: [30, 64, 175] },
      styles: { fontSize: 9 },
    });

    // Elements Table
    doc.setFontSize(14);
    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "bold");
    doc.text("Detalles de los Elementos", 14, (doc as any).lastAutoTable.finalY + 15);

    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 20,
      head: [["Z", "Símb.", "Nombre", "Masa", "EN", "Est. Ox.", "Configuración"]],
      body: elements
        .sort((a, b) => a.number - b.number)
        .map((el) => [
          el.number.toString(),
          el.symbol,
          el.name,
          el.mass,
          el.electronegativity || "N/A",
          cleanText(el.oxidationStates || "0"),
          cleanText(el.electronConfiguration),
        ]),
      theme: "striped",
      headStyles: { fillColor: [71, 85, 105] }, // Slate-600
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 15, fontStyle: "bold" },
        2: { cellWidth: 30 },
        3: { cellWidth: 20 },
        4: { cellWidth: 12 },
        5: { cellWidth: 30 },
        6: { cellWidth: "auto" },
      },
    });

    doc.save("Tabla_Periodica_Completa.pdf");
  };

  const handleDownloadTheoryPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(30, 64, 175);
    doc.text("Guía Teórica: Propiedades y Enlaces", pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Resumen completo de organización, tendencias y química molecular", pageWidth / 2, 30, { align: "center" });

    let yPos = 45;

    // 1. Organización
    doc.setFontSize(16);
    doc.setTextColor(30, 41, 59);
    doc.text("1. Organización de la Tabla", 14, yPos);
    yPos += 10;
    
    autoTable(doc, {
      startY: yPos,
      head: [["División", "Descripción", "Clave para el estudio"]],
      body: [
        ["Grupos (1-18)", "Columnas verticales.", "Mismos e- de valencia = Propiedades similares."],
        ["Periodos (1-7)", "Filas horizontales.", "Mismo nivel de energía máximo ocupado."]
      ],
      theme: 'grid',
      headStyles: { fillColor: [30, 64, 175] }
    });
    yPos = (doc as any).lastAutoTable.finalY + 15;

    // 2. Tendencias
    doc.setFontSize(16);
    doc.text("2. Tendencias Periódicas", 14, yPos);
    yPos += 10;
    
    autoTable(doc, {
      startY: yPos,
      head: [["Propiedad", "Definición", "En Grupo (↓)", "En Periodo (→)"]],
      body: [
        ["Radio Atómico", "Distancia núcleo-e externo", "Aumenta (+ capas)", "Disminuye (+ Zeff)"],
        ["Energía Ionización", "E para quitar un e-", "Disminuye", "Aumenta"],
        ["Electronegatividad", "Atracción por e- en enlace", "Disminuye", "Aumenta"],
        ["Carácter Metálico", "Facilidad para oxidarse", "Aumenta", "Disminuye"]
      ],
      theme: 'striped',
      headStyles: { fillColor: [194, 65, 12] } // Orange-700
    });
    yPos = (doc as any).lastAutoTable.finalY + 15;

    // 3. Enlaces
    doc.setFontSize(16);
    doc.text("3. Enlaces Químicos", 14, yPos);
    yPos += 10;
    
    autoTable(doc, {
      startY: yPos,
      head: [["Tipo de Enlace", "Naturaleza", "Diferencia EN (ΔEN)"]],
      body: [
        ["Iónico", "Transferencia de e- (Metal + No Metal)", "ΔEN > 1.7"],
        ["Covalente Polar", "Compartición desigual (No Metales)", "0.5 <= ΔEN <= 1.7"],
        ["Covalente No Polar", "Compartición equitativa (No Metales)", "0.0 <= ΔEN <= 0.4"],
        ["Metálico", "Mar de electrones (Metales)", "N/A (Baja EN)"]
      ],
      theme: 'grid',
      headStyles: { fillColor: [79, 70, 229] } // Indigo-600
    });
    yPos = (doc as any).lastAutoTable.finalY + 15;

    // 4. Lewis y Polarity (New Page if needed)
    if (yPos > 200) { doc.addPage(); yPos = 20; }
    
    doc.setFontSize(16);
    doc.text("4. Estructura de Lewis y Polarity", 14, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    const text = [
      "• Regla del Octeto: Átomos buscan 8 e- de valencia para estabilidad.",
      "• Regla del Dueto: H, Li, Be alcanzan estabilidad con 2 e-.",
      "• Átomo Central: Suele ser el menos electronegativo (H NUNCA es central).",
      "• Polaridad Molecular: Depende de los enlaces Y de la geometría (simetría).",
      "• Ejemplo CO2: Enlaces polares pero molécula NO POLAR (simétrica/lineal).",
      "• Ejemplo H2O: Enlaces polares y molécula POLAR (asimétrica/angular)."
    ];
    doc.text(text, 14, yPos);

    doc.save("Guia_Teorica_Quimica.pdf");
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto p-4 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Table Area */}
        <Card className="flex-1 shadow-xl border-slate-200">
          <CardHeader className="bg-slate-50 border-b py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-slate-800">Tabla Periódica de los Elementos</CardTitle>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={handleDownloadPDF}
              >
                <Download className="h-4 w-4" />
                Datos Elementos
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="gap-2 bg-blue-700 hover:bg-blue-800 shadow-md"
                onClick={handleDownloadTheoryPDF}
              >
                <Download className="h-4 w-4" />
                Guía Teórica
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-6 overflow-hidden">
            <div className="overflow-x-auto pb-4 custom-scrollbar touch-pan-x">
              <div className="grid grid-cols-[25px_repeat(18,minmax(50px,1fr))] gap-1 min-w-[1024px]">
                {/* Header: Groups */}
                <div className="h-6" />
                {groups.map((g) => (
                  <div key={`g-${g}`} className="flex items-center justify-center text-[10px] font-bold text-slate-400">
                    {g}
                  </div>
                ))}

                {/* Rows: Periods + Elements */}
                {periods.map((p) => (
                  <div key={`row-${p}`} className="contents">
                    <div className="flex items-center justify-center text-[10px] font-bold text-slate-400">
                      {p <= 7 ? p : ""}
                    </div>
                    {groups.map((g) => {
                      const el = elements.find((e) => e.col === g && e.row === p);
                      if (!el) return <div key={`empty-${p}-${g}`} className="aspect-square" />;
                      
                      const isSelected = selectedElement?.number === el.number;

                      return (
                        <button
                          key={el.number}
                          onClick={() => setSelectedElement(el)}
                          className={cn(
                            "relative flex flex-col items-center justify-between p-1 rounded border shadow-sm transition-all duration-200 hover:scale-110 hover:z-40 aspect-square group text-left",
                            typeColors[el.type],
                            isSelected ? "ring-2 ring-blue-500 ring-offset-1 z-30 scale-105" : ""
                          )}
                        >
                          <span className="absolute top-0.5 left-1 text-[7px] font-bold opacity-70">
                            {el.number}
                          </span>
                          <span className="text-base font-black tracking-tighter mt-1">
                            {el.symbol}
                          </span>
                          <span className="text-[6px] font-bold uppercase truncate w-full text-center">
                            {el.name}
                          </span>
                          <span className="text-[6px] font-medium opacity-80 mb-0.5">
                            {el.mass}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
              {(Object.keys(typeColors) as ElementType[]).map((type) => (
                <div key={type} className="flex items-center gap-1.5 group cursor-help">
                  <div className={cn("w-2.5 h-2.5 rounded-sm border group-hover:ring-1 ring-slate-300 transition-all", typeColors[type])} />
                  <span className="text-[9px] font-semibold text-slate-500 group-hover:text-slate-800">
                    {typeLabels[type]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detail Panel */}
        <div className="w-full lg:w-80 shrink-0">
          <Card className="sticky top-8 shadow-xl border-slate-200 h-fit overflow-hidden">
            <div className={cn("h-2 w-full", selectedElement ? typeColors[selectedElement.type] : "bg-slate-200")} />
            <CardContent className="p-6">
              {selectedElement ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-4xl font-black tracking-tighter text-slate-900 leading-none">
                        {selectedElement.symbol}
                      </h2>
                      <p className="text-lg font-bold text-slate-500 uppercase tracking-wide mt-1">
                        {selectedElement.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-mono font-bold text-slate-300 leading-none">
                        {selectedElement.number}
                      </p>
                      <p className="text-xs font-bold text-slate-400 mt-1">Z</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Categoría</p>
                      <p className="text-sm font-bold text-slate-700">{typeLabels[selectedElement.type]}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Masa Atómica</p>
                        <p className="text-sm font-mono font-bold text-slate-700">{selectedElement.mass}</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Electronegatividad</p>
                        <p className="text-sm font-mono font-bold text-orange-600">{selectedElement.electronegativity || "N/A"}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Periodo / Grupo</p>
                        <p className="text-sm font-bold text-slate-700">{selectedElement.row} / {selectedElement.col}</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Estados de Oxidación</p>
                        <p className="text-sm font-bold text-blue-600">{selectedElement.oxidationStates || "0"}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Configuración Electrónica</p>
                      <p className="text-xs font-mono font-bold text-slate-700 leading-relaxed">
                        {selectedElement.electronConfiguration}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <p className="text-sm font-medium">Selecciona un elemento para ver detalles</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="w-full flex flex-col gap-8">
        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="text-2xl font-bold text-slate-800">Organización de la Tabla Periódica</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-500 rounded-full" />
                  Grupos (Columnas)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Las 18 columnas verticales de la tabla se denominan <b>grupos</b>. Los elementos de un mismo grupo suelen compartir <b>propiedades químicas similares</b> porque poseen el mismo número de <b>electrones de valencia</b> en su capa más externa.
                </p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-slate-800">Nomenclatura:</span> Se numeran del 1 al 18 (IUPAC) o mediante números romanos y letras (A y B).
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-slate-800">Ejemplo:</span> El Grupo 1 (Metales Alcalinos) tiene 1 electrón de valencia y son altamente reactivos.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <div className="w-2 h-6 bg-emerald-500 rounded-full" />
                  Periodos (Filas)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Las 7 filas horizontales se llaman <b>periodos</b>. A diferencia de los grupos, los elementos de un periodo no tienen propiedades similares, pero sí tienen el mismo <b>nivel de energía máximo</b> ocupado por sus elementos.
                </p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-slate-800">Tendencia:</span> A medida que avanzas a la derecha en un periodo, el número atómico (Z) aumenta y las propiedades cambian gradualmente (de metal a gas noble).
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-slate-800">Estructura:</span> El número del periodo indica el nivel de energía más alto (capa) de los electrones.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="text-2xl font-bold text-slate-800">Tendencias Periódicas</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-orange-500 rounded-full" />
                  Radio Atómico
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      El <b>radio atómico</b> representa la distancia media entre el núcleo del átomo y su electrón más externo. Es una propiedad fundamental que influye en el comportamiento químico de los elementos.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <p className="font-bold text-orange-900 text-sm mb-1">En un Grupo (↓)</p>
                        <p className="text-orange-800 text-xs">
                          El radio <b>aumenta</b> al descender. Esto ocurre porque se añaden nuevos <b>niveles de energía</b> (capas), haciendo que el átomo sea físicamente más grande.
                        </p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <p className="font-bold text-orange-900 text-sm mb-1">En un Periodo (→)</p>
                        <p className="text-orange-800 text-xs">
                          El radio <b>disminuye</b> hacia la derecha. Al aumentar el número de protones, la <b>Carga Nuclear Efectiva</b> atrae con más fuerza a los electrones hacia el núcleo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100 italic">
                    <div className="relative w-24 h-24 mb-2">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-300 animate-pulse" />
                      <div className="absolute inset-4 rounded-full bg-orange-200 border-2 border-orange-400 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-orange-600" />
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 text-center font-medium">
                      Mayor Zeff = Menor Radio<br/>
                      Más Capas = Mayor Radio
                    </p>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-red-500 rounded-full" />
                    Energía de Ionización
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Es la energía mínima necesaria para <b>remover un electrón</b> de un átomo en estado gaseoso. Indica qué tan fuerte el núcleo retiene a sus electrones.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-red-900">En un Grupo (↓)</span>
                      <span className="text-sm font-black text-red-600">DISMINUYE</span>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-red-900">En un Periodo (→)</span>
                      <span className="text-sm font-black text-red-600">AUMENTA</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic mt-2">
                      A mayor radio, el electrón está más lejos y es más fácil de quitar.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-purple-500 rounded-full" />
                    Electronegatividad
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Es la capacidad de un átomo para <b>atraer electrones</b> hacia sí mismo cuando forma un enlace químico. Se mide en la Escala de Pauling.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-purple-900">En un Grupo (↓)</span>
                      <span className="text-sm font-black text-purple-600">DISMINUYE</span>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-purple-900">En un Periodo (→)</span>
                      <span className="text-sm font-black text-purple-600">AUMENTA</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic mt-2">
                      El Flúor (arriba a la derecha) es el elemento más electronegativo (4.0).
                    </p>
                  </div>
                </section>
              </div>

              <section>
                <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-teal-500 rounded-full" />
                  Carácter Metálico
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      El <b>carácter metálico</b> se refiere a la facilidad con la que un átomo puede <b>perder electrones</b> (oxidarse). Los metales tienen baja energía de ionización y baja electronegatividad.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                        <p className="font-bold text-teal-900 text-sm mb-1">En un Grupo (↓)</p>
                        <p className="text-teal-800 text-xs">
                          El carácter metálico <b>aumenta</b> al descender, ya que los electrones externos están más lejos del núcleo y se pierden con mayor facilidad.
                        </p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                        <p className="font-bold text-teal-900 text-sm mb-1">En un Periodo (→)</p>
                        <p className="text-teal-800 text-xs">
                          <b>Disminuye</b> hacia la derecha. Los elementos se vuelven menos metálicos y más <b>no metálicos</b> al aumentar la atracción del núcleo por los electrones.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100 italic">
                    <div className="text-3xl mb-2">⚡</div>
                    <p className="text-[10px] text-slate-500 text-center font-medium">
                      Metales: Ceden e-<br/>
                      No Metales: Ganan e-
                    </p>
                    <p className="text-[10px] text-teal-600 font-bold mt-2">
                      Máximo: Francio (Fr)
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="text-2xl font-bold text-slate-800">Enlaces Químicos</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-slate-600 leading-relaxed mb-8">
              Los átomos se unen para alcanzar una configuración más estable, generalmente completando su <b>capa de valencia</b> (Regla del Octeto). El tipo de enlace depende principalmente de la diferencia de <b>electronegatividad (ΔEN)</b> entre los átomos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Enlace Iónico */}
              <div className="flex flex-col h-full p-5 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">I</div>
                  <h3 className="text-lg font-bold text-indigo-900">Enlace Iónico</h3>
                </div>
                <p className="text-sm text-indigo-800 leading-relaxed flex-grow">
                  Se produce por la <b>transferencia</b> de uno o más electrones de un metal a un no metal. Resulta en la atracción electrostática entre iones de carga opuesta.
                </p>
                <div className="mt-4 pt-4 border-t border-indigo-200">
                  <p className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider mb-2">Características</p>
                  <ul className="text-[11px] text-indigo-700 space-y-1">
                    <li>• ΔEN muy alta (&gt; 1.7)</li>
                    <li>• Forman redes cristalinas</li>
                    <li>• Altos puntos de fusión</li>
                  </ul>
                </div>
              </div>

              {/* Enlace Covalente */}
              <div className="flex flex-col h-full p-5 bg-sky-50 rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">C</div>
                  <h3 className="text-lg font-bold text-sky-900">Enlace Covalente</h3>
                </div>
                <p className="text-sm text-sky-800 leading-relaxed flex-grow">
                  Se produce por la <b>compartición</b> de electrones entre no metales. La polaridad depende de la diferencia de electronegatividad (ΔEN):
                </p>
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <p className="text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">Clasificación ΔEN</p>
                  <ul className="text-[11px] text-sky-700 space-y-2">
                    <li>
                      <span className="font-bold">Covalente No Polar:</span> ΔEN entre <b>0.0 y 0.4</b>. Los electrones se comparten equitativamente.
                    </li>
                    <li>
                      <span className="font-bold">Covalente Polar:</span> ΔEN entre <b>0.5 y 1.7</b>. Los electrones pasan más tiempo cerca del átomo más electronegativo.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enlace Metálico */}
              <div className="flex flex-col h-full p-5 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">M</div>
                  <h3 className="text-lg font-bold text-amber-900">Enlace Metálico</h3>
                </div>
                <p className="text-sm text-amber-800 leading-relaxed flex-grow">
                  Los electrones de valencia se desprenden y forman una <b>"nube" o "mar de electrones"</b> que rodea a los núcleos positivos de los metales.
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-2">Características</p>
                  <ul className="text-[11px] text-amber-700 space-y-1">
                    <li>• Entre metales (baja EN)</li>
                    <li>• Alta conductividad eléctrica</li>
                    <li>• Maleabilidad y ductilidad</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="text-sm font-bold text-slate-700 mb-2">💡 Dato para recordar:</h4>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                La diferencia de electronegatividad (ΔEN) es la "clave" para predecir el enlace: si un átomo "tira" mucho más fuerte que el otro, el electrón se transfiere (Iónico); si "tiran" parecido, se comparte (Covalente).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="text-2xl font-bold text-slate-800">Estructura de Lewis</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  La <b>Estructura de Lewis</b> es una representación gráfica que muestra los <b>electrones de valencia</b> de un átomo y cómo se distribuyen para formar enlaces en una molécula.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">8</span>
                      Regla del Octeto
                    </h4>
                    <p className="text-blue-800 text-xs leading-relaxed">
                      La mayoría de los átomos tienden a ganar, perder o compartir electrones hasta quedar rodeados por <b>ocho electrones de valencia</b>, adquiriendo la estabilidad de un gas noble.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">2</span>
                      Regla del Dueto
                    </h4>
                    <p className="text-emerald-800 text-xs leading-relaxed">
                      Átomos pequeños como el <b>Hidrógeno (H)</b>, Litio (Li) y Berilio (Be) alcanzan la estabilidad con solo <b>dos electrones</b>, asemejándose a la configuración del Helio.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-800">Cómo dibujar una estructura:</h4>
                  <ol className="text-sm text-slate-600 space-y-2 ml-4 list-decimal marker:font-bold marker:text-slate-400">
                    <li>Suma todos los <b>electrones de valencia</b> de todos los átomos.</li>
                    <li>Identifica el <b>átomo central</b>: suele ser el menos electronegativo, pero ten en cuenta que el <b>Hidrógeno (H) nunca puede ser central</b> (siempre es terminal).</li>
                    <li>Une el átomo central a los demás con <b>enlaces simples</b>.</li>
                    <li>Completa los octetos de los átomos externos con <b>pares solitarios</b>.</li>
                    <li>Si sobran electrones, colócalos en el átomo central. Si faltan para su octeto, forma <b>enlaces dobles o triples</b>.</li>
                  </ol>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center shadow-inner border border-slate-800">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Ejemplo: Agua (H₂O)</div>
                <div className="relative flex items-center justify-center h-32 w-full font-mono text-3xl">
                  {/* Oxygen */}
                  <div className="z-10 bg-slate-800 w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center">O</div>
                  {/* Lone pairs */}
                  <div className="absolute top-2 flex gap-4"><div className="w-2 h-2 bg-blue-400 rounded-full" /><div className="w-2 h-2 bg-blue-400 rounded-full" /></div>
                  <div className="absolute bottom-2 flex gap-4"><div className="w-2 h-2 bg-blue-400 rounded-full" /><div className="w-2 h-2 bg-blue-400 rounded-full" /></div>
                  {/* Bonds and Hydrogen */}
                  <div className="absolute left-0 flex items-center">
                    <span className="text-blue-500 mr-1">—</span>
                    <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-sm">H</div>
                  </div>
                  <div className="absolute right-0 flex items-center">
                    <span className="text-blue-500 ml-1">—</span>
                    <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-sm">H</div>
                  </div>
                </div>
                <p className="mt-6 text-[10px] text-slate-400 leading-relaxed">
                  El Oxígeno tiene 6 e- de valencia + 2 (uno de cada H) = <b>8 electrones totales</b> (Octeto completo).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="text-2xl font-bold text-slate-800">Polaridad Molecular y Geometría</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              <p className="text-slate-600 leading-relaxed">
                Es fundamental distinguir entre la <b>polaridad de un enlace</b> (individual) y la <b>polaridad de una molécula</b> (global). Una molécula puede tener enlaces polares pero ser <b>no polar</b> si su geometría es simétrica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ejemplo CO2 */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 bg-emerald-500 text-white text-[10px] font-black uppercase">No Polar</div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    Dióxido de Carbono (CO₂)
                  </h4>
                  <div className="flex justify-center items-center h-24 mb-4 font-mono text-xl text-slate-800">
                    O <span className="mx-2 text-slate-400">←═</span> C <span className="mx-2 text-slate-400">═→</span> O
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Aunque el enlace C-O es polar (ΔEN ≈ 1.0), la molécula es <b>lineal y simétrica</b>. Los momentos dipolares se tiran con la misma fuerza en direcciones opuestas y se <b>anulan</b>.
                  </p>
                </div>

                {/* Ejemplo H2O */}
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 bg-blue-500 text-white text-[10px] font-black uppercase">Polar</div>
                  <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                    Agua (H₂O)
                  </h4>
                  <div className="flex justify-center items-center h-24 mb-4 font-mono text-xl text-blue-800">
                    <div className="text-center">
                      O
                      <div className="flex gap-8 mt-2">
                        <span className="rotate-45 block">/</span>
                        <span className="-rotate-45 block">\</span>
                      </div>
                      <div className="flex gap-10">
                        <span>H</span>
                        <span>H</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    El agua tiene una <b>geometría angular</b> debido a los pares de electrones libres del Oxígeno. Los dipolos no se anulan, creando una carga parcial negativa arriba y positiva abajo.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                <h4 className="text-sm font-bold text-amber-900 mb-2">💡 Conclusión clave:</h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Para que una molécula sea <b>Polar</b>, debe cumplir dos condiciones: 
                  1) Tener al menos un enlace polar. 
                  2) Tener una geometría <b>asimétrica</b> (que los dipolos no se cancelen).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

