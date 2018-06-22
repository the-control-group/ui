const path = require('path');

const config = {
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	entry: path.join(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'pubrec-ui-min.js',
		libraryTarget: 'umd'
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
							presets: ['react', ['env', {modules: false}]],
							plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
						}
					}
				]
			},
			{
				test: /(\.less$)|(\.css$)/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /(\.jpg$)|(\.png$)/,
				use: 'url-loader'
			}
		]
	}
};

module.exports = config;
