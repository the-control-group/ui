/**
 * Div
 */

import './div.less';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Div = ({
	children,
	item,
	card,
	section,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-div',
		item && 'item',
		card && 'card',
		section && 'section'
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

Div.propTypes = {
	children: PropTypes.node.isRequired,
	card: PropTypes.bool,
	item: PropTypes.bool,
	section: PropTypes.bool
};

export default Div;
