/**
 * Grid
 */

import './grid.less';

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

/**
 * Render the grid's children as grid items
 */
const renderGridItems = (items, widths, stacked, gutterStyle) => (
	Children.map(items, (child, i) => {
		if(!child) return null;

		const colSize = widths[i]
			? widths[i]
			: 1;

		const classes = classNames(
				'ui-grid-item',
				child.props.className,
				child.props.centerY && 'center-y'
			),
			style = {
				...child.props.style,
				...gutterStyle
			};

		if(!stacked) style.flex = `${colSize} 1 0`;

		return cloneElement(child, {
			style,
			className: classes
		});
	})
);

/**
 * Evaulate the client's inner width and return a breakpoint name
 */
const getBreakpoint = () => {
	const viewportWidth = window.innerWidth,
		largeBreakpoint = 1024,
		mediumBreakpoint = 800;

	if(viewportWidth > largeBreakpoint) return 'Large';
	if(viewportWidth < largeBreakpoint && viewportWidth > mediumBreakpoint) return 'Medium';
	return 'Small';
};

/**
 * Grid component
 */
const Grid = ({
	children,
	itemWidthsSmall = [],
	itemWidthsMedium = [],
	itemWidthsLarge = [],
	stackSmall,
	stackMedium,
	stackLarge,
	swapSmall,
	swapMedium,
	swapLarge,
	gutterSmall = 'x-small',
	gutterMedium = 'x-small',
	gutterLarge = 'x-small',
	...other
}) => {
	/**
	 * Determine widths/styling depending on resolution
	 */
	const breakpoint = getBreakpoint(),
		itemWidthsObj = { itemWidthsSmall, itemWidthsMedium, itemWidthsLarge },
		gutterObj = { gutterSmall, gutterMedium, gutterLarge },
		stackedObj = { stackSmall, stackMedium, stackLarge },
		swapObj = { swapSmall, swapMedium, swapLarge },
		widths = itemWidthsObj['itemWidths' + breakpoint],
		gutter = gutterObj['gutter' + breakpoint],
		stacked = stackedObj['stack' + breakpoint],
		swapped = swapObj['swap' + breakpoint];

	const combinedClasses = classNames(
			stacked && 'stacked',
			swapped && 'swap'
		),
		gutterStyle = {
			marginLeft: `var(--ui-${gutter})`,
			marginRight: `var(--ui-${gutter})`
		},
		outterGutterStyle = {
			marginLeft: `calc(var(--ui-${gutter}) * -1)`,
			marginRight: `calc(var(--ui-${gutter}) * -1)`
		};

	/**
	 * Render the grid items (`renderGridItems` defined below)
	 */
	return (
		<Common
			{...other}
			classes={`ui-grid ${combinedClasses}`}
			style={{ ...outterGutterStyle }}
			tag="div"
		>
			{renderGridItems(children, widths, stacked, gutterStyle)}
		</Common>
	);
};

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	/** Array numbers, describing each element's column count, for small screens */
	itemWidthsSmall: PropTypes.array,
	/** Array numbers, describing each element's column count, for medium screens */
	itemWidthsMedium: PropTypes.array,
	/** Array numbers, describing each element's column count, for large screens */
	itemWidthsLarge: PropTypes.array,
	/** Changes flex-direction to `column` on small screens */
	stackSmall: PropTypes.bool,
	/** Changes flex-direction to `column` on medium screens */
	stackMedium: PropTypes.bool,
	/** Changes flex-direction to `column` on large screens */
	stackLarge: PropTypes.bool,
	/** Changes flex-direction to `reverse-row`/`reverse-column` if stacked on small screens */
	swapSmall: PropTypes.bool,
	/** Changes flex-direction to `reverse-row`/`reverse-column` if stacked on medium screens */
	swapMedium: PropTypes.bool,
	/** Changes flex-direction to `reverse-row`/`reverse-column` if stacked on large screens */
	swapLarge: PropTypes.bool,
	/** Gutter width for small screens, using named spacing variables */
	gutterSmall: PropTypes.string,
	/** Gutter width for medium screens, using named spacing variables */
	gutterMedium: PropTypes.string,
	/** Gutter width for large screens, using named spacing variables */
	gutterLarge: PropTypes.string
};

export default Grid;
