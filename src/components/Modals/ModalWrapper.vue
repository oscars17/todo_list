<template lang="pug">
  div.modal(v-if="note_delete_modal")
    note-delete-modal
</template>

<script>
  import DeleteModal from "@/components/Modals/NoteDeleteModal"
  import { mapState } from 'vuex'

  export default {
    name: "ModalWrapper",
    components: {
      'note-delete-modal': DeleteModal,
    },
    computed: {
      ...mapState({
        note_delete_modal: state => state.modals.note_delete_modal
      }),
    }
  }
</script>

<style lang="sass">
  @import "src/assets/css/modals"
</style>
