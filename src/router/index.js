import Vue from 'vue'
import VueRouter from 'vue-router'
import NoteList from "@/views/NoteListView"
import NoteDetailsView from "@/views/NoteDetailsView"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: NoteList,
        name: 'index'
    },
    {
        path: '/details/:id',
        component: NoteDetailsView,
        name: 'note-details'
    },
    {
        path: '/details/new_note/',
        component: NoteDetailsView,
        name: 'new-note'
    }
]

const router = new VueRouter({routes, mode: 'history'})

export default router
