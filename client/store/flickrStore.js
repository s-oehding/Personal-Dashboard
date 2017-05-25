import axios from 'axios'
import auth from '../auth'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/api/flickr'

const state = {
  data: {},
  ready: false
}

const getters = {
  geoImages: state => {
    return state
  }
}

const mutations = {
  SET_IMAGES (state, data) {
    state.data = data
    state.ready = true
  },
  CLEAR_IMAGES (state) {
    state.data = {}
    state.ready = false
  }
}

const actions = {
  // Send a request to the login URL and save the returned JWT
  getImages: ({commit}, location) => {
    // console.log('Your Location: ', location)
    axios({
      method: 'get',
      url: API_URL,
      params: location,
      headers: auth.getAuthHeader()
    })
    .then(function (response) {
      // console.log(response.data)
      commit('SET_IMAGES', response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default {
  state, mutations, getters, actions
}
