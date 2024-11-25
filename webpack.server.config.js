const path = require("path");
const { merge } = require("webpack-merge");
const sharedConfig = require("./webpack.shared.config.js");
const { ProgressPlugin } = require("webpack");

let config = {
  target: "node",
  entry: "./server/main.js",
  output: {
    path: path.join(__dirname, "./build/client"),
    filename: "bundle.js",
    publicPath: '/',
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
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new ProgressPlugin({
      profile: true,
    })
  ],
};

module.exports = merge(sharedConfig, config);
