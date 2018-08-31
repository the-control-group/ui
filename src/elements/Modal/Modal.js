import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import modalContext from '../../util/modalContext';

const { Consumer } = modalContext;

import Common from '../Common/Common';

class Modal extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		onDismiss: PropTypes.func,
		show: PropTypes.bool,
		dismissible: PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps) {
		// If the modal toggled to show, queue it
		if(!prevProps.show && this.props.show) {
			this.props.enqueueModal(this);
		}

		// If the modal toggled to not show, remove it from the queue
		if(prevProps.show && !this.props.show) {
			this.props.dequeueModal(this);
		}
	}

	render() {
		const {
			children,
			onDismiss,
			show,
			dismissible,
			modalRoot,
			currentModal,
			...other
		} = this.props;

		if(!show || currentModal !== this) return null;

		const combinedClasses = classNames(
			'ui-modal'
		);

		return createPortal(
			<Common
				{...other}
				classes={combinedClasses}
				tag="div"
			>
				{children}
				{dismissible && <div className="ui-modal-close" onClick={onDismiss} title="Dismiss">&#x00D7;</div>}
			</Common>,
			modalRoot
		);
	}
}

const ModalConsumer = props => (
	<Consumer>
		{context => <Modal {...props} {...context} />}
	</Consumer>
);

export default ModalConsumer;
