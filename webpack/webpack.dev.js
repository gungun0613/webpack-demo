const path = require('path');
const { merge } = require('webpack-merge');  
const common = require('./webpack.common.js'); 

module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
  mode:'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot: true,
    port: '8080',
    open: true,
  },
});
