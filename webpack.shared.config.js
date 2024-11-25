const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  experiments: {
    topLevelAwait: true,
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".css", ".mjs"],
  },
};
