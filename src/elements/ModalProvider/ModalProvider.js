import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import modalContext from '../../util/modalContext';

const { Provider } = modalContext;

export default class ModalProvider extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	};

	#modalQueue = new Set();

	constructor(props) {
		super(props);

		this.modalRoot = document.createElement('div');
		this.modalRoot.id = 'ui-modal-root';

		this.state = {
			enqueueModal: modal => {
				this.#modalQueue.add(modal);

				// If there isn't a current modal, set the recently queued one as the current
				if(!this.state.currentModal) this.setState({
					currentModal: modal
				});
			},
			dequeueModal: modal => {
				this.#modalQueue.delete(modal);

				// If the current modal was the one removed, switch to the next modal in line or null
				if(this.state.currentModal === modal) this.setState({
					currentModal: this.#modalQueue.values().next().value || null
				});
			},
			currentModal: null,
			modalRoot: this.modalRoot
		};

		this.attemptDismiss = this.attemptDismiss.bind(this);
	}

	componentDidMount() {
		document.body.appendChild(this.modalRoot);
	}

	componentWillUnmount() {
		this.modalRoot.remove();
	}

	componentDidUpdate(prevProps, prevState) {
		// Lock and unlock scrolling as modals show and clear
		if(!prevState.currentModal && this.state.currentModal) {
			document.body.style.overflow = 'hidden';
		} else if(prevState.currentModal && !this.state.currentModal) {
			document.body.style.overflow = '';
		}
	}

	// If the modal is dismissible, call it's dismissal function
	attemptDismiss() {
		if(this.state.currentModal.props.dismissible) this.state.currentModal.props.onDismiss();
	}

	render() {
		const { children } = this.props,
			{ currentModal } = this.state;

		return (
			<Provider value={this.state}>
				{currentModal && createPortal(
					<div className="ui-modal-overlay" onClick={this.attemptDismiss} />,
					this.modalRoot
				)}
				{children}
			</Provider>
		);
	}
}
