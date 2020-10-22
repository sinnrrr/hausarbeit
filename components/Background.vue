<template>
  <div :style="this.$store.state.background.options[$route.name]"></div>
</template>

<script>
export default {
  name: 'Background',
}
</script>
