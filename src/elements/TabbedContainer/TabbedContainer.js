import './TabbedContainer.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Div from '../Div/Div';
import List from '../List/List';

class TabbedContainer extends Component {
	constructor(props) {
		super(props);

		const defaultActiveIndex = Math.max(React.Children.toArray(this.props.children).findIndex(c => c.props.defaultActive), 0);

		this.state = {
			activeIndex: defaultActiveIndex
		};

		this.changeTabs = this.changeTabs.bind(this);
	}

	changeTabs(e) {
		e.preventDefault();

		this.setState({
			activeIndex: Number(e.target.dataset.tab)
		});
	}

	render() {
		const { activeIndex } = this.state,
			{ children } = this.props;

		const tabs = React.Children.map(children, (child, i) => {
			return React.cloneElement(child, {
				active: child.props.active || activeIndex === i
			});
		});

		return (
			<Div className="ui-tab-container">
				<List inline className="tabs-nav">
					{ React.Children.map(children, (child, i) => (
						<li key={child.props.title} className={classNames({active: i === activeIndex})}>
							<a href="#" data-tab={i} onClick={this.changeTabs}>{ child.props.title }</a>
						</li>
					))
					}
				</List>
				<Div className="ui-tabs-content">
					{tabs}
				</Div>
			</Div>
		);
	}
}

TabbedContainer.propTypes = {
	children: PropTypes.node.isRequired
};

export default TabbedContainer;

