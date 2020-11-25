<template lang="pug">
  button.icon-button(@click="onClick")
    div.icon-button__icon
      font-awesome-icon(:icon="icon")
    div.icon-button__side-icon(v-if="side_icon")
      font-awesome-icon(:icon="side_icon")
</template>

<script>
  export default {
    name: "IconButton",
    props: {
      icon: {
        type: Array,
        required: true,
      },
      side_icon: {
        type: Array,
        required: false,
      },
      color: {
        type: String,
        default: '#fff',
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
