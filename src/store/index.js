import Vue from 'vue'
import Vuex from 'vuex'
import modals from './modals/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        'modals': modals,
    },
    state: () => ({
        note_list: [],
        app_loaded: false,
        additional_todo_list: [], // work in progress
    }),
    mutations: {
        ADD_ADDITIONAL_TODO(state) {
            state.additional_todo_list.push({}) // work in progress
        },
        SET_APP_LOADING(state, bool) {
          state.app_loaded = bool
        },
        SET_NOTE_LIST(state, payload) {
            if (Array.isArray(payload)) {
                state.note_list = payload
            }
        },
        DELETE_NOTE(state, note_id) {
            state.note_list.forEach((note, i) => {
                if (note.id === note_id) {
                    return state.note_list.splice(i, 1)
                }
            })
        },
        EDIT_NOTE(state, payload) {
            state.note_list.forEach((note, i) => {
                if (note.id === payload.id) {
                    const update_element = {
                        cached_text: note.text,
                        text: payload.text
                    }
                    let new_note = Object.assign(note, update_element)
                    return state.note_list.splice(i, 1, new_note)
                }
            })
        },
        DELETE_TODO() {
            //in progress
        },
        SET_TODO_UPDATE(state, payload) {
            state.note_list.forEach((note, i) => {
                if (note.id === payload.note_id) {
                    note.todo_list.forEach((todo, j) => {
                        if (todo.id === payload.todo_id) {
                            let new_params = {}
                            const new_checked = payload.checked
                            if (new_checked !== undefined) {
                                new_params.checked = new_checked
                                new_params.cached_checked = todo.checked
                            }
                            const new_text = payload.text
                            if (new_text !== undefined) {
                                new_params.text = new_text
                                new_params.cached_text = todo.text
                            }
                            let updated_todo = Object.assign(todo, new_params)
                            note.todo_list.splice(j, 1, updated_todo)
                            let updated_note = Object.assign(note, {todo_list: note.todo_list})
                            state.note_list.splice(i, 1, updated_note)
                        }
                    })
                }
            })
        },
        RESET_CACHED_DATA(state, id) {
            state.note_list.forEach((note, i) => {
                if (note.id  === id ) {
                    let finished_note = Object.assign({}, note)
                    finished_note.cached_text = null
                    finished_note.todo_list.forEach(todo => { todo.cached_text = null; todo.cached_checked = null })
                    state.note_list.splice(i, 1, finished_note)
                    return localStorage.setItem('note_list', state.note_list)
                }
            })
        }
    },
    getters: {
        note_counter: ({state}) => state.note_list.length
    },
})

export default store