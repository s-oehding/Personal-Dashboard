import Vue from 'vue'

// Google Maps
// https://github.com/s-oehding/vue-google-maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBT99ywTt8pGhgHkeYY9kxbtOjlFH8OqRc'
  }
})

import Navbar from './components/partials/Navbar'
Vue.component('navbar', Navbar)
import Preloader from './components/partials/Preloader'
Vue.component('preloader', Preloader)
import Sidebar from './components/partials/Sidebar'
Vue.component('sidebar', Sidebar)
import PageContent from './components/partials/PageContent'
Vue.component('pagecontent', PageContent)

import Gravatar from './components/Gravatar'
Vue.component('gravatar', Gravatar)

import Forecast from './components/forecast/Forecast'
Vue.component('forecast', Forecast)
import ForecastGraph from './components/forecast/ForecastGraph'
Vue.component('forecast-graph', ForecastGraph)

import DateTime from './components/DateTime'
Vue.component('datetime', DateTime)

import GMap from './components/google/GMap'
Vue.component('g-map', GMap)
