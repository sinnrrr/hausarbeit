<template>
  <section class="menu">
    <div class="menu__wrapper">
      <div class="menu__container">
        <lazy-app-link
          v-for="item in $store.state.menu"
          :key="item.indexOf"
          :to="item.url"
          >{{ item.title }}
        </lazy-app-link>
      </div>
      <div class="menu__container">
        <header class="menu__header">
          <h1>Меню</h1>
          <a class="burger" @click.prevent="$router.go(-1)"
            ><img src="/svg/close.svg" alt="Close icon"
          /></a>
        </header>
        <span
          >«Останні 33 роки я щоранку дивився в дзеркало і запитував себе: "Якщо
          сьогодні буде останнім днем в моєму житті, чи буду я робити те, що
          запланував на сьогодні?»</span
        >
      </div>
    </div>
  </section>
</template>
