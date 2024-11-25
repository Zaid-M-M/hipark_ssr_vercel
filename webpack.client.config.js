const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
const sharedConfig = require("./webpack.shared.config.js");
const clientPort = 8080;

const config = {
  target: "web",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./build/client"),
    filename: "scripts/bundle.js",
    publicPath: `/`,
  },
  devServer: {
    port: clientPort,
    liveReload: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mp4|webp|pdf|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash][ext]",
          // publicPath: "/assets/",
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "dist/main.css",
    }),
    new ProgressPlugin({
      profile: true,
    }),
  ]
};

module.exports = merge(sharedConfig, config);
