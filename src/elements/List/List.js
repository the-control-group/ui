/**
 * List
 */

import './list.less';

import React from 'react';
import PropTypes from 'prop-types';
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

List.propTypes = {
	children: PropTypes.node.isRequired,
	bare: PropTypes.bool,
	inline: PropTypes.bool
};

export default List;
