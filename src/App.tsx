import { useState, useMemo } from 'react';
import { colloquium2 } from './data/colloquiums/colloquium-2';
import { colloquium3 } from './data/colloquiums/colloquium-3';
import { colloquium4 } from './data/colloquiums/colloquium-4';
import { colloquium5 } from './data/colloquiums/colloquium-5';
import { theoryData } from './data/theory';
import { elements } from './data/elements';
import { Sidebar } from './components/layout/Sidebar';
import { ExerciseView } from './components/exercise/ExerciseView';
import { PeriodicTable } from './components/periodic-table/PeriodicTable';
import { QuizView } from './components/quiz/QuizView';
import { GalleryView } from './components/ui/GalleryView';
import { TheoryView } from './components/theory/TheoryView';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight, ClipboardCheck } from 'lucide-react';
import { ScrollArea } from './components/ui/scroll-area';

const colloquiums = [colloquium2, colloquium3, colloquium4, colloquium5];

function App() {
  const [currentColloquiumId, setCurrentColloquiumId] = useState(colloquium2.id);
  const [currentExerciseId, setCurrentExerciseId] = useState(colloquium2.exercises[0].id);
  const [isPeriodicTableActive, setIsPeriodicTableActive] = useState(false);
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [isTheoryActive, setIsTheoryActive] = useState(false);
  const [currentTheoryUnit, setCurrentTheoryUnit] = useState<string | null>(null);
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
    setIsGalleryActive(false);
    setIsTheoryActive(false);
    setShowQuiz(false);
  };

  const handleShowGallery = (colId: number) => {
    setCurrentColloquiumId(colId);
    setIsGalleryActive(true);
    setIsPeriodicTableActive(false);
    setIsTheoryActive(false);
  };

  const handleSelectTheory = (unitKey: string) => {
    setCurrentTheoryUnit(unitKey);
    setIsTheoryActive(true);
    setIsPeriodicTableActive(false);
    setIsGalleryActive(false);
    setShowQuiz(false);
  };

  const navigate = (delta: number) => {
    if (isTheoryActive) {
      const units = ['Unidad 2', 'Unidad 3', 'Unidad 4', 'Unidad 5'];
      const currentIndex = units.indexOf(currentTheoryUnit || '');
      const nextIndex = currentIndex + delta;
      if (nextIndex >= 0 && nextIndex < units.length) {
        setCurrentTheoryUnit(units[nextIndex]);
      }
      return;
    }

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
    <div className="flex h-screen w-full bg-slate-100 overflow-hidden">
      <Sidebar 
        colloquiums={colloquiums}
        currentColloquiumId={currentColloquiumId}
        currentExerciseId={currentExerciseId}
        onSelectExercise={handleSelectExercise}
        onShowPeriodicTable={() => {
          setIsPeriodicTableActive(true);
          setIsGalleryActive(false);
          setIsTheoryActive(false);
        }}
        onShowGallery={handleShowGallery}
        onSelectTheory={handleSelectTheory}
        isPeriodicTableActive={isPeriodicTableActive}
        isGalleryActive={isGalleryActive}
        isTheoryActive={isTheoryActive}
        currentTheoryUnit={currentTheoryUnit}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <ScrollArea className="flex-1">
          <div className="p-8">
            {isPeriodicTableActive ? (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <PeriodicTable elements={elements} />
              </div>
            ) : isGalleryActive ? (
              <GalleryView 
                images={currentColloquium.images || []} 
                colloquiumName={currentColloquium.name}
                onClose={() => setIsGalleryActive(false)}
              />
            ) : isTheoryActive && currentTheoryUnit ? (
              <TheoryView 
                unit={theoryData[currentTheoryUnit]} 
              />
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

        {!isPeriodicTableActive && !isGalleryActive && (
          <footer className="h-20 bg-slate-50/80 backdrop-blur-md border-t border-slate-200 px-8 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.03)]">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              disabled={
                isTheoryActive 
                  ? currentTheoryUnit === 'Unidad 2'
                  : (currentColloquiumId === colloquiums[0].id && currentExerciseIndex === 0)
              }
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>

            <div className="text-sm font-medium text-slate-500">
              {isTheoryActive ? (
                `Unidad ${(['Unidad 2', 'Unidad 3', 'Unidad 4', 'Unidad 5'].indexOf(currentTheoryUnit || '') + 2)} de 5`
              ) : (
                `Ejercicio ${currentExerciseIndex + 1} de ${currentColloquium.exercises.length}`
              )}
            </div>

            <Button 
              variant="ghost" 
              onClick={() => navigate(1)}
              disabled={
                isTheoryActive
                  ? currentTheoryUnit === 'Unidad 5'
                  : (currentColloquiumId === colloquiums[colloquiums.length-1].id && currentExerciseIndex === currentColloquium.exercises.length - 1)
              }
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
