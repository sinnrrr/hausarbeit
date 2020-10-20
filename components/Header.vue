<template>
  <header>
    <h1>Шлях, ціною в життя</h1>
    <nuxt-link to="/menu">
      <div class="menu">
        <img src="/svg/menu.svg" alt="Menu icon" />
      </div>
    </nuxt-link>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
}
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  margin-top: 12px;
  margin-left: 24px;

  img {
    transition: $transition;
    height: 6vmax;
  }

  & > img:hover {
    padding: 5px;
    border: 5px solid $white;
  }
}
</style>
