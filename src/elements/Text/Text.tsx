/**
 * Text
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const Text = (props) => {
	const {
		caption,
		children,

		// labels
		bold,
		italic,
		uppercase,
		lowercase,

		// font size
		smallest,
		smaller,
		small,
		medium,
		large,
		larger,
		largest,
		...other
	} = props;

	const combinedClasses = classNames(
		'ui-text',
		other.classes,
		{
			smallest,
			smaller,
			small,
			medium,
			large,
			larger,
			largest
		}
	);

	const tag = caption
		? 'span'
		: 'p';

	const style = {};
	if(bold) style.fontWeight = '600';
	if(italic) style.fontStyle = 'italic';
	if(uppercase) style.textTransform = 'uppercase';
	if(lowercase) style.textTransform = 'lowercase';

	return (
		<Common
			cName="Text"
			tag={tag}
			{...other}
			classes={combinedClasses}
			style={style}
		>
			{children}
		</Common>
	);
};

export default Text;
