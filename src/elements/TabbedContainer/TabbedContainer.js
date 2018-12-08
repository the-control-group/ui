import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isMobile } from '../../util/helpers';
import Div from '../Div/Div';
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
			{ children } = this.props;

		const activeTab = React.Children.toArray(children)[activeIndex];

		return (
			<Div className={classNames('ui-tabs-container', { desktop: !isMobile() })}>
				<List inline className="ui-tabs-nav">
					{React.Children.map(children, (child, i) => (
						<TabNavItem
							{...child.props}
							tabId={i}
							changeTab={this.changeTab}
							active={i === activeIndex}
							width={`${100 / children.length}%`}
						/>
					))}
				</List>

				<Div className="ui-tabs-content">
					{activeTab}
				</Div>
			</Div>
		);
	}
}

TabbedContainer.propTypes = {
	children: PropTypes.node.isRequired
};

export default TabbedContainer;
