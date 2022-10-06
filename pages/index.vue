<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="hero in heroes"
        :key="hero.id"
        cols="6"
        sm="4"
        lg="3"
        xl="2"
        class="py-4"
      >
        <hero-card :hero="hero" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  computed: {
    sort () {
      return this.$store.getters.sort
    },
    heroes () {
      return this.$store.getters.filteredHeroes.slice().sort((a, b) => {
        if (this.sort === 'name') {
          return a.name > b.name ? 1 : -1
        } else {
          return a.facets[this.sort] > b.facets[this.sort] ? -1 : 1
        }
      })
    }
  }
}
</script>
