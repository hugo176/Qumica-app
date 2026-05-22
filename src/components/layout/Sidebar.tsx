import type { Colloquium } from '@/types';
import { cn } from '@/lib/utils';
import { 
  BookOpen, 
  FlaskConical, 
  Download,
  Atom,
  Image as ImageIcon
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

interface SidebarProps {
  colloquiums: Colloquium[];
  currentColloquiumId: number;
  currentExerciseId: number;
  onSelectExercise: (colId: number, exId: number) => void;
  onShowPeriodicTable: () => void;
  onShowGallery: (colId: number) => void;
  onSelectTheory: (unitKey: string) => void;
  isPeriodicTableActive: boolean;
  isGalleryActive: boolean;
  isTheoryActive: boolean;
  currentTheoryUnit: string | null;
}

export function Sidebar({ 
  colloquiums, 
  currentColloquiumId, 
  currentExerciseId, 
  onSelectExercise,
  onShowPeriodicTable,
  onShowGallery,
  onSelectTheory,
  isPeriodicTableActive,
  isGalleryActive,
  isTheoryActive,
  currentTheoryUnit
}: SidebarProps) {

  const generatePDF = (col: Colloquium) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Helper to clean HTML tags for PDF
    const cleanHTML = (html: string) => {
      const subs: Record<string, string> = {
        '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
      };
      const sups: Record<string, string> = {
        '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
        '⁺': '+', '⁻': '-'
      };

      let text = html
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<li>/gi, '• ')
        .replace(/<\/li>/gi, '\n')
        .replace(/<sup>(.*?)<\/sup>/gi, (_, p1) => p1)
        .replace(/<sub>(.*?)<\/sub>/gi, (_, p1) => p1)
        .replace(/<[^>]*>/g, '') // Strip all other tags
        .replace(/&nbsp;/g, ' ')
        .replace(/\n\s*\n/g, '\n');

      // Replace unicode sub/superscripts with plain text for PDF compatibility
      return text.split('').map(char => subs[char] || sups[char] || char).join('').trim();
    };

    // Header
    doc.setFontSize(22);
    doc.setTextColor(30, 64, 175); // Blue-800
    doc.text(col.name, pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Guía de Ejercicios y Resoluciones - Estudio Interactivo de Química', pageWidth / 2, 30, { align: 'center' });
    
    let yPos = 45;

    col.exercises.forEach((ex, index) => {
      // Check for page break
      if (yPos > 240) {
        doc.addPage();
        yPos = 20;
      }

      // Exercise Title
      doc.setFontSize(16);
      doc.setTextColor(30, 41, 59); // Slate-800
      doc.setFont('helvetica', 'bold');
      doc.text(`Ejercicio ${index + 1}: ${ex.title}`, 14, yPos);
      yPos += 8;

      // Category
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.setFont('helvetica', 'italic');
      doc.text(`Categoría: ${ex.category}`, 14, yPos);
      yPos += 10;

      // Statement
      doc.setFontSize(11);
      doc.setTextColor(51, 65, 85); // Slate-700
      doc.setFont('helvetica', 'normal');
      const statementLines = doc.splitTextToSize(cleanHTML(ex.statement), pageWidth - 28);
      doc.text(statementLines, 14, yPos);
      yPos += (statementLines.length * 6) + 10;

      // Steps Table
      autoTable(doc, {
        startY: yPos,
        head: [['Paso', 'Procedimiento / Resolución']],
        body: ex.steps.map(step => [cleanHTML(step.t), cleanHTML(step.d)]),
        theme: 'striped',
        headStyles: { fillColor: [37, 99, 235] }, // Blue-600
        styles: { fontSize: 9, cellPadding: 5 },
        columnStyles: { 
          0: { cellWidth: 40, fontStyle: 'bold' },
          1: { cellWidth: 'auto' }
        },
        margin: { left: 14, right: 14 }
      });

      yPos = (doc as any).lastAutoTable.finalY + 20;
    });

    doc.save(`${col.name.replace(/\s+/g, '_')}_Resoluciones.pdf`);
  };

  return (
    <aside className="w-72 bg-slate-900 text-slate-100 flex flex-col shadow-xl z-20">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <FlaskConical className="h-8 w-8 text-blue-400 animate-pulse" />
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none text-white">QUÍMICA</h1>
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">Estudio Interactivo</p>
          </div>
        </div>

        <Button 
          variant={isPeriodicTableActive ? "default" : "secondary"}
          onClick={onShowPeriodicTable}
          className={cn(
            "w-full justify-center gap-3 h-11 text-sm font-bold transition-all",
            isPeriodicTableActive ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"
          )}
        >
          <Atom className="h-4 w-4" />
          Tabla Periódica
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4 py-4">
        <div className="space-y-6">
          <section>
            <div className="px-2 mb-3 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              <BookOpen className="h-3 w-3" />
              Coloquios
            </div>
            
            <Accordion 
              type="single" 
              collapsible 
              defaultValue={`item-${currentColloquiumId}`}
              className="w-full"
            >
              {colloquiums.map((col) => (
                <AccordionItem key={col.id} value={`item-${col.id}`} className="border-slate-800">
                  <div className="flex items-center group pr-2">
                    <AccordionTrigger className="flex-1 hover:no-underline hover:text-blue-400 py-3 text-sm font-bold">
                      {col.name}
                    </AccordionTrigger>
                    <div className="flex items-center gap-1">
                      {col.images && col.images.length > 0 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className={cn(
                            "h-8 w-8 transition-colors",
                            isGalleryActive && currentColloquiumId === col.id 
                              ? "text-blue-400 bg-slate-800" 
                              : "text-slate-500 hover:text-blue-400 hover:bg-slate-800"
                          )}
                          title="Ver Imágenes de Apoyo"
                          onClick={(e) => {
                            e.stopPropagation();
                            onShowGallery(col.id);
                          }}
                        >
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-500 hover:text-blue-400 hover:bg-slate-800 shrink-0"
                        title="Descargar PDF"
                        onClick={(e) => {
                          e.stopPropagation();
                          generatePDF(col);
                        }}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 pl-2 pb-2">
                      {col.exercises.map((ex) => (
                        <button
                          key={ex.id}
                          onClick={() => onSelectExercise(col.id, ex.id)}
                          className={cn(
                            "text-left px-3 py-2 rounded-md text-xs font-bold transition-colors",
                            !isPeriodicTableActive && currentColloquiumId === col.id && currentExerciseId === ex.id
                              ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                              : "hover:bg-slate-800 text-slate-400 hover:text-white"
                          )}
                        >
                          Problema {ex.id}: {ex.title}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section>
            <div className="px-2 mb-3 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              <FlaskConical className="h-3 w-3" />
              Teoría
            </div>
            <div className="flex flex-col gap-1 px-1">
              {['Unidad 2', 'Unidad 3', 'Unidad 4', 'Unidad 5'].map((unit) => (
                <button
                  key={unit}
                  onClick={() => onSelectTheory(unit)}
                  className={cn(
                    "text-left px-3 py-2 rounded-md text-xs font-bold transition-colors",
                    isTheoryActive && currentTheoryUnit === unit
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                      : "hover:bg-slate-800 text-slate-400 hover:text-white"
                  )}
                >
                  {unit}
                </button>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-slate-800 bg-slate-950/50">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 shadow-inner">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Sistema de Resolución PDF Activo</span>
        </div>
      </div>
    </aside>
  );
}
