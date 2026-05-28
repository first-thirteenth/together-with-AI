export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
}
export interface Quiz {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
}