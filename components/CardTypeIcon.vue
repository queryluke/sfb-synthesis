<template>
  <v-chip small color="transparent" class="px-2">
    <v-icon small left color="grey lighten-1">
      {{ icon }}
    </v-icon>
    <span class="grey--text text--lighten-1">
      <slot />
    </span>
  </v-chip>
</template>

<script>
export default {
  name: 'CardTypeIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
