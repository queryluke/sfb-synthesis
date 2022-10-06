export const Nikkit = {
  id: 'nikkit',
  name: 'Nikkit',
  avatar: 'img/nikkit.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 7,
        max: 9,
        probability: ['levelUp']
      },
      planFromDiscard: {
        min: 1,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Fearsome Spitfire',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 3,
        direct: true
      },
      attack: {
        min: 2,
        max: 4,
        probability: ['cardNotInDiscard']
      },
      push: 1
    },
    {
      name: 'Cracklewind',
      magic: 'manipulation',
      type: 'attack',
      range: {
        min: 0,
        max: 3,
        direct: false
      },
      targets: 1,
      attack: 2,
      swoop: 2,
      stun: {
        min: 1,
        max: 1,
        probability: ['cardNotInDiscard']
      }
    },
    {
      name: 'Burning Wrath',
      magic: 'destruction',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 3,
        direct: false
      },
      directDamage: 1,
      attackBonus: 2
    },
    {
      name: 'Blackwater\'s Bite',
      magic: 'creation',
      type: 'attack',
      movement: 1,
      range: {
        min: 0,
        max: 3,
        direct: false
      },
      targets: 1,
      attack: {
        min: 2,
        max: 3,
        probability: ['cardNotInDiscard']
      },
      lifesteal: { probability: ['cardNotInDiscard'] }
    },
    {
      name: 'Shell of the Swamp',
      magic: 'creation',
      type: 'reaction',
      armor: {
        min: 1,
        max: 3,
        probability: ['adjacentEnemy']
      }
    },
    {
      name: 'Recovery',
      magic: 'manipulation',
      type: 'skill',
      reshuffleDiscard: true,
      selfHeal: 2
    }
  ]
}
