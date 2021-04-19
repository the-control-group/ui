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

const AccordionCaret = ({ white, up }) => (
	<object className={classNames('ui-accordion-caret', { white, up })}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 26 26" preserveAspectRatio="xMaxYMax meet">
			<defs>
				<style>
					{`
					.caret-cls-1 { fill: #000; }
					.caret-border { stroke: #000; }
					`}
				</style>
			</defs>
			<circle className="caret-border" cx="8" cy="8" r="12" strokeWidth="2" fill="none"/>
			<path className="caret-cls-1" d="M14.133,0,16,1.79,8,9.459,0,1.79,1.867,0,8,5.88Z" transform="translate(0 4) rotate(0)"/>
		</svg>
	</object>
);

AccordionCaret.propTypes = {
	white: PropTypes.bool,
	up: PropTypes.bool
};

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
		headerClassName: PropTypes.string,
		notificationStyle: PropTypes.bool,
		defaultExpanded: PropTypes.bool,
		toggleTextShow: PropTypes.string,
		toggleTextHide: PropTypes.string,
		buttonStyleToggle: PropTypes.bool,
		onOpen: PropTypes.func
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
			showContent: false,
			toggle: 'show'
		};

		this.toggleAccordion = this.toggleAccordion.bind(this);
	}

	componentDidMount() {
		if (this.props.defaultExpanded) {
			this.setState({
				showContent: true,
				toggle: 'hide'
			});
		}
	}

	toggleAccordion() {
		if(this.disableToggle) return;

		this.disableToggle = true;
		if(!this.state.showContent) {
			if (this.props.onOpen) this.props.onOpen();

			this.setState({
				showContent: true,
				toggle: 'hide'
			}, () => {
				window.requestAnimationFrame(() => {
					const transitionDuration = Math.max(this.accordionContent.current.clientHeight, 300) > 5000
						? 5000
						: Math.max(this.accordionContent.current.clientHeight, 300);

					// Set fixed height (based on height of content) and set transition-duration for .ui-accordion-content-wrapper.
					// We need fixed height for CSS Transition to work and to animate slide down of accordion.
					this.accordionContent.current.parentNode.style.transitionDuration = `${transitionDuration}ms`;
					this.accordionContent.current.parentNode.style.height = `${this.accordionContent.current.clientHeight}px`;
					this.accordionContent.current.parentNode.style.overflow = 'hidden';

					// Set auto height for .ui-accordion-content-wrapper after animation is complete.
					// We can't keep fixed height here because accordion may have other accordions inside of it and height of content may change.
					setTimeout(() => {
						this.disableToggle = false;
						this.accordionContent.current.parentNode.style.height = 'auto';
						this.accordionContent.current.parentNode.style.overflow = 'visible';
					}, transitionDuration);
				});
			});
		} else {
			this.setState({
				toggle: 'show'
			});

			// Set height back to fixed for .ui-accordion-content-wrapper so we can animate slide up.
			this.accordionContent.current.parentNode.style.height = `${this.accordionContent.current.clientHeight}px`;
			this.accordionContent.current.parentNode.style.overflow = 'hidden';

			// Set height and transition-duration for slide up animation.
			window.requestAnimationFrame(() => {
				this.accordionContent.current.parentNode.style.height = 0;

				// Remove content from DOM after animation is complete
				setTimeout(() => {
					this.setState({
						showContent: false
					});
					this.disableToggle = false;
				}, this.accordionContent.current.clientHeight);
			});
		}
	}

	render() {
		const { title, header, children, className, headerClassName, notificationStyle, toggleTextShow, toggleTextHide, buttonStyleToggle, defaultExpanded } = this.props,
			{ showContent, toggle } = this.state,
			toggleText = toggle === 'show' ? toggleTextShow : toggleTextHide;

		return (
			<div className={classNames('ui-accordion', className, {'notification-style': notificationStyle})}>
				<div className={classNames('ui-accordion-header', headerClassName)}>
					<FlexRow breakMedium={buttonStyleToggle}>
						<Flex>
							{header || <div className="title">{title}</div>}
						</Flex>
						<Flex right={!buttonStyleToggle || !isMobile()} max="200">
							{buttonStyleToggle
								? <Button className="ui-accordion-toggle button-toggle" onClick={this.toggleAccordion} mini ref={this.accordionToggle}>
									<span>{toggleText}</span>
									<AccordionCaret white up={toggle === 'hide'} />
								</Button>

								: <div className="ui-accordion-toggle" onClick={this.toggleAccordion} ref={this.accordionToggle}>
									<span>{toggleText}</span>
									<AccordionCaret up={toggle === 'hide'} />
								</div>
							}
						</Flex>
					</FlexRow>
				</div>

				<div className={classNames('ui-accordion-content-wrapper', defaultExpanded && 'default-expanded')}>
					<div className="ui-accordion-content" ref={this.accordionContent}>
						{showContent && children}
					</div>
				</div>
			</div>
		);
	}
}

export default Accordion;
