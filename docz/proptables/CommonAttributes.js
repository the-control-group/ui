/**
 * Common Attributes proptable
 */

import React from 'react';
import PropTypes from 'prop-types';

const CommonAttributes = () => {
	return <foo />;
};

CommonAttributes.propTypes = {
	/** HTML ID attribute */
	id: PropTypes.string,
	/** Input disabled attribute */
	disabled: PropTypes.bool,
	/** Input type attribute */
	type: PropTypes.string,
	/** Input placeholder text */
	placeholder: PropTypes.string,
	/** Click handler */
	onClick: PropTypes.func,
	/** Key down handler */
	onKeyDown: PropTypes.func,
	/** Input focus handler */
	onFocus: PropTypes.func,
	/** Input lose focus handler */
	onBlur: PropTypes.func,
	/** Input change handler */
	onChange: PropTypes.func,
	/** Form submit handler */
	onSubmit: PropTypes.func,
	/** Window scroll handler */
	onScroll: PropTypes.func
};

export default CommonAttributes;
