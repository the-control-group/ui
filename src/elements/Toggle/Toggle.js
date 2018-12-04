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
		{
			on: checked,
			loading
		}
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="input"
			type="checkbox"
			checked={checked}
			value={value}
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
