import { Question } from '../../types/quiz';

export const utLevel2Part30: Question[] = [
  {
    id: '88',
    themeId: '1',
    levelId: '1-2',
    text: 'Lors d\'un contrôle ultrasonore, l\'atténuation d\'une onde dépend principalement de :',
    options: [
      'La fréquence de l\'onde et des propriétés du matériau',
      'L\'angle d\'incidence uniquement',
      'La température ambiante uniquement',
      'L\'épaisseur du matériau uniquement'
    ],
    correctAnswer: 0,
    explanation: 'Les matériaux denses et hétérogènes provoquent une forte atténuation, qui augmente également avec la fréquence de l\'onde.'
  },
  {
    id: '89',
    themeId: '1',
    levelId: '1-2',
    text: 'Les ultrasons peuvent être utilisés pour :',
    options: [
      'Mesurer l\'épaisseur de parois minces',
      'Inspecter les soudures pour détecter des fissures',
      'Détecter les porosités dans les métaux',
      'Toutes les réponses ci-dessus'
    ],
    correctAnswer: 3,
    explanation: 'Les ultrasons ont une large gamme d\'applications, allant de la mesure de l\'épaisseur à l\'inspection des défauts internes.'
  },
  {
    id: '90',
    themeId: '1',
    levelId: '1-2',
    text: 'Une onde ultrasonore subit une réflexion totale lorsqu\'elle rencontre une interface entre deux matériaux ayant :',
    options: [
      'Une faible différence d\'impédance acoustique',
      'Une grande différence d\'impédance acoustique',
      'Une même densité',
      'Une fréquence d\'onde différente'
    ],
    correctAnswer: 1,
    explanation: 'Une grande différence d\'impédance acoustique entre deux matériaux conduit à une réflexion totale de l\'onde incidente.'
  },
  {
    id: '91',
    themeId: '1',
    levelId: '1-2',
    text: 'Le couplage acoustique est essentiel en contrôle ultrasonore pour :',
    options: [
      'Réduire l\'intensité des ondes réfléchies',
      'Maximiser la transmission des ondes ultrasonores dans le matériau',
      'Stabiliser la fréquence des ondes émises',
      'Éliminer les réflexions parasites'
    ],
    correctAnswer: 1,
    explanation: 'Un bon couplage acoustique garantit que les ondes ultrasonores passent efficacement du transducteur au matériau testé.'
  }
];