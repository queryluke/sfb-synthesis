<template>
  <v-card>
    <div>
      <ul>
        <li>attack: {{ hero.facets.attack }}</li>
        <li>defense: {{ hero.facets.defense }}</li>
        <li>movement: {{ hero.facets.movement }}</li>
        <li>control: {{ hero.facets.control }}</li>
        <li>support: {{ hero.facets.support }}</li>
      </ul>
    </div>
    <div v-for="(card, index) in hero.cards" :key="`${hero.id}-card-${index}-stats`">
      <v-card-text>
        <h3 class="text-subtitle-1">
          {{ card.name }}
        </h3>
        <ul>
          <li>attack: {{ card.attackScore }}</li>
          <li>defense: {{ card.defenseScore }}</li>
          <li>movement: {{ card.movementScore }}</li>
          <li>control: {{ card.controlScore }}</li>
          <li>support: {{ card.supportScore }}</li>
        </ul>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'HeroAnalysis',
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>
