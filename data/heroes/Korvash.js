export const Korvash = {
  id: 'korvash',
  name: 'Korvash',
  avatar: '/img/korvash.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 8,
        max: 9,
        probability: ['levelUp']
      }
    },
    {
      name: 'Chop',
      magic: 'destruction',
      type: 'attack',
      attack: {
        min: 2,
        max: 72,
        incrementalProbability: 'adjacentEnemy',
        increments: [8, 18, 32, 50, 72]
      },
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 6,
      ignoreDefense: { probability: ['bloodied', 'levelUp'] }
    },
    {
      name: 'Bloodcurdling Roar',
      magic: 'manipulation',
      type: 'reaction',
      armor: 2,
      immunities: [{ type: 'postAttack', probability: ['bloodied'], target: 'ally' }]
    },
    {
      name: 'Leaping Strike',
      magic: 'creation',
      type: 'attack',
      movement: 1,
      attack: 3,
      targets: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      jump: 2,
      ignoreDefense: { probability: ['bloodied', 'levelUp'] }
    },
    {
      name: 'Hell Hath No Fury',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 2,
        direct: false
      },
      attack: 3,
      targets: 1,
      force: {
        min: 0,
        max: 1,
        probability: ['bloodied']
      },
      ignoreDefense: { probability: ['bloodied', 'levelUp'] }
    },
    {
      name: 'Sap Strength',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      attack: {
        min: 2,
        max: 4,
        probability: ['bloodied']
      },
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      ignoreDefense: { probability: ['bloodied', 'levelUp'] }
    },
    {
      name: 'Shockwave',
      magic: 'manipulation',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      push: 1,
      stun: 1
    }
  ]
}
