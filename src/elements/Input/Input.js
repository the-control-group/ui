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
	placeholder
}) => {
	const combinedClasses = classNames(
		'ui-input'
	);

	if(type === 'select') {
		return (
			<Fragment>
				<Label>{label}</Label>

				<Common
					classes={combinedClasses}
					tag="select"
					type={type}
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
				placeholder={placeholder}
			/>
		</Fragment>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	options: (props, propName) => {
		if (props.type === 'select' && (props[propName] === undefined)) {
			return new Error(
				'Options array is required for select input.'
			);
		}
	}
};

export default Input;
