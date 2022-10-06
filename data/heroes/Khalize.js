export const Khalize = {
  id: 'khalize',
  name: 'Khalize',
  avatar: 'img/khalize.jpg',
  cards: [
    {
      type: 'hero',
      hp: 7,
      coreSwamp: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Salt the Wound',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      attack: {
        min: 0,
        max: 8,
        incrementalProbability: 'damageOnTarget',
        increment: 1
      },
      targets: 1
    },
    {
      name: 'Glimpse of Divinity',
      magic: 'destruction',
      type: 'reaction',
      armor: 2,
      immunities: [{ type: 'postAttack', target: 'ally' }]
    },
    {
      name: 'Ibis Strike',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      targets: 1,
      attack: 1,
      pull: 1
    },
    {
      name: 'Radiant Rush',
      magic: 'manipulation',
      type: 'skill',
      movement: 1,
      swoop: 3,
      selfHeal: {
        min: 0,
        max: 3
      }
    },
    {
      name: 'Heaven\'s Blessing',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      heal: 2,
      attackBonus: 1,
      movementBonus: 1
    },
    {
      name: 'Restoration',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      heal: {
        min: 3,
        max: 3,
        probability: ['adjacentAlly']
      },
      dredge: {
        min: 1,
        max: 1,
        probability: ['adjacentAlly']
      }
    }
  ]
}
