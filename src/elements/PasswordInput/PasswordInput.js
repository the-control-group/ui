/**
 * Password Input
 */

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
  
import Common from '../Common/Common';
import FlexRow from '@the-control-group/ui/lib/elements/FlexRow/FlexRow';
import Button from '@the-control-group/ui/lib/elements/Button/Button';
import Div from '@the-control-group/ui/lib/elements/Div/Div';
  
  
/* eslint-disable react/prop-types */
const Label = ({ children, htmlForl, label}) => (
	<Common
		tag="label"
		className="ui-input-label"
		htmlFor={htmlFor}
	>
		{children}
	</Common>
);
/* eslint-enable */
  
const PasswordInput = ({
	bare,
	name,
	id,
	label,
	...other
}) => {
	const combinedClasses = classNames(
		'password-ui-input',
		other.classes,
		{
			bare
		}
	);
  
	const showPasswordClass = classNames(
		'show-password'
	);
  
	const [showPassword, setShowPassword] = useState(false);
  
	return (
		<Fragment>
              
			<Label htmlFor={other.id}>{label}</Label>
  
			<Common
				{...other}
				classes={combinedClasses}
				tag="input"
				name={name}
				id={id}
				type={showPassword ? 'text' : 'password'}
			/>
			<FlexRow>
				<Div>
					<Button
						classes={showPasswordClass}
						bare
						onClick={() => setShowPassword(!showPassword)} 
					>
						{showPassword ? 'Hide Password' : 'Show Password'}
					</Button>
				</Div>
			</FlexRow>
		</Fragment>
	);
};
  
Label.propTypes = {
	children: PropTypes.node.isRequired
};
  
PasswordInput.propTypes = {
	/** HTML DOM attribute */
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	bare: PropTypes.bool,
	id: PropTypes.string,
};
  
export default PasswordInput;
  