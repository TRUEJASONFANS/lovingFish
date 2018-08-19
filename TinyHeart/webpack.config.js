const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/js/main.js",
  mode: 'production',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Output management'
    })
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
        use: ["file-loader"]
      }
    ]
  }
};
