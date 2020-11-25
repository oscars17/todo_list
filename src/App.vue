<template lang="pug">
  div#todo_application(v-if="app_loaded")
    modal-wrapper
    div.application-header
      application-header
    div.application-body
      router-view
</template>

<script>
  import ApplicationHeader from "@/components/ApplicationHeader/ApplicationHeader"
  import ModalWrapper from "@/components/Modals/ModalWrapper"
  import { mapState } from 'vuex'

  export default {
    components: {
      'application-header': ApplicationHeader,
      'modal-wrapper': ModalWrapper,
    },
    computed: {
      ...mapState({
        app_loaded: state => state.app_loaded
      })
    }
  }
</script>

<style lang="sass">
  @import "assets/css/main"
  @import "assets/css/buttons"
  @import "assets/css/transitions"
  @import "assets/css/views"
</style>
