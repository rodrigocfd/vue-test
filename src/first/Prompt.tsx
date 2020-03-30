import React from 'react';

import useRefFocusOnMount from 'app/useRefFocusOnMount';
import Modal from 'app/modal/Modal';
import c from './Prompt.module.scss';

interface Props {
	text?: string;
	onOk: (text: string) => void;
	onCancel?: () => void;
}

function Prompt(props: Props) {
	const txtRef = useRefFocusOnMount(null);
	const [text, setText] = React.useState(props.text || '');

	function btnOk() {
		props.onOk(text);
	}

	function btnCancel() {
		props.onCancel && props.onCancel();
	}

	return (
		<Modal onEsc={btnCancel}>
			<div className={c.txt}>
				<input type="text" ref={txtRef}
					value={text} onChange={e => setText(e.target.value)} />
			</div>
			<div className={c.btns}>
				<input type="button" value="Ok" onClick={btnOk} />
				<input type="button" value="Cancel" onClick={btnCancel} />
			</div>
		</Modal>
	);
}

export default Prompt;
