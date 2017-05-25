'use strict';

const Boom = require('boom');
const User = require('../model/User');
const authenticateUserSchema = require('../schemas/authenticateUser');
const verifyCredentials = require('../util/userFunctions').verifyCredentials;
const createToken = require('../util/token');
const jwt = require('jsonwebtoken');

module.exports = {
  method: 'POST',
  path: '/api/users/authenticate',
  config: {
    auth: false,
    // Check the user's password against the DB
    pre: [
      { method: verifyCredentials, assign: 'user' }
    ],
    handler: (req, res) => {
      // If the user's password is correct, we can issue a token.
      // If it was incorrect, the error will bubble up from the pre method
      // console.log(req.pre.user)
      let token = createToken(req.pre.user)
      let expires
      jwt.verify(token, process.env.AUTH_KEY, function(err, decoded) {
        if (err) {
          console.log(err)
        } else {
          res({
            authUser: {
              id_token: createToken(req.pre.user),
              exp: decoded.exp,
              user: {
                username: req.pre.user.username,
                email: req.pre.user.email,
                admin: req.pre.user.admin
              }
            }
          }).code(201)
        }
      })
      ;
    },
    validate: {
      payload: authenticateUserSchema
    }
  }  
}
