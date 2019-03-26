/**
 * Accordion
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexRow from '../FlexRow/FlexRow';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import { isMobile } from '../../util/helpers';

class Accordion extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		header: PropTypes.node.isRequired,
		className: PropTypes.string,
		defaultExpanded: PropTypes.bool,
		toggleTextShow: PropTypes.string,
		toggleTextHide: PropTypes.string,
		buttonStyleToggle: PropTypes.bool
	};

	static defaultProps = {
		toggleTextShow: 'Show',
		toggleTextHide: 'Hide'
	}

	constructor(props) {
		super(props);

		this.accordionContent = React.createRef();

		this.state = {
			showContent: this.props.defaultExpanded
		};

		this.toggleAccordion = this.toggleAccordion.bind(this);
	}

	toggleAccordion() {
		if(!this.state.showContent) {
			this.setState({
				showContent: true
			}, () => {
				window.requestAnimationFrame(() => {
					this.accordionContent.current.parentNode.style.transitionDuration = `${this.accordionContent.current.clientHeight * 2}ms`;
					this.accordionContent.current.parentNode.style.height = `${this.accordionContent.current.clientHeight}px`;
				});
			});
		} else {
			this.accordionContent.current.parentNode.style.height = 0;
			setTimeout(() => {
				this.setState({showContent: false});
			}, this.accordionContent.current.clientHeight * 2);
		}
	}

	render() {
		const { header, children, className, toggleTextShow, toggleTextHide, buttonStyleToggle } = this.props,
			{ showContent } = this.state,
			toggleText = showContent ? toggleTextShow : toggleTextHide,
			toggleIconClass = showContent ? 'arrow arrow-up' : 'arrow arrow-down';

		return (
			<div className={classNames('ui-accordion', className)}>
				<div className="ui-accordion-header">
					<FlexRow breakMedium>
						<Flex>{header}</Flex>
						<Flex right={!isMobile()} max="200">
							{buttonStyleToggle &&
								<Button className="ui-accordion-toggle button-toggle" onClick={this.toggleAccordion} mini>
									<span>{toggleText}</span>
									<img className={toggleIconClass} src={require('../../images/caret-down-white.svg')} style={{height: 20, width: 20}} />
								</Button>
							}
							{!buttonStyleToggle &&
								<div className="ui-accordion-toggle" onClick={this.toggleAccordion}>
									<span>{toggleText}</span>
									<img className={toggleIconClass} src={require('../../images/caret-down.svg')} style={{height: 20, width: 20}} />
								</div>
							}
						</Flex>
					</FlexRow>
				</div>

				<div className="ui-accordion-content-wrapper">
					<div className="ui-accordion-content" ref={this.accordionContent}>
						{showContent && children}
					</div>
				</div>
			</div>
		);
	}
}

export default Accordion;
