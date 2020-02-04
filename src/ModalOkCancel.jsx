import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function ModalOkCancel(props) {
	const [wasOk, setWasOk] = useState(false); // user clicked on OK button?
	const [isOpen, setOpen] = props.openHook; // actually an useState hook hosted on parent

	function frmSubmit(ev) {
		ev.preventDefault();
		setWasOk(true); // set the flag
		setOpen(false); // close the modal
	}

	function onRequestClose() {
		setWasOk(false); // set the flag
		setOpen(false); // close the modal
	}

	function onAfterClose() {
		if (wasOk && props.onOk) {
			props.onOk();
		} else if (!wasOk && props.onCancel) {
			props.onCancel();
		}
	}

	return (
		<ReactModal isOpen={isOpen} onAfterOpen={props.onAfterOpen}
			onRequestClose={onRequestClose} onAfterClose={onAfterClose}
			className="ReactModal-content" overlayClassName="ReactModal-overlay">
			<form onSubmit={frmSubmit}>
				<div className="ReactModal-body">
					{props.children}
				</div>
				<div className="ReactModal-footer">
					<input type="submit" value="OK" />
					<input type="button" value="Cancel" onClick={onRequestClose} />
				</div>
			</form>
		</ReactModal>
	);
}

ModalOkCancel.propTypes = {
	children: PropTypes.node.isRequired,
	openHook: propTypesHookUseState,
	onOk: PropTypes.func,
	onCancel: PropTypes.func,
	onAfterOpen: PropTypes.func
};

// Will demand an useState hook array like [getter, setter].
function propTypesHookUseState(props, propName, componentName) {
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
}

export {propTypesHookUseState};
export default ModalOkCancel;
