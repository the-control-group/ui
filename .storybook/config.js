import { configure } from '@storybook/react';

const req = require.context('../docs', true, /.doc.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
