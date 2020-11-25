export default  {
    state: () => ({
        note_delete_modal: false,
        note_update_modal: false,
        todo_delete_modal: false,
        todo_update_modal: false,
        element_id: undefined,
    }),
    mutations: {
        OPEN_MODAL(state, payload) {
            state[payload.modal_type] = true
            state.element_id = payload.id
        },
        CLOSE_MODAL(state, payload) {
            state[payload.modal_type] = false
            state.element_id = undefined
        }
    }
}
