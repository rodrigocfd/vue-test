import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function InputModal({open, onOk, onCancel}) {
	const [isOpen, setOpen] = open; // actually an useState hook hosted on parent

	function frmSubmit(ev) {
		ev.preventDefault();
		setOpen(false);
		if (onOk) onOk();
	}

	function btnCancel() {
		setOpen(false);
		if (onCancel) onCancel();
	}

	return (
		<ReactModal isOpen={isOpen} onRequestClose={btnCancel}
			className="ReactModal-content" overlayClassName="ReactModal-overlay">
			<form onSubmit={frmSubmit}>
				<div className="ReactModal-body">
					This is modal.
				</div>
				<div className="ReactModal-footer">
					<input type="submit" value="OK" />
					<input type="button" value="Cancel" onClick={btnCancel} />
				</div>
			</form>
		</ReactModal>
	);
}

InputModal.propTypes = {
	open: function (props, propName, componentName) { // requires an useState hook array like [getter, setter]
		if (props[propName] === undefined || props[propName] === null) {
			return new Error('The prop `' + propName + '` is marked as required'
				+ ' in `' + componentName + '`, but its value is `' + props[propName] + '`.');
		} else if (!Array.isArray(props[propName]) || props[propName].length !== 2) {
			return new Error('The prop `' + propName + '` is marked as required'
				+ ' in `' + componentName + '`, and it must be a hook array of [getter, setter].');
		} else if (typeof props[propName][1] !== 'function') {
			return new Error('The prop `' + propName + '` is marked as required'
				+ ' in `' + componentName + '`, and second element must be a setter function.');
		}
	},
	onOk: PropTypes.func,
	onCancel: PropTypes.func
};

export default InputModal;
