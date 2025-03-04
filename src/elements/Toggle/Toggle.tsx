/**
 * Toggle
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const Toggle = ({
	checked,
	value,
	onChange,
	disabled,
	invert,
	...other
}) => {
	const combinedClasses = classNames(
			'ui-toggle',
			other.classes,
			invert && 'invert'
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

export default Toggle;
