/**
 * Common
 *
 * All other UI elements render down to this component in order to share features and properties
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Common = (props) => {
	const {
		children,
		classes,
		tag,
		cName,
		...other
	} = props;

	const Tag = tag;

	const combinedClasses = classNames(
		cName,
		classes
	);

	return (
		<Tag
			className={combinedClasses}
			onClick={other.onClick}
			disabled={other.disabled}
		>
			{children}
		</Tag>
	);
};

Common.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	tag: PropTypes.string,
	cName: PropTypes.string
};

export default Common;
