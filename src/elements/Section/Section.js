/**
 * Section
 */

import './section.less';

import React from 'react';
import PropTypes from 'prop-types';

import Common from '../Common/Common';

const Section = (props) => {
	const {
		children,
		...other
	} = props;

	return (
		<Common
			{...other}
			classes="ui-section"
			tag="div"
		>
			{children}
		</Common>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired
};

export default Section;
