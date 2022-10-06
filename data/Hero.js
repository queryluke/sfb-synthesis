class Card {
  constructor (card, heroName, weights) {
    this.card = card
    this.hero = heroName
    this.weights = weights
    this.debugHero = ''
    this.debugCard = null
    this.movementKeys = ['movement', 'jump', 'swoop', 'dash', 'anywhere', 'replace', 'movementBonus']
    this.controlKeys = ['push', 'pull', 'force', 'fear', 'stun', 'root', 'swap', 'place', 'discardRandom', 'discardOption']
  }

  get name () {
    return this.card.type === 'hero' ? 'Hero Card' : this.card.name
  }

  get type () {
    return this.card.type
  }

  get magic () {
    return this.card.magic
  }

  get debug () {
    return this.hero === this.debugHero && (this.debugCard === null || this.debugCard === this.name)
  }

  weightNotFound (weight) {
    console.warn(`${weight} not found. Hero: ${this.hero}, Card: ${this.name}`)
  }

  weightGroupNotFound (group) {
    console.warn(`Weight Group (${group}) not found. Hero: ${this.hero}, Card: ${this.name}`)
  }

  probabilityWeight (key) {
    if (key === 'damageDealt') {
      if (this.ignoreDefense === 1) {
        return 1
      }
      const totalAttack = this.attack
      const baseDamageDealtWeight = this.weights.probabilities.damageDealt
      let damageDealtWeight = baseDamageDealtWeight
      for (let i = 0; i < Math.round(totalAttack); i++) {
        damageDealtWeight *= (1 + baseDamageDealtWeight)
      }
      if (this.debug) {
        // console.log('dd', totalAttack, baseDamageDealtWeight, damageDealtWeight)
      }
      const damageDealtPlusIgnoreDefense = damageDealtWeight * (1 + this.ignoreDefense)
      return Math.min(damageDealtPlusIgnoreDefense, 1)
    }
    const weight = this.weights.probabilities[key]
    if (!weight) {
      this.weightNotFound(key)
      return 1
    }
    return weight
  }

  probabilityStat (stat, reverse) {
    if (!stat) {
      return 0
    }
    // return the average if there is no probability qualifier
    if (!stat.probability && !stat.incrementalProbability) {
      return ((stat.min + stat.max) / 2)
    }

    // baseProbabilities
    let baseProbability = 1
    if (stat.probability) {
      for (const probabilityKey of stat.probability) {
        baseProbability *= this.probabilityWeight(probabilityKey)
      }
    }

    if (typeof stat.min === 'undefined') {
      return baseProbability
    }

    if (!stat.incrementalProbability) {
      let finalStat = 0
      if (stat.min === stat.max) {
        finalStat = stat.min * baseProbability
      } else if (reverse) {
        finalStat = stat.max - ((stat.max - stat.min) * baseProbability)
      } else {
        finalStat = stat.min + ((stat.max - stat.min) * baseProbability)
      }
      if (this.debug) {
        // console.log(finalStat)
      }
      return finalStat
    }

    const probableValues = []
    const incrementalProbability = this.probabilityWeight(stat.incrementalProbability)
    let decreasingProbability = 1
    if (stat.increments) {
      // unique cases where the increments scale
      for (let i = 0; i < stat.increments.length; i++) {
        decreasingProbability *= incrementalProbability
        probableValues.push(stat.increments[i] * decreasingProbability * baseProbability)
      }
    } else {
      // standard linear scale
      for (let step = stat.min + stat.increment; step <= stat.max; step += stat.increment) {
        decreasingProbability *= incrementalProbability
        probableValues.push(step * decreasingProbability * baseProbability)
      }
    }
    const finalIncrementalProbability = (probableValues.reduce((a, c) => a + c) / probableValues.length) + stat.min
    if (this.debug) {
      // console.log(probableValues)
      // console.log('incremental probability', finalIncrementalProbability)
    }
    return finalIncrementalProbability
  }

  atomicScore (key) {
    const value = this.card[key]
    if (!value) {
      return 0
    }
    let score = 0
    if (typeof value === 'object') {
      // e.g. Sulka's Life Drain that can assign healing based on attack
      if (value.key) {
        return this[value.key]
      }
      score = this.probabilityStat(value)
    } else if (typeof value === 'number') {
      score = value
    }
    if (this.debug) {
      // console.log('initial score', score)
    }
    if (this.card.targets > 1 && (!this.controlKeys.includes(key) || !this.movementKeys.includes(key))) {
      // FIXME...technically, targets is basically the same as an incrementalProbability of adjacentEnemies...
      score *= this.weights.targets[this.card.targets]
      if (this.debug) {
        // console.log('target adjustment', score)
      }
    }
    if (this.card.range && !this.movementKeys.includes(key)) {
      const indirectMultiplier = this.card.range.direct ? 1 : this.weights.range.indirect
      const maxRange = typeof this.card.range.max === 'object' ? this.probabilityStat(this.card.range.max) : this.card.range.max
      const maxBonus = maxRange * this.weights.range.perHex
      const minRange = typeof this.card.range.max === 'object' ? this.probabilityStat(this.card.range.min) : this.card.range.min
      const minPenalty = minRange * this.weights.range.perMinimum
      const additiveRangeBonus = maxBonus - minPenalty
      score *= (indirectMultiplier + additiveRangeBonus)
      if (this.debug) {
        // console.log('rangeAdjustment', score)
      }
    }
    if (this.debug) {
      // console.log(this.card.name, key, value, score, this.card)
    }
    return score
  }

  standardScore (key, group) {
    const initialScore = this.atomicScore(key)
    const weightGroup = this.weights[group]
    if (!weightGroup) {
      this.weightGroupNotFound(group)
      return initialScore
    }
    const weight = weightGroup[key]
    if (!weight) {
      this.weightNotFound(key)
      return initialScore
    }
    return initialScore * weight
  }

  basicStandardScores (keys, group) {
    const collection = []
    for (const key of keys) {
      if (this.debug) {
        // console.log(key, this.standardScore(key, group))
      }
      collection.push(this.standardScore(key, group))
    }
    return collection.reduce((a, c) => a + c, 0)
  }

  roundScore (score) {
    return Math.round((score + Number.EPSILON) * 100) / 100
  }

  // scores
  get attack () {
    // required as its own value to prevent infinite recursion
    const attack = this.atomicScore('attack')
    if (this.debug) {
      // console.log('attack', attack)
      // console.log(this.ignoreDefense)
    }
    return attack
  }

  get ignoreDefense () {
    let max = 8
    const ignoreDefenseStat = this.card.ignoreDefense
    if (!ignoreDefenseStat) {
      return 0
    }
    if (!ignoreDefenseStat.probability) {
      return 1
    }
    if (ignoreDefenseStat.limit) {
      max = ignoreDefenseStat.limit
    }
    return (this.probabilityStat(ignoreDefenseStat) * max)
  }

  get immunities () {
    return (this.card.immunities || []).map((i) => {
      let immunityWeight = this.weights.immunities[i.type]
      if (!immunityWeight) {
        this.weightNotFound(i.type)
        return 0
      }
      if (i.probability) {
        immunityWeight *= this.probabilityStat(i)
      }
      return {
        score: immunityWeight,
        target: i.target
      }
    })
  }

  get defenseScore () {
    const base = this.basicStandardScores(['hp', 'selfHeal'], 'defenses')
    const armor = this.card.type === 'hero' ? this.standardScore('armor', 'defenses') : 0
    const lifesteal = this.card.lifesteal
      ? typeof this.card.lifesteal === 'object' && this.card.lifesteal.probability
        ? this.attack * this.probabilityStat(this.card.lifesteal)
        : this.attack
      : 0
    const immunities = this.immunities.filter(i => i.target === 'self').reduce((a, c) => a + c.score, 0)
    return this.miscellanyAdjustments(base + armor + lifesteal + immunities)
  }

  get attackScore () {
    const attack = this.attack
    const double = this.card.double
      ? typeof this.card.double === 'object' && this.card.double.probability
        ? this.probabilityWeight('damageDealt') * attack * this.probabilityStat(this.card.double)
        : this.probabilityWeight('damageDealt') * attack
      : 0
    const base = this.basicStandardScores(['directDamage', 'reflectDamage', 'preventReactions', 'defenseDown', 'attackBonus'], 'attacks')
    return this.miscellanyAdjustments(base + attack + double)
  }

  get controlScore () {
    const base = this.basicStandardScores(this.controlKeys, 'controls')
    return this.miscellanyAdjustments(base)
  }

  get supportScore () {
    const base = this.basicStandardScores(['heal', 'draw', 'plan', 'armorBonus', 'readyCore', 'dredge', 'coreSwap', 'planFromDiscard', 'reshuffleDiscard', 'freeCore', 'manipulateTrapToken', 'tank'], 'supports')
    const armor = this.card.type !== 'hero' ? this.standardScore('armor', 'supports') : 0
    const immunities = this.immunities.filter(i => i.target === 'ally').reduce((a, c) => a + c.score, 0)
    const additionalReaction = this.card.additionalReaction ? this.weights.miscellany.additionalReaction : 0
    if (this.debug) {
      // console.log(base, armor, immunities, additionalReaction)
    }
    return this.miscellanyAdjustments(base + armor + immunities + additionalReaction)
  }

  get movementScore () {
    const base = this.basicStandardScores(this.movementKeys, 'movements')
    return this.miscellanyAdjustments(base)
  }

  miscellanyAdjustments (score) {
    let newScore = score
    if (this.card.duplicate) {
      newScore *= this.weights.miscellany.duplicate
    }
    if (this.card.discardHand) {
      newScore *= this.weights.miscellany.discardHand
    }
    if (this.card.discardCost) {
      if (newScore > 0) {
        newScore -= this.card.discardCost * this.weights.miscellany.discardCost
      }
    }
    return this.roundScore(newScore)
  }
}

export class Hero {
  constructor (heroData, weights) {
    this.stats = heroData
    this.cards = heroData.cards.map(i => new Card(i, heroData.name, weights))
    this.weights = weights
    this.debug = 'Khalize'
  }

  get id () {
    return this.stats.id
  }

  get name () {
    return this.stats.name
  }

  get avatar () {
    return this.stats.avatar
  }

  get nonHeroCards () {
    return this.stats.cards.filter(i => i.type !== 'hero')
  }

  get magicDistribution () {
    const distribution = {
      creation: 0,
      destruction: 0,
      manipulation: 0
    }
    for (const card of this.nonHeroCards) {
      distribution[card.magic] += 1
    }
    const nontwos = Object.entries(distribution).filter(i => i[1] < 2 ? i[0] : null).filter(i => i)
    if (nontwos.length) {
      console.error(`${this.name} doesn't have two of ${nontwos.join(' & ')}`)
    }
    return distribution
  }

  get typeDistribution () {
    const distribution = {
      attack: 0,
      skill: 0,
      reaction: 0
    }
    for (const card of this.nonHeroCards) {
      distribution[card.type] += 1
    }
    if (Object.values(distribution).reduce((a, c) => a + c, 0) < 6) {
      console.error(`${this.name} lacks 6 cards`)
    }
    return distribution
  }

  roundScore (score) {
    return Math.round((score + Number.EPSILON) * 100) / 100
  }

  get facets () {
    const collection = {}
    for (const facet of ['attack', 'defense', 'control', 'support', 'movement']) {
      collection[facet] = this.roundScore(this.cards.reduce((a, c) => a + c[`${facet}Score`], 0) * this.weights.base[facet])
    }
    return collection
  }

  get totalScore () {
    return Math.round(Object.values(this.facets).reduce((a, c) => a + c, 0))
  }
}
