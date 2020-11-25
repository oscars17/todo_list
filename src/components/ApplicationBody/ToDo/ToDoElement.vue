<template lang="pug">
  div.todo-element.flex-row
    div.todo-element__left-col.flex-row
      span.todo-element__checkbox
        checkbox(:prefill_check_status="todo.checked" @on-click="setCheckStatus")
      span.todo-element__created-date {{`${this.todo.date_created}`}}
      span.todo-element__text {{this.todo.text}}
    div.todo-element__right-col(v-show="editable")
      div.todo-element__edit(v-if="!edit")
        icon-button(:icon="['far', 'edit']" @on-click="edit = !edit")
      div.todo-element__finish-edit(v-else)
        icon-button(:icon="['far', 'save']" @on-click="setText")
</template>

<script>
  import CheckBox from "@/components/Ui/CheckBox"
  import IconButton from "@/components/Ui/IconButton"
  import { mapMutations } from 'vuex'

  export default {
    name: "ToDoElement",
    components: {
      IconButton,
      'checkbox': CheckBox,
    },
    props: {
      todo: {
        type: Object,
        required: true,
      },
      editable: {
        type: Boolean,
        default: false
      },
      note_id: {
        type: Number,
        required: true,
      }
    },
    data() {
      return {
        edit: false
      }
    },
    methods: {
      ...mapMutations({
        setToDoUpdate: 'SET_TODO_UPDATE',
      }),
      updateElements() {

      },
      revertElements() {

      },
      setCheckStatus(data) {
        const payload = {
          checked: data,
          note_id: this.note_id,
          todo_id: this.todo.id
        }
        this.setToDoUpdate(payload)
      },
      setText(data) {
        const payload = {
          text: data,
          note_id: this.note_id,
          todo_id: this.todo.id
        }
        this.edit = !this.edit
        this.setToDoUpdate(payload)
      }
    }
  }
</script>

<style lang="sass">

</style>