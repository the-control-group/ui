import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../../src/styles/baseline.less';
import '../../src/styles/variables.less';
import '../styles/theme.less';
import '../styles/storybook.less';

setOptions({
	name: 'PubRec UI Kit',
	showAddonPanel: false
});

const req = require.context('../stories', true, /.doc.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
