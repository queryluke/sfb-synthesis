export const Akhet = {
  id: 'akhet',
  name: 'Akhet',
  avatar: '/img/akhet.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 7,
        max: 8,
        probability: ['levelUp']
      },
      armor: 1
    },
    {
      name: 'Wingstorm',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      targets: 1,
      attack: {
        min: 1,
        max: 5,
        incrementalProbability: 'cardInHand',
        increment: 1
      },
      push: 3
    },
    {
      name: 'Healing Tears',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      selfHeal: 2,
      heal: {
        min: 2,
        max: 2,
        probability: ['cardInHand']
      }
    },
    {
      name: 'Inner Fire',
      magic: 'creation',
      type: 'skill',
      movement: 3,
      dredge: 1,
      attackBonus: 1
    },
    {
      name: 'From the Ashes',
      magic: 'destruction',
      type: 'reaction',
      place: {
        min: 1,
        max: 1,
        probability: ['outOfAction']
      }
    },
    {
      name: 'Take Flight',
      magic: 'manipulation',
      type: 'skill',
      swoop: 4,
      place: {
        min: 1,
        max: 1,
        probability: ['enemyWithinTwoHexes'] // fixme...should be enemy within straight line...thought, should hex probability be theoretical...
      }
    },
    {
      name: 'Death From Above',
      magic: 'manipulation',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 3,
      attack: 2,
      swoop: 3
    }
  ]
}
