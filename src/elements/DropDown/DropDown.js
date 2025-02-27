/**
 * Drop Down menu
 */

import React, { cloneElement } from 'react';
import classNames from 'classnames';

import Common from '../Common/Common';

const DropDown = ({
	children,
	title,
	...other
}) => {
	const combinedClasses = classNames(
		'ui-drop-down',
		other.classes
	);

	return (
		<Common
			{...other}
			classes={combinedClasses}
			tag="div"
		>
			{typeof title === 'string'
				? <span className="title">{title}</span>
				: cloneElement(title, { className: 'title' })
			}

			<ul className="items">
				{children}
			</ul>
		</Common>
	);
};

export default DropDown;
