<template>
  <section class="fact">
    <lazy-app-link :to="defineLink(-1)">Left</lazy-app-link>
    <h1>{{ currentFact.quote }}</h1>
    <lazy-app-link :to="defineLink(1)">Right</lazy-app-link>
  </section>
</template>

<script>
export default {
  name: 'Fact',
  data() {
    return {
      currentFact: this.$store.state.fact[this.$route.params.id - 1],
    }
  },
  created() {
    this.changeBackground()
  },
  updated() {
    this.changeBackground()
  },
  methods: {
    defineLink(where) {
      if (this.$route.params.id === '1' && where === -1) {
        return '/'
      } else if (
        parseInt(this.$route.params.id) === this.$store.state.fact.length
      ) {
        return '/facts/1'
      } else if (this.$route.params.id < this.$store.state.fact.length) {
        return '/facts/' + (parseInt(this.$route.params.id) + where)
      }
    },
    changeBackground() {
      this.$store.commit('background/factChange', {
        [this.$route.params.id]: {
          background:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), ` +
            `url('${this.currentFact.backgroundImage}')`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no repeat',
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -10,
        },
      })
    },
  },
}
</script>
