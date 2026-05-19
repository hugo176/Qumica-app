import { useState } from "react";
import type { PeriodicElement, ElementType } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1600px] mx-auto p-4">
      {/* Main Table Area */}
      <Card className="flex-1 shadow-xl border-slate-200 overflow-hidden">
        <CardHeader className="bg-slate-50 border-b py-4">
          <CardTitle className="text-xl text-slate-800 text-center">Tabla Periódica de los Elementos</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <div className="grid grid-cols-[25px_repeat(18,minmax(50px,1fr))] gap-1 min-w-[1000px]">
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
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Periodo / Grupo</p>
                      <p className="text-sm font-bold text-slate-700">{selectedElement.row} / {selectedElement.col}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Estados de Oxidación</p>
                    <p className="text-sm font-bold text-blue-600">{selectedElement.oxidationStates || "0"}</p>
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
  );
}
