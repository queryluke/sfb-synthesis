export const Xinshen = {
  id: 'xinshen',
  name: 'Xinshén',
  avatar: 'img/xinshen.jpg',
  cards: [
    {
      type: 'hero',
      hp: {
        min: 4,
        max: 5,
        probability: ['levelUp']
      },
      armor: 1,
      stun: 1
    },
    {
      name: 'Telekinetic Fury',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 2,
        max: 3,
        direct: true
      },
      targets: 1,
      attack: 2,
      double: true,
      push: 1
    },
    {
      name: 'Feline\'s Grace',
      magic: 'manipulation',
      type: 'skill',
      jump: 3,
      push: {
        min: 0,
        max: 1,
        probability: ['adjacentEnemy']
      }
    },
    {
      name: 'Mind Over Matter',
      magic: 'destruction',
      type: 'attack',
      movement: 1,
      range: {
        min: 2,
        max: 3,
        direct: false
      },
      targets: 1,
      attack: 1,
      force: 1,
      push: 1
    },
    {
      name: 'Shift the Elements',
      magic: 'destruction',
      type: 'reaction',
      armor: 2,
      force: 1
    },
    {
      name: 'Pull of the Panther',
      magic: 'creation',
      type: 'skill',
      movement: 1,
      range: {
        min: 3,
        max: 5,
        direct: false
      },
      targets: 1,
      pull: 2
    },
    {
      name: 'Contemplation',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      draw: 2,
      plan: 2
    }
  ]
}
