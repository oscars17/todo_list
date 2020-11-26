<template lang="pug">
  div.note-details
    div.note-details__header.flex-row
      div.note-details__header-left-col
        span.note-details__index {{`${this.index}.`}}
        span.note-details__date-created {{`${this.note.date_created}`}}
      div.note-details__header-right-col
        span.note-details__delete
          icon-button(:icon="['far', 'trash-alt']" @on-click="openDeleteModal")
    div.note-details__body(v-if="!edit")
      div.note-details__text {{this.text}}
    div.note-details__body(v-else)
      div.note-details__textarea
        textarea(v-model="text")
    div.note-details__footer.flex-row(v-if="editable")
      div.note-details__edit-buttons.flex-row(v-if="edit")
        div.note-details__button
          application-button(
            :text="complete_editing_text"
            @on-click="saveEdit"
            )
        div.note-details__button
          application-button(
            :text="cancel_editing_text"
            @on-click="cancelEditing"
          )
      div.note-details__edit-buttons(v-else)
        div.note-details__button
          application-button(
            :text="set_edit_text"
            @on-click="edit = !edit"
          )
      div.note-details__edit-buttons(v-if="note.cached_text")
        div.note-details__button(v-if="!reverted")
          application-button(
            :text="cancel_last_update"
            @on-click="revertChange(false)"
          )
        div.note-details__button(v-else)
          application-button(
            :text="restore_last_update"
            @on-click="revertChange(true)"
          )
</template>

<script>
  import IconButton from "@/components/Ui/IconButton"
  import ApplicationButton from "@/components/Ui/ApplicationButton"
  import { mapMutations } from 'vuex'

  export default {
    name: "NoteDetails",
    components: {
      'icon-button': IconButton,
      'application-button': ApplicationButton,
    },
    props: {
      note: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true,
      },
      editable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        edit: false,
        reverted: false,
        set_edit_text: 'редактировать',
        cancel_editing_text: 'отменить редактирование',
        complete_editing_text: 'завершить редактирование',
        cancel_last_update: 'отменить изменение',
        restore_last_update: 'восстановить изменение',
        text: ''
      }
    },
    created() {
      this.text = this.note.text
    },
    beforeRouteLeave() {
    },
    methods: {
      ...mapMutations({
        openModal: 'OPEN_MODAL',
        editNote: 'EDIT_NOTE',
      }),
      openDeleteModal() {
        const payload = {
          modal_type: 'note_delete_modal',
          id: this.note.id
        }
        return this.openModal(payload)
      },
      cancelEditing() {
        this.text = this.note.text
        this.edit = false
      },
      saveEdit() {
        const payload = {
          id: this.note.id,
          text: this.text
        }
        this.editNote(payload)
        this.edit = false
      },
      revertChange(revert_state) {
        const new_text = this.note.cached_text
        const payload = {
          id: this.note.id,
          text: new_text
        }
        this.editNote(payload)
        this.text = new_text
        this.edit = false
        this.reverted = revert_state
      },
    }
  }
</script>

<style lang="sass">
  @import "/src/assets/css/note"
</style>