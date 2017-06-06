import axios from 'axios'

// URL and endpoint constants
const API_URL = 'https://geocode.xyz/'

function getGeoLocation (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.watchPosition(resolve, reject, options)
  })
}

// VUE Store

const state = {
  data: {},
  ready: false
}

const getters = {
  location: state => {
    return state
  }
}

const mutations = {
  SET_LOCATION (state, location) {
    state.data = location
    state.ready = true
  },
  CLEAR_LOCATION (state) {
    state.data = {}
    state.ready = false
  }
}

const actions = {
  getLocation: ({commit}) => {
    let options = { enableHighAccuracy: true }
    getGeoLocation(options)
      .then((position) => {
        axios({
          method: 'get',
          url: API_URL + position.coords.latitude + ',' + position.coords.longitude + '?geoit=json'
        })
        .then(function (response) {
          commit('SET_LOCATION', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export default {
  state, mutations, getters, actions
}
