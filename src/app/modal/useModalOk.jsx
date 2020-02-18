import React from 'react';

import useModal from './useModal';
import Modal from './Modal';
import c from './useModalOk.module.scss';

function useModalOk() {
	const modalState = useModal();
	const [text, setText] = React.useState('');
	const [closeCallback, setCloseCallback] = React.useState(() => () => {});

	function open(text) {
		setText(text);
		modalState.open();
	}

	function onClose(callback) {
		setCloseCallback(() => callback); // store user callback
	}

	function Component() { // this component must go inside owner's render block
		const btnRef = React.useRef(null);

		React.useEffect(() => {
			modalState.isOpen && btnRef.current.focus();
		}, []);

		function okBtn() {
			modalState.close();
			closeCallback(); // invoke user callback, if any
		}

		return modalState.isOpen && (
			<Modal>
				<div>{text}</div>
				<div className={c.btnRow}>
					<input type="button" value="OK" ref={btnRef} onClick={okBtn} />
				</div>
			</Modal>
		);
	}

	return {Component, open, onClose};
}

export default useModalOk;
