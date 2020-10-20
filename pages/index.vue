<template>
  <section class="landing">
    <lazy-blockquote />
    <div class="landing__buttons"></div>
    <lazy-button to="/fact/1" body="Take a tour" />
    <lazy-button to="/calendar" body="Calendar" />
  </section>
</template>

<script lang="ts">
export default {
  layout: 'landing',
}
</script>

<style scoped>
.landing {
  margin-top: 6rem;
}

.landing__buttons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
}
</style>
