<template lang="pug">
  div
    .text-xs-center.pt-5
      nuxt-link(to="/")
        img.logo(src="/img/logo.png")

    .black-bar.text-xs-center
      v-container.py-5
        h1 Impressum

    v-container
        v-flex(xs12 style='white-space:pre-wrap;').
          MAMA systems UG (haftungsbeschränkt)
          Niklasstraße 22, 14163 Berlin
          Geschäftsführer: Marco Held

          Telefonnummer: 033762217632
          E-Mail: #[a(href="mailto:info@mamasystems.de") info@mamasystems.de]

          Eingetragen beim Amtsgericht Charlottenburg (Berlin)
          Aktenzeichen: HRB 200378 B
          Umsatzsteuer-ID: 29/431/31149



</template>
