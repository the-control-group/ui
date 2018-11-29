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
/* eslint-enable */

const Input = ({
	type,
	label,
	options = {},
	bare,
	name,
	id,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-input',
		other.classes,
		{
			bare
		}
	);

	if(type === 'select') {
		return (
			<Fragment>
				{label &&
					<Label htmlFor={other.id}>
						{label}
					</Label>
				}

				<div className={classNames('ui-select-wrap', { bare })}>
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

	if(type === 'radio' || type === 'checkbox') {
		return (
			<Fragment>
				<Common
					{...other}
					classes={combinedClasses}
					tag="input"
					type={type}
					name={name}
					label={label}
					id={id}
				/>
				{label &&
					<label htmlFor={other.id}>
						{label}
					</label>
				}
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
	bare: PropTypes.bool,
	/** Placeholder for input */
	placeholder: PropTypes.string,
	/** Object of options for type of `select` */
	options: (props, propName) => {
		if (props.type === 'select' && (props[propName] === undefined)) {
			return new Error(
				'Options object is required for select input.'
			);
		}
	},
	label: (props, propName) => {
		if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			return new Error(
				'Label is required for radio and checkbox inputs'
			);
		}
	},
	name: (props, propName) => {
		if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			return new Error(
				'Name attribute is required for radio and checkbox inputs'
			);
		}
	},
	id: (props, propName) => {
		if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			return new Error(
				'Id attribute is required for radio and checkbox inputs'
			);
		}
	}
};

export default Input;
