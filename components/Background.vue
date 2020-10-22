<template>
  <div
    v-if="this.$store.state.background.options[$route.name]"
    :style="this.$store.state.background.options[$route.name]"
  ></div>
</template>

<script>
export default {
  name: 'Background',
}
</script>
