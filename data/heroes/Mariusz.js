export const Mariusz = {
  id: 'mariusz',
  name: 'Mariusz',
  avatar: '/img/mariusz.jpg',
  cards: [
    {
      type: 'hero',
      hp: 7,
      stun: 1
    },
    {
      name: 'A Cornered Beast',
      magic: 'creation',
      type: 'reaction',
      directDamage: {
        min: 0,
        max: 8,
        incrementalProbability: 'adjacentEnemy',
        increment: 2
      }
    },
    {
      name: 'Bone to Pick',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: {
        min: 2,
        max: 4,
        probability: ['bloodied']
      },
      lifesteal: { probability: ['bloodied'] },
      dash: {
        min: 0,
        max: 2,
        probability: ['bloodied']
      }
    },
    {
      name: 'Ravenous Bite',
      magic: 'manipulation',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 3,
      dash: 2,
      lifesteal: true
    },
    {
      name: 'Stalk the Prey',
      magic: 'manipulation',
      type: 'skill',
      anywhere: 1,
      stun: {
        min: 1,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      }
    },
    {
      name: 'Overpower',
      magic: 'creation',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      dash: 2,
      force: {
        min: 0,
        max: 1,
        probability: ['bloodied']
      },
      lifesteal: { probability: ['bloodied'] }
    },
    {
      name: 'Closing In',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      lifesteal: { probability: ['bloodied'] },
      double: { probability: ['bloodied'] },
      dash: 2
    }
  ]
}
