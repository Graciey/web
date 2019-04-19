const path = require("path");
const webpack = require("webpack");

var BUILD_DIR = path.join(__dirname, "dist");
var APP_DIR = path.join(__dirname, "src");

const VENDOR_LIBS = ["react", "react-dom", "react-router-dom"];

module.exports = {
  // entry: APP_DIR + "/App.js",
  entry: {
    bundle: APP_DIR + "/App.js",
    vendor: VENDOR_LIBS
  },
  output: {
    filename: "[name].js",
    path: BUILD_DIR,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: APP_DIR,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?name=[name].[ext]&publicPath=./&outputPath=./",
          "image-webpack-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  }
};
