var config = require('./webpack.config.js')

config.entry = {
  'z-vue-components': './src/components/index.js',
}

config.output = {
  filename: './libs/[name].js',
  library: 'ZVueComponents',
  libraryTarget: 'umd'
}


module.exports = config
