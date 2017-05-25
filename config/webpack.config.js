const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintFriendlyFormatter = require('eslint-friendly-formatter')

module.exports = {
  entry: ['webpack-hot-middleware/client', './client/main.js'],
  output: {
    path: path.resolve(__dirname, '../public/'),
    publicPath: '/',
    filename: 'build/build.js'
  },
  resolve: {
    modules: [path.join(__dirname, '../node_modules')],
    extensions: ['.js', '.vue'],
    alias: {
      'client': path.resolve(__dirname, '../client'),
      'components': path.resolve(__dirname, '../clients/components'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
  rules: [
    {
      enforce: "pre",
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      include: projectRoot,
      exclude: /node_modules/,
      options:{
        formatter: EslintFriendlyFormatter
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'sass': 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'vue-html-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    },
    // Font Definitions
    { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
    { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
    { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
    { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
    { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }]
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: path.resolve(__dirname, '../build/index_dev.html'),
      inject: true
    })
  ],
  devtool: 'eval'
}
