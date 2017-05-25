'use strict';

let axios = require('axios')
const apiUrl = 'https://api.darksky.net/forecast/';
const apiKey = process.env.DARKSKY_KEY
module.exports = {
  method: 'GET',
  path: '/api/forecast',
  config: {
    handler: function (request, reply) {
      axios.get(apiUrl + apiKey + '/' + request.query.lat + ',' + request.query.lng, {
        params: {
          units: 'auto',
          lang: 'de'
        }
      })
      .then(function (response) {
        reply(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    }
  }
}