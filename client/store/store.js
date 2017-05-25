import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './userStore'
import forecastStore from './forecastStore'
import flickrStore from './flickrStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore,
    forecastStore,
    flickrStore
  },
  strict: debug
})
