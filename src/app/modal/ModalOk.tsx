import React from 'react';

import useRefFocusOnMount from '../useRefFocusOnMount';
import Modal from './Modal';
import c from './ModalOk.module.scss';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
}

function ModalOk(props: Props) {
	const btnRef = useRefFocusOnMount(null);

	function btnOk() {
		props.onClose(); // invoke user callback
	}

	return (
		<Modal onEsc={btnOk}>
			<div className={c.content}>
				<div>
					<div className={c.iconInformation} />
				</div>
				<div>{props.children}</div>
			</div>
			<div className={c.btnRow}>
				<input type="button" value="OK" ref={btnRef} onClick={btnOk} />
			</div>
		</Modal>
	);
}

export default ModalOk;
