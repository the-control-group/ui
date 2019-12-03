/**
 * Progress Bar
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends React.Component {
	static propTypes = {
		onComplete: PropTypes.func,				// A function to call when the loader finishes
		increments: PropTypes.number,			// The number of increments you want to break the loader into
		autoStart: PropTypes.bool,				// Start the animation immediately after initialization
		duration: PropTypes.number.isRequired,	// Time in milliseconds the loader should run for
		delay: PropTypes.number,				// Delay before auto-starting the animation
		completeDelay: PropTypes.number,		// Delay in milliseconds before onComplete fires when the loader is complete
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // Height of progress bar in px
	};

	static defaultProps = {
		onComplete: () => {},
		increments: 4,
		autoStart: true,
		delay: 0, // milliseconds
		completeDelay: 0, // milliseconds
		height: 20 // px
	};

	constructor(props) {
		super(props);

		this.state = {
			percentage: 0,
			pressedKKey: false,
			pressedControlKey: false
		};

		this.timer = this.timer.bind(this);
		this.startProgressBar = this.startProgressBar.bind(this);
		this.createSegments = this.createSegments.bind(this);
		this.startSegmentBar = this.startSegmentBar.bind(this);
		this.skipProgressBar = this.skipProgressBar.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.interval = null;
	}

	componentDidMount() {
		if(this.props.autoStart) {
			setTimeout(this.startProgressBar, this.props.delay);
		}

		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	timer() {
		this.setState({
			percentage: this.state.percentage + 1
		}, () => {
			if (this.state.percentage >= 100) {
				clearInterval(this.interval);
				setTimeout(this.props.onComplete, this.props.completeDelay);
			}
		});
	}

	createSegments() {
		let timeRemaining = this.props.duration,
			percentageRemaining = 100;

		const segments = [];

		// Create the increments
		for (let n = 0; n < this.props.increments; n++) {
			let segmentPercentage = 0,
				segmentDuration = 0;

			// Create the segment duration and length
			if (n === (this.props.increments - 1)) {
				segmentDuration = timeRemaining;
				segmentPercentage = percentageRemaining;
			} else {
				segmentPercentage = Math.floor(Math.random() * (percentageRemaining - 1)) + 1;
				segmentDuration = Math.floor(Math.random() * (timeRemaining - 1)) + 1;
			}

			segments.push({
				duration: segmentDuration,
				percentage: segmentPercentage
			});

			timeRemaining -= segmentDuration;
			percentageRemaining -= segmentPercentage;
		}

		return segments;
	}

	startProgressBar() {
		const segments = this.createSegments();

		let segmentTimeout = 0;

		segments.forEach(segment => {
			setTimeout(() => {
				clearInterval(this.interval);
				this.startSegmentBar(segment);
			}, segmentTimeout);
			segmentTimeout += segment.duration;
		});
	}

	startSegmentBar(segment) {
		this.interval = setInterval(this.timer, (segment.duration / segment.percentage));
	}

	handleKeyDown(event) {
		if(event.key === 'Control') {
			this.setState({
				pressedControlKey: true
			}, this.skipProgressBar);
		}

		if(event.key === 'k') {
			this.setState({
				pressedKKey: true
			}, this.skipProgressBar);
		}
	}

	skipProgressBar() {
		if(this.state.pressedKKey && this.state.pressedKKey) {
			this.setState({
				percentage: 100
			}, () => {
				clearInterval(this.interval);
				setTimeout(this.props.onComplete, this.props.completeDelay);
			});
		}
	}

	render() {
		return (
			<div>
				<div className="ui-progress-bar" style={{ height: Number(this.props.height) }}>
					<div className="filler" style={{ width: `${this.state.percentage}%` }} />
				</div>
			</div>
		);
	}
}
