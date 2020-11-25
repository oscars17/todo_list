<template lang="pug">
  transition(name="fade" appear @enter="showToDoList")
    div.note-details-view(v-if="loaded")
      div.note-details-view__note
        note-element(
          :note="note"
          :index="index"
          :editable="true"
          )
      div.note-details-view__todos(v-if="show_todo")
        div.note-details-view__todos-wrap
          todo-list(
            :note="note"
            :editable="true"
            )
        div.note-details-view__add-todo
</template>

<script>
  import NoteElement from "@/components/ApplicationBody/Note/NoteElement"
  import ToDoList from "@/components/ApplicationBody/ToDo/ToDoList"
  import IconButton from "@/components/Ui/IconButton"
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "NoteDetailsView",
    components: {
      'note-element': NoteElement,
      'todo-list': ToDoList,
      'icon-button': IconButton
    },
    data() {
      return {
        note: undefined,
        index: undefined,
        loaded: false,
        show_todo: false,
      }
    },
    computed: {
      ...mapState({
        note_list: state => state.note_list
      })
    },
    created() {
      const note_id = this.$route.params.id
      let note_details = undefined
      this.note_list.forEach((note, i) => {
        if (note.id == note_id) {
          note_details = {
            note: this.note_list[i],
            index: i + 1}
        }
      })
      if (!note_details) this.$router.push({name: 'index'})
      this.note = note_details.note
      this.index = note_details.index
      this.loaded = true
    },
    beforeDestroy() {
      this.resetCachedData(this.note.id)
    },
    methods: {
      ...mapMutations({
        resetCachedData: 'RESET_CACHED_DATA'
      }),
      showToDoList() {
        this.show_todo = true
      }
    }
  }
</script>

  <style lang="sass">

  </style>