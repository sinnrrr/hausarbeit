<template>
  <section class="landing">
    <lazy-blockquote />
    <div class="landing__buttons">
      <lazy-app-link class="landing__button" to="/facts/1">Факти</lazy-app-link>
      <lazy-app-link class="landing__button" :to="calendarURL">
        Нагадування
      </lazy-app-link>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      calendarURL: process.env.calendarURL,
    }
  },
}
</script>
