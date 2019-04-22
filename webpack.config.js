const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const pug = require("./webpack/pug");
const devserver = require("./webpack/devserver");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
const miniExtractCSS = require("./webpack/css.miniExtract");
const images = require("./webpack/images");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "build")
};

const common = merge([
  {
    entry: PATHS.source + "/index.js",
    output: {
      path: PATHS.build,
      filename: "index.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: PATHS.source + "/index.pug"
      })
    ]
  },
  pug(),
  images()
]);

module.exports = function(env) {
  if (env === "production") {
    return merge([common, miniExtractCSS()]);
  }
  if (env === "development") {
    return merge([common, devserver(), sass(), css()]);
  }
};
