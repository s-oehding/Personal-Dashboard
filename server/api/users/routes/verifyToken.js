'use strict';

const Boom = require('boom');
const jwt = require('jsonwebtoken');

module.exports = {
  method: 'GET',
  path: '/api/token/verify',
  config: {
    auth: false,
    handler: (req, res) => {
      console.log(req.query)
      jwt.verify(req.query.token, process.env.AUTH_KEY, function(err, decoded) {
        if (err) {
          console.log(err)
          res(err).code(401);
        } else {
          console.log('Token verified: ', decoded)
          res(decoded).code(200);
        }
      })
    }
  }  
}
