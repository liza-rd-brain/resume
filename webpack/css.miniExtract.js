const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
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
          include: paths,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({filename:'./css/[name].css'})]
  };
};
