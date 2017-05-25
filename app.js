'use strict';

require('dotenv').config();

const Hapi = require('hapi');
const Boom = require('boom');
const glob = require('glob');
const path = require('path');

const mongoose = require('mongoose');
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const dbOptions = { 
  server: { 
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS : 30000
    }
  }
};

const good = require('good');
const goodOptions = {
    ops: {
        interval: 1000
    },
    reporters: {
      consoleReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*', debug: '*', err: '*' }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
};

const server = new Hapi.Server();
server.connection({
  port: 3000
});

server.ext('onPreResponse', function (request, reply) {
    let response = request.response;
    if (!response.isBoom) {
        return reply.continue();
    }
    if (response.data){
        response.output.payload.data = response.data;
    }
    return reply(response);
});

// Register webpack HMR, fallback to development environment
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {

  const WebpackConfig = require('./config/webpack.config.js'); // Webpack config
  const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
  const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');

  server.register([{
    register: HapiWebpackDevMiddleware,
    options: {
      config: WebpackConfig,
      options: {
        noInfo: true,
        publicPath: WebpackConfig.output.publicPath,
        stats: {
          colors: true
        }
      }
    }
  }, {
    register: HapiWebpackHotMiddleware
  }], function (err) {
    if (err) {
      throw err;
    }
  });

}

server.register([{
  register: require('inert')
}, {
  register: good,
  options: goodOptions
}, {
  register: require('hapi-auth-jwt')
}, {
  register: require('h2o2')
}], (err) => {

  if (err) {
    return console.error(err);
  }

  // We're giving the strategy both a name
  // and scheme of 'jwt'
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.AUTH_KEY,
    verifyOptions: { algorithms: ['HS256'] }
  });

  // Look through the routes in
  // all the subdirectories of API
  // and create a new route for each
  glob.sync('server/api/**/routes/*.js', {
    root: __dirname
  }).forEach(file => {
    const route = require(path.join(__dirname, file));
    server.route(route);
  });

  if (process.env.NODE_ENV !== 'production') {
    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        proxy: {
          uri: 'http://localhost:3000/'
        }
      }
    });
  } else {
    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: function (request, reply) {
        reply.file('./public/index.html');
      }
    });
  }
});

server.start((err) => {

  if (err) {
    return console.error(err);
  }

  // Once started, connect to Mongo through Mongoose
  mongoose.connect(dbUrl, dbOptions, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  console.info('Server running at:', server.info.uri);
});

module.exports = server;
