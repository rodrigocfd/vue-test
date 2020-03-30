import React from 'react';
import ReactDom from 'react-dom';

import c from './Modal.module.scss';

interface Props {
	children: React.ReactNode;
	onEsc?: () => void;
}

// Generic modal which can hold any content.
function Modal(props: Props) {
	function onKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
		if (ev.keyCode === 27 && props.onEsc) { // works only if focus is within DIV
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
