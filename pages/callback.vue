<template>
  <section class="callback">
    <h1>Зв'язатись з розробником</h1>
    <p>
      Якщо ви маєте ідеї щодо покращення вигляду/роботи сайту, чи зауваження
      можете залишити повідомлення використовучючи дану форму.
    </p>
    <button @click="sendMail('a', 'a', 'a')"></button>
  </section>
</template>

<script>
export default {
  methods: {
    sendMail(from, subject, text) {
      this.$mail.send({
        from,
        subject,
        text,
        to: 'dimasoltusyuk@gmail.com',
      })
    },
  },
}
</script>
