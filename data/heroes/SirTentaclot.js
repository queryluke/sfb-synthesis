export const SirTentaclot = {
  id: 'sirtentaclot',
  name: 'Sir Tentaclot',
  avatar: '/img/sir_tentaclot.jpg',
  cards: [
    {
      type: 'hero',
      armor: {
        min: 0,
        max: 1,
        probability: ['levelUp']
      },
      hp: 7,
      immunities: [{ type: 'displacement', target: 'self', probability: ['adjacentStatue'] }]
    },
    {
      name: 'Mask of Fear',
      magic: 'destruction',
      type: 'reaction',
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
      name: 'One-Eighth of My Strength',
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
      name: 'Mind Cloud',
      magic: 'creation',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 2,
        direct: false
      },
      force: 1,
      discardRandom: 1
    },
    {
      name: 'All Eight Tentacles',
      magic: 'creation',
      type: 'attack',
      movement: 1,
      range: {
        min: 2,
        max: 3,
        direct: true
      },
      targets: 1,
      attack: 2,
      double: true,
      pull: 2
    },
    {
      name: 'Tentacle Strike',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      attack: 2,
      directDamage: {
        min: 0,
        max: 2,
        probability: ['damageDealt']
      }
    },
    {
      name: 'Oh, R\'Lyeh?',
      magic: 'manipulation',
      type: 'skill',
      jump: 3,
      force: {
        min: 0,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      }
    }
  ]
}
