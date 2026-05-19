import type { Colloquium } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Atom } from "lucide-react";

interface SidebarProps {
  colloquiums: Colloquium[];
  currentColloquiumId: number;
  currentExerciseId: number;
  onSelectExercise: (colloquiumId: number, exerciseId: number) => void;
  onShowPeriodicTable: () => void;
  isPeriodicTableActive: boolean;
}

export function Sidebar({
  colloquiums,
  currentColloquiumId,
  currentExerciseId,
  onSelectExercise,
  onShowPeriodicTable,
  isPeriodicTableActive,
}: SidebarProps) {
  return (
    <div className="flex h-full w-72 flex-col bg-slate-900 text-slate-100 shadow-xl">
      <div className="p-6">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-center border-b border-slate-700 pb-4">
          Estudio Químico
        </h2>
        
        <Button 
          variant={isPeriodicTableActive ? "default" : "secondary"}
          className="w-full mb-6 justify-center gap-2"
          onClick={onShowPeriodicTable}
        >
          <Atom className="h-4 w-4" />
          Tabla Periódica
        </Button>

        <h3 className="mb-2 text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Contenidos
        </h3>
      </div>

      <ScrollArea className="flex-1 px-4">
        <Accordion 
          type="single" 
          collapsible 
          defaultValue={`item-${currentColloquiumId}`}
          className="w-full"
        >
          {colloquiums.map((col) => (
            <AccordionItem key={col.id} value={`item-${col.id}`} className="border-slate-700">
              <AccordionTrigger className="hover:no-underline hover:text-blue-400">
                {col.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 pl-2">
                  {col.exercises.map((ex) => (
                    <button
                      key={ex.id}
                      onClick={() => onSelectExercise(col.id, ex.id)}
                      className={cn(
                        "text-left px-3 py-2 rounded-md text-sm transition-colors",
                        !isPeriodicTableActive && currentColloquiumId === col.id && currentExerciseId === ex.id
                          ? "bg-blue-600 text-white"
                          : "hover:bg-slate-800 text-slate-300 hover:text-white"
                      )}
                    >
                      {ex.title}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
}
