<template lang="pug">
  v-app
    v-content.main
      nuxt
    footer
      v-container
        span &copy; 2022 MAMA systems
        div
          nuxt-link(to="/imprint") Impressum
          nuxt-link(to="/data") Datenschutzerlärung
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="sass">
@font-face
  font-family: 'Work Sans'
  font-style: normal
  font-weight: 200
  src: url('/fonts/WorkSans-Light.ttf')

@font-face
  font-family: 'Work Sans'
  font-style: bolder
  font-weight: 500
  src: url('/fonts/WorkSans-Regular.ttf')


#app
  font-family: 'Work Sans', sans-serif
  font-weight: 200

h3, h1, h2
  font-weight: 700
  padding-top: 1em
  margin-bottom: 1em

a
  color: #000
  margin-right: 10px
  text-decoration: none
  &:hover
    text-decoration: underline
</style>
