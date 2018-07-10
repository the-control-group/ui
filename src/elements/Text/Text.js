/**
 * Text
 */

import './Text.less';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Text = (props) => {
	const {
		heading,
		label,
		span,
		p,
		children,

		// labels
		caption = false,
		red = false,
		blue = false,
		green = false,
		yellow = false,
		bold = false,
		italic = false,
		uppercase = false,
		lowercase = false,
		title = false,
		subtitle = false,

		// font size
		smallest = false,
		smaller = false,
		small = false,
		medium = false,
		large = false,
		larger = false,
		largest = false
	} = props;

	const combinedClasses = classNames(
	    'ui-text',
	    props.classes,
	    caption && 'caption'
	);

	const tag = (span)
		? 'span'
		: (heading)
	    ? `h${heading}`
	    : (label)
	    ? 'label'
	    : 'p';

	const style = {};

	if(smallest) style.fontSize = 'var(--ui-font-xx-small)';
	if(smaller) style.fontSize = 'var(--ui-font-x-small)';
	if(small) style.fontSize = 'var(--ui-font-small)';
	if(medium) style.fontSize = 'var(--ui-font-medium)';
	if(large) style.fontSize = 'var(--ui-font-large)';
	if(larger) style.fontSize = 'var(--ui-font-x-large)';
	if(largest) style.fontSize = 'var(--ui-font-xx-large)';
	if(red) style.color = 'var(--color-red, red)';
	if(blue) style.color = 'var(--ui-color-blue)';
	if(green) style.color = 'var(--ui-color-green)';
	if(yellow) style.color = 'var(--ui-color-yellow)';
	if(bold) style.fontWeight = '600';
	if(italic) style.fontStyle = 'italic';
	if(uppercase) style.textTransform = 'uppercase';
	if(lowercase) style.textTransform = 'lowercase';

	return (
		<Common
			cName="Text"
			tag={tag}
			{...props}
			classes={combinedClasses}
			style={style}
		>
			{children}
		</Common>
	);
};

Text.propTypes = {
	children: PropTypes.node.isRequired,
	/** Heading Level */
	heading: PropTypes.string,
	/** String of class names */
	classes: PropTypes.string,
	/** Gray uppercase caption */
	caption: PropTypes.bool,
	/** Title */
	title: PropTypes.bool,
	/** Subtitle */
	subtitle: PropTypes.bool,
	/** Red/warning text */
	red: PropTypes.bool,
	/** Brand Blue text */
	blue: PropTypes.bool,
	/** Brand Green text */
	green: PropTypes.bool,
	/** Brand Yellow text */
	yellow: PropTypes.bool,
	/** Bold text */
	bold: PropTypes.bool,
	/** Italic Text */
	italic: PropTypes.bool,
	/** Uppercase Text */
	uppercase: PropTypes.bool,
	/** Lowercase Text */
	lowercase: PropTypes.bool,
	/** Extra extra small text */
	smallest: PropTypes.bool,
	/** Extra small text */
	smaller: PropTypes.bool,
	/** Small/normal text (1em) */
	small: PropTypes.bool,
	/** Medium text */
	medium: PropTypes.bool,
	/** Large text */
	large: PropTypes.bool,
	/** Extra large text */
	larger: PropTypes.bool,
	/** Extra extra large text */
	largest: PropTypes.bool

};

export default Text;
