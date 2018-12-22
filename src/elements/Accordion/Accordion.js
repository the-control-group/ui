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
		expaned: PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.state = {
			showContent: true
		};

		this.toggleAccordion = this.toggleAccordion.bind(this);
	}

	toggleAccordion() {
		this.setState({
			showContent: !this.state.showContent
		});
	}

	render() {
		const { title, children, className } = this.props,
			{ showContent } = this.state,
			itemWidths = showContent && !isMobile() ? [3, 7, 2] : [10, 2],
			toggleText = showContent ? 'hide' : 'show',
			toggleIconClass = showContent ? 'arrow arrow-up' : 'arrow arrow-down';

		const combinedClasses = classNames(
			'ui-accordion',
			className
		);

		return (
			<Div className={combinedClasses}>
				<Grid
					gutter="xx-small"
					itemWidths={itemWidths}
				>
					<Div className="title">
						{title}
					</Div>
					{showContent && !isMobile() &&
						<Div>{children}</Div>
					}
					<Div onClick={this.toggleAccordion} right className="ui-accordion-toggle">
						<Grid gutter="xx-small" itemWidths={[10, 2]}>
							<Div>{toggleText}</Div>
							<Div><Div className={toggleIconClass}>^</Div></Div>
						</Grid>
					</Div>
				</Grid>
				{showContent && isMobile() &&
					<Div>{children}</Div>
				}
			</Div>
		);
	}
}

export default Accordion;
