<template>
  <v-card ref="heroCard" :color="selected ? 'rgba(244,81,30,0.15)' : undefined" :disabled="cardDisabled" @click.stop="toggleInTeam">
    <v-card-text>
      <div class="d-flex align-center">
        <v-avatar :size="avatarSize">
          <v-img :src="hero.avatar" />
        </v-avatar>
        <h2 class="text-title flex-grow-1 ml-4">
          {{ hero.name }}
        </h2>
      </div>
      <hero-chart :hero="hero" />
    </v-card-text>
    <v-card-actions>
      <card-type-icon icon="mdi-sword-cross">
        {{ hero.typeDistribution.attack }}
      </card-type-icon>
      <card-type-icon icon="mdi-cog">
        {{ hero.typeDistribution.skill }}
      </card-type-icon>
      <card-type-icon icon="mdi-shield">
        {{ hero.typeDistribution.reaction }}
      </card-type-icon>
      <v-spacer />
      <v-btn text :color="selected ? 'grey lighten-1' : 'deep-purple accent-2'" icon @click.stop="toggleInTeam">
        <v-icon>
          {{ selected ? 'mdi-account-multiple-minus' : 'mdi-account-multiple-plus-outline' }}
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tab: 0,
      cardTab: 0
    }
  },
  computed: {
    team: {
      get () {
        return this.$store.getters.team
      },
      set (value) {
        this.$store.commit('set', { key: 'team', value })
      }
    },
    teamIndex () {
      return this.team.findIndex(i => i.id === this.hero.id)
    },
    selected () {
      return this.teamIndex > -1
    },
    avatarSize () {
      return this.$vuetify.breakpoint.xsOnly ? 32 : 48
    },
    maxHeroes () {
      return this.$store.getters.fourPlayer ? 4 : 3
    },
    cardDisabled () {
      return this.team.length === this.maxHeroes && !this.selected
    }
  },
  methods: {
    toggleInTeam () {
      const newTeam = this.team.slice()
      if (this.selected) {
        newTeam.splice(this.teamIndex, 1)
      } else if (this.team.length < this.maxHeroes) {
        newTeam.push(this.hero)
      }
      this.team = newTeam
      this.$nextTick(() => {
        document.activeElement.blur()
      })
    }
  }
}
</script>
