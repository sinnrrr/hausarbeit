<template>
  <div class="container">
    <lazy-header />
    <!--    <lazy-menu />-->
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
export default {
  transition: {
    appear: true,
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url('/img/index.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2vh 4vw 2vh;
}
</style>
