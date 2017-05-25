/* eslint-disable*/

import 'milligram-scss'

import auth from './auth'

import Vue from 'vue'
import VueRouter from 'vue-router';

import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
miniToastr.init({types: toastTypes})
function toast ({title, message, type, timeout, cb, consoleMessage}) {
  if (consoleMessage) console[type](consoleMessage)
  return miniToastr[type](message, title, timeout, cb)
}
Vue.use(VueNotifications, options)

import App from './App'
Vue.component('app', App)

/**
 * App Components
 */
import './components'

/**
 * App Store
 * - VueX Statemanagement
 */
import store from './store/store'

/**
 * App Routes
 */
Vue.use(VueRouter, 'localhost:3000')
import routes from './routes.js'

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/*
 * Vue-Router Authentication
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.checkAuth()) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
