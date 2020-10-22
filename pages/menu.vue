<template>
  <section class="menu">
    <h2>menu</h2>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('background/change', { menu: {} })
  },
}
</script>
