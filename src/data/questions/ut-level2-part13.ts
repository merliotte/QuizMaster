import { Question } from '../../types/quiz';

export const utLevel2Part13: Question[] = [
  {
    id: '37',
    themeId: '1',
    levelId: '1-2',
    text: 'Un manque de parallélisme entre la face d\'entrée et le fond d\'une pièce :',
    options: [
      'Ne permet pas le contrôle par écho',
      'Signifie la présence de porosités dans ce produit',
      'Peut entraîner la disparition de l\'écho de fond',
      'Rend plus facile la détection des défauts sensiblement parallèles à la face d\'entrée'
    ],
    correctAnswer: 2,
    explanation: 'Le manque de parallélisme peut causer la déviation du faisceau ultrasonore, entraînant la perte de l\'écho de fond.'
  },
  {
    id: '38',
    themeId: '1',
    levelId: '1-2',
    text: 'La zone morte d\'un traducteur ultrasonore est :',
    options: [
      'La zone où le faisceau est le plus large',
      'La zone proche de la surface où les défauts ne peuvent pas être détectés',
      'La zone où le faisceau est le plus étroit',
      'La zone où l\'atténuation est maximale'
    ],
    correctAnswer: 1,
    explanation: 'La zone morte est la région proche de la surface où les échos des défauts ne peuvent pas être distingués de l\'écho d\'entrée.'
  },
  {
    id: '39',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un contrôle par immersion, l\'angle critique est :',
    options: [
      'L\'angle d\'incidence maximal avant réflexion totale',
      'L\'angle de réfraction optimal',
      'L\'angle d\'incidence minimal',
      'L\'angle de divergence du faisceau'
    ],
    correctAnswer: 0,
    explanation: 'L\'angle critique est l\'angle d\'incidence au-delà duquel il y a réflexion totale à l\'interface entre deux milieux.'
  }
];