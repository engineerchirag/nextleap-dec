const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.ts",

  output: {
    filename: "bundle.[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(tsx|ts)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})]
};
