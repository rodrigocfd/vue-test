import React from 'react';

import useRefFocusOnMount from 'app/hooks/useRefFocusOnMount';
import Modal from './Modal';
import c from './ModalOk.module.scss';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
}

/**
 * Modal que exibe uma mensagem com um botão OK, com uma callback. Sua
 * renderização deve ser controlada com um flag booleano.
 * @see Modal
 */
function ModalOk(props: Props) {
	const btnRef = useRefFocusOnMount(null);

	function btnOk() {
		props.onClose(); // chama callback do usuário
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
