const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    filename: 'v-popper.min.js',
    library: "v-popper",
    libraryTarget: "umd"
  },
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
    new VueLoaderPlugin()
  ],
  externals : {
    'popper.js': 'popper.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}
