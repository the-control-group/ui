/**
 * Common Styles proptables
 */

import React from 'react';
import PropTypes from 'prop-types';

const CommonStyles = () => {
	return <foo />;
};

CommonStyles.propTypes = {
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

export default CommonStyles;
