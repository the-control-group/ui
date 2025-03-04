/**
 * Text
 */

import React from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const Heading = (props) => {
	const {
		level,
		children,
		...other
	} = props;

	const combinedClasses = classNames(
		'ui-heading',
		other.classes
	);

	return (
		<Common
			cName="Text"
			tag={`h${level}`}
			{...other}
			classes={combinedClasses}
		>
			{children}
		</Common>
	);
};

export default Heading;
