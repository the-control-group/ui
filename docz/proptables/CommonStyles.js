/**
 * Common Styles proptable
 */

import React from 'react';
import PropTypes from 'prop-types';

const CommonStyles = () => {
	return <foo />;
};

CommonStyles.propTypes = {
	/** Padding, using named sizing variables */
	padding: PropTypes.string,
	/** Top padding, using named sizing variables */
	paddingTop: PropTypes.string,
	/** Bottom padding, using named sizing variables */
	paddingBottom: PropTypes.string,
	/** Left padding, using named sizing variables */
	paddingLeft: PropTypes.string,
	/** Right padding, using named sizing variables */
	paddingRight: PropTypes.string,
	/** Margin, using named sizing variables */
	margin: PropTypes.string,
	/** Top margin, using named sizing variables */
	marginTop: PropTypes.string,
	/** Botom margin, using named sizing variables */
	marginBottom: PropTypes.string,
	/** Left margin, using named sizing variables */
	marginLeft: PropTypes.string,
	/** Right margin, using named sizing variables */
	marginRight: PropTypes.string,
	/** Sets `display` to `block` */
	block: PropTypes.bool,
	/** Sets `display` to `inline` */
	inline: PropTypes.bool,
	/** Sets `display` to `inline-block` */
	inlineBlock: PropTypes.bool,
	/** Sets `text-align` to `left` */
	left: PropTypes.bool,
	/** Sets `text-align` to `right` */
	right: PropTypes.bool,
	/** Sets `text-align` to `center` */
	center: PropTypes.bool,
	/** Sets `float` to `right` */
	floatRight: PropTypes.bool,
	/** Sets `float` to `left` */
	floatLeft: PropTypes.bool
};

export default CommonStyles;
