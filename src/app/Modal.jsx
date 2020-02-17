import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import c from './Modal.module.scss';

function useModal() { // custom hook to keep modal isOpen state
	const [isOpen, setOpen] = React.useState(false);

	function open() { setOpen(true); }
	function close() { setOpen(false); }

	return {isOpen, open, close};
}

function Modal(props) { // the Modal component itself
	function onKeyDown(ev) {
		if (ev.keyCode === 27 && props.onEsc) {
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

Modal.stateProps = PropTypes.shape({
	isOpen: PropTypes.bool.isRequired,
	open: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired
});

export {useModal};
export default Modal;
