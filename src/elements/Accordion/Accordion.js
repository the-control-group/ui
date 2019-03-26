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
		this.disableToggle = false;

		this.state = {
			showContent: this.props.defaultExpanded,
			toggle: this.props.defaultExpanded ? 'hide' : 'show'
		};

		this.toggleAccordion = this.toggleAccordion.bind(this);
	}

	toggleAccordion() {
		if(this.disableToggle) return;

		if(!this.state.showContent) {
			this.setState({
				showContent: true,
				toggle: 'hide'
			}, () => {
				window.requestAnimationFrame(() => {
					this.disableToggle = true;

					// Set fixed height (based on height of content) and set transition-duration for .ui-accordion-content-wrapper.
					// We need fixed height for CSS Transition to work and to animate slide down of accordion.
					this.accordionContent.current.parentNode.style.transitionDuration = `${this.accordionContent.current.clientHeight * 2}ms`;
					this.accordionContent.current.parentNode.style.height = `${this.accordionContent.current.clientHeight}px`;

					// Set auto height for .ui-accordion-content-wrapper after animation is complete.
					// We can't keep fixed height here because accordion may have other accordions inside of it and height of content may change.
					setTimeout(() => {
						this.disableToggle = false;
						this.accordionContent.current.parentNode.style.height = 'auto';
					}, this.accordionContent.current.clientHeight * 2);
				});
			});
		} else {
			this.setState({
				toggle: 'show'
			});

			window.requestAnimationFrame(() => {
				this.disableToggle = true;

				// Set height back to fixed for .ui-accordion-content-wrapper so we can animate slide up.
				this.accordionContent.current.parentNode.style.height = `${this.accordionContent.current.clientHeight}px`;

				// Set height and transition-duration for slide up animation.
				setTimeout(() => {
					this.accordionContent.current.parentNode.style.height = 0;
				}, 10); // Need tiny timeout here
			});

			// Remove content from DOM after animation is complete
			setTimeout(() => {
				this.setState({
					showContent: false
				});
				this.disableToggle = false;
			}, this.accordionContent.current.clientHeight * 2);
		}
	}

	render() {
		const { header, children, className, toggleTextShow, toggleTextHide, buttonStyleToggle } = this.props,
			{ showContent, toggle } = this.state,
			toggleText = toggle === 'show' ? toggleTextShow : toggleTextHide,
			toggleIconClass = toggle === 'hide' ? 'arrow arrow-up' : 'arrow arrow-down';

		return (
			<div className={classNames('ui-accordion', className)}>
				<div className="ui-accordion-header">
					<FlexRow breakMedium={buttonStyleToggle}>
						<Flex>{header}</Flex>
						<Flex right={!buttonStyleToggle || !isMobile()} max="200">
							{buttonStyleToggle &&
								<Button className="ui-accordion-toggle button-toggle" onClick={this.toggleAccordion} mini ref={this.accordionToggle}>
									<span>{toggleText}</span>
									<img className={toggleIconClass} src={require('../../images/caret-down-white.svg')} style={{height: 20, width: 20}} />
								</Button>
							}
							{!buttonStyleToggle &&
								<div className="ui-accordion-toggle" onClick={this.toggleAccordion} ref={this.accordionToggle}>
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
