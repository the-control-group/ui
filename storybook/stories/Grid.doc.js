import React from 'react';
import { storiesOf } from '@storybook/react';

import PropsTable from '../components/PropsTable';

import { Grid, Div } from '../../src';

const equalWidthExample = `/**
 * Note: These examples use our \`Div\` component as example
 * children, however, any element is valid to use as a child.
 */

<Grid>
	<Div>col #1</Div>
	<Div>col #2</Div>
</Grid>`;

const customWidthExample = `/**
 * \`itemWidthsSmall\` is here for example. In usage, it's best
 * to omit an itemWidths array with equal width columns for brevity
 */

<Grid
	itemWidthsLarge={[7,3]}
	itemWidthsMedium={[6,4]}
	itemWidthsSmall={[6,6]}
>
	<Div>7 cols large, 6 cols medium, 6 cols small</Div>
	<Div>3 cols large, 4 cols medium, 6 cols small</Div>
</Grid>`;

const stackedExample = `<Grid stackLarge>
	<Div>col #1</Div>
	<Div>col #2</Div>
</Grid>`;

const swappedExample = `<Grid swapLarge stackLarge>
	<Div>1st in source</Div>
	<Div>2nd in source</Div>
</Grid>`;

const gutterExample = `<Grid
	gutterSmall="medium"
	gutterMedium="medium"
	gutterLarge="medium"
>
	<Div>medium gutter</Div>
	<Div>medium gutter</Div>
</Grid>`;

storiesOf('Elements', module)
	.add('Grid', () => (
		<Div>
			<Div className="story-heading">
				<h1>Grid</h1>
				<p>Grid system using flexbox</p>
			</Div>

			<Div className="story-component-group grid-example">
				<h2>Equal Width:</h2>
				<p>Passing nothing into <pre>{'<Grid>'}</pre>, you will get equal width columns based on the number of elements as its children.</p>

				<Div className="component">
					<Grid marginBottom="small">
						<Div>col #1</Div>
						<Div>col #2</Div>
					</Grid>

					<Grid marginBottom="small">
						<Div>col #1</Div>
						<Div>col #2</Div>
						<Div>col #3</Div>
					</Grid>

					<Grid marginBottom="small">
						<Div>col #1</Div>
						<Div>col #2</Div>
						<Div>col #3</Div>
						<Div>col #4</Div>
					</Grid>

					<code className="multi">{equalWidthExample}</code>
				</Div>
			</Div>

			<Div className="story-component-group grid-example">
				<h2>Specific Widths:</h2>
				<p><pre>{'<Grid>'}</pre> takes 3 different arrays corresponding to different resolutions (<pre>itemWidthsSmall</pre>, <pre>itemWidthsMedium</pre>, and <pre>itemWidthsLarge</pre>), where the elements are numbers that will be treated as percentages to create custom arrangements of columns. If you want columns to be equally sized at a specific resolution, simply leave that one out for brevity.</p>

				<Div className="component">
					<Grid
						itemWidthsLarge={[7, 3]}
						itemWidthsMedium={[6, 4]}
						itemWidthsSmall={[6, 6]}
						marginBottom="small"
					>
						<Div>7 cols large, 6 cols medium, 6 cols small</Div>
						<Div>3 cols large, 4 cols medium, 6 cols small</Div>
					</Grid>

					<Grid itemWidthsLarge={[2, 6, 2]} marginBottom="small">
						<Div>2 cols large</Div>
						<Div>6 cols large</Div>
						<Div>2 cols large</Div>
					</Grid>

					<Grid itemWidthsLarge={[2.5, 7.5]} marginBottom="small">
						<Div>2.5 cols large</Div>
						<Div>7.5 cols large</Div>
					</Grid>

					<code className="multi">{customWidthExample}</code>
				</Div>
			</Div>

			<Div className="story-component-group grid-example">
				<h2>Stacking:</h2>
				<p><pre>stackSmall</pre>, <pre>stackMedium</pre>, and <pre>stackLarge</pre> will turn each child into a 100% wide row and stack them vertically.</p>

				<Div className="component">
					<Grid stackLarge marginBottom="small">
						<Div marginBottom="small">col #1</Div>
						<Div>col #2</Div>
					</Grid>

					<code className="multi">{stackedExample}</code>
				</Div>
			</Div>

			<Div className="story-component-group grid-example">
				<h2>Swapping:</h2>
				<p><pre>swapSmall</pre>, <pre>swapMedium</pre>, and <pre>swapLarge</pre> will reverse the order of columns at the specified resolution. This can be used alongside the stacking properties to reverse the row order as well.</p>

				<Div className="component">
					<Grid swapLarge>
						<Div>1st in source</Div>
						<Div>2nd in source</Div>
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
						<Div>1st in source</Div>
						<Div marginBottom="small">2nd in source</Div>
					</Grid>

					<code className="multi">{swappedExample}</code>
				</Div>
			</Div>

			<Div className="story-component-group grid-example">
				<h2>Gutter Widths:</h2>
				<p><pre>gutterSmall</pre>, <pre>gutterMedium</pre>, and <pre>gutterLarge</pre> takes a named space string and adjusts the gutter width. Defaults to <pre>x-small</pre></p>.

				<Div className="component">
					<Grid
						gutterSmall="xx-small"
						gutterMedium="xx-small"
						gutterLarge="xx-small"
						marginBottom="small"
					>
						<Div>xx-small gutter</Div>
						<Div>xx-small gutter</Div>
					</Grid>

					<Grid
						gutterSmall="x-small"
						gutterMedium="x-small"
						gutterLarge="x-small"
						marginBottom="small"
					>
						<Div>x-small gutter</Div>
						<Div>x-small gutter</Div>
					</Grid>

					<Grid
						gutterSmall="small"
						gutterMedium="small"
						gutterLarge="small"
						marginBottom="small"
					>
						<Div>small gutter</Div>
						<Div>small gutter</Div>
					</Grid>

					<Grid
						gutterSmall="medium"
						gutterMedium="medium"
						gutterLarge="medium"
						marginBottom="small"
					>
						<Div>medium gutter</Div>
						<Div>medium gutter</Div>
					</Grid>

					<Grid
						gutterSmall="large"
						gutterMedium="large"
						gutterLarge="large"
						marginBottom="small"
					>
						<Div>large gutter</Div>
						<Div>large gutter</Div>
					</Grid>

					<Grid
						gutterSmall="x-large"
						gutterMedium="x-large"
						gutterLarge="x-large"
						marginBottom="small"
					>
						<Div>x-large gutter</Div>
						<Div>x-large gutter</Div>
					</Grid>

					<Grid
						gutterSmall="xx-large"
						gutterMedium="xx-large"
						gutterLarge="xx-large"
						marginBottom="small"
					>
						<Div>xx-large gutter</Div>
						<Div>xx-large gutter</Div>
					</Grid>

					<code className="multi">{gutterExample}</code>
				</Div>
			</Div>

			<Div className="story-component-group story-prop-table">
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
			</Div>
		</Div>
	));
