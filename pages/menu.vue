<template>
  <section class="menu">
    <div class="menu__wrapper">
      <div class="menu__container">
        <lazy-app-link v-for="item in menu" :key="item.indexOf" :to="item.url"
          >{{ item.title }}
        </lazy-app-link>
      </div>
      <div class="menu__container">
        <header class="menu__header">
          <h1>Menu</h1>
          <nuxt-link to="/">close</nuxt-link>
        </header>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at
          beatae consequuntur cumque debitis, eaque expedita fuga impedit
          incidunt magnam, odit officia officiis porro quae quam sapiente
          suscipit totam vero!</span
        >
      </div>
    </div>
  </section>
</template>

<script>
import menu from '~/content/menu.json'

export default {
  data() {
    return {
      menu,
      links: [],
    }
  },
  computed: {
    filteredInternal() {
      this.menu.forEach((link, index) => {
        if (link.external) {
          delete this.menu[index]
        }
      })

      return this.menu
    },
    filteredExternal() {
      this.menu.forEach((link) => {
        if (link.external) {
          this.links.push(link)
        }
      })

      return this.links
    },
  },
}
</script>
