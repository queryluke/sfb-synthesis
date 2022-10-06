<template>
  <div style="width: 100%">
    <div class="d-flex justify-space-around justify-sm-center">
      <card-type-breakdown :breakdown="attackBreakdown">
        mdi-sword-cross
      </card-type-breakdown>
      <card-type-breakdown :breakdown="skillBreakdown">
        mdi-cog
      </card-type-breakdown>
      <card-type-breakdown :breakdown="reactionBreakdown">
        mdi-shield
      </card-type-breakdown>
    </div>
    <div class="d-flex mt-1 mx-auto" style="max-width: 600px">
      <div v-for="score in scores" :key="`${score.key}-bar`" :style="{width: `${percentBreakdown[score.key]}%`}">
        <v-progress-linear :color="score.color" height="20" value="100">
          <span class="text-truncate text-uppercase text-caption">
            <small>
              {{ score.abbr }} {{ percentBreakdown[score.key] }}
            </small>
          </span>
        </v-progress-linear>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSynthesis',
  data () {
    return {
      scores: [
        { key: 'attack', abbr: 'ATK', color: 'red darken-4' },
        { key: 'defense', abbr: 'DEF', color: 'deep-purple darken-2' },
        { key: 'movement', abbr: 'MVMT', color: 'deep-orange' },
        { key: 'control', abbr: 'CTRL', color: 'blue' },
        { key: 'support', abbr: 'SUPT', color: 'yellow darken-3' }
      ]
    }
  },
  computed: {
    team () {
      return this.$store.getters.team
    },
    teamCards () {
      return this.team.reduce((a, c) => a.concat(c.cards), [])
    },
    attackBreakdown () {
      return this.typeBreakdown('attack')
    },
    skillBreakdown () {
      return this.typeBreakdown('skill')
    },
    reactionBreakdown () {
      return this.typeBreakdown('reaction')
    },
    percentBreakdown () {
      const breakdown = {}
      const allScores = []
      for (const { key } of this.scores) {
        for (const hero of this.team) {
          const score = hero.facets[key]
          allScores.push(score)
          if (breakdown[key]) {
            breakdown[key] += score
          } else {
            breakdown[key] = score
          }
        }
      }
      const total = allScores.reduce((a, c) => a + c, 0)
      const finalBreakdown = {}
      for (const { key } of this.scores) {
        finalBreakdown[key] = Math.round((breakdown[key] / total) * 100)
      }
      return finalBreakdown
    }
  },
  methods: {
    typeBreakdown (type) {
      const cardsOfType = this.teamCards.filter(i => i.type === type)
      return {
        byMagic: {
          creation: cardsOfType.filter(i => i.magic === 'creation').length,
          manipulation: cardsOfType.filter(i => i.magic === 'manipulation').length,
          destruction: cardsOfType.filter(i => i.magic === 'destruction').length
        },
        count: cardsOfType.length
      }
    }
  }
}
</script>
