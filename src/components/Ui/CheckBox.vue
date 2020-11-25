<template lang="pug">
  div.app-checkbox
    div.checkbox-wrap
      label
        input(type="checkbox" v-model="check_status" @click="triggerEvent")
        span
    div.app-checkbox__text(@click="triggerEvent") {{this.text}}
</template>

<script>
export default {
  name: "AppCheckbox",
  data() {
    return {
      check_status: false,
    }
  },
  props: {
    text: {
      type: String,
      required: false,
    },
    prefill_check_status: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
    }
  },
  created() {
    this.check_status = this.prefill_check_status
  },
  watch: {
  },
  methods: {
    triggerEvent(){
      this.$emit('on-click', !this.check_status)
      this.check_status = !this.check_status
    },
  }
}
</script>

<style lang="sass">
  @import 'src/assets/css/checkbox'
</style>