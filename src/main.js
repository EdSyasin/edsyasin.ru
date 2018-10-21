import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMouseParallax from 'vue-mouse-parallax'
import style from './style.css'
import normalize from './normalize.css'



Vue.use(VueRouter)
Vue.use(VueMouseParallax)

//Views
import Main from './views/main/main.vue'

var router = new VueRouter({
  routes:[
    { path: '/', name: 'main', component: Main},
  ]
})

new Vue({
  el: '#app',
  router: router,
  
})
