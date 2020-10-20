<template>
  <blockquote class="landing__blockquote">
    <img src="/svg/quote.svg" alt="Quote icon" />
    <i>
      Краще взяти і винайти завтрашній день, ніж переживати про те, що вчорашній
      був так собі.
    </i>
  </blockquote>
</template>

<script lang="ts">
export default {
  name: 'Blockquote',
}
</script>

<style lang="scss" scoped>
.landing__blockquote {
  font-family: 'Playfair Display', sans-serif;
  font-size: 4vmax;

  img {
    height: 4vmax;
  }
}
</style>
