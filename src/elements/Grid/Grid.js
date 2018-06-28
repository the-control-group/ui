/**
 * Grid
 */

import './grid.less';

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Grid = (props) => {
	const {
		children,
		itemWidthsSmall = [],
		itemWidthsMedium = [],
		itemWidthsLarge = [],
		stackSmall = false,
		stackMedium = false,
		stackLarge = false,
		swapSmall = false,
		swapMedium = false,
		swapLarge = false,
		gutterSmall = 'x-small',
		gutterMedium = 'x-small',
		gutterLarge = 'x-small',
		...other
	} = props;

	/**
	 * Determine widths/styling depending on resolution
	 */
	const breakpoint = getBreakpoint(),
		itemWidthsObj = { itemWidthsSmall, itemWidthsMedium, itemWidthsLarge },
		gutterObj = { gutterSmall, gutterMedium, gutterLarge },
		stackedObj = { stackSmall, stackMedium, stackLarge },
		swapObj = { swapSmall, swapMedium, swapLarge };

	const widths = itemWidthsObj['itemWidths' + breakpoint],
		gutter = gutterObj['gutter' + breakpoint],
		stacked = stackedObj['stack' + breakpoint],
		swapped = swapObj['swap' + breakpoint];

	const combinedClasses = classNames(
		stacked && 'stacked',
		swapped && 'swap'
	);

	/**
	 * Remove any children that come in as false
	 */
	const filteredChildren = children.constructor === Array
		? children.filter(el => el)
		: children;

	/**
	 * Render the grid items (`renderGridItems` defined below)
	 */
	return (
		<Common
			{...other}
			classes={`ui-grid ${combinedClasses}`}
			tag="div"
		>
			{renderGridItems(filteredChildren, widths, stacked, gutter)}
		</Common>
	);
};

/**
 * Render the grid's children as grid items
 */
function renderGridItems(items, widths, stacked, gutter) {
	return Children.map(items, (child, i) => {
		if(!child) return null;

		const width = widths[i]
			? `calc(${widths[i]}% - var(--ui-${gutter}))` // use provided item widths
			: (items.length)
				? `calc(${100 / items.length}% - var(--ui-${gutter}))` // evenly space elements
				: '100%'; // 100% for everything else

		const classes = classNames('ui-grid-item', child.props.className),
			style = { ...child.props.style };

		if(!stacked) style.flex = `0 0 ${width}`;

		return cloneElement(child, {
			style,
			className: classes
		});
	});
}

/**
 * Evaulate the client's inner width and return a breakpoint name
 */
function getBreakpoint() {
	const viewportWidth = window.innerWidth,
		largeBreakpoint = 1024,
		mediumBreakpoint = 800;

	if(viewportWidth > largeBreakpoint) return 'Large';
	if(viewportWidth < largeBreakpoint && viewportWidth > mediumBreakpoint) return 'Medium';
	return 'Small';
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	itemWidthsSmall: PropTypes.array,
	itemWidthsMedium: PropTypes.array,
	itemWidthsLarge: PropTypes.array,
	stackSmall: PropTypes.bool,
	stackMedium: PropTypes.bool,
	stackLarge: PropTypes.bool,
	swapSmall: PropTypes.bool,
	swapMedium: PropTypes.bool,
	swapLarge: PropTypes.bool,
	gutterSmall: PropTypes.string,
	gutterMedium: PropTypes.string,
	gutterLarge: PropTypes.string
};

export default Grid;
