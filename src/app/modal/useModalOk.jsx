import React from 'react';

import Hooks from '../Hooks';
import Modal, {useModal} from './Modal';
import c from './useModalOk.module.scss';

// Modal which displays text and OK button.
function useModalOk() {
	const modalState = useModal();
	const [text, setText] = React.useState('');
	const [okCallback, setOkCallback] = React.useState(() => () => {});

	function open(text) {
		setText(text);
		modalState.open();
		return {
			onOk(callback) { // method is chained after open() call
				setOkCallback(() => callback); // store user callback
			}
		};
	}

	function Component() { // this component must go inside owner's render block
		const btnRef = Hooks.useFocusOnMountRef();

		function okBtn() {
			modalState.close();
			okCallback(); // invoke user callback, if any
		}

		return modalState.render(
			<Modal>
				<div className={c.content}>
					<div>
						<div className={c.iconInformation} />
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
				</div>
			</Modal>
		);
	}

	return {Component, open};
}

export default useModalOk;
