import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import ModalOkCancel, {propTypesHookUseState} from '../ModalOkCancel';

function Prompt({open, initText, onOk}) {
	const txtRef = useRef(null);
	const [text, setText] = useState('');

	function onModalOk() {
		if (onOk) onOk(text);
	}

	function onModalAfterOpen() {
		setText(initText);
		txtRef.current.focus();
	}

	return (
		<ModalOkCancel open={open} onOk={onModalOk} onAfterOpen={onModalAfterOpen}>
			<div>
				<input type="text" ref={txtRef}
					value={text} onChange={e => setText(e.target.value)} />
			</div>
		</ModalOkCancel>
	);
}

Prompt.propTypes = {
	open: propTypesHookUseState,
	initText: PropTypes.string,
	onOk: PropTypes.func,
};

Prompt.defaultProps = {
	initText: ''
};

export default Prompt;
