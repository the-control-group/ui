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
	disabled,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-toggle',
		other.classes,
		{
			on: checked
		}
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="input"
			type="checkbox"
			value={value}
			disabled={disabled}
		/>
	);
};

Toggle.propTypes = {
	disabled: PropTypes.bool,
	/** disabled state */
	checked: PropTypes.bool.isRequired,
	/** position state */
	value: PropTypes.string
	/** string state */
};

export default Toggle;
