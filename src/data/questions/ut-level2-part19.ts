import { Question } from '../../types/quiz';

export const utLevel2Part19: Question[] = [
  {
    id: '55',
    themeId: '1',
    levelId: '1-2',
    text: 'La correction TCG (Time Corrected Gain) est utilisée pour :',
    options: [
      'Compenser l\'atténuation du signal avec la distance',
      'Améliorer la résolution temporelle',
      'Réduire les échos parasites',
      'Augmenter la fréquence d\'échantillonnage'
    ],
    correctAnswer: 0,
    explanation: 'La correction TCG permet de compenser automatiquement l\'atténuation du signal ultrasonore en fonction de la distance parcourue.'
  },
  {
    id: '56',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un contrôle par immersion, la distance focale effective est :',
    options: [
      'Plus courte que la distance focale nominale',
      'Plus longue que la distance focale nominale',
      'Égale à la distance focale nominale',
      'Indépendante de la distance focale nominale'
    ],
    correctAnswer: 1,
    explanation: 'En immersion, la distance focale effective est plus longue que la distance focale nominale en raison de la réfraction à l\'interface eau-pièce.'
  },
  {
    id: '57',
    themeId: '1',
    levelId: '1-2',
    text: 'Le phénomène de diffusion des ultrasons est plus important lorsque :',
    options: [
      'La taille des grains est proche de la longueur d\'onde',
      'La fréquence est très basse',
      'L\'angle d\'incidence est nul',
      'La température est élevée'
    ],
    correctAnswer: 0,
    explanation: 'La diffusion est maximale quand la taille des grains du matériau est comparable à la longueur d\'onde des ultrasons.'
  }
];