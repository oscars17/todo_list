<template lang="pug">
  button.application-button(@click="onClick")
    div.application-button__text {{this.text}}
</template>

<script>
  export default {
    name: "ApplicationButton",
    props: {
      text: {
        type: String,
        requited: true
      }
    },
    methods: {
      onClick() {
        this.$emit('on-click')
      }
    }
  }
</script>

<style lang="sass">

</style>