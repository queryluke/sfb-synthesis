export const Rath = {
  id: 'rath',
  name: 'Rath',
  avatar: 'img/rath.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 6,
        max: 7,
        probability: ['levelUp']
      }
    },
    {
      name: 'Go to Ground',
      magic: 'creation',
      type: 'reaction',
      armor: 1,
      jump: 2
    },
    {
      name: 'Sneak Attack',
      magic: 'destruction',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      preventReactions: true,
      directDamage: {
        min: 1,
        max: 1,
        probability: ['levelUp', 'damageDealt']
      },
      ignoreDefense: { probability: ['playSpecificCard'] }
    },
    {
      name: 'Double Dealing',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 2,
        direct: false
      },
      attack: 2,
      double: true,
      directDamage: {
        min: 1,
        max: 1,
        probability: ['levelUp', 'damageDealt']
      },
      ignoreDefense: { probability: ['playSpecificCard'] }
    },
    {
      name: 'Stalk Beneath',
      magic: 'destruction',
      type: 'skill',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      directDamage: {
        min: 2,
        max: 2,
        probability: ['adjacentEnemy']
      },
      place: 1 // fixme....need to also account for direct damage within damage dealt
    },
    {
      name: 'Nightshade',
      magic: 'manipulation',
      type: 'skill',
      movement: 2,
      draw: 2,
      plan: 1
    },
    {
      name: 'Burrow',
      magic: 'creation',
      type: 'attack',
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 3,
      jump: 4,
      directDamage: {
        min: 1,
        max: 1,
        probability: ['levelUp', 'damageDealt']
      },
      ignoreDefense: { probability: ['playSpecificCard'] }
    }
  ]
}
