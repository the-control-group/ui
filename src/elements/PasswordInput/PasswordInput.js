/**
 * Input
 */

 import React, { Fragment, useState } from 'react';
 import PropTypes from 'prop-types';
 import classNames from 'classnames';
 
 import Common from '../Common/Common';
 import Toggle from '@the-control-group/ui/lib/elements/Toggle/Toggle';
 import FlexRow from '@the-control-group/ui/lib/elements/FlexRow/FlexRow';
 
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
	 bare,
	 name,
	 id,
	 ...other
 }) => {
	 const combinedClasses = classNames(
		 'password-ui-input',
		 other.classes,
		 {
			 bare
		 }
	 );
 
	 const [showPassword, setShowPassword] = useState(false);
 
	 return (
		 <Fragment>
			 
			 <Label htmlFor={other.id}>Password</Label>
 
			 <Common
				 {...other}
				 classes={combinedClasses}
				 tag="input"
				 name={name}
				 id={id}
				 type={showPassword ? 'text' : 'password'}
			 />
			 <FlexRow>
				 <Label>Show Password</Label>
				 <Toggle onChange={() => setShowPassword(!showPassword)} value={'showPassword'} checked={showPassword} />
			 </FlexRow>
		 </Fragment>
	 );
 };
 
 Label.propTypes = {
	 children: PropTypes.node.isRequired
 };
 
 Input.propTypes = {
	 /** HTML DOM attribute */
	 bare: PropTypes.bool,
	 name: PropTypes.string.isRequired,
	 id: (props, propName) => {
		 if ((props.type === 'radio' || props.type === 'checkbox') && (props[propName] === undefined)) {
			 return new Error(
				 'Id attribute is required for radio and checkbox inputs'
			 );
		 }
	 },
 };
 
 export default Input;
 