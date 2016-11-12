// This webpack config loads typescript files with ts-loader then use
// babel-loader to convert all javascript to es5
//
// Run this command to build the bundle file:
//
// webpack --config webpack.config.es6-to-es5.js
//
var path = require("path");
var nodeModulesPath = path.resolve(__dirname, "node_modules");
var webpack = require("webpack");

module.exports = {
  entry: {
    bundle: ["./entry"],
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  debug: true,
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"],
        exclude: [/node_modules/, nodeModulesPath]
      },
      {
        test: /\.(jsx?)$/,
        loaders: ["babel"],
        exclude: [/node_modules/, nodeModulesPath]
      }
    ]
  },
  plugins: [],
  resolve: {
    root: [path.resolve("./src")],
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
