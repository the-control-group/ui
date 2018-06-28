/**
 * Button
 */

import './button.less';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Button = (props) => {
	const {
		children,
		type = 'button',
		loading = false,
		mini = false,
		full = false,
		outline = false,
		bare = false,
		secondary = false,
		...other
	} = props;

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
