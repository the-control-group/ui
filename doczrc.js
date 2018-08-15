import { css } from 'docz-plugin-css';

export default {
	title: 'PubRec UI',
	base: '/ui/',
	dest: '/docs/',
	themeConfig: {
		styles: {
			container: {
				width: 1100
			}
		}
	},
	plugins: [
		css({
			preprocessor: 'less'
		})
	]
};
