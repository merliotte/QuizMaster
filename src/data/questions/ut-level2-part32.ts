import { Question } from '../../types/quiz';

export const utLevel2Part32: Question[] = [
  {
    id: '95',
    themeId: '1',
    levelId: '1-2',
    text: 'En contrôle par immersion, l\'angle d\'incidence est ajusté pour :',
    options: [
      'Minimiser l\'atténuation des ondes dans l\'eau',
      'Réduire les interférences parasites',
      'Générer des ondes transversales dans le matériau testé',
      'Augmenter la réflexion des ondes'
    ],
    correctAnswer: 2,
    explanation: 'L\'angle d\'incidence est ajusté pour atteindre l\'angle critique nécessaire à la génération d\'ondes transversales.'
  },
  {
    id: '96',
    themeId: '1',
    levelId: '1-2',
    text: 'La longueur d\'onde d\'une onde ultrasonore dans un matériau est :',
    options: [
      'Inversement proportionnelle à la fréquence de l\'onde',
      'Directement proportionnelle à la fréquence de l\'onde',
      'Dépendante uniquement de la densité du matériau',
      'Indépendante de la vitesse du son dans le matériau'
    ],
    correctAnswer: 0,
    explanation: 'La longueur d\'onde est donnée par la relation λ=v/f, où v est la vitesse et f la fréquence.'
  },
  {
    id: '97',
    themeId: '1',
    levelId: '1-2',
    text: 'Une discontinuité de petite taille produit un écho :',
    options: [
      'Faible, car elle réfléchit peu d\'énergie',
      'Fort, car elle concentre l\'énergie ultrasonore',
      'Inexistant, car elle ne peut pas être détectée',
      'Moyennement fort, quelle que soit sa taille'
    ],
    correctAnswer: 0,
    explanation: 'Une petite discontinuité ne capte et ne renvoie qu\'une fraction de l\'énergie incidente, produisant un écho faible.'
  }
];