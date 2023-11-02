/**
 * SNN Input
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const formatSSN = (ssn) => {
	const numValue = ssn.replace(/[^0-9]/g, '').substr(-9),
		numGroups = numValue.match(/([0-9]{0,3}){1}([0-9]{0,2})?([0-9]{0,4})?/);

	let formattedSSN = '';

	if (!numGroups) return formattedSSN;

	if (numGroups[1]) formattedSSN = numGroups[1];

	if (numGroups[1].length === 3 && numGroups[2]) {
		formattedSSN += '-';
	}

	if (numGroups[2]) {
		formattedSSN += numGroups[2];

		if (numGroups[2].length === 2 && numGroups[3]) {
			formattedSSN += '-';
		}
	}

	if (numGroups[3]) {
		formattedSSN += numGroups[3];
	}

	return formattedSSN;
};

/* eslint-disable react/prop-types */
const Label = ({ children, htmlFor }) => (
	<Common
		tag="label"
		className="ui-input-label"
		htmlFor={htmlFor}
	>
		{children}
	</Common>
);
/* eslint-enable */

const SSNInput = ({
	type,
	label,
	bare,
	name,
	id,
	value,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-input',
		other.classes,
		{
			bare
		}
	);


	return (
		<Fragment>
			{label &&
				<Label htmlFor={other.id}>
					{label}
				</Label>
			}

			<Common
				{...other}
				value={formatSSN(value)}
				classes={combinedClasses}
				tag="input"
				name={name}
				id={id}
				type={type}
			/>
		</Fragment>
	);
};

Label.propTypes = {
	children: PropTypes.node.isRequired
};

SSNInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	/** Placeholder for input */
	placeholder: PropTypes.string
};

export default SSNInput;
