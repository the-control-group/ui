/**
 * Button
 */

import './Button.less';

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
		big = false,
		outline = false,
		bare = false,
		secondary = false,
		...other
	} = props;

	const combinedClasses = classNames(
		mini && 'mini',
		big && 'big',
		outline && 'outline',
		bare && 'bare',
		secondary && 'secondary'
	);

	return (
		<Common
			{...other}
			cName="Button"
			tag="button"
			type={type}
			classes={combinedClasses}
		>
			{loading
				? 'Loading...'
				: children
			}
		</Common>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.bool,
	loading: PropTypes.bool,
	mini: PropTypes.bool,
	big: PropTypes.bool,
	outline: PropTypes.bool,
	bare: PropTypes.bool,
	secondary: PropTypes.bool
};

export default Button;

