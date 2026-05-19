import type { Exercise, TheoryEntry } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ExerciseViewProps {
  exercise: Exercise;
  theory?: TheoryEntry;
}

export function ExerciseView({ exercise, theory }: ExerciseViewProps) {
  const [showResolution, setShowResolution] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-3xl font-bold text-slate-800">
              {exercise.title}
            </CardTitle>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
              {exercise.category}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div 
            className="text-lg leading-relaxed text-slate-700 mb-8"
            dangerouslySetInnerHTML={{ __html: exercise.statement }}
          />

          <div className="flex gap-4">
            <Button 
              variant={showResolution ? "outline" : "default"}
              onClick={() => setShowResolution(!showResolution)}
              className="gap-2"
            >
              <CheckCircle2 className="h-4 w-4" />
              {showResolution ? "Ocultar Resolución" : "Ver Resolución"}
            </Button>

            {theory && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Ver Teoría
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">{theory.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div 
                      className="prose prose-slate max-w-none text-slate-700"
                      dangerouslySetInnerHTML={{ __html: theory.content }}
                    />
                    {theory.svg && (
                      <div 
                        className="flex justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-inner"
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
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Resolución Paso a Paso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {exercise.steps.map((step, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 py-1">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
                  <h4 className="font-bold text-slate-800 mb-1">{step.t}</h4>
                  <div 
                    className="text-slate-600 leading-relaxed"
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
