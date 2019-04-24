const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "build")
};

const common = merge([
  {
    entry: PATHS.source + "/index.js",
    output: {
      path: PATHS.build,
      filename: "js/index.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: PATHS.source + "/index.pug"
      })
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-loader",
          options: {
            pretty: true
          }
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          exclude: /fonts/,
          use: ["file-loader"]
        }
      ]
    }
  }
]);

const production = merge([
  {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../"
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "./css/[name].css" })]
  }
]);

const development = merge([
  {
    devServer: {
      stats: "errors-only",
      port: 9100
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  }
]);

module.exports = function(env) {
  if (env === "production") {
    return merge([common, production]);
  }
  if (env === "development") {
    return merge([common, development]);
  }
};
