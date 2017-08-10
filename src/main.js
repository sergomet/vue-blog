import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(VueResource)
Vue.use(VueRouter)

import Home from './components/Home'
import Editor from './components/Editor'
import Story from './components/Story'

const routes = [
  { path: '/', component: Home },
  { path: '/posts/add', component: Editor },
  { path: '/posts/:id', component: Story }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
