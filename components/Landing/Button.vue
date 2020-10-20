<template>
  <nuxt-link class="landing__button" :to="$props.to">
    {{ $props.body }}
  </nuxt-link>
</template>

<script lang="ts">
export default {
  name: 'Buttons',
  props: {
    to: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.landing__button {
  border: 3px solid $white;
  font-size: 2vmax;
  font-weight: 700;
  padding: 1vmax;

  &:nth-child(2n) {
    margin-right: 2em;
    margin-left: 2em;
  }
}
</style>
