/**
 * Main content portion of `TabbedContainer` component
 */

import React from 'react';

const TabContent = ({ children }) => (
	<div className="ui-tab-panel">
		{children}
	</div>
);

export default TabContent;
