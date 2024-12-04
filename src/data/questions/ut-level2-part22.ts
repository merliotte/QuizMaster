import { Question } from '../../types/quiz';

export const utLevel2Part22: Question[] = [
  {
    id: '64',
    themeId: '1',
    levelId: '1-2',
    text: 'Le phénomène de réverbération multiple se produit principalement :',
    options: [
      'Dans les matériaux à grains fins',
      'Dans les pièces minces',
      'À l\'interface avec le couplant',
      'Dans les matériaux anisotropes'
    ],
    correctAnswer: 1,
    explanation: 'Les réverbérations multiples sont particulièrement présentes dans les pièces minces où les ondes rebondissent plusieurs fois entre les surfaces parallèles.'
  },
  {
    id: '65',
    themeId: '1',
    levelId: '1-2',
    text: 'La technique de l\'émission-réception séparée (pitch-catch) est particulièrement utile pour :',
    options: [
      'La détection des défauts proches de la surface',
      'L\'évaluation de la porosité',
      'La mesure d\'épaisseur',
      'L\'analyse de la structure des grains'
    ],
    correctAnswer: 0,
    explanation: 'La configuration pitch-catch permet une meilleure détection des défauts proches de la surface en éliminant la zone morte du traducteur émetteur.'
  },
  {
    id: '66',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un contrôle multiéléments, l\'apodisation consiste à :',
    options: [
      'Modifier la forme du faisceau',
      'Ajuster l\'amplitude des signaux émis',
      'Changer la fréquence d\'émission',
      'Varier la distance focale'
    ],
    correctAnswer: 1,
    explanation: 'L\'apodisation consiste à moduler l\'amplitude des signaux émis par chaque élément pour optimiser la forme du faisceau et réduire les lobes secondaires.'
  }
];