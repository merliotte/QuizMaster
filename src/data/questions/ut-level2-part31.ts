import { Question } from '../../types/quiz';

export const utLevel2Part31: Question[] = [
  {
    id: '92',
    themeId: '1',
    levelId: '1-2',
    text: 'Le choix d\'une fréquence ultrasonore élevée est particulièrement adapté pour :',
    options: [
      'Une meilleure pénétration dans des matériaux épais',
      'Une meilleure détection des petits défauts',
      'La réduction des réflexions multiples',
      'La diminution de l\'atténuation dans les matériaux'
    ],
    correctAnswer: 1,
    explanation: 'Une fréquence élevée offre une longueur d\'onde plus courte, améliorant la détection des défauts de petite taille.'
  },
  {
    id: '93',
    themeId: '1',
    levelId: '1-2',
    text: 'Lorsqu\'une onde ultrasonore traverse une interface entre deux milieux de vitesses différentes, l\'angle de réfraction :',
    options: [
      'Est toujours égal à l\'angle d\'incidence',
      'Dépend des impédances acoustiques des deux milieux',
      'Dépend des vitesses dans les deux milieux',
      'Est indépendant de la fréquence'
    ],
    correctAnswer: 2,
    explanation: 'Selon la loi de Snell-Descartes, l\'angle de réfraction est fonction des vitesses des ondes dans les deux milieux.'
  },
  {
    id: '94',
    themeId: '1',
    levelId: '1-2',
    text: 'Les ondes de cisaillement ne se propagent pas dans :',
    options: [
      'Les liquides',
      'Les solides isotropes',
      'Les gaz',
      'Les milieux hétérogènes'
    ],
    correctAnswer: 0,
    explanation: 'Les ondes de cisaillement nécessitent une rigidité dans le milieu pour se propager, ce qui n\'est pas le cas dans les liquides.'
  }
];