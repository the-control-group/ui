import { css } from 'docz-plugin-css';

export default {
<<<<<<< HEAD
	themeConfig: {
		styles: {
			container: {
				width: 1100
			},
			pre: {
				padding: ['0.5em', '0.5em'],
				border: 'none',
				width: '100%'
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
=======
>>>>>>> b1bc055f9b4a7e31252b90ef3dc0877e4d440fd7
	plugins: [
		css({
			preprocessor: 'less',
			cssmodules: true
		})
	]
};
