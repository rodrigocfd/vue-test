import React from 'react';
import ReactDom from 'react-dom';

import c from './Modal.module.scss';

interface Props {
	children: React.ReactNode;
	onEsc?: () => void;
}

/**
 * Modal genérica que pode mostrar qualquer conteúdo. Sua renderização deve ser
 * controlada com um flag booleano.
 * @example
 * const [modalOpen, setModalOpen] = useState(false);
 * return (<>
 *   {modalOpen && <Modal>foo</Modal>}
 * </>);
 */
function Modal(props: Props) {
	function onKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
		if (ev.keyCode === 27 && props.onEsc) { // só funciona se o foco estiver dentro da DIV
			ev.stopPropagation();
			props.onEsc();
		}
	}

	return ReactDom.createPortal(
		<>
			<div className={c.overlay} />
			<div className={c.popup} onKeyDown={onKeyDown}>
				<div className={c.contents}>
					{props.children}
				</div>
			</div>
		</>,
		document.body
	);
}

export default Modal;
