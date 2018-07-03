import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Grid, Section } from '../../src';

const equalWidthExample = `/**
 * Note: These examples use our \`Section\` component as example
 * children, however, any element is valid to use as a child.
 */

<Grid>
	<Section>col #1</Section>
	<Section>col #2</Section>
</Grid>`;

const customWidthExample = `/**
 * \`itemWidthsSmall\` is here for example. In usage, it's best
 * to omit an itemWidths array with equal width columns for brevity
 */

<Grid
	itemWidthsLarge={['70','30']}
	itemWidthsMedium={['60','40']}
	itemWidthsSmall={['50','50']}
>
	<Section>70% large, 60% medium, 50% small</Section>
	<Section>30% large, 40% medium, 50% small</Section>
</Grid>`;

const stackedExample = `<Grid stackLarge>
	<Section>col #1</Section>
	<Section>col #2</Section>
</Grid>
`;

const swappedExample = `<Grid swapLarge stackLarge>
	<Section>1st in source</Section>
	<Section>2nd in source</Section>
</Grid>
`;

const gutterExample = `<Grid
	gutterSmall="medium"
	gutterMedium="medium"
	gutterLarge="medium"
>
	<Section>medium gutter</Section>
	<Section>medium gutter</Section>
</Grid>
`;

storiesOf('Elements', module)
	.add('Grid', () => (
		<Section>
			<Section className="story-heading">
				<h1>Grid</h1>
				<p>Grid system using flexbox</p>
			</Section>

			<Section className="story-component-group grid-example">
				<h2>Equal Width:</h2>
				<p>Passing nothing into <pre>{'<Grid>'}</pre>, you will get equal width columns based on the number of elements as its children.</p>

				<Section className="component">
					<Grid marginBottom="small">
						<Section>col #1</Section>
						<Section>col #2</Section>
					</Grid>

					<Grid marginBottom="small">
						<Section>col #1</Section>
						<Section>col #2</Section>
						<Section>col #3</Section>
					</Grid>

					<Grid marginBottom="small">
						<Section>col #1</Section>
						<Section>col #2</Section>
						<Section>col #3</Section>
						<Section>col #4</Section>
					</Grid>

					<code className="multi">{equalWidthExample}</code>
				</Section>
			</Section>

			<Section className="story-component-group grid-example">
				<h2>Specific Widths:</h2>
				<p><pre>{'<Grid>'}</pre> takes 3 different arrays corresponding to different resolutions (<pre>itemWidthsSmall</pre>, <pre>itemWidthsMedium</pre>, and <pre>itemWidthsLarge</pre>), where the elements are numbers that will be treated as percentages to create custom arrangements of columns. If you want columns to be equally sized at a specific resolution, simply leave that one out for brevity.</p>

				<Section className="component">
					<Grid
						itemWidthsLarge={['70', '30']}
						itemWidthsMedium={['60', '40']}
						itemWidthsSmall={['50', '50']}
						marginBottom="small"
					>
						<Section>70% large, 60% medium, 50% small</Section>
						<Section>30% large, 40% medium, 50% small</Section>
					</Grid>

					<Grid itemWidthsLarge={['20', '60', '20']} marginBottom="small">
						<Section>20% large</Section>
						<Section>60% large</Section>
						<Section>20% large</Section>
					</Grid>

					<Grid itemWidthsLarge={['25', '75']} marginBottom="small">
						<Section>25% large</Section>
						<Section>75% large</Section>
					</Grid>

					<code className="multi">{customWidthExample}</code>
				</Section>
			</Section>

			<Section className="story-component-group grid-example">
				<h2>Stacking:</h2>
				<p><pre>stackSmall</pre>, <pre>stackMedium</pre>, and <pre>stackLarge</pre> will turn each child into a 100% wide row and stack them vertically.</p>

				<Section className="component">
					<Grid stackLarge marginBottom="small">
						<Section marginBottom="small">col #1</Section>
						<Section>col #2</Section>
					</Grid>

					<code className="multi">{stackedExample}</code>
				</Section>
			</Section>

			<Section className="story-component-group grid-example">
				<h2>Swapping:</h2>
				<p><pre>swapSmall</pre>, <pre>swapMedium</pre>, and <pre>swapLarge</pre> will reverse the order of columns at the specified resolution. This can be used alongside the stacking properties to reverse the row order as well.</p>

				<Section className="component">
					<Grid swapLarge>
						<Section>1st in source</Section>
						<Section>2nd in source</Section>
					</Grid>

					<hr className="story-divider" />

					<Grid
						swapLarge
						swapMedium
						swapSmall
						stackLarge
						stackMedium
						stackSmall
						marginBottom="small"
					>
						<Section>1st in source</Section>
						<Section marginBottom="small">2nd in source</Section>
					</Grid>

					<code className="multi">{swappedExample}</code>
				</Section>
			</Section>

			<Section className="story-component-group grid-example">
				<h2>Gutter Widths:</h2>
				<p><pre>gutterSmall</pre>, <pre>gutterMedium</pre>, and <pre>gutterLarge</pre> takes a named space string and adjusts the gutter width. Defaults to <pre>x-small</pre></p>.

				<Section className="component">
					<Grid
						gutterSmall="xx-small"
						gutterMedium="xx-small"
						gutterLarge="xx-small"
						marginBottom="small"
					>
						<Section>xx-small gutter</Section>
						<Section>xx-small gutter</Section>
					</Grid>

					<Grid
						gutterSmall="x-small"
						gutterMedium="x-small"
						gutterLarge="x-small"
						marginBottom="small"
					>
						<Section>x-small gutter</Section>
						<Section>x-small gutter</Section>
					</Grid>

					<Grid
						gutterSmall="small"
						gutterMedium="small"
						gutterLarge="small"
						marginBottom="small"
					>
						<Section>small gutter</Section>
						<Section>small gutter</Section>
					</Grid>

					<Grid
						gutterSmall="medium"
						gutterMedium="medium"
						gutterLarge="medium"
						marginBottom="small"
					>
						<Section>medium gutter</Section>
						<Section>medium gutter</Section>
					</Grid>

					<Grid
						gutterSmall="large"
						gutterMedium="large"
						gutterLarge="large"
						marginBottom="small"
					>
						<Section>large gutter</Section>
						<Section>large gutter</Section>
					</Grid>

					<Grid
						gutterSmall="x-large"
						gutterMedium="x-large"
						gutterLarge="x-large"
						marginBottom="small"
					>
						<Section>x-large gutter</Section>
						<Section>x-large gutter</Section>
					</Grid>

					<Grid
						gutterSmall="xx-large"
						gutterMedium="xx-large"
						gutterLarge="xx-large"
						marginBottom="small"
					>
						<Section>xx-large gutter</Section>
						<Section>xx-large gutter</Section>
					</Grid>

					<code className="multi">{gutterExample}</code>
				</Section>
			</Section>

			<Section className="story-component-group story-prop-table">
				<h2>PropTypes:</h2>

				<PropsTable
					propsData={[
						// [propName, propType, defaultValue, isRequired, description]
						['children', 'node', '-', 'yes', '-'],
						['itemWidthsSmall', 'array', '[]', '-', 'Array of numbers corresponding to column sizes for small screens'],
						['itemWidthsMedium', 'array', '[]', '-', 'Array of numbers corresponding to column sizes for medium screens'],
						['itemWidthsLarge', 'array', '[]', '-', 'Array of numbers corresponding to column sizes for large screens'],
						['stackSmall', 'bool', '-', '-', 'Changes flex-direction to `column` on small screens'],
						['stackMedium', 'bool', '-', '-', 'Changes flex-direction to `column` on medium screens'],
						['stackLarge', 'bool', '-', '-', 'Changes flex-direction to `column` on large screens'],
						['swapSmall', 'bool', '-', '-', 'Changes flex-direction to reverse-row, or reverse-column if stacked on small screens'],
						['swapMedium', 'bool', '-', '-', 'Changes flex-direction to reverse-row, or reverse-column if stacked on medium screens'],
						['swapLarge', 'bool', '-', '-', 'Changes flex-direction to reverse-row, or reverse-column if stacked on large screens'],
						['gutterSmall', 'string', 'x-small', '-', 'Gutter width for small screens, using named spacing variables'],
						['gutterMedium', 'string', 'x-small', '-', 'Gutter width for medium screens, using named spacing variables'],
						['gutterLarge', 'string', 'x-small', '-', 'Gutter width for large screens, using named spacing variables']
					]}
				/>
			</Section>
		</Section>
	));
