import { Question } from '../../types/quiz';

export const utLevel2Part33: Question[] = [
  {
    id: '98',
    themeId: '1',
    levelId: '1-2',
    text: 'L\'impédance acoustique d\'un matériau est définie comme :',
    options: [
      'Le produit de la masse volumique et de la vitesse du son dans le matériau',
      'La somme des fréquences des ondes incidentes et réfléchies',
      'Le rapport entre l\'énergie réfléchie et l\'énergie transmise',
      'Une mesure de la rigidité du matériau'
    ],
    correctAnswer: 0,
    explanation: 'L\'impédance acoustique est une propriété intrinsèque du matériau qui détermine comment les ondes sonores interagissent avec celui-ci.'
  },
  {
    id: '99',
    themeId: '1',
    levelId: '1-2',
    text: 'La zone de Fresnel est importante pour :',
    options: [
      'Maximiser l\'énergie du faisceau dans la région proche',
      'Assurer une dispersion homogène du faisceau',
      'Éviter les réflexions multiples dans le matériau',
      'Réduire les interférences au-delà du point focal'
    ],
    correctAnswer: 0,
    explanation: 'La zone de Fresnel est la région proche du transducteur où les ondes interfèrent constructivement, concentrant l\'énergie.'
  },
  {
    id: '100',
    themeId: '1',
    levelId: '1-2',
    text: 'Les défauts parallèles à l\'axe de propagation d\'une onde ultrasonore sont :',
    options: [
      'Facilement détectés grâce à l\'intensité de leur écho',
      'Difficiles à détecter, car ils réfléchissent peu d\'énergie vers le transducteur',
      'Invisibles, car ils ne produisent pas d\'écho',
      'Détectés uniquement par les ondes transversales'
    ],
    correctAnswer: 1,
    explanation: 'Les défauts parallèles ne renvoient pas directement les ondes vers le transducteur, rendant leur détection plus difficile.'
  }
];