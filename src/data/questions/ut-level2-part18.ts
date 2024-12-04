import { Question } from '../../types/quiz';

export const utLevel2Part18: Question[] = [
  {
    id: '52',
    themeId: '1',
    levelId: '1-2',
    text: 'L\'effet de coin dans le contrôle des soudures est :',
    options: [
      'Un phénomène parasite à éviter',
      'Une aide à la détection des défauts en racine',
      'Un effet de diffraction pure',
      'Un effet de résonance'
    ],
    correctAnswer: 1,
    explanation: 'L\'effet de coin permet de détecter efficacement les défauts situés en racine de soudure grâce aux réflexions multiples.'
  },
  {
    id: '53',
    themeId: '1',
    levelId: '1-2',
    text: 'La résolution latérale d\'un traducteur dépend principalement :',
    options: [
      'De sa fréquence',
      'De son diamètre',
      'De son angle d\'incidence',
      'De son amortissement'
    ],
    correctAnswer: 1,
    explanation: 'Le diamètre du traducteur détermine la largeur du faisceau et donc la résolution latérale.'
  },
  {
    id: '54',
    themeId: '1',
    levelId: '1-2',
    text: 'Le contrôle en mode émission-réception séparées permet :',
    options: [
      'De réduire la zone morte',
      'D\'augmenter la pénétration',
      'D\'améliorer la résolution',
      'De diminuer l\'atténuation'
    ],
    correctAnswer: 0,
    explanation: 'L\'utilisation de deux traducteurs séparés permet de réduire la zone morte car l\'émission et la réception sont découplées.'
  }
];