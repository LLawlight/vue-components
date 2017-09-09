var webpack = require('webpack')
var path = require('path')
var utils = require('./build/utils')

module.exports = {
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
      	test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      	loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?root=./docs/"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 20 versions']
      })
    ]
  }
};
