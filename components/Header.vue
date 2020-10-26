<template>
  <header>
    <h1>{{ title }}</h1>
    <lazy-app-link to="/menu">
      <div class="burger">
        <img src="/svg/menu.svg" alt="Menu icon" />
      </div>
    </lazy-app-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: process.env.appTitle,
    }
  },
}
</script>
