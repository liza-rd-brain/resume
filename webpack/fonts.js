module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          exclude: /fonts/,
          use: ["file-loader"]
        }
      ]
    }
  };
};
