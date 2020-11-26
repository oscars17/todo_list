<template lang="pug">
  div.modal-content
    div.modal-content__header.flex-row
      div.modal-content__title Удалить заметку
      div.modal-content__close
        icon-button(:icon="['far', 'times-circle']" @on-click="closeModal(close_payload)")
    div.modal-content__body
    div.modal-content__footer.flex-row
      div.modal-content__delete-button
        app-button(:text="delete_button_text" @on-click="deletionChain")
      div.modal-content__cancel-button
        app-button(:text="cancel_button_text" @on-click="closeModal(close_payload)")
</template>

<script>
  import ApplicationButton from "@/components/Ui/ApplicationButton"
  import IconButton from "@/components/Ui/IconButton"
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "DeleteModal",
    components: {
      'app-button': ApplicationButton,
      'icon-button': IconButton
    },
    data() {
      return {
        delete_button_text: 'Удалить',
        cancel_button_text: 'Отмена',
        close_payload: {
          modal_type: 'note_delete_modal'
        }
      }
    },
    computed: {
      ...mapState({
        note_id: state => state.modals.element_id,
      }),
    },
    methods: {
      ...mapMutations({
        closeModal: 'CLOSE_MODAL',
        deleteNote: 'DELETE_NOTE',
      }),
      deletionChain() {
        this.deleteNote(this.note_id)
        this.closeModal(this.close_payload)
      }
    }
  }
</script>

<style lang="sass">

</style>