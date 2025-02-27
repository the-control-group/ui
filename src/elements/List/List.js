/**
 * List
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const List = ({
	children,
	bare,
	inline,
	...other
}) => {
	const style = inline ? 'inline' : bare ? 'bare' : '';

	const combinedClasses = classNames(
		'ui-list',
		style
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="ul"
		>
			{children}
		</Common>
	);
};

export default List;
