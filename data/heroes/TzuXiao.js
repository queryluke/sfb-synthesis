export const TzuXiao = {
  id: 'tzuxiao',
  name: 'Tzu Xiao',
  avatar: '/img/tzu_xiao.jpg',
  cards: [
    {
      type: 'hero',
      hp: 9,
      defenseDown: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      },
      ignoreDefense: { limit: 1, probability: ['levelUp'] }
    },
    {
      name: 'Flash of Jade',
      magic: 'destruction',
      type: 'skill',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 3,
      directDamage: {
        min: 0,
        max: 9,
        incrementalProbability: 'adjacentEnemy',
        increment: 3
      }
    },
    {
      name: 'Double Strike',
      magic: 'destruction',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      dash: 2,
      double: true
    },
    {
      name: 'Challenge',
      magic: 'manipulation',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      targets: 1,
      attack: 2,
      pull: 1
    },
    {
      name: 'Focus',
      magic: 'creation',
      type: 'skill',
      movement: 1,
      attackBonus: 1,
      movementBonus: 1
    },
    {
      name: 'Pounce',
      magic: 'creation',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 1,
      jump: 3,
      push: 1
    },
    {
      name: 'Revenge',
      magic: 'manipulation',
      type: 'reaction',
      reflectDamage: {
        min: 0,
        max: 6,
        probability: ['notOutOfAction']
      }
    }
  ]
}
