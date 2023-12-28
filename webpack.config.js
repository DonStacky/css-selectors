const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './main.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.ts'],
    alias: {
     '@models': path.resolve(__dirname, 'src/models'),
     '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  devtool: 'source-map',
  devServer: {
    port: 4200,
    static: './',
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new ESLintPlugin({ extensions: ['js', 'ts'] }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new FaviconsWebpackPlugin('./assets/img/sabbath.png'),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets'),
          to: path.resolve(__dirname, './dist/assets')
        }
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|svg|gif|mp3)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
}