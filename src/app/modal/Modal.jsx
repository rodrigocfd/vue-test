import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import useModalState from './useModalState';
import c from './Modal.module.scss';

// Generic modal which can hold any content.
function Modal(props) {
	function onKeyDown(ev) {
		if (ev.keyCode === 27 && props.onEsc) { // works only if focus is within DIV
			ev.stopPropagation();
			props.onEsc();
		}
	}

	return ReactDom.createPortal(
		<>
			<div className={c.overlay} />
			<div className={c.popup} onKeyDown={onKeyDown}>
				<div className={c.contents}>
					{props.children}
				</div>
			</div>
		</>,
		document.body
	);
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	onEsc: PropTypes.func
};

Modal.stateProps = PropTypes.shape({ // to validate an useModalState() prop
	render: PropTypes.func.isRequired,
	open: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired
});

export default Modal;
export {useModalState}; // re-export for convenience
