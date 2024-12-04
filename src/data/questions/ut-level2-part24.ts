import { Question } from '../../types/quiz';

export const utLevel2Part24: Question[] = [
  {
    id: '70',
    themeId: '1',
    levelId: '1-2',
    text: 'La technique de reconstruction FMC (Full Matrix Capture) permet :',
    options: [
      'D\'obtenir une image en temps réel',
      'De stocker tous les signaux élémentaires',
      'De réduire le volume de données',
      'D\'augmenter la vitesse d\'inspection'
    ],
    correctAnswer: 1,
    explanation: 'La FMC enregistre tous les signaux élémentaires possibles entre chaque paire d\'éléments émetteur-récepteur.'
  },
  {
    id: '71',
    themeId: '1',
    levelId: '1-2',
    text: 'Le phénomène de conversion de mode à une interface est maximum pour :',
    options: [
      'Une incidence normale',
      'L\'angle critique longitudinal',
      'L\'angle critique transversal',
      'Une incidence rasante'
    ],
    correctAnswer: 1,
    explanation: 'La conversion de mode est maximale à l\'angle critique longitudinal où l\'onde longitudinale réfractée devient rasante.'
  },
  {
    id: '72',
    themeId: '1',
    levelId: '1-2',
    text: 'La technique TFM (Total Focusing Method) permet :',
    options: [
      'D\'améliorer la résolution spatiale',
      'De réduire le temps d\'acquisition',
      'D\'augmenter la puissance d\'émission',
      'De simplifier le traitement des données'
    ],
    correctAnswer: 0,
    explanation: 'La TFM améliore la résolution spatiale en focalisant numériquement en tous points de la zone d\'intérêt.'
  }
];