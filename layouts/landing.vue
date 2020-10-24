<template>
  <div class="container">
    <lazy-background />
    <lazy-header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  transition: {
    appear: true,
  },
}
</script>
