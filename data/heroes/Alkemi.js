export const Alkemi = {
  id: 'alkemi',
  name: 'Al\'kemi',
  avatar: 'img/alkemi.jpg',
  cards: [
    {
      type: 'hero',
      hp: 6,
      freeCore: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Recipe for Disaster',
      magic: 'manipulation',
      type: 'skill',
      movement: 3,
      draw: 2,
      plan: 2
    },
    {
      name: 'Barrage',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 3,
      attack: 2,
      ignoreDefense: {}
    },
    {
      name: 'Acid Rain',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      directDamage: {
        min: 0,
        max: 7 // fixme...what is this probability/stat
      },
      friendlyFire: true
    },
    {
      name: 'Aqua Vitae',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      readyCore: 0.6 // fixme...what is the negative benefit of healing an opponent
    },
    {
      name: 'Alchemical Fire',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      readyCore: 0.8 // fixme...what is the negative benefic of an opponent drawing a card
    },
    {
      name: 'Up in Smoke',
      magic: 'destruction',
      type: 'reaction',
      directDamage: {
        min: 0,
        max: 8,
        incrementalProbability: 'adjacentEnemy',
        increment: 2
      },
      place: 1
    }
  ]
}
