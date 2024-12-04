import { Question } from '../../types/quiz';

export const utLevel2Part17: Question[] = [
  {
    id: '49',
    themeId: '1',
    levelId: '1-2',
    text: 'La sensibilité d\'un contrôle ultrasonore est principalement influencée par :',
    options: [
      'La fréquence du traducteur',
      'Le gain de l\'appareil',
      'Le type de couplant utilisé',
      'Toutes les réponses ci-dessus'
    ],
    correctAnswer: 3,
    explanation: 'La sensibilité dépend de multiples facteurs incluant la fréquence, le gain et le couplage acoustique.'
  },
  {
    id: '50',
    themeId: '1',
    levelId: '1-2',
    text: 'Dans un contrôle par immersion, le faisceau ultrasonore est :',
    options: [
      'Plus focalisé qu\'en contact direct',
      'Moins atténué qu\'en contact direct',
      'Plus divergent qu\'en contact direct',
      'Plus rapide qu\'en contact direct'
    ],
    correctAnswer: 1,
    explanation: 'L\'immersion permet une meilleure transmission des ultrasons et réduit l\'atténuation due aux variations de couplage.'
  },
  {
    id: '51',
    themeId: '1',
    levelId: '1-2',
    text: 'La technique TOFD est particulièrement efficace pour :',
    options: [
      'La détection des défauts volumiques',
      'Le dimensionnement des fissures',
      'L\'évaluation de la porosité',
      'La mesure d\'épaisseur'
    ],
    correctAnswer: 1,
    explanation: 'La technique TOFD (Time Of Flight Diffraction) est spécialement adaptée pour mesurer précisément la hauteur des fissures.'
  }
];