const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  output : {
    path: path.resolve(__dirname, 'dist')
  },
  module : {     
    rules : [
      {
        test   : /\.vue$/,
        loader : 'vue-loader'
      },
      {
        test   : /\.js$/,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [//插件
    new VueLoaderPlugin()
  ]
}