const webpack = require("webpack");
module.exports = {
  // For Babel execution
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // Production Chunk Optimization
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
  // optimization: {
  //   namedChunks: true,
  //   mergeDuplicateChunks: false,
  // minimize: false
  // runtimeChunk: {
  //   name: "main"
  // }
  // runtimeChunk: "single"
  // }
};
