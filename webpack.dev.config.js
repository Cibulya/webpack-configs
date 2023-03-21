const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp|mp3)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/pics/[contenthash][ext]',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
