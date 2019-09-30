<template lang="pug">
  v-app
    v-content.main
      nuxt
    footer
      v-container
        span &copy; 2019 MAMA systems
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
#app
  font-family: 'Work Sans', sans-serif
  font-weight: 200

h3, h1, h2
  font-weight: 200
  padding-top: 1em
  margin-bottom: 1em

footer
  a
    color: #000
    margin-right: 10px
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
