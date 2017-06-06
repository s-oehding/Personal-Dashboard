import axios from 'axios'
import auth from '../auth'
import moment from 'moment'
// import qs from 'qs'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/api/forecast'

const state = {
  data: {},
  ready: false
}

const getters = {
  forecast: state => {
    return state
  },
  forecastHourly: state => {
    let data = {
      labels: [],
      datasets: [
        {
          label: 'Temp min.',
          borderColor: '#13869e',
          fillColor: '#11727f',
          data: []
        },
        {
          label: 'Temp max.',
          borderColor: '#e83134',
          fillColor: '#581902',
          data: []
        }
      ]
    }
    if (state.ready) {
      for (let element of state.data.daily.data) {
        data.labels.push(moment.unix(element.time).format('dddd'))
        data.datasets[0].data.push(element.temperatureMin)
        data.datasets[1].data.push(element.temperatureMax)
      }
      return data
    }
  }
}

const mutations = {
  SET_FORECAST (state, forecast) {
    state.data = forecast
    state.ready = true
  },
  CLEAR_FORECAST (state) {
    state.data = {}
    state.ready = false
  }
}

const actions = {
  getForecast: ({commit}, location) => {
    axios({
      method: 'get',
      url: API_URL,
      params: location,
      headers: auth.getAuthHeader()
    })
    .then(function (response) {
      // console.log(response.data)
      commit('SET_FORECAST', response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default {
  state, mutations, getters, actions
}
