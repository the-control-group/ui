/**
 * Input
 */

import React, { Fragment } from 'react';
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
	const redactedText = typeof value === 'string' ? value?.replace(/(\d[ -]*){9,19}/, '[REDACTED]') : value;


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

export default Input;
