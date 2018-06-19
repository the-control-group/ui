module.exports = {
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader'
			},
			{
				test: /\.(svg)$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader'
			}
		]
	}
};
