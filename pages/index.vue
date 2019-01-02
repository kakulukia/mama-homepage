<template lang="pug">
  div
    .text-xs-center.pt-5
      img.logo(src="/img/logo.png")

    .black-bar.text-xs-center
      v-container.py-5
        h1 Willkommen bei MAMA systems
        p Wir bieten professionelle Softwareentwicklung und IT-Beratung auf höchstem Niveau.

    v-layout(column justify-center align-center)
      v-container
        v-flex(xs12)
          h3 Service der Meisterklasse
          p.
            Wir möchten, dass alle unsere Kunden von der hohen Fachkompetenz bei MAMA systems profitieren. Alle unsere
            Dienstleistungen, insbesondere Design und Programmierung von Apps, sollen Ihnen das Leben leichter und stressfreier machen.

          h3 Immer für Sie da
          p.
            Wir bieten Leistung auf höchstem Niveau. Wir achten besonders genau darauf, dass alle Einzelheiten einfach,
            reibungslos und zeitnah abgewickelt werden. Wenn Sie mit MAMA systems zusammenarbeiten, können Sie sich
            darauf verlassen, dass Sie in guten Händen sind. Wir sind stolz auf unseren außergewöhnlichen Kundenservice
            und können Ihnen versichern, dass Sie die Zusammenarbeit mit unserem Team lieben werden. Lassen Sie uns noch
            heute wissen, wie wir Ihnen weiterhelfen können.

          h3 Über uns
          p.
            Wir sind ein erfahrenes Team aus Internetspezialisten und Entwicklern, welches bereits seit fast 10 Jahren
            gemeinsam erfolgreich an verschiedenen Projekten u.a. für Siemens, die Fraunhofer Gesellschaft und den CSD
            Berlin arbeitet. Unsere Kernkompetenzen liegen in der Konzipierung und Umsetzung innovativer Technologieprojekte.
            Das Team bündelt dabei sein Wissen und seine Erfahrungen aus Industrie 4.0, Wirtschaft, Eventmanagement,
            Ingenieurwesen, Software- und Webentwicklung.

            Wir arbeiten jeden Tag daran die Zukunft ein Stück greifbarer zu machen.
    .black-bar.text-xs-center.theme--dark
      v-container.py-0
        v-layout(row justify-center align-center wrap)
          v-flex.affe(xs12 md6 align-self-end)
          v-flex(xs12 md6 v-if="sent")
            v-layout.done(align-center justify-center)
              div Danke! Wir melden uns schnellstmöglich bei Ihnen.
          v-flex.form.pa-4(xs12 md6 v-if="!sent")
            h2 Kontakt
            v-form(v-model="valid")

              v-layout(row justify-center align-center wrap)
                v-flex.form.px-4(xs12 md6)
                  v-text-field(
                    v-model="name"
                    :rules="notEmpty"
                    label="Name"
                    required dark color="primary")
                v-flex.form.px-4(xs12 md6)
                  v-text-field(
                    v-model="email"
                    :rules="emailRules"
                    label="E-Mail-Adresse"
                    required dark color="primary")
                v-flex.form.px-4(xs12)
                  v-text-field(
                    v-model="subject"
                    :rules="notEmpty"
                    label="Betreff"
                    required dark color="primary")
                v-flex.form.px-4(xs12)
                  v-textarea(
                    v-model="message"
                    :rules="notEmpty"
                    label="Nachricht"
                    required dark color="primary")
                v-flex.form.px-4(xs12)
                  v-btn.theme--dark(
                    :disabled="!valid"
                    @click="submit") Senden
</template>

<script>
export default {
  data: () => ({
    valid: true,
    sent: false,
    name: '',
    subject: '',
    message: '',
    notEmpty: [
      v => !!v || 'Bitte alle Felder ausfüllen!'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}/.test(v) || 'E-Mail-Adresse ungültig'
    ]
  }),
  methods: {
    submit: function () {
      console.log("submitting ..")

      this.$axios.$post('/api/contact', {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }).then((response) => {
        console.log(response)
        this.sent = true
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  head () {
    return {
      title: "mamasystems",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'MAMA systems homepage' }
      ]
    }
  }
}
</script>

<style lang="sass">
.logo
  width: 177px

.black-bar
  background-color: black
  color: white
.affe
  background-image: url("/img/Affe.jpg")
  background-size: cover
  min-height: 300px
  height: 100%
.done
  min-height: 300px
.form
  background-color: #222428
  height: 100%
</style>
