export const Kilgore = {
  id: 'kilgore',
  name: 'Kilgore',
  avatar: 'img/kilgore.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 7,
        max: 8,
        probability: ['levelUp']
      },
      armor: 1,
      immunities: [{ type: 'stun', probability: ['levelUp'], target: 'self' }]
    },
    {
      name: 'Relentless Advance',
      magic: 'destruction',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      force: 1,
      replace: 1
    },
    {
      name: 'Appetite for Destruction',
      magic: 'creation',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: {
        min: 1,
        max: 5,
        incrementalProbability: 'readiedCore',
        increment: 2
      },
      lifesteal: true
    },
    {
      name: 'Fury',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 6,
      attack: 2,
      selfHeal: 1
    },
    {
      name: 'Maul Thrash',
      magic: 'manipulation',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      push: 2
    },
    {
      name: 'Throw',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      jump: {
        min: 3,
        max: 3,
        probability: ['adjacentAlly']
      }
    },
    {
      name: 'Darksteel Armour',
      magic: 'destruction',
      type: 'reaction',
      armor: 1,
      armorBonus: 2
    }
  ]
}
