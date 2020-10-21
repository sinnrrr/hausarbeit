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
