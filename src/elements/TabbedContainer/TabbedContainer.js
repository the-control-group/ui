import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isMobile } from '../../util/helpers';
import List from '../List/List';
import TabNavItem from '../TabNavItem/TabNavItem';

class TabbedContainer extends Component {
	constructor(props) {
		super(props);

		const children = React.Children.toArray(this.props.children).filter(Boolean),
			defaultActiveIndex = Math.max(children.findIndex(c => c.props.defaultActive), 0);

		this.state = {
			activeIndex: defaultActiveIndex
		};

		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(e) {
		e.preventDefault();

		this.setState({
			activeIndex: Number(e.currentTarget.dataset.tab)
		});
	}

	render() {
		const { activeIndex } = this.state,
			{ mobileDesign } = this.props,
			children = React.Children.toArray(this.props.children).filter(Boolean),
			activeTab = children.filter(c => !!c)[activeIndex];

		return (
			<div className={classNames('ui-tabs-container', { desktop: (!isMobile() && !mobileDesign) })}>
				<List inline className="ui-tabs-nav">
					{children.map((child, i) => (
						<TabNavItem
							key={i}
							{...child.props}
							tabId={i}
							changeTab={this.changeTab}
							active={i === activeIndex}
							width={`${100 / children.length}%`}
						/>
					))}
				</List>

				<div className="ui-tabs-content">
					{activeTab}
				</div>
			</div>
		);
	}
}

TabbedContainer.propTypes = {
	children: PropTypes.node.isRequired,
	mobileDesign: PropTypes.bool
};

export default TabbedContainer;
