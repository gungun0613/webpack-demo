const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry: path.join(__dirname, "/src/index.js"), // 入口文件
    output: {
        path: path.join( __dirname, "/dist"), // 打包后的文件存放的地方 
        filename: "bundle.js" // 打包后输出文件的文件名
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      port: '8080',
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx|.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "/src/index.html")
      }),
      new CleanWebpackPlugin(),
    ],
    devtool: 'source-map'
}
