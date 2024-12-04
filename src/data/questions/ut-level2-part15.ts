import { Question } from '../../types/quiz';

export const utLevel2Part15: Question[] = [
  {
    id: '43',
    themeId: '1',
    levelId: '1-2',
    text: 'La résolution axiale d\'un traducteur ultrasonore dépend principalement :',
    options: [
      'De la fréquence et de la largeur de bande',
      'Du diamètre de l\'élément piézoélectrique',
      'De la distance focale',
      'De l\'angle d\'incidence'
    ],
    correctAnswer: 0,
    explanation: 'La résolution axiale est déterminée par la fréquence et la largeur de bande du traducteur, qui influencent la durée de l\'impulsion.'
  },
  {
    id: '44',
    themeId: '1',
    levelId: '1-2',
    text: 'L\'amortissement d\'un traducteur ultrasonore influence principalement :',
    options: [
      'La sensibilité',
      'La résolution',
      'La pénétration',
      'La directivité'
    ],
    correctAnswer: 1,
    explanation: 'L\'amortissement affecte la durée de l\'impulsion et donc la résolution du traducteur.'
  },
  {
    id: '45',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un contrôle en immersion, la distance focale :',
    options: [
      'Est indépendante du milieu de couplage',
      'Augmente avec la vitesse du son dans le milieu',
      'Diminue avec la vitesse du son dans le milieu',
      'Est proportionnelle à l\'angle d\'incidence'
    ],
    correctAnswer: 1,
    explanation: 'La distance focale augmente avec la vitesse du son dans le milieu de couplage selon les lois de la réfraction.'
  }
];