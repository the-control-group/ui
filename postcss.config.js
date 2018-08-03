module.exports = {
	plugins: {
		autoprefixer: {},
		cssnano: {
			preset: ['default', {
				calc: false
			}]
		}
	}
};
