import axios from 'axios'
import auth from '../auth'
import VueNotifications from 'vue-notifications'
// import router from '../main'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/api/'
const LOGIN_URL = API_URL + 'users/authenticate'
// const SIGNUP_URL = API_URL + 'users/'

const state = {
  authUser: null,
  authenticated: false,
  users: []
}

const getters = {
  authUser: state => {
    return state.authUser
  },
  users: state => {
    return state.users
  }
}

const mutations = {
  SET_AUTH_USER (state, authUser) {
    state.authUser = authUser
    state.authenticated = true
  },
  CLEAR_AUTH_USER (state) {
    state.authenticated = null
  },
  SET_USERS (state, response) {
    state.users = response
  }
}

const actions = {
  // Send a request to the login URL and save the returned JWT
  userLogin: ({commit}, params) => {
    axios.post(LOGIN_URL, params.credentials)
    .then(function (response) {
      window.localStorage.setItem('authUser', JSON.stringify(response.data.authUser))
      commit('SET_AUTH_USER', response.data.authUser)
      VueNotifications.success({message: 'Logged in!'})
      params.router.push('/')
    })
    .catch(function (error) {
      VueNotifications.error({message: error.response.data.message})
      console.log(error.response.data.message)
    })
  },
  userLogout: ({commit}, params) => {
    window.localStorage.removeItem('authUser')
    commit('CLEAR_AUTH_USER')
    params.router.push('/login')
  },
  getUsers: ({commit}) => {
    axios({
      method: 'get',
      url: 'api/users',
      headers: auth.getAuthHeader()
    })
    .then(function (response) {
      // console.log(response.data)
      commit('SET_USERS', response.data)
    })
    .catch(function (error) {
      VueNotifications.error({message: error.response.data.message})
    })
  }
}

export default {
  state, mutations, getters, actions
}
