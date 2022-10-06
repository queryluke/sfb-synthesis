export const JacquesLeBeau = {
  id: 'jacqueslebeau',
  name: 'Jacques le Beau',
  avatar: '/img/jacques_le_beau.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 6,
        max: 7,
        probability: ['levelUp']
      },
      armor: 1,
      readyCore: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Coup de Grâce',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      attack: {
        min: 2,
        max: 12,
        incrementalProbability: 'cardInDiscard',
        increment: 2
      },
      dash: 2
    },
    {
      name: 'A Pirate\'s Life For Me',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      draw: 1,
      selfHeal: 1,
      plan: {
        min: 2,
        max: 2,
        probability: ['hasReadyCore']
      }
    },
    {
      name: 'En-Garde',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 3,
      attack: {
        min: 2,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      }
    },
    {
      name: 'Parrying Blow',
      magic: 'destruction',
      type: 'reaction',
      armor: {
        min: 1,
        max: 4,
        incrementalProbability: 'cardInHand',
        increment: 1
      },
      discardCost: 3
    },
    {
      name: 'Swift Sword Cut',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      swoop: 3,
      directDamage: {
        min: 0,
        max: 3
      },
      duplicate: true
    },
    {
      name: 'Riposte',
      magic: 'manipulation',
      type: 'reaction',
      armor: 1,
      directDamage: {
        min: 0,
        max: 3,
        incrementalProbability: 'cardInHand',
        increment: 1
      },
      discardCost: 3
    }
  ]
}
