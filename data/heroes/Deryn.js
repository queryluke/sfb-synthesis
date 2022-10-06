export const Deryn = {
  id: 'deryn',
  name: 'Deryn',
  avatar: '/img/deryn.jpg',
  cards: [
    {
      type: 'hero',
      hp: 7,
      ignoreTraps: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      },
      armor: {
        min: 0,
        max: 2,
        probability: ['levelUp', 'inTrapHex']
      }
    },
    {
      name: 'Hunter\'s Quarry',
      magic: 'destruction',
      type: 'skill',
      movement: 2,
      range: {
        min: 0,
        max: 4,
        direct: true
      },
      attackBonus: 5 // fixme...should take into account ignore defense & true attack bonus (1)
    },
    {
      name: 'Ambush',
      magic: 'creation',
      type: 'reaction',
      armor: 1,
      place: 1
    },
    {
      name: 'Heavy Shot',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 2,
        max: 3,
        direct: true
      },
      targets: 1,
      attack: {
        min: 2,
        max: 3,
        probability: ['inTrapHex']
      },
      push: {
        min: 1,
        max: 2,
        probability: ['inTrapHex']
      }
    },
    {
      name: 'Spring the Trap',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 4,
        direct: false
      },
      targets: 1,
      attack: {
        min: 2,
        max: 4,
        probability: ['inTrapHex']
      },
      stun: {
        min: 1,
        max: 1,
        probability: ['inTrapHex']
      }
    },
    {
      name: 'Hit and Run',
      magic: 'creation',
      type: 'attack',
      movement: 3,
      range: {
        min: 0,
        max: 2,
        direct: false
      },
      targets: 1,
      attack: 2,
      dash: 2
    },
    {
      name: 'Prowl',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      draw: 2,
      plan: 1,
      manipulateTrapToken: 1
    }
  ]
}
