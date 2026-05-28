import { useState, useMemo } from 'react';
import { colloquium2 } from './data/colloquiums/colloquium-2';
import { colloquium3 } from './data/colloquiums/colloquium-3';
import { colloquium4 } from './data/colloquiums/colloquium-4';
import { colloquium5 } from './data/colloquiums/colloquium-5';
import { exam1 } from './data/exams/exam-1';
import { exam2 } from './data/exams/exam-2';
import { theoryData } from './data/theory';
import { elements } from './data/elements';
import { Sidebar } from './components/layout/Sidebar';
import { ExerciseView } from './components/exercise/ExerciseView';
import { PeriodicTable } from './components/periodic-table/PeriodicTable';
import { QuizView } from './components/quiz/QuizView';
import { GalleryView } from './components/ui/GalleryView';
import { TheoryView } from './components/theory/TheoryView';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight, ClipboardCheck, Menu, FlaskConical } from 'lucide-react';
import { ScrollArea } from './components/ui/scroll-area';

const colloquiums = [colloquium2, colloquium3, colloquium4, colloquium5];
const exams = [exam1, exam2];

function App() {
  const [currentColloquiumId, setCurrentColloquiumId] = useState(colloquium2.id);
  const [currentExerciseId, setCurrentExerciseId] = useState(colloquium2.exercises[0].id);
  const [isPeriodicTableActive, setIsPeriodicTableActive] = useState(false);
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [isTheoryActive, setIsTheoryActive] = useState(false);
  const [isExamsActive, setIsExamsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTheoryUnit, setCurrentTheoryUnit] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const currentColloquium = useMemo(() => {
    const list = isExamsActive ? exams : colloquiums;
    return list.find(c => c.id === currentColloquiumId) || list[0];
  }, [currentColloquiumId, isExamsActive]);

  const currentExerciseIndex = useMemo(() => 
    currentColloquium.exercises.findIndex(ex => ex.id === currentExerciseId),
  [currentColloquium, currentExerciseId]);

  const currentExercise = currentColloquium.exercises[currentExerciseIndex];

  const handleSelectExercise = (colId: number, exId: number, isExam: boolean = false) => {
    setIsExamsActive(isExam);
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
    setIsExamsActive(false);
    setShowQuiz(false);
  };

  const navigate = (delta: number) => {
    if (isTheoryActive) {
      const units = ['Repaso parcial N° 1', 'Unidad 2', 'Unidad 3', 'Unidad 4', 'Unidad 5'];
      const currentIndex = units.indexOf(currentTheoryUnit || '');
      const nextIndex = currentIndex + delta;
      if (nextIndex >= 0 && nextIndex < units.length) {
        setCurrentTheoryUnit(units[nextIndex]);
      }
      return;
    }

    let newIndex = currentExerciseIndex + delta;
    const currentList = isExamsActive ? exams : colloquiums;
    
    if (newIndex >= 0 && newIndex < currentColloquium.exercises.length) {
      setCurrentExerciseId(currentColloquium.exercises[newIndex].id);
      setShowQuiz(false);
    } else {
      const colIndex = currentList.findIndex(c => c.id === currentColloquiumId);
      const nextColIndex = colIndex + (delta > 0 ? 1 : -1);
      
      if (nextColIndex >= 0 && nextColIndex < currentList.length) {
        const nextCol = currentList[nextColIndex];
        setCurrentColloquiumId(nextCol.id);
        setCurrentExerciseId(delta > 0 ? nextCol.exercises[0].id : nextCol.exercises[nextCol.exercises.length - 1].id);
        setShowQuiz(false);
      }
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-100 overflow-hidden relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        colloquiums={colloquiums}
        exams={exams}
        currentColloquiumId={currentColloquiumId}
        currentExerciseId={currentExerciseId}
        onSelectExercise={handleSelectExercise}
        onShowPeriodicTable={() => {
          setIsPeriodicTableActive(true);
          setIsGalleryActive(false);
          setIsTheoryActive(false);
          setIsExamsActive(false);
        }}
        onShowGallery={handleShowGallery}
        onSelectTheory={handleSelectTheory}
        onClose={() => setIsSidebarOpen(false)}
        isPeriodicTableActive={isPeriodicTableActive}
        isGalleryActive={isGalleryActive}
        isTheoryActive={isTheoryActive}
        isExamsActive={isExamsActive}
        isMobileOpen={isSidebarOpen}
        currentTheoryUnit={currentTheoryUnit}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between shrink-0 z-30">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-slate-600" />
          </Button>
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-blue-500" />
            <span className="font-black text-slate-800 tracking-tighter">QUÍMICA</span>
          </div>
          <div className="w-10" />
        </div>

        <ScrollArea className="flex-1 w-full">
          <div className="p-4 sm:p-8 min-w-0">
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
                <div className="mb-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-4">
                     {isExamsActive ? "Modo Simulacro de Examen" : "Modo Práctica Guiada"}
                   </div>
                   <h1 className="text-xl sm:text-2xl font-black text-slate-800">{currentColloquium.name}</h1>
                </div>

                <ExerciseView 
                  exercise={currentExercise} 
                  theory={theoryData[currentExercise.category]}
                />
                
                <div className="max-w-4xl mx-auto px-4 mb-12">
                  {!showQuiz ? (
                    <Button 
                      variant="outline" 
                      className="w-full h-16 text-base sm:text-lg border-2 border-dashed border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 gap-3"
                      onClick={() => setShowQuiz(true)}
                    >
                      <ClipboardCheck className="h-5 w-5 sm:h-6 sm:w-6" />
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
          <footer className="h-20 bg-slate-50/80 backdrop-blur-md border-t border-slate-200 px-4 sm:px-8 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.03)]">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              disabled={
                isTheoryActive 
                  ? currentTheoryUnit === 'Repaso parcial N° 1'
                  : (currentColloquiumId === (isExamsActive ? exams[0].id : colloquiums[0].id) && currentExerciseIndex === 0)
              }
              className="gap-1 sm:gap-2 px-2 sm:px-4"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden xs:inline">Anterior</span>
            </Button>

            <div className="text-[10px] sm:text-sm font-medium text-slate-500">
              {isTheoryActive ? (
                `Sección ${(['Repaso parcial N° 1', 'Unidad 2', 'Unidad 3', 'Unidad 4', 'Unidad 5'].indexOf(currentTheoryUnit || '') + 1)} de 5`
              ) : (
                `Ej. ${currentExerciseIndex + 1} de ${currentColloquium.exercises.length}`
              )}
            </div>

            <Button 
              variant="ghost" 
              onClick={() => navigate(1)}
              disabled={
                isTheoryActive
                  ? currentTheoryUnit === 'Unidad 5'
                  : (currentColloquiumId === (isExamsActive ? exams[exams.length-1].id : colloquiums[colloquiums.length-1].id) && currentExerciseIndex === currentColloquium.exercises.length - 1)
              }
              className="gap-1 sm:gap-2 px-2 sm:px-4"
            >
              <span className="hidden xs:inline">Siguiente</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </footer>
        )}
      </main>
    </div>
  );
}

export default App;
