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
          <h1>Menu</h1>
          <lazy-app-link to="/">close</lazy-app-link>
        </header>
        <span
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          at delectus distinctio ducimus explicabo facere laudantium magni
          nostrum omnis voluptatibus. Animi illum maxime nihil possimus
          recusandae sit soluta ut. Ut.</span
        >
      </div>
    </div>
  </section>
</template>
