<template>
  <transition name="fade">
    <div v-if="defineBackground" :style="defineBackground"></div>
  </transition>
</template>

<script>
export default {
  name: 'Background',
  computed: {
    defineBackground() {
      return this.$route.name === 'facts-id'
        ? this.$store.state.background.facts[this.$route.params.id]
        : this.$store.state.background[this.$route.name]
    },
  },
}
</script>
