/**
 * Input
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

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

const Input = ({
	type,
	label,
	options = {},
	...other
}) => {
	const combinedClasses = classNames(
		'ui-input',
		other.classes
	);

	if(type === 'select') {
		return (
			<Fragment>
				{label &&
					<Label htmlFor={other.id}>
						{label}
					</Label>
				}

				<div className="ui-select-wrap">
					<Common
						{...other}
						classes={combinedClasses}
						tag="select"
						type={type}
					>
						{Object.keys(options).map((keyName, keyIndex) => <option key={keyIndex} value={keyName}>{options[keyName]}</option>)};
					</Common>
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			{label &&
				<Label htmlFor={other.id}>
					{label}
				</Label>
			}

			<Common
				{...other}
				classes={combinedClasses}
				tag="input"
				type={type}
			/>
		</Fragment>
	);
};

Label.propTypes = {
	children: PropTypes.node.isRequired
};

Input.propTypes = {
	/** HTML DOM attribute */
	type: PropTypes.string,
	/** Text label for input */
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/** Placeholder for input */
	placeholder: PropTypes.string,
	/** Object of options for type of `select` */
	options: (props, propName) => {
		if (props.type === 'select' && (props[propName] === undefined)) {
			return new Error(
				'Options object is required for select input.'
			);
		}
	}
};

export default Input;
