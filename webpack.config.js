const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/docs"),
  output: {
    path: path.join(__dirname, "docs"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/docs/index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    port: 8000,
    stats: "minimal"
  }
};

// const path = require('path'),
// 	CleanWebpackPlugin = require('clean-webpack-plugin'),
// 	HtmlWebpackPlugin = require('html-webpack-plugin'),
// 	ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin'),
// 	ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractLess = new ExtractTextPlugin({
// 	filename: 'main.[contenthash].css',
// 	disable: process.env.NODE_ENV !== 'production'
// });

// const config = {
// 	resolve: {
// 		modules: [path.resolve(__dirname, 'src'), 'node_modules']
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /(\.less$)|(\.css$)/,
// 				use: extractLess.extract({
// 					use: ['css-loader', 'less-loader'],
// 					fallback: 'style-loader'
// 				})
// 			},
// 			{
// 				test: /(\.jpg$)|(\.png$)/,
// 				use: 'url-loader'
// 			}
// 		]
// 	},
// 	plugins: [
// 		new CleanWebpackPlugin(['dist']),
// 		new HtmlWebpackPlugin({
// 			inject: 'head',
// 			template: 'src/index.html'
// 		}),
// 		new ScriptExtHtmlWebpackPlugin({
// 			defaultAttribute: 'defer'
// 		}),
// 		extractLess
// 	]
// };

// module.exports = config;
