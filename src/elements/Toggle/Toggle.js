/**
 * Toggle
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Toggle = ({
	checked,
	value,
	loading,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-toggle',
		other.classes,
		checked && 'on',
		loading && 'loading'
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="div"
			data-checked={checked}
			data-value={value}
		/>
	);
};

Toggle.propTypes = {
	loading: PropTypes.bool,
	/** loading state */
	checked: PropTypes.bool.isRequired
	/** position state */
};

export default Toggle;
