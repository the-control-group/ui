/**
 * Common
 *
 * All other UI elements render down to this component in order to share common features and properties
 */

import React from 'react';
import PropTypes from 'prop-types';

const Common = (props) => {
	const {
		children,
		classes,
		tag,
		...other
	} = props;

	const Tag = tag;

	const attributes = {
		onClick: other.onClick,
		disabled: other.disabled
	};

	return (
		<Tag
			className={classes}
			{...attributes}
		>
			{children}
		</Tag>
	);
};

Common.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	tag: PropTypes.string
};

export default Common;
