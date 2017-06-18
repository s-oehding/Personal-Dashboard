// require('dotenv').config()

import axios from 'axios'
import {router} from '../main'
import VueNotifications from 'vue-notifications'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/api/'
const LOGIN_URL = API_URL + 'users/authenticate'
const SIGNUP_URL = API_URL + 'users/'
// const VERIFY_URL = API_URL + 'token/verify'

export default {
  // Send a request to the login URL and save the returned JWT
  login (creds, redirect) {
    axios.post(LOGIN_URL, creds, (data) => {
      window.localStorage.setItem('authUser', data)

      this.user.authenticated = true

      // Redirect to a specified route
      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      console.error = err
    })
  },

  signup (creds, redirect) {
    axios.post(SIGNUP_URL, creds, (data) => {
      window.localStorage.setItem('authUser', data)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      console.error = err
    })
  },

  checkAuth () {
    // var authUser = window.localStorage.getItem('authUser')
    let authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.exp > Math.floor(Date.now() / 1000)) {
      return true
    } else if (authUser && authUser.exp < Math.floor(Date.now() / 1000)) {
      VueNotifications.info({message: 'Token expired please re-login'})
      return false
    } else {
      return false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    let authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let token = authUser.id_token
    return {
      'Authorization': 'Bearer ' + token
    }
  }
}
