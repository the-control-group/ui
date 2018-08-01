const path = require('path'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix');

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
							plugins: ['transform-object-rest-spread']
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
						options: {plugins: [new LessPluginAutoPrefix({browsers: ['last 2 versions']})]}
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
