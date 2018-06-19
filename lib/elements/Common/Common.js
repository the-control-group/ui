/**
 * Common
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

	const styles = {};
	if(other.lowercase) styles.textTransform = 'lowercase';

	return (
		<Tag
			onClick={other.onClick}
			className={combinedClasses}
			style={styles}
		>
			{children}
		</Tag>
	);
};

Common.propTypes = {

};

export default Common;
