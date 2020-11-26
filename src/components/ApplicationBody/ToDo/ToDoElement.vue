<template lang="pug">
  div.todo-element.flex-row
    div.todo-element__left-col.flex-row
      span.todo-element__checkbox(:class="!editable ? 'disabled' : ''")
        checkbox(:prefill_check_status="todo.checked" @on-click="setCheckStatus")
      span.todo-element__created-date {{`${this.todo.date_created}`}}
      span.todo-element__input(v-show="edit")
        input(
          ref='todo_input'
          v-model="text"
          @blur="edit = false"
          @keydown.enter="setTextEdit"
          )
      span.todo-element__text(v-if="!edit") {{this.text}}
    div.todo-element__right-col.flex-row(v-show="editable")
      div.todo-element__edit(v-if="!edit")
        icon-button(:icon="['far', 'edit']" @on-click="setTextEdit")
      div.todo-element__finish-edit(v-else)
        icon-button(:icon="['far', 'save']" @on-click="setText")
      div.todo-element__delete
        icon-button(:icon="['far', 'trash-alt']" @on-click="deleteToDo")
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
      },
    },
    data() {
      return {
        edit: false,
        text: '',
      }
    },
    created() {
      this.text = this.todo.text
    },
    methods: {
      ...mapMutations({
        setToDoUpdate: 'SET_TODO_UPDATE',
      }),
      updateElements() {

      },
      revertElements() {

      },
      setTextEdit() {
        this.edit = !this.edit
        const input = this.$refs['todo_input']
        this.$nextTick(() => input.focus())
      },
      setCheckStatus(data) {
        const payload = {
          checked: data,
          note_id: this.note_id,
          todo_id: this.todo.id
        }
        this.setToDoUpdate(payload)
      },
      setText() {
        const payload = {
          text: this.text,
          note_id: this.note_id,
          todo_id: this.todo.id
        }
        this.edit = !this.edit
        this.setToDoUpdate(payload)
      },
      deleteToDo() {

      },
    }
  }
</script>

<style lang="sass">

</style>