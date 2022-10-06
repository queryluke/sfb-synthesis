export const Gwaien = {
  id: 'gwaien',
  name: 'Gwaien',
  avatar: '/img/gwaien.jpg',
  cards: [
    {
      type: 'hero',
      hp: 6
    },
    {
      name: 'Flamespear',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      attack: 3,
      range: {
        min: {
          min: 2,
          max: 3,
          probability: ['levelUp']
        },
        max: {
          min: 5,
          max: 6,
          probability: ['levelUp']
        },
        direct: true
      },
      targets: 1,
      push: 1
    },
    {
      name: 'Fireball',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      attack: 3,
      range: {
        min: {
          min: 1,
          max: 2,
          probability: ['levelUp']
        },
        max: {
          min: 3,
          max: 4,
          probability: ['levelUp']
        },
        direct: false
      },
      targets: 1,
      directDamage: {
        min: 0,
        max: 8,
        incrementalProbability: 'adjacentEnemy',
        increment: 2
      },
      friendlyFire: true
    },
    {
      name: 'Chain Lightning',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      attack: 3,
      range: {
        min: {
          min: 1,
          max: 2,
          probability: ['levelUp']
        },
        max: {
          min: 3,
          max: 4,
          probability: ['levelUp']
        },
        direct: true
      },
      targets: 1,
      directDamage: {
        min: 2,
        max: 2,
        probability: ['enemyWithinTwoHexes', 'damageDealt']
      }
    },
    {
      name: 'Arcane Shield',
      magic: 'creation',
      type: 'reaction',
      armor: {
        min: 1,
        max: 3,
        probability: ['notAdjacentEnemy']
      }
    },
    {
      name: 'Teleport',
      magic: 'manipulation',
      type: 'skill',
      jump: 4
    },
    {
      name: 'Ignite',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      attack: 2,
      range: {
        min: 0,
        max: {
          min: 2,
          max: 3,
          probability: ['levelUp']
        },
        direct: false
      },
      attackBonus: {
        min: 2,
        max: 4
      }
    }
  ]
}
