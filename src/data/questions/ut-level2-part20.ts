import { Question } from '../../types/quiz';

export const utLevel2Part20: Question[] = [
  {
    id: '58',
    themeId: '1',
    levelId: '1-2',
    text: 'La technique de focalisation dynamique permet :',
    options: [
      'D\'augmenter la vitesse de balayage',
      'D\'optimiser la résolution à différentes profondeurs',
      'De réduire le bruit électronique',
      'D\'améliorer le couplage acoustique'
    ],
    correctAnswer: 1,
    explanation: 'La focalisation dynamique ajuste les lois de retard en temps réel pour maintenir une résolution optimale à différentes profondeurs.'
  },
  {
    id: '59',
    themeId: '1',
    levelId: '1-2',
    text: 'Le rapport signal sur bruit peut être amélioré par :',
    options: [
      'L\'augmentation de la fréquence',
      'La réduction de la bande passante',
      'L\'utilisation d\'un moyennage temporel',
      'La diminution de la puissance d\'émission'
    ],
    correctAnswer: 2,
    explanation: 'Le moyennage temporel permet de réduire le bruit aléatoire tout en préservant les signaux cohérents.'
  },
  {
    id: '60',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un contrôle multiéléments, le pas inter-éléments optimal est :',
    options: [
      'Une demi-longueur d\'onde',
      'Une longueur d\'onde',
      'Deux longueurs d\'onde',
      'Quatre longueurs d\'onde'
    ],
    correctAnswer: 0,
    explanation: 'Un pas d\'une demi-longueur d\'onde permet d\'éviter les lobes de réseau tout en maintenant une bonne résolution.'
  }
];