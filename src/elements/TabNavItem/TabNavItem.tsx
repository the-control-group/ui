/**
 * Navigation items portion of `TabbedContainer` component
 */

import React from 'react';
import classNames from 'classnames';

import { isMobile } from '../../util/helpers';

const TabNavItem = ({ title, titleMobile, active, changeTab, tabId, width }) => {
	const classes = classNames('ui-tab-nav-item', { 'active-item': active });

	const style = {};
	if(isMobile() && width) style.width = width;

	return (
		<li
			key={title}
			className={classes}
			style={style}
			data-tab={tabId}
			onClick={changeTab}
		>
			<a href="#">
				{isMobile() && titleMobile
					? titleMobile
					: title
				}
			</a>
		</li>
	);
};

export default TabNavItem;
