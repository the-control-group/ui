import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Section } from '../../src';

const cardSubsectionExample = `<Section card>
	<Section subsection>Card subsection #1</Section>
	<Section subsection>Card subsection #2</Section>
</Section>`;

storiesOf('Elements', module)
	.add('Section', () => (
		<div>
			<div className="story-heading">
				<h1>Section</h1>
				<p>Container styles and properties</p>
			</div>

			<div className="story-component-group">
				<h2>Generic:</h2>
				<p>Use the standard <pre>Section</pre> with no other props as a replacement for <pre>div</pre> in order to expose common UI properties to your containers.</p>

				<div className="component">
					<Section>This is just some text wrapped in a div</Section>
					<code>{'<Section>Generic container stuff</Section>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Items:</h2>
				<p>item stuff</p>

				<div className="component">
					<div>
						<Section>
							<Section item>Section item #1</Section>
							<Section item>Section item #2</Section>
							<Section item>Section item #3</Section>
						</Section>
					</div>

					<code>{'<Section item>This is a section item</Section>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Card:</h2>
				<p>Use the <pre>card</pre> flag to render a card (an enclosed, three-dimensional container).</p>

				<div className="component">
					<div className="card-example">
						<Section card>Card eample</Section>
					</div>

					<code>{'<Section card>This is a standard card</Section>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Card Subsections:</h2>
				<p>card subsection stuff</p>

				<div className="component">
					<div className="card-example">
						<Section card>
							<Section subsection>Card subsection #1</Section>
							<Section subsection>Card subsection #2</Section>
							<Section subsection>Card subsection #3</Section>
						</Section>
					</div>

					<code className="multi">{cardSubsectionExample}</code>
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
