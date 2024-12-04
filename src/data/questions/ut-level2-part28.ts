import { Question } from '../../types/quiz';

export const utLevel2Part28: Question[] = [
  {
    id: '82',
    themeId: '1',
    levelId: '1-2',
    text: 'Une zone morte dans un contrôle ultrasonore est définie comme :',
    options: [
      'La région du matériau où aucune onde ne peut se propager',
      'Une région proche de la face d\'entrée où les échos ne sont pas détectés',
      'Une région où les ondes réfléchies se superposent aux ondes émises',
      'Une région où l\'intensité des ondes est trop faible pour être mesurée'
    ],
    correctAnswer: 1,
    explanation: 'La zone morte est causée par la proximité entre l\'émission et la réception des ondes, rendant difficile la détection des échos dans cette région.'
  },
  {
    id: '83',
    themeId: '1',
    levelId: '1-2',
    text: 'Les ondes guidées sont particulièrement utilisées pour :',
    options: [
      'Contrôler des structures longues comme des tubes ou des rails',
      'Inspecter les surfaces rugueuses des pièces',
      'Identifier les défauts dans les matériaux liquides',
      'Détecter les variations de température dans les matériaux'
    ],
    correctAnswer: 0,
    explanation: 'Les ondes guidées se propagent sur de longues distances et sont idéales pour l\'inspection des structures étendues comme les pipelines ou les rails.'
  },
  {
    id: '84',
    themeId: '1',
    levelId: '1-2',
    text: 'Une atténuation élevée dans un matériau est généralement causée par :',
    options: [
      'Une impédance acoustique trop faible',
      'Une fréquence ultrasonore basse',
      'Une structure granulaire importante ou des hétérogénéités internes',
      'Un couplant mal appliqué'
    ],
    correctAnswer: 2,
    explanation: 'Une structure granulaire ou des inclusions internes dispersent les ondes ultrasonores, augmentant ainsi l\'atténuation.'
  }
];