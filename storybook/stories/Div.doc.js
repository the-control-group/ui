import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Div } from '../../src';

const cardSubsectionExample = `<Div card>
	<Div subsection>Card subsection #1</Div>
	<Div subsection>Card subsection #2</Div>
</Div>`;

storiesOf('Elements', module)
	.add('Div', () => (
		<div>
			<div className="story-heading">
				<h1>Div</h1>
				<p>Container styles and properties</p>
			</div>

			<div className="story-component-group">
				<h2>Generic:</h2>
				<p>Use the standard <pre>Div</pre> with no other props as a replacement for <pre>div</pre> in order to expose common UI properties to your containers.</p>

				<div className="component">
					<Div>This is just some text wrapped in a div</Div>
					<code>{'<Div>Generic container stuff</Div>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Items:</h2>
				<p>item stuff</p>

				<div className="component">
					<div>
						<Div>
							<Div item>Div item #1</Div>
							<Div item>Div item #2</Div>
							<Div item>Div item #3</Div>
						</Div>
					</div>

					<code>{'<Div item>This is a div item</Div>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Card:</h2>
				<p>Use the <pre>card</pre> flag to render a card (an enclosed, three-dimensional container).</p>

				<div className="component">
					<div className="card-example">
						<Div card>Card eample</Div>
					</div>

					<code>{'<Div card>This is a standard card</Div>'}</code>
				</div>
			</div>

			<div className="story-component-group">
				<h2>Card Subsections:</h2>
				<p>Subsections are used for subdividing sections within a div with borders/other styles</p>

				<div className="component">
					<div className="card-example">
						<Div card>
							<Div subsection>Card subsection #1</Div>
							<Div subsection>Card subsection #2</Div>
							<Div subsection>Card subsection #3</Div>
						</Div>
					</div>

					<code className="multi">{cardSubsectionExample}</code>
				</div>
			</div>

			<div className="story-component-group story-prop-table">
				<h2>PropTypes:</h2>

				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['children', 'node', '-', 'yes', '-'],
						['item', 'bool', '-', '-', 'creates an item with styles'],
						['card', 'bool', '-', '-', 'creates a 3D card style'],
						['subsection', 'bool', '-', '-', 'creates a subsection within a container with styles']
					]}
				/>
			</div>
		</div>
	));