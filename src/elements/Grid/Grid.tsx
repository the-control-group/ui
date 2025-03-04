/**
 * Grid
 */

import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';

import { getBreakpoint } from '../../util/helpers';
import Common from '../Common/Common';

/**
 * Render the grid's children as grid items
 */
const renderGridItems = (items, widths = [], blocks, stacked, gutter) => (
	Children.map(items, (child, i) => {
		if(!child) return null;

		const colSize = widths[i] || 1;

		const classes = classNames(
				'ui-grid-item',
				child.props.className,
				`gutter-${gutter}`,
				{
					'center-y': child.props.centerY,
					bottom: child.props.bottom
				}
			),
			style = {
				...child.props.style
			};

		if(blocks) {
			// margins plus extra percent ensures that only the desired number of blocks will be placed on the line
			style.flex = `0 0 ${100 / blocks}%`;
			style.maxWidth = `${100 / blocks}%`;
		} else if(!stacked) {
			style.flexGrow = colSize;
		}

		return cloneElement(child, {
			style,
			className: classes
		});
	})
);

/**
 * Grid component
 */
const Grid = ({
	children,
	itemWidths,
	itemWidthsSmall,
	itemWidthsMedium,
	itemWidthsLarge,
	blocks,
	blocksSmall,
	blocksMedium,
	blocksLarge,
	stack,
	stackSmall,
	stackMedium,
	stackLarge,
	swap,
	swapSmall,
	swapMedium,
	swapLarge,
	gutter = 'x-small',
	gutterSmall,
	gutterMedium,
	gutterLarge,
	...other
}) => {
	/**
	 * Determine widths/styling depending on resolution
	 */
	const breakpoint = getBreakpoint(),
		itemWidthsObj = { itemWidthsSmall, itemWidthsMedium, itemWidthsLarge },
		blocksObj = { blocksSmall, blocksMedium, blocksLarge },
		gutterObj = { gutterSmall, gutterMedium, gutterLarge },
		stackedObj = { stackSmall, stackMedium, stackLarge },
		swapObj = { swapSmall, swapMedium, swapLarge },
		widths = itemWidthsObj['itemWidths' + breakpoint]
			? itemWidthsObj['itemWidths' + breakpoint]
			: itemWidths,
		blockGrid = blocksObj['blocks' + breakpoint]
			? blocksObj['blocks' + breakpoint]
			: blocks,
		gutters = gutterObj['gutter' + breakpoint]
			? gutterObj['gutter' + breakpoint]
			: gutter,
		stacked = stackedObj['stack' + breakpoint]
			? stackedObj['stack' + breakpoint]
			: stack,
		swapped = swapObj['swap' + breakpoint]
			? swapObj['swap' + breakpoint]
			: swap;

	const combinedClasses = classNames(
		'ui-grid',
		`outer-gutter-${gutters}`,
		other.classes,
		{
			swap: swapped,
			block: blockGrid,
			stacked
		}
	);

	/**
	 * Render the grid items (`renderGridItems` defined below)
	 */
	return (
		<Common
			{...other}
			classes={combinedClasses}
			style={{ ...other.style }}
			tag="div"
		>
			{renderGridItems(children, widths, blockGrid, stacked, gutters)}
		</Common>
	);
};

export default Grid;
