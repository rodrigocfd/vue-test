import React from 'react';

import useRefFocusOnMount from '../useRefFocusOnMount';
import Modal from './Modal';
import c from './ModalOk.module.scss';

interface Props {
	children: React.ReactNode;
	onOk?: () => void;
	onCancel?: () => void;
}

function ModalOkCancel(props: Props) {
	const btnRef = useRefFocusOnMount(null);

	function btnCancel() {
		props.onCancel && props.onCancel();
	}

	return (
		<Modal onEsc={btnCancel}>
			<div className={c.content}>
				<div>
					<div className={c.iconQuestion} />
				</div>
				<div>{props.children}</div>
			</div>
			<div className={c.btnRow}>
				<input type="button" value="OK" ref={btnRef} onClick={props.onOk} />
				<input type="button" value="Cancelar" onClick={btnCancel} />
			</div>
		</Modal>
	);
}

export default ModalOkCancel;
