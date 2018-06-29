import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Section } from '../../src';

storiesOf('Elements', module)
	.add('Section', () => (
		<div>
			<div className="story-heading">
				<h1>Section</h1>
				<p>Container element</p>
			</div>

			<div className="story-component-group">
				<h2>Generic:</h2>
				<p>Use the standard <pre>Section</pre> with no other props as a replacement for <pre>div</pre> in order to expose common UI properties to your containers</p>

				<div className="component">
					<Section>generic container example</Section>
					<code>{'<Section>generic container</Section>'}</code>
				</div>
			</div>

			<div className="story-component-group story-prop-table">
				<h2>PropTypes:</h2>

				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['children', 'node', '-', 'yes', '-']
					]}
				/>
			</div>
		</div>
	));
