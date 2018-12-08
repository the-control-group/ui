/**
 * Progress Bar
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends React.Component {
	static propTypes = {
		onComplete: PropTypes.func,		// A function to call when the loader finishes
		increments: PropTypes.number,	// The number of increments you want to break the loader into
		autoStart: PropTypes.bool,		// Start the animation immediately after initialization
		duration: PropTypes.number,		// Time in milliseconds the loader should run for
		delay: PropTypes.number,		// Delay before auto-starting the animation
		completeDelay: PropTypes.number	// Delay in milliseconds before onComplete fires when the loader is complete
	};


	static defaultProps = {
		increments: 4,
		autoStart: true,
		duration: 10000, //milliseconds
		delay: 0, //milliseconds
		completeDelay: 0 //milliseconds
	};

	constructor(props) {
		super(props);

		this.state = {
			percentage: 0,
			currentSegment: 0,
			segments: [],
			interval: null
		};

		this.timer = this.timer.bind(this);
		this.startProgressBar = this.startProgressBar.bind(this);
		this.createSegments = this.createSegments.bind(this);
		this.startSegmentBar = this.startSegmentBar.bind(this);
	}

	componentDidMount() {
		if(this.props.autoStart) {
			this.startProgressBar();
		}
	}

	componentWillUnmount() {
		if(this.state.interval) {
			clearInterval(this.state.interval);
		}
	}

	timer() {
		this.setState({ percentage: this.state.percentage + 1 });

		if (this.state.percentage === 100) {
			clearInterval(this.state.interval);

			if (this.props.onComplete) {
				setTimeout(() => {
					this.props.onComplete();
				}, this.props.completeDelay);
			}
		}
	}

	createSegments() {
		let timeRemaining = this.props.duration,
			percentageRemaining = 100;

		const segments = [];

		// Create the increments
		for (let n = 0; n < this.props.increments; n++) {
			let segmentPercentage = 0,
				segmentDuration = 0;
			// Create the segment time and length
			if (n === (this.props.increments - 1)) {
				segmentDuration = timeRemaining;
				segmentPercentage = percentageRemaining;
			} else {
				if (percentageRemaining > 0) {
					segmentPercentage =  Math.floor(Math.random() * (percentageRemaining - 1)) + 1;
				}
				if (timeRemaining > 0) {
					segmentDuration =  Math.floor(Math.random() * (timeRemaining - 1)) + 1;
				}
			}

			segments[n] = {
				duration: segmentDuration,
				percentage: segmentPercentage
			};

			timeRemaining -= segmentDuration;
			percentageRemaining -= segmentPercentage;
		}

		return segments;
	}

	startProgressBar() {
		const segments = this.createSegments();

		let segmentTimeout = 0;
		segments.map((segment) => {
			setTimeout(() => {
				if (this.state.interval) {
					clearInterval(this.state.interval);
				}
				this.startSegmentBar(segment);
			}, segmentTimeout);
			segmentTimeout += segment.duration;
		});
	}

	startSegmentBar(segment) {
		const interval = setInterval(this.timer, (segment.duration / segment.percentage));
		this.setState({ interval });
	}

	render() {
		return (
			<div>
				<div className="ui-progress-bar">
					<div className="filler" style={{ width: `${this.state.percentage}%` }} />
				</div>
			</div>
		);
	}
}
