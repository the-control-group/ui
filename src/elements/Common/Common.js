/**
 * Common
 *
 * All other UI elements render down to this component in order to share common features and properties
 */

import React from 'react';
import PropTypes from 'prop-types';

const Common = ({
	children,
	classes,
	tag,
	...other
}) => {
	/**
	 * The HTML element/tag name to be rendered
	 */
	const Tag = tag;

	/**
	 * Setup whitelists for style and attribute properties that
	 * can be used by our components
	 */
	let styles = {
		...other.style
	};

	const attributes = {},
		styleFlags = {
			block: { display: 'block' },
			inline: { display: 'inline' },
			inlineBlock: { display: 'inline-block' },
			left: { textAlign: 'left' },
			right: { textAlign: 'right' },
			center: { textAlign: 'center' },
			floatRight: { float: 'right' },
			floatLeft: { float: 'left' }
		},
		styleValues = [
			'padding',
			'paddingTop',
			'paddingBottom',
			'paddingLeft',
			'paddingRight',
			'margin',
			'marginTop',
			'marginBottom',
			'marginLeft',
			'marginRight'
		],
		attributeValues = [
			'id',
			'disabled',
			'onClick',
			'onKeyDown',
			'onKeyPress',
			'onKeyUp',
			'onFocus',
			'onBlur',
			'onChange',
			'onInput',
			'onInvalid',
			'onSubmit',
			'onScroll'
		];

	/**
	 * Loop through our whitelists add anything that applies
	 * to our style/attribute objects
	 */
	Object.entries(styleFlags).forEach(([k, v]) => {
		if(other[k]) styles = Object.assign(styles, v);
	});

	styleValues.forEach(v => {
		if(other[v]) styles[v] = `var(--ui-${other[v]})`;
	});

	attributeValues.forEach(v => {
		if(other[v]) attributes[v] = other[v];
	});

	return (
		<Tag
			className={classes}
			style={styles}
			{...attributes}
		>
			{children}
		</Tag>
	);
};

Common.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	tag: PropTypes.string
};

export default Common;
