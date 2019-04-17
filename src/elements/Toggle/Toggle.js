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
	onChange,
	disabled,
	...other
}) => {
	const combinedClasses = classNames(
			'ui-toggle',
			other.classes
		),
		toggleId = `checkbox-toggle-${value.replace(/\s/g, '_')}`;

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="div"
		>
			<input id={toggleId} type="checkbox" checked={checked} value={value} disabled={disabled} onChange={onChange} />
			<label htmlFor={toggleId}>{checked ? 'On' : 'Off'}</label>
		</Common>
	);
};

Toggle.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	disabled: PropTypes.bool
};

export default Toggle;
