'use strict';

const jwt = require('jsonwebtoken');

function createToken(user) {
  let scopes;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  if (user.admin) {
    scopes = 'admin';
  }
  // Sign the JWT
  return jwt.sign({ id: user._id, username: user.username, scope: scopes }, process.env.AUTH_KEY, { algorithm: 'HS256', expiresIn: "7d" } );
}

module.exports = createToken;