'use strict';

const Boom = require('boom');
const User = require('../model/User');

module.exports = {
  method: 'GET',
  path: '/api/users/{id}',
  config: {
    handler: (req, res) => {
      const username = req.query.username;
      User
        .findOne({ username: username }, (err, user) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!user) {
            throw Boom.notFound('User not found!');
          }
          res(user);
        });      
    },
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    }
  }
  
}