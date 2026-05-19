export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface Quiz {
  question: string;
  options: QuizOption[];
}

export interface Step {
  t: string; // Title
  d: string; // Description
}

export interface Exercise {
  id: number;
  category: string;
  title: string;
  statement: string;
  steps: Step[];
  quiz: Quiz;
}

export interface Colloquium {
  id: number;
  name: string;
  exercises: Exercise[];
}

export interface TheoryEntry {
  title: string;
  content: string;
  svg: string;
}

export interface PeriodicElement {
  number: number;
  symbol: string;
  name: string;
  mass: string;
  oxidationStates?: string;
  electronConfiguration: string;
  col: number;
  row: number;
  type: ElementType;
}

export type ElementType =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';
