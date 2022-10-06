export const KingAlistair = {
  id: 'kingalistair',
  name: 'King Alistair',
  avatar: 'img/king_alistair.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 9,
        max: 10,
        probability: ['levelUp']
      },
      armor: {
        min: 0,
        max: 1,
        probability: ['levelUp']
      }
    },
    {
      name: 'Bow Before the King!',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      attack: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      fear: {
        min: 1,
        max: 1,
        probability: ['damageDealt']
      }
    },
    {
      name: 'Reverence',
      magic: 'creation',
      type: 'reaction',
      armor: 1,
      immunities: [{ type: 'fear', target: 'ally' }]
    },
    {
      name: 'Die for Your King!',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      attack: 3,
      targets: 6,
      range: {
        min: 0,
        max: 0,
        direct: true
      }
    },
    {
      name: 'The Tyrant\'s Gaze',
      magic: 'manipulation',
      type: 'skill',
      movement: 1,
      range: {
        min: 0,
        max: 2,
        direct: true
      },
      fear: 2,
      stun: 1
    },
    {
      name: 'Long Live the King!',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      attack: 3,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      selfHeal: {
        min: 2,
        max: 2,
        probability: ['outOfAction']
      }
    },
    {
      name: 'Forced March',
      magic: 'destruction',
      type: 'skill',
      movement: 2,
      force: 1
    }
  ]
}
