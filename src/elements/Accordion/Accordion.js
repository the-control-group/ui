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
		title: (props, propName, componentName, ...args) => {
			if(!props.title && !props.header) {
				return new Error(`One of props 'title' or 'header' was not specified in '${componentName}'`);
			}

			if(props.title) return new Error('`title` is deprecated; use `header` instead');

			return PropTypes.node(props, propName, componentName, ...args);
		},
		header: (props, propName, componentName, ...args) => {
			if(!props.title && !props.header) {
				return new Error(`One of props 'title' or 'header' was not specified in '${componentName}'`);
			}

			return PropTypes.node(props, propName, componentName, ...args);
		},
		className: PropTypes.string,
		notificationStyle: PropTypes.bool,
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

		this.disableToggle = true;
		if(!this.state.showContent) {
			this.setState({
				showContent: true,
				toggle: 'hide'
			}, () => {
				window.requestAnimationFrame(() => {
					const transitionDuration = Math.max(this.accordionContent.current.clientHeight * 2, 300);

					// Set fixed height (based on height of content) and set transition-duration for .ui-accordion-content-wrapper.
					// We need fixed height for CSS Transition to work and to animate slide down of accordion.
					this.accordionContent.current.parentNode.style.transitionDuration = `${transitionDuration}ms`;
					this.accordionContent.current.parentNode.style.height = `${this.accordionContent.current.clientHeight}px`;

					// Set auto height for .ui-accordion-content-wrapper after animation is complete.
					// We can't keep fixed height here because accordion may have other accordions inside of it and height of content may change.
					setTimeout(() => {
						this.disableToggle = false;
						this.accordionContent.current.parentNode.style.height = 'auto';
					}, transitionDuration);
				});
			});
		} else {
			this.setState({
				toggle: 'show'
			});

			window.requestAnimationFrame(() => {
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
		const { title, header, children, className, notificationStyle, toggleTextShow, toggleTextHide, buttonStyleToggle } = this.props,
			{ showContent, toggle } = this.state,
			toggleText = toggle === 'show' ? toggleTextShow : toggleTextHide,
			toggleIconClass = toggle === 'hide' ? 'arrow arrow-up' : 'arrow arrow-down';

		return (
			<div className={classNames('ui-accordion', className, {'notification-style': notificationStyle})}>
				<div className="ui-accordion-header">
					<FlexRow breakMedium={buttonStyleToggle}>
						<Flex>
							{header || <div className="title">{title}</div>}
						</Flex>
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
