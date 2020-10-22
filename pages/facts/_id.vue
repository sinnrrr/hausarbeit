<template>
  <section class="fact">
    <nuxt-link to="/">Left</nuxt-link>
    <!--    <nuxt-content :document="content" />-->
    <nuxt-link to="/">Right</nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Fact',
  data() {
    return {
      content: null,
    }
  },
  beforeCreate() {
    console.log(this.$route.path)
    this.$content({ deep: true })
      .fetch()
      .then(
        function (content) {
          this.content = content
        }.bind(this)
      )

    this.$store.commit('background/change', {
      fact: {
        [this.$route.params.id]: {
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('/img/index.jpg')",
          backgroundPosition: 'center top',
          backgroundRepeat: 'no repeat',
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -10,
        },
      },
    })
  },
  methods: {},
}
</script>
