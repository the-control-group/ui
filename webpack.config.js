const path = require('path'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	LessPluginCleanCSS = require('less-plugin-clean-css');

const config = {
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	entry: path.join(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'index.js',
		libraryTarget: 'umd'
	},
	optimization: {
		minimize: false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', ['env', {
								node: 'current',
								modules: false
							}]],
							plugins: ['transform-object-rest-spread', 'transform-class-properties']
						}
					}
				]
			},
			{
				test: /(\.less$)|(\.css$)/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							plugins: [
								new LessPluginAutoPrefix(),
								new LessPluginCleanCSS({advanced: true, keepSpecialComments: 0})
							]
						}
					}
				]
			},
			{
				test: /(\.jpg$)|(\.png$)/,
				use: 'url-loader'
			},
			{
				test: /(\.svg$)/,
				use: 'svg-url-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['lib'])
	]
};

module.exports = config;
