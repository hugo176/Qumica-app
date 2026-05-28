import type { Exercise, TheoryEntry } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface ExerciseViewProps {
  exercise: Exercise;
  theory?: TheoryEntry;
}

export function ExerciseView({ exercise, theory }: ExerciseViewProps) {
  const [showResolution, setShowResolution] = useState(false);

  // Reset resolution view when changing exercise
  useEffect(() => {
    setShowResolution(false);
  }, [exercise.id]);

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
      <Card className="mb-6 sm:mb-8">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <CardTitle className="text-xl sm:text-3xl font-bold text-slate-800">
              Problema {exercise.id}: {exercise.title}
            </CardTitle>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
              {exercise.category}
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div 
            className="text-base sm:text-lg leading-relaxed text-slate-700 mb-6 sm:mb-8"
            dangerouslySetInnerHTML={{ __html: exercise.statement }}
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              variant={showResolution ? "outline" : "default"}
              onClick={() => setShowResolution(!showResolution)}
              className="gap-2 w-full sm:w-auto"
            >
              <CheckCircle2 className="h-4 w-4" />
              {showResolution ? "Ocultar Resolución" : "Ver Resolución"}
            </Button>

            {theory && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="gap-2 w-full sm:w-auto">
                    <BookOpen className="h-4 w-4" />
                    Ver Teoría
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl w-[95vw] sm:w-full max-h-[85vh] overflow-y-auto p-4 sm:p-6">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold mb-4">{theory.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div 
                      className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{ __html: theory.content }}
                    />
                    {theory.svg && (
                      <div 
                        className="flex justify-center p-3 sm:p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-inner overflow-x-auto"
                        dangerouslySetInnerHTML={{ __html: theory.svg }}
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardContent>
      </Card>

      {showResolution && (
        <Card className="animate-in fade-in slide-in-from-top-4 duration-500">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl text-blue-700">Resolución Paso a Paso</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-6">
              {exercise.steps.map((step, index) => (
                <div key={index} className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 py-1">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
                  <h4 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">{step.t}</h4>
                  <div 
                    className="text-slate-600 leading-relaxed text-xs sm:text-sm"
                    dangerouslySetInnerHTML={{ __html: step.d }}
                  />
                  {index < exercise.steps.length - 1 && <Separator className="mt-4 opacity-50" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
