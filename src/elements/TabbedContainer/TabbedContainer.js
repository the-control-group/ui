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
			// set default showing tab (0 = first tab, 1 = second tab, etc...)
			activeIndex: 0
		};

		this.changeTabs = this.changeTabs.bind(this);
		this.renderNavItems = this.renderNavItems.bind(this);
		this.renderOneNavItem = this.renderOneNavItem.bind(this);
	}

	changeTabs(event, key) {
		event.preventDefault();

		this.setState({
			activeIndex: key
		});
	}

	renderNavItems(key) {
		const tab = this.props.children[key] ? this.props.children[key] : null,
			keyNum = Number(key);

		const navItemClasses = classNames(
			this.state.activeIndex === keyNum ? 'active' : ''
		);

		return (
			<li key={key} className={navItemClasses}>
				<a href="#" onClick={ (e) => this.changeTabs(e, keyNum) }>{ tab.props.title }</a>
			</li>
		);
	}

	renderOneNavItem() {
		const oneTab = React.Children.only(this.props.children);

		return (
			<li className="active">
				<a href="#">{ oneTab.props.title }</a>
			</li>
		);
	}

	render() {
		let index = 0,
			renderNav;
		const isActive = this.state.activeIndex;

		const tabs = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				active: child.props.active === true ? true : (isActive === index++)
			});
		});

		const tabsNavClasses = classNames(
			'tabs-nav'
		);

		if (this.props.children && this.props.children.length > 0) {
			renderNav = Object.keys(this.props.children).map(this.renderNavItems.bind(this));
		} else {
			renderNav = this.renderOneNavItem();
		}

		return (
			<Div className="tabs-wrapper">
				<List inline className={tabsNavClasses}>
					{renderNav}
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
	title: PropTypes.string
};

export default TabbedContainer;

