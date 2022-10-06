export const Taze = {
  id: 'taze',
  name: 'Taze',
  avatar: '/img/taze.jpg',
  cards: [
    {
      type: 'hero',
      hp: 9,
      directDamage: {
        min: 0,
        max: 1,
        probability: ['adjacentEnemy', 'cardInHand']
      }
    },
    {
      name: 'Bludgeon',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 2,
        direct: false
      },
      targets: 1,
      attack: 2,
      stun: 1
    },
    {
      name: 'Charge',
      magic: 'creation',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: {
        min: 1,
        max: 4
      },
      dash: 3
    },
    {
      name: 'Rodeo',
      magic: 'destruction',
      type: 'skill',
      jump: 2,
      directDamage: {
        min: 0,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 2
      }
    },
    {
      name: 'Rush',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      dash: 2
    },
    {
      name: 'Momentum',
      magic: 'manipulation',
      type: 'reaction',
      armor: 1,
      dash: 1
    },
    {
      name: 'Finishing Blow',
      magic: 'destruction',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 3,
      ignoreDefense: { probability: ['bloodied'] },
      dash: 2
    }
  ]
}
