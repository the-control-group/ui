import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Div from '../Div/Div';

const Tab = (props) => {
	const classes = classNames('ui-tab-panel', {active: props.active});

	return (
		<Div className={classes}>
			{props.children}
		</Div>
	);
};

Tab.defaultProps = {
	active: false
};

Tab.propTypes = {
	children: PropTypes.node.isRequired,
	active: PropTypes.bool
};

export default Tab;
