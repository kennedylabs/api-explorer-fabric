var path = require("path");
var nodeModulesPath = path.resolve(__dirname, "node_modules");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./dist/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    root: [path.resolve("./src")],
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/, nodeModulesPath]
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
