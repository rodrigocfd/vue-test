import React from 'react';

import Hooks from '../Hooks';
import Modal, {useModal} from './Modal';
import c from './useModalOk.module.scss';

// Modal which displays text and OK/Cancel buttons.
function useModalOkCancel() {
	const modalState = useModal();
	const [text, setText] = React.useState('');
	const [okCallback, setOkCallback] = React.useState(() => () => {});
	const [cancelCallback, setCancelCallback] = React.useState(() => () => {});

	function open(text) {
		setText(text);
		modalState.open();
		return {
			onOk(callback) { // method is chained after open() call
				setOkCallback(() => callback); // store user callback
				return {
					onCancel(callback) { setCancelCallback(() => callback); } // chained right after
				};
			},
			onCancel(callback) { // or this one can be chained after open() call
				setCancelCallback(() => callback); // store user callback
				return {
					onOk(callback) { setOkCallback(() => callback); } // chained right after
				};
			}
		};
	}

	function Component() { // this component must go inside owner's render block
		const btnRef = Hooks.useRef(null, {focusOnMount: true});

		function okBtn() {
			modalState.close();
			okCallback(); // invoke user callback, if any
		}

		function cancelBtn() {
			modalState.close();
			cancelCallback(); // invoke user callback if any
		}

		return modalState.render(
			<Modal>
				<div className={c.content}>
					<div>
						<div className={c.iconQuestion} />
					</div>
					<div>
						{text.split('\n').map((item, idx) => ( // convert \n to <br/>
							<span key={idx}>
								{idx !== 0 && <br />}
								{item}
							</span>
						))}
					</div>
				</div>
				<div className={c.btnRow}>
					<input type="button" value="OK" ref={btnRef} onClick={okBtn} />
					<input type="button" value="Cancelar" onClick={cancelBtn} />
				</div>
			</Modal>
		);
	}

	return {Component, open};
}

export default useModalOkCancel;
