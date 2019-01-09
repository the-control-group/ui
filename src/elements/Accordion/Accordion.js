/**
 * Accordion
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Div from '../Div/Div';
import Grid from '../Grid/Grid';
import { isMobile } from '../../util/helpers';

class Accordion extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		title: PropTypes.node.isRequired,
		className: PropTypes.string,
		defaultExpanded: PropTypes.bool,
		notificationStyle: PropTypes.bool // this is used to style accordion as a notification
	};

	constructor(props) {
		super(props);

		this.state = {
			showContent: this.props.defaultExpanded
		};

		this.toggleAccordion = this.toggleAccordion.bind(this);
	}

	toggleAccordion() {
		this.setState({
			showContent: !this.state.showContent
		});
	}

	render() {
		const { title, children, className, notificationStyle } = this.props,
			{ showContent } = this.state,
			itemWidths = showContent && !isMobile() && notificationStyle ? [3, 7, 2] : [10, 2],
			toggleText = showContent ? 'hide' : 'show',
			toggleIconClass = showContent ? 'arrow arrow-up' : 'arrow arrow-down';

		const combinedClasses = classNames(
			'ui-accordion',
			className,
			{
				'notification-style': this.props.notificationStyle
			}
		);

		return (
			<div className={combinedClasses}>
				<Grid
					gutter="xx-small"
					itemWidths={itemWidths}
				>
					<Div className="title">
						{title}
					</Div>
					{showContent && !isMobile() && notificationStyle &&
						<Div>{children}</Div>
					}
					<div onClick={this.toggleAccordion} right className="ui-accordion-toggle">
						<Grid gutter="xx-small" itemWidths={[10, 2]}>
							<Div>{toggleText}</Div>
							<Div><Div className={toggleIconClass}>^</Div></Div>
						</Grid>
					</div>
				</Grid>
				{showContent && (isMobile() || !notificationStyle) &&
					<div className="accordion-content">{children}</div>
				}
			</div>
		);
	}
}

export default Accordion;
