import { css } from 'docz-plugin-css';
import { babel } from 'docz-plugin-babel6';

export default {
	title: 'PubRec UI',
	base: '/ui/',
	dest: '/docs/',
	themeConfig: {
		styles: {
			container: {
				width: 1100
			},
			pre: {
				padding: ['0.5em', '0.5em'],
				border: 'none',
				borderRadius: '5px !important',
				width: '100%',
				marginBottom: '2em !important',
				backgroundColor: '#f7f7f7'
			},
			code: {
				borderRadius: '4px'
			},
			playground: {
				padding: '0 0 10px',
				border: 'none'
			}
		}
	},
	plugins: [
		css({
			preprocessor: 'less',
			cssmodules: true
		}),
		babel()
	]
};
