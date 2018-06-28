/**
 * Common
 *
 * All other UI elements render down to this component in order to share common features and properties
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Common = (props) => {
	const {
		children,
		tag,
		classes = '',
		id = '',
		disabled = false,
		onClick = () => {},
		onKeyDown = () => {},
		onFocus = () => {},
		onBlur = () => {},
		onChange = () => {},
		onSubmit = () => {},
		onScroll = () => {},
		block = false,
		inline = false,
		inlineBlock = false,
		left = false,
		right = false,
		center = false,
		floatRight = false,
		floatLeft = false,
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
		id,
		disabled,
		onClick,
		onKeyDown,
		onFocus,
		onBlur,
		onChange,
		onSubmit,
		onScroll
	};

	const combinedClasses = classNames(
		classes,
		other.className
	);

	const styles = { ...other.style };
	if(block) styles.display = 'block';
	if(inline) styles.display = 'block';
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
			className={combinedClasses}
			style={styles}
			{...attributes}
		>
			{children}
		</Tag>
	);
};

Common.propTypes = {
	children: PropTypes.node.isRequired,
	tag: PropTypes.string.isRequired,
	classes: PropTypes.string,
	id: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	onKeyDown: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	onScroll: PropTypes.func,
	block: PropTypes.bool,
	inline: PropTypes.bool,
	inlineBlock: PropTypes.bool,
	left: PropTypes.bool,
	right: PropTypes.bool,
	center: PropTypes.bool,
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
