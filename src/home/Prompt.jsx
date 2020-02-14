import React from 'react';
import PropTypes from 'prop-types';

import ModalOkCancel, {propTypesHookUseState} from '../app/ModalOkCancel';

function Prompt(props) {
	const txtRef = React.useRef(null);
	const [text, setText] = React.useState('');

	function onModalAfterOpen() {
		setText(props.initText);
		txtRef.current.focus();
	}

	function onModalOk() {
		if (props.onOk) props.onOk(text);
	}

	return (
		<ModalOkCancel openHook={props.openHook} onAfterOpen={onModalAfterOpen}
			onOk={onModalOk} onCancel={props.onCancel}>
			<div>
				<input type="text" ref={txtRef}
					value={text} onChange={e => setText(e.target.value)} />
			</div>
		</ModalOkCancel>
	);
}

Prompt.propTypes = {
	openHook: propTypesHookUseState,
	initText: PropTypes.string,
	onOk: PropTypes.func,
	onCancel: PropTypes.func
};

Prompt.defaultProps = {
	initText: ''
};

export default Prompt;
