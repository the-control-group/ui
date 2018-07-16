import './TabbedContainer.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Div from '../Div/Div';
import List from '../List/List';

class TabbedContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0
		};
	}

	handleOnClick(key, event) {
		event.preventDefault();

		this.setState({
			activeIndex: key
		});
	}

	renderNavItem(key) {
		const tab = this.props.children[key],
			keyNum = Number(key),
			indexNum = Number(key) + 1;

		const navItemClasses = classNames(
			this.state.activeIndex === keyNum ? 'active' : ''
		);

		return (
			<li key={ key } className={navItemClasses} id={indexNum}>
				<a href="#" onClick={ this.handleOnClick.bind(this, keyNum) }>{ tab.props.title }</a>
			</li>
		);
	}

	render() {
		let index = 0;
		const isActive = this.state.activeIndex;

		const tabs = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				active: child.props.active === true ? true : (isActive === index++),
				numVal: String(index - 1)
			});
		});

		const tabsNavClasses = classNames(
			'tabs-nav'
		);

		return (
			<Div className="tabs-wrapper">
				<List inline className={tabsNavClasses}>
					{ Object.keys(this.props.children).map(this.renderNavItem.bind(this)) }
				</List>
				<Div className="tabs-content">
					{tabs}
				</Div>
			</Div>
		);
	}
}

TabbedContainer.propTypes = {
	children: PropTypes.node.isRequired,
	active: PropTypes.bool,
	className: PropTypes.string,
	numVal: PropTypes.string
};

export default TabbedContainer;

