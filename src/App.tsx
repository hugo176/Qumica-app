import { useState, useMemo } from 'react';
import { colloquium2 } from './data/colloquiums/colloquium-2';
import { theoryData } from './data/theory';
import { elements } from './data/elements';
import { Sidebar } from './components/layout/Sidebar';
import { ExerciseView } from './components/exercise/ExerciseView';
import { PeriodicTable } from './components/periodic-table/PeriodicTable';
import { QuizView } from './components/quiz/QuizView';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight, ClipboardCheck } from 'lucide-react';
import { ScrollArea } from './components/ui/scroll-area';

const colloquiums = [colloquium2];

function App() {
  const [currentColloquiumId, setCurrentColloquiumId] = useState(colloquium2.id);
  const [currentExerciseId, setCurrentExerciseId] = useState(colloquium2.exercises[0].id);
  const [isPeriodicTableActive, setIsPeriodicTableActive] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const currentColloquium = useMemo(() => 
    colloquiums.find(c => c.id === currentColloquiumId) || colloquiums[0],
  [currentColloquiumId]);

  const currentExerciseIndex = useMemo(() => 
    currentColloquium.exercises.findIndex(ex => ex.id === currentExerciseId),
  [currentColloquium, currentExerciseId]);

  const currentExercise = currentColloquium.exercises[currentExerciseIndex];

  const handleSelectExercise = (colId: number, exId: number) => {
    setCurrentColloquiumId(colId);
    setCurrentExerciseId(exId);
    setIsPeriodicTableActive(false);
    setShowQuiz(false);
  };

  const navigate = (delta: number) => {
    let newIndex = currentExerciseIndex + delta;
    
    if (newIndex >= 0 && newIndex < currentColloquium.exercises.length) {
      setCurrentExerciseId(currentColloquium.exercises[newIndex].id);
      setShowQuiz(false);
    } else {
      // Logic for switching colloquiums could go here if there were more
      const colIndex = colloquiums.findIndex(c => c.id === currentColloquiumId);
      const nextColIndex = colIndex + (delta > 0 ? 1 : -1);
      
      if (nextColIndex >= 0 && nextColIndex < colloquiums.length) {
        const nextCol = colloquiums[nextColIndex];
        setCurrentColloquiumId(nextCol.id);
        setCurrentExerciseId(delta > 0 ? nextCol.exercises[0].id : nextCol.exercises[nextCol.exercises.length - 1].id);
        setShowQuiz(false);
      }
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar 
        colloquiums={colloquiums}
        currentColloquiumId={currentColloquiumId}
        currentExerciseId={currentExerciseId}
        onSelectExercise={handleSelectExercise}
        onShowPeriodicTable={() => setIsPeriodicTableActive(true)}
        isPeriodicTableActive={isPeriodicTableActive}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <ScrollArea className="flex-1">
          <div className="p-8">
            {isPeriodicTableActive ? (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <PeriodicTable elements={elements} />
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ExerciseView 
                  exercise={currentExercise} 
                  theory={theoryData[currentExercise.category]}
                />
                
                <div className="max-w-4xl mx-auto px-4 mb-12">
                  {!showQuiz ? (
                    <Button 
                      variant="outline" 
                      className="w-full h-16 text-lg border-2 border-dashed border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 gap-3"
                      onClick={() => setShowQuiz(true)}
                    >
                      <ClipboardCheck className="h-6 w-6" />
                      Realizar Cuestionario de Conceptos
                    </Button>
                  ) : (
                    <div className="animate-in slide-in-from-bottom-2 duration-300">
                      <QuizView quiz={currentExercise.quiz} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {!isPeriodicTableActive && (
          <footer className="h-20 bg-white border-t border-slate-200 px-8 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              disabled={currentColloquiumId === colloquiums[0].id && currentExerciseIndex === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>

            <div className="text-sm font-medium text-slate-500">
              Ejercicio {currentExerciseIndex + 1} de {currentColloquium.exercises.length}
            </div>

            <Button 
              variant="ghost" 
              onClick={() => navigate(1)}
              disabled={currentColloquiumId === colloquiums[colloquiums.length-1].id && currentExerciseIndex === currentColloquium.exercises.length - 1}
              className="gap-2"
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </Button>
          </footer>
        )}
      </main>
    </div>
  );
}

export default App;
