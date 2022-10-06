export const Izabella = {
  id: 'izabella',
  name: 'Izabella',
  avatar: '/img/izabella.jpg',
  cards: [
    {
      type: 'hero',
      hp: 8,
      plan: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Fully Prepared',
      magic: 'creation',
      type: 'reaction',
      armor: 2
    },
    {
      name: 'Prophecy of Doom',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 2,
        max: 3,
        direct: true
      },
      attack: 1,
      stun: 1
    },
    {
      name: 'Right Place, Right Time',
      magic: 'creation',
      type: 'skill',
      anywhere: {
        min: 1,
        max: 3
      }
    },
    {
      name: 'Burden of Destiny',
      magic: 'destruction',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 3,
        direct: false
      },
      attackBonus: 1,
      defenseDown: 1
    },
    {
      name: 'Foretell',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      discardHand: true,
      draw: 5,
      plan: 2
    },
    {
      name: 'Deja-Vu',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      attack: 3,
      preventReactions: true
    }
  ]
}
