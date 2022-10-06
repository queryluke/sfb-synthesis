export const Goldarr = {
  id: 'goldarr',
  name: 'Gold\'arr',
  avatar: 'img/goldarr.jpg',
  cards: [
    {
      type: 'hero',
      hp: 8,
      armor: 1,
      immunities: [{ type: 'push', target: 'self', probability: ['levelUp'] }]
    },
    {
      name: 'Plundarr!',
      magic: 'creation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 1,
      attack: 2,
      draw: {
        min: 0,
        max: 2,
        incrementalProbability: 'damageDealt',
        increment: 1
      }
    },
    {
      name: 'Anchors Aweigh!',
      magic: 'manipulation',
      type: 'attack',
      movement: 2,
      range: {
        min: 0,
        max: 0,
        direct: true
      },
      targets: 3,
      attack: 1,
      push: 1
    },
    {
      name: 'Intimidation',
      magic: 'destruction',
      type: 'reaction',
      armor: 1,
      fear: 2
    },
    {
      name: 'Set Sail!',
      magic: 'manipulation',
      type: 'skill',
      movement: 1,
      swoop: 5,
      directDamage: {
        min: 0,
        max: 4,
        incrementalProbability: 'adjacentEnemy',
        increment: 1
      }
    },
    {
      name: 'Harpoon Strike',
      magic: 'destruction',
      type: 'attack',
      movement: 2,
      range: {
        min: 2,
        max: 3,
        direct: true
      },
      targets: 1,
      attack: 1,
      pull: 2
    },
    {
      name: 'Me Hearties',
      magic: 'creation',
      type: 'skill',
      movement: 2,
      draw: 1,
      attackBonus: 1,
      movementBonus: 1
    }
  ]
}
