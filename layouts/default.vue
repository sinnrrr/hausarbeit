<template>
  <div class="container">
    <lazy-background />
    <nuxt />
  </div>
</template>

<script>
export default {
  transition: {
    appear: true,
  },
}
</script>
