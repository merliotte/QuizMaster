import { Question } from '../../types/quiz';

export const utLevel2Part27: Question[] = [
  {
    id: '79',
    themeId: '1',
    levelId: '1-2',
    text: 'Lors du contrôle par immersion, l\'utilisation d\'une cuve remplie d\'eau permet de :',
    options: [
      'Réduire l\'atténuation des ondes ultrasonores',
      'Augmenter la fréquence de l\'onde émise',
      'Améliorer le couplage acoustique entre le transducteur et la pièce',
      'Limiter les réflexions multiples dans le matériau'
    ],
    correctAnswer: 2,
    explanation: 'L\'eau agit comme un couplant parfait, éliminant les poches d\'air et facilitant la transmission des ondes ultrasonores.'
  },
  {
    id: '80',
    themeId: '1',
    levelId: '1-2',
    text: 'Lorsque l\'angle critique est atteint dans une interface solide/liquide, l\'onde réfractée devient :',
    options: [
      'Une onde longitudinale',
      'Une onde transversale',
      'Une onde réfléchie',
      'Une onde de surface'
    ],
    correctAnswer: 2,
    explanation: 'À l\'angle critique, l\'onde incidente est entièrement réfléchie, et aucune onde réfractée n\'est observée dans le second milieu.'
  },
  {
    id: '81',
    themeId: '1',
    levelId: '1-2',
    text: 'Le contrôle des pièces épaisses avec des ultrasons nécessite :',
    options: [
      'Une fréquence élevée pour une meilleure pénétration',
      'Une fréquence basse pour réduire l\'atténuation',
      'Un angle critique élevé pour éviter les réflexions multiples',
      'Une intensité d\'onde réduite pour minimiser les interférences'
    ],
    correctAnswer: 1,
    explanation: 'Les fréquences basses permettent une meilleure pénétration dans les matériaux épais en limitant l\'atténuation des ondes ultrasonores.'
  }
];