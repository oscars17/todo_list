<template lang="pug">
  div.todo-wrap
    ul.note-list__todo-list
      li.note-list__todo(
        v-for="(todo, i) in slice_border ? note.todo_list.slice(0, slice_border) : note.todo_list.slice(0, note.todo_list.length)"
        :key="todo.id"
      )
        transition(name="slide-fade" appear)
          to-do-element(
            :todo="todo"
            :editable="editable"
            :note_id="note.id"
          )
</template>

<script>
  import ToDoElement from "@/components/ApplicationBody/ToDo/ToDoElement"

  export default {
    name: "ToDoList",
    components: {
      'to-do-element': ToDoElement,
    },
    props: {
      note: {
        type: Object,
        required: true,
      },
      editable: {
        type: Boolean,
        default :false
      },
      slice_border: {
        type: Number,
        required: false
      }
    },
  }
</script>

<style lang="sass">
  @import '/src/assets/css/todo'
</style>
