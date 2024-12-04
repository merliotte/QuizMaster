import { Question } from '../../types/quiz';

export const utLevel2Part14: Question[] = [
  {
    id: '40',
    themeId: '1',
    levelId: '1-2',
    text: 'La focalisation dynamique en contrôle multiéléments permet :',
    options: [
      'D\'augmenter la vitesse de balayage',
      'D\'améliorer la résolution à différentes profondeurs',
      'De réduire le bruit de fond',
      'D\'éliminer les échos parasites'
    ],
    correctAnswer: 1,
    explanation: 'La focalisation dynamique permet d\'optimiser la résolution de l\'image à différentes profondeurs en ajustant les lois de retard.'
  },
  {
    id: '41',
    themeId: '1',
    levelId: '1-2',
    text: 'L\'effet piézoélectrique inverse est utilisé pour :',
    options: [
      'La réception des ondes ultrasonores',
      'La génération des ondes ultrasonores',
      'L\'amplification du signal',
      'La focalisation du faisceau'
    ],
    correctAnswer: 1,
    explanation: 'L\'effet piézoélectrique inverse convertit l\'énergie électrique en vibrations mécaniques pour générer les ondes ultrasonores.'
  },
  {
    id: '42',
    themeId: '1',
    levelId: '1-2',
    text: 'La divergence du faisceau ultrasonore est :',
    options: [
      'Inversement proportionnelle à la fréquence',
      'Proportionnelle à la fréquence',
      'Indépendante de la fréquence',
      'Proportionnelle au carré de la fréquence'
    ],
    correctAnswer: 0,
    explanation: 'Plus la fréquence est élevée, plus le faisceau est directif et moins il diverge.'
  }
];