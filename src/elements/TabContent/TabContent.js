/**
 * Main content portion of `TabbedContainer` component
 */

import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ children }) => (
	<div className="ui-tab-panel">
		{children}
	</div>
);

TabContent.propTypes = {
	children: PropTypes.node.isRequired
};

export default TabContent;
