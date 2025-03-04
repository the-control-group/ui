/**
 * Div
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const Div = ({
	children,
	item,
	card,
	subsection,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-div',
		other.classes,
		item && 'item',
		card && 'card',
		subsection && 'subsection'
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="div"
		>
			{children}
		</Common>
	);
};

export default Div;
