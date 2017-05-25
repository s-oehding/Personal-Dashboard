import Vue from 'vue'

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
