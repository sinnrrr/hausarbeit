<template>
  <section class="landing">
    <lazy-blockquote />
    <div class="landing__buttons">
      <nuxt-link class="landing__button" to="/fact/1">Take a tour</nuxt-link>
      <a
        class="landing__button"
        href="https://calendar.google.com/calendar/u/0?cid=NXM2ODFyYzIwa2kxYjMyc2JmdGo4ZmJpNDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
      >
        Calendar
      </a>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  layout: 'landing',
}
</script>
