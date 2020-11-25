import Vue from 'vue'
import App from './App.vue'
import example_data from "@/example_data"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStickyNote, faTrashAlt, faTimesCircle, faEdit, faArrowAltCircleLeft, faSave} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router/index'
import store from '@/store/index'

library.add(faStickyNote)
library.add(faTrashAlt)
library.add(faTimesCircle)
library.add(faEdit)
library.add(faArrowAltCircleLeft)
library.add(faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      loading: false,
      app_loaded: false,
    }
  },
  computed: {
    store_note_list() {
      return store.state.note_list
    }
  },
  watch: {
    store_note_list: {
      deep: true,
      handler(data) {
        localStorage.setItem('note_list', JSON.stringify(data))
      }
    }
  },
  created() {
    let note_list = localStorage.getItem('note_list')
    if (!note_list){
      localStorage.setItem('note_list', JSON.stringify(example_data))
      note_list = localStorage.getItem('note_list')
    }
    else store.commit('SET_NOTE_LIST', JSON.parse(note_list))
    store.commit('SET_APP_LOADING', true)
  },
}).$mount('#app')
