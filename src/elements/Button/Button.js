/**
 * Button
 */

import './button.less';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Button = ({
	children,
	type = 'button',
	loading,
	mini,
	full,
	outline,
	bare,
	secondary,
	...other
}) => {
	const style = outline ? 'outline' : bare ? 'bare' : 'standard';

	const combinedClasses = classNames(
		'ui-button',
		secondary ? 'secondary' : 'primary',
		style,
		mini && 'mini',
		full && 'full',
		loading && 'loading'
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="button"
			type={type}
		>
			{children}
		</Common>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	loading: PropTypes.bool,
	mini: PropTypes.bool,
	full: PropTypes.bool,
	outline: PropTypes.bool,
	bare: PropTypes.bool,
	secondary: PropTypes.bool
};

export default Button;
