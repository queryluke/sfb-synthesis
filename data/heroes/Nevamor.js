export const Nevamor = {
  id: 'nevamor',
  name: 'Nevamor',
  avatar: 'img/nevamor.jpg',
  cards: [
    {
      type: 'hero',
      hp: 8,
      armor: 1,
      preventReactions: {
        min: 1,
        max: 1,
        probability: ['levelUp', 'adjacentEnemy']
      }
    },
    {
      name: 'Guiding Light',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      place: 1,
      attackBonus: 1
    },
    {
      name: 'Dark Envoy',
      magic: 'manipulation',
      type: 'attack',
      movement: 1,
      range: {
        min: 2,
        max: 3,
        direct: true
      },
      targets: 1,
      attack: 1,
      plan: 2
    },
    {
      name: 'Murder of Crows',
      magic: 'destruction',
      type: 'reaction',
      armor: 1,
      immunities: [{ type: 'postAttack', target: 'ally', probability: ['enemyWithinTwoHexes'] }]
    },
    {
      name: 'Soul Reave',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 2
      },
      attack: 2,
      lifesteal: true
    },
    {
      name: 'Nightmare',
      magic: 'manipulation',
      type: 'skill',
      movement: 1,
      swoop: 4,
      directDamage: {
        min: 0,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      },
      fear: {
        min: 0,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      }
    },
    {
      name: 'Grim Harvest',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: {
        min: 2,
        max: 4,
        probability: ['notAdjacentAlly']
      }
    }
  ]
}
