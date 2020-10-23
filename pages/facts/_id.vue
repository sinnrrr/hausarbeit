<template>
  <section class="fact">
    <nuxt-link to="/">Left</nuxt-link>
    <nuxt-link to="/">Right</nuxt-link>
  </section>
</template>

<script>
import content from '~/content/facts.json'

export default {
  name: 'Fact',
  data() {
    return {
      content,
    }
  },
  created() {
    this.changeBackground()
  },
  updated() {
    this.changeBackground()
  },
  methods: {
    changeBackground() {
      this.$store.commit('background/factChange', {
        [this.$route.params.id]: {
          background:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), ` +
            `url('${this.content[this.$route.params.id - 1].backgroundImage}')`,
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
