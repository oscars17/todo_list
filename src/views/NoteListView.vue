<template lang="pug">
  div.note-list__wrap
    transition-group.note-list(tag="ul" name="fade" appear @enter="showToDoList")
      li.note-list__element(
        v-for="(note, i) in note_list"
        :key="note.id"
      )
        div.note-list__details
          note-element(
            :note="note"
            :editable="false"
            :index="i + 1"
          )
        div.note-list__todos(v-show="show_todo")
          to-do-list(
            :note="note"
            :editable="false"
            :slice_border="3"
            )
        div.note-list__and-more.flex-row
          div.note-list__text-wrap
            div.note-list__text(v-if="note.todo_list.length - 3 > 0") {{`and ${note.todo_list.length - 3} more...`}}
          div.note-list__push
            router-link(:to='{name: "note-details", params: {id: note.id}}') Детали
</template>

  <script>
    import NoteElement from "@/components/ApplicationBody/Note/NoteElement"
    import ToDoList from "@/components/ApplicationBody/ToDo/ToDoList"
    import { mapState } from 'vuex'

    export default {
      name: "Note",
      components: {
        'note-element': NoteElement,
        'to-do-list': ToDoList,
      },
      computed: {
        ...mapState({
          note_list: state => state.note_list
        }),
      },
      data() {
        return {
          show_todo: false,
        }
      },
      methods: {
        showToDoList() {
          this.show_todo = true
        }
      }
    }
  </script>

<style lang="sass">

</style>