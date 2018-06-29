/**
 * Common
 *
 * All other UI elements render down to this component in order to share common features and properties
 */

import React from 'react';
import PropTypes from 'prop-types';

const Common = (props) => {
	const {
		children,
		classes,
		tag,
		block = '',
		inline = '',
		inlineBlock = '',
		left = '',
		right = '',
		center = '',
		floatRight = '',
		floatLeft = '',
		padding = '',
		paddingTop = '',
		paddingBottom = '',
		paddingLeft = '',
		paddingRight = '',
		margin = '',
		marginTop = '',
		marginBottom = '',
		marginLeft = '',
		marginRight = '',
		...other
	} = props;

	const Tag = tag;

	const attributes = {
		id: other.id,
		disabled: other.disabled,
		onClick: other.onClick,
		onKeyDown: other.onKeyDown,
		onKeyPress: other.onKeyPress,
		onKeyUp: other.onKeyUp,
		onFocus: other.onFocus,
		onBlur: other.onBlur,
		onChange: other.onChange,
		onInput: other.onInput,
		onInvalid: other.onInvalid,
		onSubmit: other.onSubmit,
		onScroll: other.onScroll
	};

	const styles = {};
	if(block) styles.display = 'block';
	if(inline) styles.display = 'inline';
	if(inlineBlock) styles.display = 'inline-block';
	if(left) styles.textAlign = 'left';
	if(right) styles.textAlign = 'right';
	if(center) styles.textAlign = 'center';
	if(floatRight) styles.float = 'right';
	if(floatLeft) styles.float = 'left';
	if(padding) styles.padding = `var(--ui-${padding})`;
	if(paddingTop) styles.paddingTop = `var(--ui-${paddingTop})`;
	if(paddingBottom) styles.paddingBottom = `var(--ui-${paddingBottom})`;
	if(paddingLeft) styles.paddingLeft = `var(--ui-${paddingLeft})`;
	if(paddingRight) styles.paddingRight = `var(--ui-${paddingRight})`;
	if(margin) styles.margin = `var(--ui-${margin})`;
	if(marginTop) styles.marginTop = `var(--ui-${marginTop})`;
	if(marginBottom) styles.marginBottom = `var(--ui-${marginBottom})`;
	if(marginLeft) styles.marginLeft = `var(--ui-${marginLeft})`;
	if(marginRight) styles.marginRight = `var(--ui-${marginRight})`;

	return (
		<Tag
			className={classes}
			style={{ ...styles, ...other.style }}
			{...attributes}
		>
			{children}
		</Tag>
	);
};

Common.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	tag: PropTypes.string,
	block: PropTypes.string,
	inline: PropTypes.string,
	inlineBlock: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string,
	center: PropTypes.string,
	floatRight: PropTypes.string,
	floatLeft: PropTypes.string,
	padding: PropTypes.string,
	paddingTop: PropTypes.string,
	paddingBottom: PropTypes.string,
	paddingLeft: PropTypes.string,
	paddingRight: PropTypes.string,
	margin: PropTypes.string,
	marginTop: PropTypes.string,
	marginBottom: PropTypes.string,
	marginLeft: PropTypes.string,
	marginRight: PropTypes.string
};

export default Common;
