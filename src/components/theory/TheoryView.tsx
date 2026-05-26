import React from 'react';
import type { TheoryEntry } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Lightbulb, Info } from 'lucide-react';

interface TheoryViewProps {
  unit: TheoryEntry;
  onClose?: () => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ unit }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-blue-600 mb-2">
          <BookOpen className="h-8 w-8" />
          <h1 className="text-3xl font-black tracking-tight">{unit.title}</h1>
        </div>
        <p className="text-slate-500 font-medium">Resumen teórico detallado y conceptos clave para el estudio.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div 
                className="prose prose-slate max-w-none 
                prose-h3:text-blue-700 prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:border-b prose-h3:border-blue-100 prose-h3:pb-2
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-ul:list-disc prose-ul:pl-5 prose-li:text-slate-600
                prose-b:text-slate-900 prose-b:font-bold
                prose-span.math:bg-blue-50 prose-span.math:px-2 prose-span.math:py-0.5 prose-span.math:rounded prose-span.math:font-mono prose-span.math:text-blue-800"
                dangerouslySetInnerHTML={{ __html: unit.content }}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {unit.svg && (
            <Card className="border-2 border-blue-100 shadow-md bg-blue-50/30 overflow-hidden sticky top-8">
              <CardHeader className="bg-blue-600 py-3">
                <CardTitle className="text-white text-sm font-bold flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Esquema Visual
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex justify-center items-center min-h-[250px]">
                <div 
                  className="bg-slate-50 p-4 rounded-xl shadow-inner border border-blue-100 w-full flex justify-center"
                  dangerouslySetInnerHTML={{ __html: unit.svg }}
                />
              </CardContent>
              <div className="px-6 pb-6">
                <div className="flex gap-3 p-4 bg-slate-50/80 rounded-lg border border-blue-100 text-xs text-slate-600">
                  <Info className="h-4 w-4 text-blue-500 shrink-0" />
                  <p>Utiliza este diagrama como referencia rápida para los conceptos principales de la unidad.</p>
                </div>
              </div>
            </Card>
          )}

          <Card className="bg-slate-900 text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-green-400" />
                Tips de Estudio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300 text-sm">
              <div className="p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-white mb-1">Relaciona conceptos</p>
                No memorices fórmulas, trata de entender qué representan físicamente.
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-white mb-1">Práctica constante</p>
                Vuelve a los ejercicios del coloquio después de leer esta teoría.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { ClipboardCheck } from 'lucide-react';
