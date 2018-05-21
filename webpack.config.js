var HtmlWebpackPlugin = require("html-webpack-plugin");
var htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./assets/index.html"
});
var webpack = require("webpack");

module.exports = {
  entry: ["./assets/index.html", "./assets/css/style.css", "./assets/js/main.js"],
  module: {
    rules: [{
      test: /\.html$/,
      use: {
        loader: "html-loader"
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }
    }]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    open: true,
    hot: true,
    port: 4000
  }
}