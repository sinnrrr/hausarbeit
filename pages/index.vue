<template>
  <section class="landing">
    <lazy-blockquote />
    <div class="landing__buttons">
      <lazy-app-link class="landing__button" to="/facts/1">Факти</lazy-app-link>
      <lazy-app-link
        class="landing__button"
        to="https://calendar.google.com/calendar/u/0?cid=NXM2ODFyYzIwa2kxYjMyc2JmdGo4ZmJpNDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
      >
        Нагадування
      </lazy-app-link>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landing',
}
</script>
