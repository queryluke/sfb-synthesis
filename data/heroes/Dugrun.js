export const Dugrun = {
  id: 'dugrun',
  name: 'Dugrun',
  avatar: '/img/dugrun.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 6,
        max: 7,
        probability: ['levelUp']
      },
      armor: 2,
      tank: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Knock Down',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      attackBonus: 2
    },
    {
      name: 'Onwards!',
      magic: 'creation',
      type: 'skill',
      draw: 1,
      movement: 1,
      dash: {
        min: 2,
        max: 3
      }
    },
    {
      name: 'Might Blow',
      magic: 'manipulation',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 1,
      push: 2,
      stun: {
        min: 1,
        max: 1,
        probability: ['damageFromPushPull']
      }
    },
    {
      name: 'Shield Slam',
      magic: 'manipulation',
      type: 'skill',
      movement: 1,
      dash: 2,
      push: {
        min: 0,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      }
    },
    {
      name: 'Blizzard',
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
      directDamage: {
        min: 0,
        max: 4,
        probability: ['damageDealt']
      }
    },
    {
      name: 'Hold Ground',
      magic: 'destruction',
      type: 'reaction',
      immunities: [{ type: 'displacement', target: 'ally' }]
    }
  ]
}
