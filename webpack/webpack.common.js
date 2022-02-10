const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.join(__dirname, "../src/index.js"), // 入口文件
    // entry: {
    //   index: path.join(__dirname, "../src/index.js"),
    //   index2: path.join(__dirname, "../src/index2.js")
    // }, // 入口文件
    output: {
        path: path.join( __dirname, "../dist"), // 打包后的文件存放的地方 
        filename: "[name].js" // 打包后输出文件的文件名
    },
    module: {
      rules: [
        {
          test: /\.jsx|.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader"
          ]
        },
        {
          test:/\.less$/,
          use:['style-loader','css-loader','less-loader']
        },
        {
          test:/\.(png|jpg|jpeg|gif)$/,
          use:[
              {
                  loader:"url-loader",
                  options: {
                    limit: 3000,
                    name: `img/[name].[hash:7].[ext]`,
                    esModule: false
                  }
              },
          ],
          type: 'javascript/auto'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../src/index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
        ignoreOrder: true,
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        "@": path.resolve(process.cwd(), 'src/')
      },
    },
};
