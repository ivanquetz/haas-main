import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes: [
    { path: '/', component: () => import('layouts/mainLayout') },
    { path: '/login', component: () => import('layouts/loginLayout') }
  ]
})

Vue.use(VueRouter)
new Vue({
  el: '#happ',
  router,
  store,
  render: h => h(App)
})
