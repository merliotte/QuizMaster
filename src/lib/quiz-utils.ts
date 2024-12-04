import { Question } from '../types/quiz';

/**
 * Mélange un tableau de questions de manière aléatoire
 */
export function shuffleQuestions(questions: Question[]): Question[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Sélectionne un nombre spécifique de questions aléatoires
 */
export function selectRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = shuffleQuestions(questions);
  return shuffled.slice(0, count);
}