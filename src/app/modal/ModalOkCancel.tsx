import React from 'react';

import useRefFocusOnMount from 'app/hooks/useRefFocusOnMount';
import Modal from './Modal';
import c from './ModalOk.module.scss';

interface Props {
	children: React.ReactNode;
	onOk?: () => void;
	onCancel?: () => void;
}

/**
 * Modal que exibe uma mensagem com dois botões, OK e Cancelar, cada um com sua
 * callback. Sua renderização deve ser controlada com um flag booleano.
 * @see Modal
 */
function ModalOkCancel(props: Props) {
	const btnRef = useRefFocusOnMount(null);

	function btnCancel() {
		props.onCancel && props.onCancel(); // chama callback do Cancelar
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
