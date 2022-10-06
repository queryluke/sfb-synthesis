export const Sulka = {
  id: 'sulka',
  name: 'Sulka',
  avatar: '/img/sulka.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 7,
        max: 8,
        probability: ['levelUp']
      },
      draw: {
        min: 1,
        max: 1,
        probability: ['levelUp', 'playChampionCardOfType']
      }
    },
    {
      name: 'Spirit Slither',
      magic: 'creation',
      type: 'skill',
      jump: 3,
      defenseDown: {
        min: 2,
        max: 6,
        incrementalProbability: 'adjacentEnemy',
        increment: 2
      }
    },
    {
      name: 'Mind Control',
      magic: 'destruction',
      type: 'skill',
      movement: 2,
      force: 2,
      mill: 1
    },
    {
      name: 'Life Drain',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 3,
        direct: true
      },
      targets: 1,
      attack: 2,
      lifesteal: true,
      heal: {
        key: 'attackScore'
      }
    },
    {
      name: 'Effigy',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      force: 1,
      stun: 1
    },
    {
      name: 'Curse',
      magic: 'creation',
      type: 'reaction',
      armor: 2,
      root: 1
    },
    {
      name: 'Darting Strikes',
      magic: 'destruction',
      type: 'attack',
      range: {
        min: 0,
        max: 3,
        direct: false
      },
      targets: 1,
      attack: 2,
      double: true
    }
  ]
}
