<template>
  <section class="landing">
    <lazy-blockquote />
    <div class="landing__buttons">
      <nuxt-link class="landing__button" to="/facts/1">Факти</nuxt-link>
      <a
        class="landing__button"
        href="https://calendar.google.com/calendar/u/0?cid=NXM2ODFyYzIwa2kxYjMyc2JmdGo4ZmJpNDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
      >
        Нагадування
      </a>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landing',
}
</script>
