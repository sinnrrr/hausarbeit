<template>
  <section class="callback">
    <h1>Зв'язатись з розробником</h1>
    <p>
      Якщо ви маєте ідеї щодо покращення вигляду/роботи сайту, чи зауваження
      можете залишити повідомлення використовучючи дану форму.
    </p>
    <form class="callback__form" @submit.prevent="sendMail">
      <label>
        Ваш емейл
        <input v-model="formValues.from" type="email" placeholder="Емейл" />
      </label>
      <label>
        Заголовок
        <input
          v-model="formValues.subject"
          type="text"
          placeholder="Мета зв'язку"
        />
      </label>
      <label>
        Тіло звернення
        <textarea
          v-model="formValues.text"
          rows="6"
          placeholder="Детальний опис звернення"
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
    }
  },
  methods: {
    sendMail() {
      this.$mail.send({ ...this.formValues, to: 'dimasoltusyuk@gmail.com' })
    },
  },
}
</script>
