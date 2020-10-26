<template>
  <section class="callback">
    <p v-if="!success">
      Якщо ви маєте ідеї щодо покращення вигляду/роботи сайту, чи зауваження
      можете залишити повідомлення використовучючи дану форму.
    </p>
    <transition appear name="fade" mode="out-in">
      <div v-if="success" class="callback__success" key="1">
        <h1>Звернення було надіслане!</h1>
        <lazy-app-link to="/">Повернутись на головну</lazy-app-link>
      </div>
      <form v-else class="callback__form" @submit.prevent="sendMail" key="2">
        <ul class="flex-outer">
          <li>
            <label for="subject">Заголовок</label>
            <input
              id="subject"
              v-model="formValues.subject"
              type="text"
              placeholder="Мета зв'язку"
            />
          </li>
          <li>
            <label for="text">Тіло звернення</label>
            <textarea
              id="text"
              v-model="formValues.text"
              rows="4"
              placeholder="Детальний опис звернення"
            ></textarea>
          </li>
          <li>
            <button type="submit">Прийняти</button>
          </li>
        </ul>
      </form>
    </transition>
  </section>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      formValues: {},
      success: false,
    }
  },
  methods: {
    sendMail() {
      this.$mail
        .send({
          ...this.formValues,
          from: 'feedback@lifeway.vercel.app',
          to: 'dimasoltusyuk@gmail.com',
        })
        .then(
          function () {
            this.success = true
          }.bind(this)
        )
    },
  },
}
</script>
