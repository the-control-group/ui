/**
 * Input
 */

import './input.less';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Label = ({ children }) => (
	<Common
		tag="label"
		className="ui-input-label"
	>
		{children}
	</Common>
);

const Input = ({
	type,
	label,
	options = [],
	placeholder,
	onChange,
	value,
	name,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-input',
		other.classes
	);

	if(type === 'select') {
		return (
			<Fragment>
				<Label>{label}</Label>

				<Common
					classes={combinedClasses}
					tag="select"
					type={type}
					name={name}
					onChange={onChange}
				>
					{options.map((option) => <option key={option}>{option}</option>)}
				</Common>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Label>{label}</Label>

			<Common
				classes={combinedClasses}
				tag="input"
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
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
	label: PropTypes.string,
	/** Placeholder for input */
	placeholder: PropTypes.string,
	/** Array of options for type of `select` */
	options: (props, propName) => {
		if (props.type === 'select' && (props[propName] === undefined)) {
			return new Error(
				'Options array is required for select input.'
			);
		}
	}
};

export default Input;
