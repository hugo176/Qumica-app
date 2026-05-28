import type { Quiz } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

interface QuizViewProps {
  quiz: Quiz;
}

export function QuizView({ quiz }: QuizViewProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
  };

  return (
    <Card className="mt-6 sm:mt-8 bg-slate-50 border-slate-200">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl text-slate-800">Cuestionario de Conceptos</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <p 
          className="font-semibold text-base sm:text-lg text-slate-700 mb-6"
          dangerouslySetInnerHTML={{ __html: quiz.question }}
        />
        <div className="grid gap-3">
          {quiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={selectedOption !== null}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all duration-300 min-h-[60px]",
                selectedOption === null
                  ? "border-slate-200 bg-slate-50 hover:border-blue-400 hover:shadow-md"
                  : selectedOption === index
                  ? option.correct
                    ? "border-green-500 bg-green-50 shadow-green-100 shadow-lg"
                    : "border-red-500 bg-red-50 shadow-red-100 shadow-lg"
                  : option.correct
                  ? "border-green-200 bg-green-50/50 opacity-80"
                  : "border-slate-100 bg-slate-50 opacity-50 cursor-not-allowed"
              )}
            >
              <span 
                className={cn(
                  "font-medium text-sm sm:text-base pr-4",
                  selectedOption === index && (option.correct ? "text-green-700" : "text-red-700")
                )}
                dangerouslySetInnerHTML={{ __html: option.text }}
              />
              {selectedOption !== null && option.correct && (
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              )}
              {selectedOption === index && !option.correct && (
                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
              )}
            </button>
          ))}
        </div>
        
        {selectedOption !== null && (
          <div className={cn(
            "mt-6 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-3 animate-in fade-in zoom-in-95 duration-500 text-center sm:text-left",
            quiz.options[selectedOption].correct 
              ? "bg-green-100 text-green-800" 
              : "bg-red-100 text-red-800"
          )}>
            <div className="flex items-center gap-3">
              {quiz.options[selectedOption].correct ? (
                <CheckCircle2 className="h-5 w-5 shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 shrink-0" />
              )}
              <p className="font-bold text-xs sm:text-sm">
                {quiz.options[selectedOption].correct 
                  ? "¡Correcto! Has comprendido bien el concepto." 
                  : "Respuesta incorrecta. Revisa la teoría y vuelve a intentarlo."}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full sm:w-auto sm:ml-auto bg-slate-50" 
              onClick={() => setSelectedOption(null)}
            >
              Reintentar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
