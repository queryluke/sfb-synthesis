export const Loralei = {
  id: 'loralei',
  name: 'Loralei',
  avatar: 'img/loralei.jpg',
  cards: [
    {
      type: 'hero',
      hp: 4,
      armor: 2,
      draw: {
        min: 2,
        max: 2,
        probability: ['levelUp']
      }
    },
    {
      name: 'Winding Path',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      attack: 2,
      swap: 1
    },
    {
      name: 'Healing Rain',
      magic: 'creation',
      type: 'skill',
      movement: 3,
      heal: {
        min: 0,
        max: 12,
        incrementalProbability: 'discardAny',
        increment: 3
      }
    },
    {
      name: 'Intervention',
      magic: 'manipulation',
      type: 'reaction',
      armor: 1,
      heal: {
        min: 3,
        max: 3,
        probability: ['noDamage']
      }
    },
    {
      name: 'Grasping Vines',
      magic: 'destruction',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      place: 1
    },
    {
      name: 'Nature\'s Wrath',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      range: {
        min: 3,
        max: 4,
        direct: false
      },
      attack: 3,
      ignoreDefense: {}
    },
    {
      name: 'Clairvoyance',
      magic: 'manipulation',
      type: 'skill',
      movement: 3,
      draw: 1,
      plan: 5
    }
  ]
}
