/**
 * Button
 */

import React from 'react';
import classNames from 'classnames';
import * as styles from './Button.module.css';

import Common from '../Common/Common';

const Button = ({
	children,
	type = 'button',
	loading,
	disabled,
	mini,
	full,
	outline,
	bare,
	secondary,
	tertiary,
	plain,
	pill,
	...other
}) => {
	const style = outline ? 'outline' : bare ? 'bare' : plain ? '' : 'standard';

	const combinedClasses = classNames(
		styles['ui-button'],
		other.classes,
		secondary ? 'secondary' : tertiary ? 'tertiary' : plain ? '' : 'primary',
		style,
		mini && 'mini',
		full && 'full',
		loading && 'loading',
		pill && 'pill'
	);

	return (
		<>
			<Common
				{...other}
				classes={combinedClasses}
				tag="button"
				type={type}
				disabled={disabled}
			>
				{children}
			</Common>
		</>
	);
};

export default Button;
