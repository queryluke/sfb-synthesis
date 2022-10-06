import { heroes } from '~/data/heroes'
import { Hero } from '~/data/Hero'

export const state = () => ({
  sort: 'name',
  heroes,
  unavailableHeroes: [],
  team: [],
  fourPlayer: false,
  weights: {
    base: {
      movement: 1,
      control: 1,
      defense: 1,
      support: 1,
      attack: 1
    },
    defenses: {
      hp: 1,
      armor: 2,
      selfHeal: 1.5,
      ignoreTraps: 1.2
    },
    miscellany: {
      // cardScoreAdjustments
      // from 0.1  to 2 by increments of .1
      duplicate: 1.1, // Lily - ... duplicate card for another core
      additionalReaction: 2, // can play an additional reaction
      discardHand: 0.9, // e.g. Izabella-Foretell
      discardCost: 0.1 // e.g. Jacques le Beau-Parrying Blow
    },
    movements: {
      movement: 1,
      jump: 1.5,
      swoop: 1.5,
      dash: 1,
      replace: 1, // Kilgore-Relentless Advance
      anywhere: 5,
      movementBonus: 1
    },
    attacks: {
      preventReactions: 1.25,
      directDamage: 1.5,
      reflectDamage: 1,
      attackBonus: 1,
      defenseDown: 1
    },
    targets: {
      3: 1.25,
      6: 1.5
    },
    range: {
      indirect: 1.25,
      perHex: 0.1,
      perMinimum: 0.1
    },
    immunities: {
      push: 1,
      pull: 1,
      fear: 1,
      force: 1,
      stun: 1,
      postAttack: 2,
      attack: 1.8,
      displacement: 2
    },
    controls: {
      push: 1.8,
      pull: 1.8,
      force: 1.5,
      fear: 1.4,
      swap: 1.2,
      place: 1.2,
      root: 1,
      stun: 1.3,
      discardRandom: 1.5,
      discardOption: 1,
      mill: 1
    },
    supports: {
      heal: 1.5,
      draw: 1,
      plan: 1,
      armorBonus: 1,
      armor: 1.5,
      readyCore: 1.5, // e.g. Jacques le Beau-Hero
      dredge: 1, // return from discard, Khalize-Restoration
      coreSwap: 1.2, // e.g. Khalize-Hero
      planFromDiscard: 1.2, // Nikkit-hero
      reshuffleDiscard: 1, // Nikkit-recovery
      freeCore: 3, // alkemi
      manipulateTrapToken: 2, // deryn
      tank: 1.3 // dugrun
    },
    probabilities: {
      // should be low = .2, cardOrCoreBased = .33, med = .5, medHigh = .66, high = .9, playerChoice = 1
      bloodied: 0.66,
      cardInHand: 0.5,
      cardInDiscard: 0.66,
      cardNotInDiscard: 0.33,
      adjacentAlly: 0.5,
      notAdjacentAlly: 0.5,
      adjacentEnemy: 0.5,
      notAdjacentEnemy: 0.5,
      adjacentStatue: 0.5, // sir tentaclot-hero
      noDamage: 0.5,
      discardAny: 1,
      levelUp: 0.2,
      enemyWithinTwoHexes: 0.5, // Fixme?, could this be an array for adjacency?
      damageDealt: 0.25, // starts at 0.x, multiplied by 1.x
      hasReadyCore: 1, // Jacques le Beau-A Pirate's Life For Me...spend core
      outOfAction: 0.25, // King Alistair-Long Live the King!
      notOutOfAction: 0.9, // Tzu Xiao - Revenge
      readiedCore: 1, // Kilgore - Appetite for Destruction
      lifesteal: 0.5, // Kilgore - Appetite for Destruction
      damageOnTarget: 0.9, // Khalize - Salt the Wound
      playChampionCardOfType: 0.2, // Sulka - Hero
      playSpecificCard: 0.1, // e.g. Rath...play Nightshade before an attack
      inTrapHex: 0.1, // Deryn
      damageFromPushPull: 0.5 // dugrun
    }
  }
})

export const getters = {
  sort: state => state.sort,
  unavailableHeroes: state => state.unavailableHeroes,
  weights: state => state.weights,
  rawHeroes: state => state.heroes,
  heroes: (state, getters) => state.heroes.map(i => new Hero(i, getters.weights)),
  filteredHeroes: (state, getters) => getters.heroes.filter(i => !getters.unavailableHeroes.includes(i.id)),
  team: state => state.team,
  fourPlayer: state => state.fourPlayer,
  minMaxScores: (state, getters) => {
    const finalScores = getters.heroes
      .map((i) => {
        const facets = i.facets
        return [facets.attack, facets.defense, facets.support, facets.control, facets.movement]
      })
      .reduce((a, c) => a.concat(c), [])
    const cleanedScores = finalScores.filter(i => !isNaN(i))
    return {
      max: Math.max(...cleanedScores),
      min: Math.min(...cleanedScores)
    }
  },
  minMaxScoresByFacet: (state, getters) => {
    const minMaxes = {}
    for (const facet of ['defense', 'movement', 'attack', 'support', 'control']) {
      const finalScores = getters.heroes.map(i => i.facets[facet]).filter(i => !isNaN(i))
      minMaxes[facet] = {
        min: Math.min(...finalScores),
        max: Math.max(...finalScores)
      }
    }
    return minMaxes
  }
}

export const mutations = {
  set (state, { key, value }) {
    state[key] = value
  }
}

export const actions = {
}
