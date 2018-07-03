/**
 * Section
 */

import './section.less';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Common from '../Common/Common';

const Section = ({
	children,
	item,
	card,
	subsection,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-section',
		item && 'item',
		card && 'card',
		subsection && 'subsection'
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="div"
		>
			{children}
		</Common>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
	card: PropTypes.bool,
	item: PropTypes.bool,
	subsection: PropTypes.bool
};

export default Section;
