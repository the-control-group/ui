/**
 * Password Input
 */

import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
  
import Common from '../Common/Common';
import FlexRow from '../FlexRow/FlexRow';
import Button from '../Button/Button';
import Div from '../Div/Div';
  
  
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
			{!!label &&
				<Label htmlFor={other.id}>
					{label}
				</Label>
			}
  
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
  
export default PasswordInput;
