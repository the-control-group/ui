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
	checked,
	rows,
	defaultValue,
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

	// Checks for SSN and CC#s that 9-19 characters long, ignoring dashes and spaces
	const redactedText = value?.replace(/(\d[ -]*){9,19}/, '[REDACTED]');

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
						value={value}
						id={id}
						name={name}
						classes={combinedClasses}
						tag="select"
						type={type}
						defaultValue={defaultValue}
					>
						{Array.isArray(options) ? (
							options.map(keyName =>
								<option key={keyName} value={keyName}>{keyName}</option>
							)
						) : (
							Object.keys(options).map((keyName, keyIndex) =>
								<option key={keyIndex} value={keyName} disabled={keyName.includes('disabled')}>{options[keyName]}</option>
							)
						)}
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
					value={value}
					classes={combinedClasses}
					tag="input"
					type={type}
					name={name}
					label={label}
					id={id}
					checked={checked}
				/>
				{label &&
					<label htmlFor={id}>
						{label}
					</label>
				}
			</Fragment>
		);
	}
	if(type === 'textarea') {
		return (
			<Fragment>
				{label &&
					<Label htmlFor={other.id}>
						{label}
					</Label>
				}

				<Common
					{...other}
					value={redactedText}
					classes={combinedClasses}
					tag="textarea"
					name={name}
					id={id}
					rows={rows || 4}
				/>
			</Fragment>
		);
	}

	if(type === 'email') {
		return (
			<Fragment>
				{label &&
					<Label htmlFor={other.id}>
						{label}
					</Label>
				}

				<Common
					{...other}
					value={value}
					classes={combinedClasses}
					tag="input"
					name={name}
					id={id}
					type={type}
				/>
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
				value={redactedText}
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

Input.propTypes = {
	/** HTML DOM attribute */
	type: PropTypes.string,
	bare: PropTypes.bool,
	name: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	rows: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
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
	},
	label: (props, propName) => {
		if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			return new Error(
				'Label is required for radio and checkbox inputs'
			);
		}
	},
	id: (props, propName) => {
		if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			return new Error(
				'Id attribute is required for radio and checkbox inputs'
			);
		}
	},
	checked: (props, propName) => {
		if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			return new Error(
				'Checked attribute is required for radio and checkbox inputs'
			);
		}
	}
};

export default Input;
