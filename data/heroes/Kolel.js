export const Kolel = {
  id: 'kolel',
  name: "Ko'lel",
  avatar: '/img/kolel.jpg',
  cards: [
    {
      type: 'hero',
      hp: 8
    },
    {
      name: 'Poisoned Dart',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      attack: 2,
      range: {
        min: 0,
        max: 3,
        direct: false
      },
      targets: 1,
      directDamage: {
        min: 1,
        max: 1,
        probability: ['damageDealt']
      },
      ignoreDefense: { limit: 2, probability: ['levelUp'] }
    },
    {
      name: 'Mighty Jump',
      magic: 'destruction',
      type: 'attack',
      attack: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 6,
      jump: 3,
      push: 1,
      ignoreDefense: { limit: 2, probability: ['levelUp'] }
    },
    {
      name: 'Double Jump',
      magic: 'creation',
      type: 'attack',
      attack: 2,
      targets: 1,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      jump: 6,
      ignoreDefense: { limit: 2, probability: ['levelUp'] }
    },
    {
      name: 'Blinding Dart',
      magic: 'manipulation',
      type: 'reaction',
      armor: 1,
      stun: 1
    },
    {
      name: 'Tongue Lash',
      magic: 'manipulation',
      type: 'attack',
      movement: 1,
      attack: 1,
      range: {
        min: 0,
        max: 3,
        direct: true
      },
      pull: {
        min: 2,
        max: 2,
        probability: ['damageDealt']
      },
      stun: {
        min: 1,
        max: 1,
        probability: ['damageDealt']
      },
      ignoreDefense: { limit: 2, probability: ['levelUp'] }
    },
    {
      name: 'Scout Ahead',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      draw: 3,
      plan: 3
    }
  ]
}
