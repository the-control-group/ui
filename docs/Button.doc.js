import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../lib';

storiesOf('Button', module)
	.add('Button', () => (
		<div>
			<h1>Buttons</h1>

			<h3>Primary Buttons</h3>

			<Button>Normal Button</Button> <br /><br />
			<Button outline>Outline Button</Button> <br /><br />
			<Button bare>Bare Button</Button> <br /><br />
			<Button full>Full Width Button</Button> <br /><br />
			<Button mini>Mini Button</Button> <br /><br />

			<h3>Secondary Buttons</h3>

			<Button secondary>Secondary</Button> <br /><br />
			<Button secondary outline>Secondary Outline</Button> <br /><br />
			<Button secondary bare>Secondary Bare</Button> <br /><br />
			<Button secondary full>Secondary Full Width</Button> <br /><br />
			<Button secondary mini>Secondary Mini</Button> <br /><br />

			<h3>Disabled Buttons</h3>

			<Button disabled secondary>Secondary</Button> <br /><br />
			<Button disabled secondary outline>Secondary Outline</Button> <br /><br />
			<Button disabled secondary bare>Secondary Bare</Button> <br /><br />
			<Button disabled secondary full>Secondary Full Width</Button> <br /><br />
			<Button disabled secondary mini>Secondary Mini</Button> <br /><br />

			<h3>Loading</h3>

			<Button loading>Loading</Button> <br /><br />
		</div>
	));
