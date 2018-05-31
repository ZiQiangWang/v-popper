const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './demo/index.js',
  module:{
    rules:[
      {test:/\.vue$/,use:'vue-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}
