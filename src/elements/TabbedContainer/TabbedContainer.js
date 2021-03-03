import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isMobile } from '../../util/helpers';
import List from '../List/List';
import TabNavItem from '../TabNavItem/TabNavItem';

class TabbedContainer extends Component {
	constructor(props) {
		super(props);

		const defaultActiveIndex = Math.max(React.Children.toArray(this.props.children).findIndex(c => c.props.defaultActive), 0);

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
			{ children, mobileDesign } = this.props;

		const activeTab = React.Children.toArray(children)[activeIndex];

		return (
			<div className={classNames('ui-tabs-container', { desktop: (!isMobile() && !mobileDesign) })}>
				<List inline className="ui-tabs-nav">
					{React.Children.map(children, (child, i) => (
						//This check will allow empty nodes to be skipped over
						child &&
							<TabNavItem
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
