import { configure } from '@storybook/react';

import '../lib/styles/variables.less';
import '../docs/theme.less';
import '../lib/styles/baseline.less';
import '../docs/storybook.less';

const req = require.context('../docs', true, /.doc.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
