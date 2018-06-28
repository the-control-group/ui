import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Button } from '../../src';

storiesOf('Elements', module)
	.add('Button', () => (
		<div>
			<div className="story-heading">
				<h1>Buttons</h1>
				<p>Standard Button styles and sizes</p>
			</div>

			<div className="story-component-group">
				<h2>Styles:</h2>

				<div className="component">
					<Button>Normal Button</Button>
					<code>{'<Button>Normal Button</Button>'}</code>
				</div>

				<div className="component">
					<Button outline>Outline Button</Button>
					<code>{'<Button outline>Outline Button</Button>'}</code>
				</div>

				<div className="component">
					<Button bare>Bare Button</Button>
					<code>{'<Button bare>Bare Button</Button>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Sizes:</h2>

				<div className="component">
					<Button full>Full Width Button</Button>
					<code>{'<Button full>Full Width Button</Button>'}</code>
				</div>

				<div className="component">
					<Button mini>Mini Button</Button>
					<code>{'<Button mini>Mini Button</Button>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>States:</h2>

				<div className="component">
					<Button loading>Loading State</Button>
					<code>{'<Button loading>Loading State</Button>'}</code>
				</div>

				<div className="component">
					<Button disabled>Disabled State</Button>
					<code>{'<Button disabled>Disabled State</Button>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Secondary Buttons:</h2>
				<p>You can use the <pre>secondary</pre> flag on any kind of button to apply the secondary theme rules to it. Some examples:</p>

				<div className="component">
					<Button secondary>Secondary Button</Button> &nbsp;
					<Button outline secondary>Secondary Outline Button</Button> &nbsp;
					<Button bare secondary>Secondary Bare Button</Button> &nbsp;
					<Button mini secondary>Secondary Mini Button</Button>

					<code>{'e.g. <Button outline secondary>Secondary Button</Button>'}</code>
				</div>
			</div>

			<div className="story-component-group story-prop-table">
				<h2>PropTypes:</h2>

				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['children', 'node', '-', 'yes', '-'],
						['type', 'string', 'button', '-', 'DOM attribute'],
						['loading', 'bool', 'false', '-', 'state'],
						['mini', 'bool', 'false', '-', 'size'],
						['full', 'bool', 'false', '-', 'size'],
						['outline', 'bool', 'false', '-', 'style'],
						['bare', 'bool', 'false', '-', 'style'],
						['secondary', 'bool', 'false', '-', 'secondary button styles']
					]}
				/>
			</div>
		</div>
	));
