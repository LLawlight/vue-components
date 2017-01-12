import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes.js'

// import zyx from '../libs/z-vue-components.min.js'
import zyx from './index.js'

Vue.use(VueRouter)
Vue.use(zyx)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
