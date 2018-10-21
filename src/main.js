import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMouseParallax from 'vue-mouse-parallax'
import Vuex from 'vuex'
import style from './style.css'
import normalize from './normalize.css'

Vue.use(VueRouter)
Vue.use(VueMouseParallax)
Vue.use(Vuex);

//components
import Men from './components/Menu.vue'

//Views
import Main from './views/main/main.vue'

var router = new VueRouter({
  routes:[
    { path: '/', name: 'main', component: Main},
  ]
})

const store = new Vuex.Store({
  state: {
    count: 2
  },
  getters:{
    count(state) {
      return state.count;
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  router: router,
  components:{
    Men
  },
  data(){
    return{
      menuOpen: false
    }
  }
  
})
