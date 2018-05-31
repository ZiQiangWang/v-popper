const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: './demo/index.js',
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
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
