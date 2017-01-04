import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes.js'

import zyx from '../libs/z-vue-components.min.js'

Vue.use(VueRouter)
Vue.use(zyx)


const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
