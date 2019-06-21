const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: "./src/js/main.js",
  mode: 'production',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase:'./dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Output management',
      template:'src/TinyHeart.html'}),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          // 图片大小限制 单位b
          limit: 8192,
          // 生成的文件的存放目录
          name: 'resourse/[name].[ext]'
        }
      },
    ]
  }
};
