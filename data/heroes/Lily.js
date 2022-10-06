export const Lily = {
  id: 'lily',
  name: 'Lil\'Y',
  avatar: '/img/lily.jpg',
  cards: [
    {
      type: 'hero',
      hp: 6,
      armor: {
        min: 0,
        max: 1,
        probability: ['levelUp']
      },
      immunities: [
        { type: 'attack', probability: ['levelUp', 'adjacentAlly'], target: 'self' }
      ]
    },
    {
      name: 'Twin Blades',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 3,
        direct: true
      },
      attack: 1,
      double: true,
      targets: 1,
      duplicate: true
    },
    {
      name: 'Vanish',
      magic: 'manipulation',
      type: 'reaction',
      armor: 1,
      anywhere: {
        min: 0,
        max: 1
      }
    },
    {
      name: 'Didn\'t See That Comin\', Eh?',
      magic: 'creation',
      type: 'reaction',
      armor: 1,
      draw: 2,
      additionalReaction: true
    },
    {
      name: 'Through the Shadows',
      magic: 'manipulation',
      type: 'skill',
      anywhere: {
        min: 1,
        max: 2
      },
      plan: 1
    },
    {
      name: 'Flank',
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
        max: 5,
        probability: ['adjacentAlly']
      },
      ignoreDefense: {},
      dash: 3
    },
    {
      name: 'Snatch',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      discardRandom: 1,
      draw: 1,
      dash: 2
    }
  ]
}
