import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function InputModal({isOpen, onClose}) {
	function btnClose() {
		if (onClose) onClose();
	}

	return (
		<ReactModal isOpen={isOpen}
			className="ReactModal-content" overlayClassName="ReactModal-overlay">
			<div>
				This is modal.
			</div>
			<div>
				<input type="button" value="Close" onClick={btnClose} />
			</div>
		</ReactModal>
	);
}

InputModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func
};

export default InputModal;
