<template>
  <v-card class="d-flex align-center px-2 py-1 mx-sm-6" outlined>
    <div class="grey--text text--lighten-1 font-weight-black" style="line-height: 15px">
      {{ breakdown.count }}
    </div>
    <v-icon small color="grey lighten-1">
      <slot />
    </v-icon>

    <div class="d-flex ml-1">
      <template v-for="magic in magics">
        <v-icon v-if="breakdown.byMagic[magic.key]" :key="magic.key" :color="magic.color" size="18">
          mdi-numeric-{{ breakdown.byMagic[magic.key] }}-circle-outline
        </v-icon>
      </template>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CardTypeBreakdown',
  props: {
    breakdown: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      magics: [
        {
          key: 'creation',
          name: 'Creation',
          color: 'yellow darken-3'
        },
        {
          key: 'manipulation',
          name: 'Manipulation',
          color: 'blue darken-2'
        },
        {
          key: 'destruction',
          name: 'Destruction',
          color: 'red'
        }
      ]
    }
  }
}
</script>
