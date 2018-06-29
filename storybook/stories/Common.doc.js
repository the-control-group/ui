import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Section } from '../../src';

storiesOf('Internal', module)
	.add('Common', () => (
		<div>
			<div className="story-heading">
				<h1>Common</h1>
				<p>
					Common component that all other UI elements are built on, exposing commonly used properties. <br /><br />
					<strong>NOTE:</strong> This is not meant to be used outside of the UI library itself.</p>
			</div>

			<Section className="story-component-group story-prop-table" marginBottom="medium">
				<h2>Common PropTypes:</h2>
				<p>The following flags and properties are available to any element in the UI library (these are passed in as props, but are not explicitly listed as props in the component):</p>

				<h3>Attributes:</h3>
				<PropsTable
					propsData={[
						// [name, type, defaultValue, description]
						['id', 'string', '-', '-', 'ID of element'],
						['disabled', 'bool', '-', '-', 'Disabled attributes for inputs']
					]}
				/>

				<h3>Events:</h3>
				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['onClick', 'func', '-', '-', 'Handler for clicks'],
						['onKeyDown', 'func', '-', '-', 'Handler for when key is pressed'],
						['onFocus', 'func', '-', '-', 'Handler for form/input focus'],
						['onBlur', 'func', '-', '-', 'Handler for form/input focus loss'],
						['onSubmit', 'func', '-', '-', 'Handler for form submissions'],
						['onChange', 'func', '-', '-', 'Handler for when value value of element is changed'],
						['onScroll', 'func', '-', '-', 'Handler for viewport scrolling']
					]}
				/>

				<h3>Styles:</h3>
				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['block', 'bool', '-', '-', 'Sets CSS display property to block'],
						['inline', 'bool', '-', '-', 'Sets CSS display property to inline'],
						['inlineBlock', 'bool', '-', '-', 'Sets CSS display property to inline-block'],
						['left', 'bool', '-', '-', 'Sets CSS text-align property to left'],
						['right', 'bool', '-', '-', 'Sets CSS text-align property to right'],
						['center', 'bool', '-', '-', 'Sets CSS text-align property to center'],
						['floatLeft', 'bool', '-', '-', 'Sets CSS float property to left'],
						['floatRight', 'bool', '-', '-', 'Sets CSS text-align property to right'],
						['padding', 'string', '-', '-', 'Sets CSS padding property, using named spaces (e.g., padding="small x-small")'],
						['paddingTop', 'string', '-', '-', 'Sets CSS padding-top property, using named spaces'],
						['paddingBottom', 'string', '-', '-', 'Sets CSS padding-bottom property, using named spaces'],
						['paddingLeft', 'string', '-', '-', 'Sets CSS padding-left property, using named spaces'],
						['paddingRight', 'string', '-', '-', 'Sets CSS padding-left property, using named spaces'],
						['margin', 'string', '-', '-', 'Sets CSS margin property, using named spaces (e.g., margin="small x-small")'],
						['marginTop', 'string', '-', '-', 'Sets CSS margin-top property, using named spaces'],
						['marginBottom', 'string', '-', '-', 'Sets CSS margin-bottom property, using named spaces'],
						['marginLeft', 'string', '-', '-', 'Sets CSS margin-left property, using named spaces'],
						['marginRight', 'string', '-', '-', 'Sets CSS margin-right property, using named spaces']
					]}
				/>
			</Section>

			<Section className="story-component-group story-prop-table">
				<h2>Internal PropTypes:</h2>
				<p>The following properties are only to be used to render the UI components themselves (i.e., they should not be used outside of this library):</p>

				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['children', 'node', '-', 'yes', '-'],
						['tag', 'string', '-', 'yes', 'Name of HTML element that the UI component should render down to'],
						['classes', 'string', '-', '-', 'String of class names']
					]}
				/>
			</Section>
		</div>
	));
