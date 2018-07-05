import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Input } from '../../src';

storiesOf('Elements', module)
	.add('Input', () => (
		<div>
			<div className="story-heading">
				<h1>Input</h1>
				<p>Standard Input styles and sizes</p>
			</div>

			<div className="story-component-group">
				<h2>Types:</h2>

				<div className="component">
					<Input type="text" label="First Name" placeholder="Enter First Name" />
					<code className="usage">{'<Input type="text" label="First Name" placeholder="Enter First Name" />'}</code>
				</div>

				<div className="component">
					<Input type="email" label="Email Address" placeholder="Enter Email Address"/>
					<code className="usage">{'<Input type="email" label="Email Address" placeholder="Enter Email Address" />'}</code>
				</div>

				<div className="component">
					<Input type="email" label="Phone Number" placeholder="Enter Phone Number"/>
					<code className="usage">{'<Input type="tel" label="Phone Number" placeholder="Enter Phone Number" />'}</code>
				</div>

				<div className="component">
					<Input type="select" label="State" options={['California', 'Florida', 'New York']} />
					<code className="usage">{'<Input type="select" label="State" options={[\'California\', \'Florida\', \'New York\']} />'}</code>
				</div>
			</div>

			<div className="story-component-group story-prop-table">
				<h2>PropTypes:</h2>

				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['type', 'string', 'text', '-', 'DOM attribute'],
						['label', 'string', '-', '-', 'DOM attribute'],
						['placeholder', 'string', '-', '-', 'DOM attribute'],
						['options', 'array', '-', 'Required if type="select"', 'DOM attribute']
					]}
				/>
			</div>
		</div>
	));
