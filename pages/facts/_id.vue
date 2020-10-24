<script src="../../plugins/vue-touch.js"></script>
<template>
  <v-touch
    tag="section"
    class="fact"
    @swipeleft="handleSwipeLeft"
    @swiperight="handleSwipeRight"
  >
    <lazy-app-link :to="defineLink(-1)" class="fact__link"
      ><img
        class="fact__arrow"
        src="/svg/left-arrow-angle.svg"
        alt="Arrow to go back"
    /></lazy-app-link>
    <h1 class="fact__title">{{ currentFact.title }}</h1>
    <lazy-app-link :to="defineLink(1)" class="fact__link"
      ><img
        class="fact__arrow"
        src="/svg/right-arrow-angle.svg"
        alt="Arrow to go forward"
    /></lazy-app-link>
  </v-touch>
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
        return '/facts/' + this.$store.state.fact.length
      } else if (
        parseInt(this.$route.params.id) === this.$store.state.fact.length
      ) {
        return '/facts/1'
      } else if (this.$route.params.id < this.$store.state.fact.length) {
        return '/facts/' + (parseInt(this.$route.params.id) + where)
      }
    },
    handleSwipeLeft() {
      if (parseInt(this.$route.params.id) === this.$store.state.fact.length) {
        this.$router.push('/facts/1')
      } else if (this.$route.params.id < this.$store.state.fact.length) {
        this.$router.push('/facts/' + (parseInt(this.$route.params.id) + 1))
      }
    },
    handleSwipeRight() {
      if (this.$route.params.id === '1') {
        this.$router.push('/facts/' + this.$store.state.fact.length)
      } else if (this.$route.params.id <= this.$store.state.fact.length) {
        this.$router.push('/facts/' + (parseInt(this.$route.params.id) - 1))
      }
    },
    changeBackground() {
      this.$store.commit('background/factChange', {
        [this.$route.params.id]: {
          background:
            `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), ` +
            `url('${this.currentFact.backgroundImage}')`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
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
