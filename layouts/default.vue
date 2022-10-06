<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>
        SFB Synthesis
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-switch v-model="fourPlayer" color="red darken-3" hide-details class="my-auto">
          <template #label>
            <v-icon large class="mr-0 ml-n2">
              {{ fourPlayer ? 'mdi-numeric-4' : 'mdi-numeric-2' }}
            </v-icon>
            <v-icon left class="ml-n2">
              mdi-account-multiple
            </v-icon>
          </template>
        </v-switch>
        <v-btn color="blue darken-2" icon @click="draftDialog = true">
          <v-badge :value="unavailableHeroes.length" color="red darken-3" dot>
            <v-icon>
              mdi-filter
            </v-icon>
          </v-badge>
        </v-btn>
        <v-menu
          bottom
          left
        >
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              color="yellow darken-3"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-sort</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="sort in sorts" :key="sort" @click="selectedSort = sort">
              <v-badge dot inline class="mt-n1" :color="selectedSort === sort ? 'blue darken-2' : 'transparent'" />
              <v-list-item-title class="text-capitalize pl-2">
                {{ sort }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-dialog v-model="draftDialog" :fullscreen="$vuetify.breakpoint.xsOnly" max-width="600" scrollable>
      <v-card max-height="550">
        <v-card-title>Filter Available Champions</v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="hero in heroes" :key="hero.id" sm="3">
              <v-card outlined class="d-flex" @click="toggleHeroAvailability(hero.id)">
                <v-card-text class="pa-2">
                  <div class="d-flex align-center">
                    <v-avatar :size="24">
                      <v-img :src="hero.avatar" />
                    </v-avatar>
                    <div class="text-subtitle-2 flex-grow-1 ml-1 text-truncate">
                      {{ hero.name }}
                    </div>
                  </div>
                </v-card-text>
                <v-overlay
                  v-if="unavailableHeroes.includes(hero.id)"
                  absolute
                  color="red darken-4"
                >
                  <v-icon size="36" color="rgba(0,0,0,0.4)">
                    mdi-cancel
                  </v-icon>
                </v-overlay>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue darken-2" @click="unavailableHeroes = heroes.map(i => i.id)">
            Select All
          </v-btn>
          <v-btn text color="yellow darken-3" @click="unavailableHeroes = []">
            Clear
          </v-btn>
          <v-spacer />
          <v-btn text @click="draftDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-bottom-navigation app hide-overlay persistent :input-value="team.length > 0">
      <team-synthesis />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      draftDialog: false,
      sorts: [
        'name',
        'attack',
        'defense',
        'movement',
        'control',
        'support'
      ]
    }
  },
  computed: {
    heroes () {
      return this.$store.getters.rawHeroes
    },
    selectedSort: {
      get () {
        return this.$store.getters.sort
      },
      set (value) {
        this.$store.commit('set', { key: 'sort', value })
      }
    },
    fourPlayer: {
      get () {
        return this.$store.getters.fourPlayer
      },
      set (value) {
        this.$store.commit('set', { key: 'fourPlayer', value })
      }
    },
    team () {
      return this.$store.getters.team
    },
    unavailableHeroes: {
      get () {
        console.log(this.$store.getters.unavailableHeroes)
        return this.$store.getters.unavailableHeroes
      },
      set (value) {
        this.$store.commit('set', { key: 'unavailableHeroes', value })
      }
    }
  },
  methods: {
    toggleHeroAvailability (id) {
      const index = this.unavailableHeroes.indexOf(id)
      const newUnavailableHeroes = this.unavailableHeroes.slice()
      if (index > -1) {
        newUnavailableHeroes.splice(index, 1)
      } else {
        newUnavailableHeroes.push(id)
      }
      console.log(newUnavailableHeroes)
      this.unavailableHeroes = newUnavailableHeroes
    }
  }
}
</script>
