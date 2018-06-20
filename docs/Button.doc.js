import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../lib';

storiesOf('Elements', module)
	.add('Button', () => (
		<div>
			<Button onClick={() => console.log('click')}>Normal Button</Button>
			<br /><br />
			<Button outline>Outline Button</Button>
			<br /><br />
			<Button bare>Bare Button</Button>
			<br /><br />
			<Button big>Big Button</Button>
			<br /><br />
			<Button mini>Mini Button</Button>
			<br /><br />
			<Button secondary outline>Secondary</Button>
		</div>
	));
