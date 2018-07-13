import './TabbedContainer.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Div from '../Div/Div';

export default class Tab extends Component {
	render() {
		const classes = classNames(
			'tab-panel',
			this.props.active ? ' active' : ''
		);

		return (
			<Div className={classes} id={this.props.numVal}>
				{ this.props.children }
			</Div>
		);
	}
}

Tab.defaultProps = {
	active: false
};

Tab.propTypes = {
	children: PropTypes.node.isRequired,
	active: PropTypes.bool,
	numVal: PropTypes.number
};
